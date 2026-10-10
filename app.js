// ==========================================================
// app.js : 여러 화면이 함께 쓰는 공통 기능
//  - 품사 그룹 정의, 저장소(localStorage) 읽기/쓰기, 백업 검증
//  - 단어 데이터 읽기, 발음(TTS), 화면 전환, 테마 적용
//  - 카테고리별 단어 목록과 Day 진도 키 계산
// 저장 키 STORAGE_KEY 와 state 의 항목 이름은 바꾸지 마세요.
// (바꾸면 기존 진도·오답노트·설정을 읽지 못합니다)
// ==========================================================

const POS_GROUPS = [
  { id: "noun", name: "명사", subList: ["n", "pron", "num", "ord"] },
  { id: "verb", name: "동사", subList: ["v", "aux. v", "modal v", "linking v"] },
  { id: "adj", name: "형용사", subList: ["adj"] },
  { id: "adv", name: "부사", subList: ["adv"] },
  { id: "func", name: "기능어", subList: ["prep", "conj", "det", "def. art.", "indef. art.", "INF", "exclam"] }
];

const POS_KOREAN_NAMES = {
  "n": "명사", "pron": "대명사", "num": "수사", "ord": "서수사",
  "v": "동사", "aux. v": "조동사", "modal v": "법조동사", "linking v": "연결동사",
  "adj": "형용사", "adv": "부사", "prep": "전치사", "conj": "접속사",
  "det": "한정사", "def. art.": "정관사", "indef. art.": "부정관사", "INF": "부정사", "exclam": "감탄사"
};

function normalizePosTag(pos) {
  if (!pos) return "n";
  const clean = pos.trim();
  if (clean === "verb") return "v";
  if (clean === "linking verb") return "linking v";
  if (clean === "exclam.") return "exclam";
  return clean;
}

function getKoreanPos(rawPos) {
  if (!rawPos) return "명사";
  const norm = normalizePosTag(rawPos);
  return POS_KOREAN_NAMES[norm] || norm;
}

function seededShuffle(array, seed = 20261009) {
  const copy = [...array];
  let s = seed;
  const nextRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const STORAGE_KEY = "AIN_ENG_APP_V2";

let state = {
  theme: "theme-ios",
  autoDark: true,
  mode: "en-ko",
  wordsPerDay: 10,
  ttsVoice: "",
  ttsSpeed: 1.0,
  selectedLevel: "A1",
  selectedPosGroup: "noun",
  clearedDays: {},
  notebook: []
};

let allWords = [];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch (e) { console.warn(e); }
  if (migrateClearedDayKeys()) saveState();
}

function migrateClearedDayKeys() {
  const cd = state.clearedDays;
  if (!cd || typeof cd !== "object") return false;
  let changed = false;
  Object.keys(cd).forEach(key => {
    const parts = key.split("_");
    if (parts.length === 4) {
      const newKey = `${parts[0]}_${parts[1]}_${parts[2]}_${state.wordsPerDay}_${parts[3]}`;
      if (cd[key]) cd[newKey] = true;
      delete cd[key];
      changed = true;
    }
  });
  return changed;
}

function isValidBackup(p) {
  if (!p || typeof p !== "object" || Array.isArray(p)) return false;
  const isPlainObject = v => v !== null && typeof v === "object" && !Array.isArray(v);
  if ("wordsPerDay" in p && ![10, 15, 20].includes(p.wordsPerDay)) return false;
  if ("notebook" in p && !Array.isArray(p.notebook)) return false;
  if ("clearedDays" in p && !isPlainObject(p.clearedDays)) return false;
  if ("theme" in p && !["theme-ios", "theme-playful", "theme-paper", "theme-dark"].includes(p.theme)) return false;
  if ("selectedLevel" in p && !["A1", "A2", "B1", "B2", "C1"].includes(p.selectedLevel)) return false;
  return true;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { console.warn(e); }
}

function parseEmbeddedDatabase() {
  const raw = RAW_WORDS.trim(); // words.js
  const lines = raw.split("\n");
  allWords = lines.map(line => {
    const parts = line.split("|");
    return {
      word: parts[0]?.trim() || "",
      meaning: parts[1]?.trim() || "",
      pos: normalizePosTag(parts[2]?.trim()),
      level: (parts[3]?.trim() || "A1").toUpperCase(),
      ipa: parts[4]?.trim() || ""
    };
  }).filter(w => w.word !== "");
}

let availableVoices = [];
function initTTS() {
  if (!('speechSynthesis' in window)) return;
  const updateVoices = () => {
    availableVoices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    const select = document.getElementById("setting-voice-select");
    select.innerHTML = "";
    if (availableVoices.length === 0) {
      const opt = document.createElement("option");
      opt.textContent = "기본 영문 음성";
      select.appendChild(opt);
      return;
    }
    availableVoices.forEach((voice) => {
      const opt = document.createElement("option");
      opt.value = voice.name;
      opt.textContent = `${voice.name} (${voice.lang})`;
      if (voice.name === state.ttsVoice || (!state.ttsVoice && voice.lang === 'en-US')) {
        opt.selected = true;
        state.ttsVoice = voice.name;
      }
      select.appendChild(opt);
    });
  };
  window.speechSynthesis.onvoiceschanged = updateVoices;
  updateVoices();
}

function ttsArg(word) {
  return String(word).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function playTTS(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = state.ttsSpeed || 1.0;
  if (state.ttsVoice) {
    const found = availableVoices.find(v => v.name === state.ttsVoice);
    if (found) utter.voice = found;
  }
  utter.lang = "en-US";
  window.speechSynthesis.speak(utter);
}

function switchView(viewId) {
  if (viewId !== "view-quiz") cancelPendingAnswer();
  const views = [
    "view-categories", "view-pos-guide", "view-home",
    "view-study", "view-quiz", "view-result",
    "view-notebook", "view-settings"
  ];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (id === viewId) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });

  const backCatBtn = document.getElementById("btn-header-back-cat");
  const mainTitle = document.getElementById("header-main-title");

  if (viewId === "view-categories") {
    backCatBtn.classList.add("hidden");
    mainTitle.innerHTML = `<span>AIN</span><span class="theme-primary-text">영단어</span>`;
  } else if (viewId === "view-home") {
    backCatBtn.classList.remove("hidden");
    const currentGroup = POS_GROUPS.find(g => g.id === state.selectedPosGroup);
    const posName = currentGroup ? currentGroup.name : "명사";
    mainTitle.innerHTML = `<span>AIN</span><span class="theme-primary-text">영단어</span><span class="text-xs font-semibold theme-sub-text ml-1">(${state.selectedLevel} ${posName})</span>`;
  } else {
    backCatBtn.classList.add("hidden");
  }
  window.scrollTo(0, 0);
}

function setBodyTheme(themeName) {
  document.body.className = `${themeName} min-h-screen flex justify-center items-start antialiased selection:bg-blue-200`;
  document.documentElement.classList.toggle("dark", themeName === "theme-dark");
}

function applyTheme(themeName) {
  state.theme = themeName;
  saveState();
  refreshTheme();
}

function isSystemDark() {
  return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

function refreshTheme() {
  setBodyTheme(state.autoDark && isSystemDark() ? "theme-dark" : state.theme);
}

function getWordsForCategory(level, posGroupId) {
  const group = POS_GROUPS.find(g => g.id === posGroupId);
  if (!group) return [];
  const filtered = allWords.filter(w => {
    const matchLevel = w.level.toUpperCase() === level.toUpperCase();
    const matchPos = group.subList.includes(w.pos);
    return matchLevel && matchPos;
  });
  return seededShuffle(filtered, 20261009);
}

function getClearKey(mode, level, posGroup, day) {
  return `${mode}_${level}_${posGroup}_${state.wordsPerDay}_${day}`;
}
