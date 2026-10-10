// ==========================================================
// quiz.js : ⑤ 영한 퀴즈(자가채점) · ⑥ 한영 퀴즈(스펠링 입력) 공용 화면
//           + 복습 게임(4지선다, 클리어한 Day에서 시작)
// 퀴즈가 끝나면 result.js 의 finishQuiz() 로 넘어갑니다.
// 게임 보기 규칙은 buildChoices() 에서 고칩니다.
// ==========================================================

let currentQuizSet = [];
let currentQuizIndex = 0;
let currentQuizDayNumber = 1;
let quizMissedWords = [];
let quizSource = "day";
let answerTimer = null;
let quizIsGame = false;      // true = 복습 게임(4지선다)
let choiceLocked = false;    // 게임에서 보기를 한 번 누르면 잠금 (연타 방지)

const TEST_PLACEHOLDER = "아래 '정답 확인하기'를 눌러 뜻을 확인하세요";
const GAME_PLACEHOLDER = "알맞은 답을 고르세요";

function cancelPendingAnswer() {
  if (answerTimer !== null) {
    clearTimeout(answerTimer);
    answerTimer = null;
  }
}

function startQuiz(dayNumber, source = "day", customWordList = null, isGame = false) {
  let quizSet;
  if (customWordList) {
    quizSet = [...customWordList];
  } else {
    const categoryWords = getWordsForCategory(state.selectedLevel, state.selectedPosGroup);
    const start = (dayNumber - 1) * state.wordsPerDay;
    const end = start + state.wordsPerDay;
    quizSet = categoryWords.slice(start, end);
  }
  if (quizSet.length === 0) return;

  cancelPendingAnswer();
  quizSource = source;
  quizIsGame = isGame;
  currentQuizDayNumber = dayNumber;
  quizMissedWords = [];
  currentQuizSet = quizSet;

  currentQuizSet.sort(() => Math.random() - 0.5);
  currentQuizIndex = 0;

  renderQuizQuestion();
  switchView("view-quiz");
}

function renderQuizQuestion() {
  const total = currentQuizSet.length;
  const current = currentQuizSet[currentQuizIndex];
  const mode = state.mode;

  document.getElementById("quiz-progress-text").textContent = `${currentQuizIndex + 1} / ${total}`;
  const pct = Math.round(((currentQuizIndex + 1) / total) * 100);
  document.getElementById("quiz-progress-bar").style.width = `${pct}%`;

  document.getElementById("quiz-pos-badge").textContent = `${getKoreanPos(current.pos)} · ${current.level}`;

  document.getElementById("btn-show-answer").classList.add("hidden");
  document.getElementById("quiz-self-eval-buttons").classList.add("hidden");
  document.getElementById("btn-submit-typing").classList.add("hidden");
  document.getElementById("quiz-typing-container").classList.add("hidden");
  document.getElementById("quiz-answer-container").classList.remove("hidden");
  document.getElementById("quiz-revealed-meaning").classList.add("hidden");
  document.getElementById("quiz-hidden-placeholder").classList.remove("hidden");
  document.getElementById("quiz-ipa-container").classList.remove("hidden");

  // 게임 영역 초기화 (일반 테스트에서는 계속 숨김)
  const choiceBox = document.getElementById("quiz-choice-container");
  choiceBox.innerHTML = "";
  choiceBox.classList.add("hidden");
  document.getElementById("quiz-choice-feedback").classList.add("hidden");
  document.getElementById("quiz-hidden-placeholder").textContent = quizIsGame ? GAME_PLACEHOLDER : TEST_PLACEHOLDER;

  if (quizIsGame) {
    renderChoiceQuestion(current, mode);
  } else if (mode === "en-ko") {
    document.getElementById("quiz-question-primary").textContent = current.word;
    document.getElementById("quiz-ipa").textContent = current.ipa || "";
    document.getElementById("quiz-revealed-meaning").textContent = current.meaning;
    document.getElementById("btn-show-answer").classList.remove("hidden");
    playTTS(current.word);
  } else {
    document.getElementById("quiz-question-primary").textContent = current.meaning;
    document.getElementById("quiz-ipa-container").classList.add("hidden");
    document.getElementById("quiz-hidden-placeholder").classList.add("hidden");
    document.getElementById("quiz-typing-container").classList.remove("hidden");
    document.getElementById("btn-submit-typing").classList.remove("hidden");

    const input = document.getElementById("quiz-spell-input");
    input.value = "";
    input.disabled = false;
    input.className = "w-full px-4 py-3 text-center text-lg font-bold rounded-2xl border-2 theme-border bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500 transition";
    document.getElementById("quiz-feedback-msg").textContent = "";
    setTimeout(() => input.focus(), 150);
  }

  document.getElementById("btn-play-voice").onclick = () => playTTS(current.word);
}

// ---------- 복습 게임 (4지선다) ----------

// 매 문제마다 새로 섞기 (Day 구성용 고정 섞기와 별개)
function randomShuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 보기 = 정답 1개 + 오답 최대 3개 (순서 무작위)
// 오답 후보: ① 같은 레벨·같은 품사 → 부족하면 ② 같은 품사의 다른 레벨
// 정답과 철자가 같거나 뜻이 같은 단어, 화면에 같은 글자로 보이는 보기는 제외
// (to, the, a, an 처럼 같은 품사가 없으면 정답 1개만 표시)
function buildChoices(current, mode) {
  const label = w => (mode === "en-ko" ? w.meaning : w.word);
  const clashes = w =>
    w === current ||
    w.word.toLowerCase() === current.word.toLowerCase() ||
    w.meaning === current.meaning;

  const samePos = allWords.filter(w => w.pos === current.pos && !clashes(w));
  const sameLevel = randomShuffle(samePos.filter(w => w.level === current.level));
  const otherLevel = randomShuffle(samePos.filter(w => w.level !== current.level));

  const used = new Set([label(current)]);
  const distractors = [];
  for (const w of [...sameLevel, ...otherLevel]) {
    if (distractors.length >= 3) break;
    if (used.has(label(w))) continue;
    used.add(label(w));
    distractors.push(w);
  }
  return randomShuffle([current, ...distractors]);
}

const CHOICE_BASE = "w-full px-4 py-3 rounded-2xl border text-left font-bold text-[15px] flex items-center justify-between transition";

function renderChoiceQuestion(current, mode) {
  choiceLocked = false;
  document.getElementById("quiz-question-primary").textContent = mode === "en-ko" ? current.word : current.meaning;
  document.getElementById("quiz-ipa").textContent = mode === "en-ko" ? (current.ipa || "") : "";
  if (mode !== "en-ko") document.getElementById("quiz-ipa-container").classList.add("hidden");
  document.getElementById("quiz-revealed-meaning").textContent = mode === "en-ko" ? current.meaning : current.word;

  const choiceBox = document.getElementById("quiz-choice-container");
  buildChoices(current, mode).forEach(w => {
    const btn = document.createElement("button");
    btn.className = `${CHOICE_BASE} theme-card theme-border active:scale-95`;
    const text = document.createElement("span");
    text.textContent = mode === "en-ko" ? w.meaning : w.word;
    const mark = document.createElement("i");
    btn.appendChild(text);
    btn.appendChild(mark);
    btn.onclick = () => pickChoice(btn, w === current);
    btn.dataset.correct = w === current ? "1" : "0";
    choiceBox.appendChild(btn);
  });
  choiceBox.classList.remove("hidden");

  if (mode === "en-ko") playTTS(current.word);
}

function pickChoice(pickedBtn, isCorrect) {
  if (choiceLocked) return;
  choiceLocked = true;
  const current = currentQuizSet[currentQuizIndex];

  document.querySelectorAll("#quiz-choice-container button").forEach(btn => {
    const mark = btn.lastChild;
    if (btn.dataset.correct === "1") {
      btn.className = `${CHOICE_BASE} border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300`;
      mark.className = "fa-solid fa-check";
    } else if (btn === pickedBtn) {
      btn.className = `${CHOICE_BASE} border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300`;
      mark.className = "fa-solid fa-xmark";
    } else {
      btn.className = `${CHOICE_BASE} theme-card theme-border opacity-50`;
    }
  });

  // 카드에 정답 공개 + 결과 문구 (한영 테스트처럼 자동 진행)
  document.getElementById("quiz-hidden-placeholder").classList.add("hidden");
  document.getElementById("quiz-revealed-meaning").classList.remove("hidden");
  const fb = document.getElementById("quiz-choice-feedback");
  fb.className = `text-xs font-bold mt-1.5 ${isCorrect ? "text-emerald-600" : "text-rose-600"}`;
  fb.textContent = isCorrect ? "정답입니다!" : `오답! 정답: ${state.mode === "en-ko" ? current.meaning : current.word}`;

  if (state.mode !== "en-ko") playTTS(current.word);

  answerTimer = setTimeout(() => { answerTimer = null; handleQuizAnswer(isCorrect); }, isCorrect ? 1200 : 2000);
}

function validateSpelling(userInput, targetWord) {
  const trimmed = userInput.trim();
  const isStrictCapital = /^[A-Z]/.test(targetWord);
  if (isStrictCapital) return trimmed === targetWord;
  return trimmed.toLowerCase() === targetWord.toLowerCase();
}

function handleQuizAnswer(isCorrect) {
  const current = currentQuizSet[currentQuizIndex];
  if (!isCorrect) {
    quizMissedWords.push(current);
    // 복습 게임의 오답은 오답노트에 넣지 않음
    if (!quizIsGame && !state.notebook.some(w => w.word === current.word)) {
      state.notebook.push(current);
      saveState();
    }
  }

  currentQuizIndex++;
  if (currentQuizIndex < currentQuizSet.length) {
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

// 버튼·입력 연결 (main.js에서 1번 호출)
function initQuizScreen() {
  document.getElementById("btn-quiz-exit").onclick = () => {
    if (quizSource === "notebook") {
      renderNotebook();
      switchView("view-notebook");
    } else {
      switchView("view-study");
    }
  };

  document.getElementById("btn-show-answer").onclick = () => {
    document.getElementById("quiz-hidden-placeholder").classList.add("hidden");
    document.getElementById("quiz-revealed-meaning").classList.remove("hidden");
    document.getElementById("btn-show-answer").classList.add("hidden");
    document.getElementById("quiz-self-eval-buttons").classList.remove("hidden");
  };

  document.getElementById("btn-eval-correct").onclick = () => handleQuizAnswer(true);
  document.getElementById("btn-eval-wrong").onclick = () => handleQuizAnswer(false);

  const input = document.getElementById("quiz-spell-input");
  const submitBtn = document.getElementById("btn-submit-typing");
  const feedback = document.getElementById("quiz-feedback-msg");

  function processSpellingCheck() {
    const current = currentQuizSet[currentQuizIndex];
    const val = input.value;
    if (!val.trim()) return;

    const isCorrect = validateSpelling(val, current.word);
    input.disabled = true;
    submitBtn.classList.add("hidden");
    playTTS(current.word);

    if (isCorrect) {
      input.className = "w-full px-4 py-3 text-center text-lg font-bold rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-800 transition";
      feedback.className = "text-xs font-bold mt-2 text-emerald-600";
      feedback.textContent = `정답입니다! [${current.word}]`;
      answerTimer = setTimeout(() => { answerTimer = null; handleQuizAnswer(true); }, 1200);
    } else {
      input.className = "w-full px-4 py-3 text-center text-lg font-bold rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-800 transition";
      feedback.className = "text-xs font-bold mt-2 text-rose-600";
      feedback.textContent = `오답! 정답: ${current.word}`;
      answerTimer = setTimeout(() => { answerTimer = null; handleQuizAnswer(false); }, 2000);
    }
  }

  submitBtn.onclick = processSpellingCheck;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") processSpellingCheck();
  });
}
