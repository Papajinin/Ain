// ==========================================================
// quiz.js : ⑤ 영한 퀴즈(자가채점) · ⑥ 한영 퀴즈(스펠링 입력) 공용 화면
// 퀴즈가 끝나면 result.js 의 finishQuiz() 로 넘어갑니다.
// ==========================================================

let currentQuizSet = [];
let currentQuizIndex = 0;
let currentQuizDayNumber = 1;
let quizMissedWords = [];
let quizSource = "day";
let answerTimer = null;

function cancelPendingAnswer() {
  if (answerTimer !== null) {
    clearTimeout(answerTimer);
    answerTimer = null;
  }
}

function startQuiz(dayNumber, source = "day", customWordList = null) {
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

  if (mode === "en-ko") {
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
    if (!state.notebook.some(w => w.word === current.word)) {
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
