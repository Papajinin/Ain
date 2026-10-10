// ==========================================================
// result.js : ⑦ 결과 화면 (정답률, 오답 목록, 100% 클리어 기록)
// ==========================================================

function finishQuiz() {
  const total = currentQuizSet.length;
  const missedCount = quizMissedWords.length;
  const correctCount = total - missedCount;
  const pct = Math.round((correctCount / total) * 100);
  const isAllClear = missedCount === 0;

  document.getElementById("result-stat-pct").textContent = `${pct}%`;
  document.getElementById("result-stat-count").textContent = `${correctCount} / ${total}`;

  const iconBadge = document.getElementById("result-icon-badge");
  const title = document.getElementById("result-title");
  const subtitle = document.getElementById("result-subtitle");
  const retryBtn = document.getElementById("btn-result-retry-missed");
  const nextBtn = document.getElementById("btn-result-next-day");

  const isDayQuiz = quizSource === "day";

  if (isAllClear) {
    iconBadge.className = "w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-4xl shadow-inner mt-4 mb-3";
    iconBadge.innerHTML = `<i class="fa-solid fa-trophy"></i>`;
    retryBtn.classList.add("hidden");

    if (isDayQuiz) {
      title.textContent = `Day ${currentQuizDayNumber} 100% 클리어!`;
      subtitle.textContent = "모든 단어를 완벽하게 마스터하셨습니다.";

      const clearKey = getClearKey(state.mode, state.selectedLevel, state.selectedPosGroup, currentQuizDayNumber);
      state.clearedDays[clearKey] = true;
      saveState();

      const totalDays = Math.ceil(getWordsForCategory(state.selectedLevel, state.selectedPosGroup).length / state.wordsPerDay);
      nextBtn.classList.toggle("hidden", currentQuizDayNumber >= totalDays);
    } else {
      title.textContent = "오답 복습 100% 완료!";
      subtitle.textContent = "복습한 단어를 모두 맞혔습니다.";
      nextBtn.classList.add("hidden");
    }
  } else {
    iconBadge.className = "w-20 h-20 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-4xl shadow-inner mt-4 mb-3";
    iconBadge.innerHTML = `<i class="fa-solid fa-fire"></i>`;
    title.textContent = `아쉬워요! (${missedCount}개 오답)`;
    subtitle.textContent = isDayQuiz
      ? "100% 완벽히 맞혀야 클리어 인정됩니다. 틀린 단어에 다시 도전해보세요!"
      : "틀린 단어에 다시 도전해보세요!";
    retryBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  }

  const listContainer = document.getElementById("result-words-list");
  listContainer.innerHTML = "";
  currentQuizSet.forEach(item => {
    const isWrong = quizMissedWords.some(w => w.word === item.word);
    const row = document.createElement("div");
    row.className = `p-2.5 rounded-xl border flex items-center justify-between ${isWrong ? 'bg-rose-50/50 border-rose-200 text-rose-800 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-300' : 'theme-card border-emerald-200/50 text-emerald-800 dark:border-emerald-500/30 dark:text-emerald-300'}`;
    row.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="fa-solid ${isWrong ? 'fa-xmark text-rose-500' : 'fa-check text-emerald-500'} font-bold"></i>
        <div>
          <span class="font-bold">${item.word}</span>
          ${item.ipa ? `<span class="text-[11px] opacity-75 ml-1">${item.ipa}</span>` : ''}
          <span class="text-[10px] opacity-60 ml-1 font-semibold">[${getKoreanPos(item.pos)}]</span>
          <div class="text-[11px] opacity-90">${item.meaning}</div>
        </div>
      </div>
      <button class="w-7 h-7 rounded-full theme-card border theme-border flex items-center justify-center" onclick="playTTS('${ttsArg(item.word)}')">
        <i class="fa-solid fa-volume-high text-[11px]"></i>
      </button>
    `;
    listContainer.appendChild(row);
  });

  renderHome();
  switchView("view-result");
}

// 버튼 연결 (main.js에서 1번 호출)
function initResultScreen() {
  document.getElementById("btn-result-home").onclick = () => {
    renderHome();
    switchView("view-home");
  };
  document.getElementById("btn-result-next-day").onclick = () => {
    openStudyView(currentQuizDayNumber + 1);
  };
  document.getElementById("btn-result-retry-missed").onclick = () => {
    startQuiz(currentQuizDayNumber, quizSource, [...quizMissedWords]);
  };
}
