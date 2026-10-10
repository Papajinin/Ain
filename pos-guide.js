// ==========================================================
// pos-guide.js : ② 품사학습 화면 (15종 품사 설명 카드)
// 품사 설명 문구는 POS_GUIDE_DATA 에서 고칩니다.
// ==========================================================

const POS_GUIDE_DATA = [
  { en: "Noun", ko: "명사", tag: "n", desc: "사람, 사물, 장소, 개념의 이름을 나타내는 단어", examples: "book, water, child, love, Korea" },
  { en: "Pronoun", ko: "대명사", tag: "pron", desc: "명사를 대신하여 가리키는 단어", examples: "I, they, it, this, someone" },
  { en: "Numeral", ko: "수사", tag: "num", desc: "개수나 수량, 순서를 나타내는 단어", examples: "one, two, ten, first, second" },
  { en: "Verb", ko: "동사", tag: "v", desc: "동작이나 상태를 나타내는 단어", examples: "run, make, think, know, give" },
  { en: "Auxiliary Verb", ko: "조동사", tag: "aux. v", desc: "시제, 수동태 등을 만드는 데 도움을 주는 단어", examples: "be, have, do" },
  { en: "Modal Verb", ko: "법조동사", tag: "modal v", desc: "가능성, 허가, 의무 등의 태도를 나타내는 단어", examples: "can, will, must, should, may" },
  { en: "Adjective", ko: "형용사", tag: "adj", desc: "명사의 성질, 상태를 묘사하거나 한정하는 단어", examples: "good, new, big, happy, different" },
  { en: "Adverb", ko: "부사", tag: "adv", desc: "동사, 형용사, 다른 부사, 문장 전체를 수식하는 단어", examples: "quickly, very, always, here, now" },
  { en: "Preposition", ko: "전치사", tag: "prep", desc: "명사(구) 앞에 놓여 위치, 시간, 방향 등의 관계를 나타내는 단어", examples: "in, on, at, to, with" },
  { en: "Conjunction", ko: "접속사", tag: "conj", desc: "단어와 단어, 구와 구, 절과 절을 이어주는 단어", examples: "and, but, because, if, although" },
  { en: "Determiner", ko: "한정사", tag: "det.", desc: "명사(구) 앞에 놓여 대상을 한정하거나 수량·소유·지칭 관계를 밝혀주는 단어", examples: "this, my, some, every, which" },
  { en: "Definite Article", ko: "정관사", tag: "def. art.", desc: "특정한 대상을 가리킬 때 명사 앞에 붙이는 단어", examples: "the" },
  { en: "Indefinite Article", ko: "부정관사", tag: "indef. art.", desc: "정해지지 않은 막연한 대상 하나를 가리킬 때 단수 가산명사 앞에 붙이는 단어", examples: "a, an" },
  { en: "Infinitive", ko: "부정사", tag: "INF", desc: "시제나 인칭에 얽매이지 않는 동사의 기본형", examples: "to" },
  { en: "Exclamation", ko: "감탄사", tag: "exclam.", desc: "순간적인 감정이나 반응을 나타내는 독립된 단어", examples: "wow, oh, ouch, oops, hey" }
];

function renderPosGuideView() {
  const listContainer = document.getElementById("pos-guide-list");
  listContainer.innerHTML = "";

  POS_GUIDE_DATA.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "theme-card p-4 rounded-2xl border theme-border flex flex-col space-y-2";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="w-5 h-5 rounded-full theme-badge flex items-center justify-center text-[10px] font-bold">${idx + 1}</span>
          <span class="font-extrabold text-sm tracking-tight">${item.en}</span>
          <span class="text-xs font-bold theme-primary-text">(${item.ko})</span>
        </div>
        <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md theme-badge border theme-border">${item.tag}</span>
      </div>
      <p class="text-xs font-medium leading-relaxed">${item.desc}</p>
      <div class="pt-1.5 border-t theme-border text-[11px] flex items-center space-x-1.5">
        <span class="theme-sub-text font-bold text-[10px]">예시</span>
        <span class="theme-sub-text font-mono">${item.examples}</span>
      </div>
    `;
    listContainer.appendChild(card);
  });
}

// 버튼 연결 (main.js에서 1번 호출)
function initPosGuideScreen() {
  document.getElementById("btn-open-pos-guide").onclick = () => {
    renderPosGuideView();
    switchView("view-pos-guide");
  };
  document.getElementById("btn-pos-guide-back").onclick = () => {
    switchView("view-categories");
  };
}
