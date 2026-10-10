// ==========================================================
// days.js : ③ 학습단계 화면 (Day 목록, 진도율, 영한/한영 모드 선택)
// ==========================================================

function renderHome() {
  const words = getWordsForCategory(state.selectedLevel, state.selectedPosGroup);
  const totalWords = words.length;
  const totalDays = Math.ceil(totalWords / state.wordsPerDay);

  const currentGroup = POS_GROUPS.find(g => g.id === state.selectedPosGroup);
  const groupName = currentGroup ? currentGroup.name : "명사";

  let clearedCount = 0;
  for (let d = 1; d <= totalDays; d++) {
    if (state.clearedDays[getClearKey(state.mode, state.selectedLevel, state.selectedPosGroup, d)]) {
      clearedCount++;
    }
  }
  const pct = totalDays > 0 ? Math.round((clearedCount / totalDays) * 100) : 0;

  document.getElementById("txt-progress-label").textContent = `${state.selectedLevel} ${groupName} 완주 진도율`;
  document.getElementById("txt-progress-summary").textContent = `${clearedCount} / ${totalDays} Day 완료`;
  document.getElementById("txt-progress-pct").textContent = `${pct}%`;
  document.getElementById("txt-total-words-count").textContent = `총 ${totalWords}개 단어`;
  document.getElementById("txt-words-per-day-badge").textContent = `세트당 ${state.wordsPerDay}개씩 (랜덤 배정)`;

  const btnEnKo = document.getElementById("btn-mode-en-ko");
  const btnKoEn = document.getElementById("btn-mode-ko-en");
  if (state.mode === "en-ko") {
    btnEnKo.className = "flex-1 py-2 text-xs font-bold rounded-xl transition text-white theme-primary-bg shadow-sm";
    btnKoEn.className = "flex-1 py-2 text-xs font-bold rounded-xl transition theme-sub-text";
  } else {
    btnKoEn.className = "flex-1 py-2 text-xs font-bold rounded-xl transition text-white theme-primary-bg shadow-sm";
    btnEnKo.className = "flex-1 py-2 text-xs font-bold rounded-xl transition theme-sub-text";
  }

  const dayList = document.getElementById("day-list");
  dayList.innerHTML = "";

  for (let day = 1; day <= totalDays; day++) {
    const isCleared = !!state.clearedDays[getClearKey(state.mode, state.selectedLevel, state.selectedPosGroup, day)];
    const prevCleared = !!state.clearedDays[getClearKey(state.mode, state.selectedLevel, state.selectedPosGroup, day - 1)];
    const isUnlocked = day === 1 || prevCleared || isCleared;

    const card = document.createElement("div");
    card.className = `theme-card p-4 rounded-2xl border theme-border flex items-center justify-between scale-card ${isUnlocked ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed'}`;

    const startWord = (day - 1) * state.wordsPerDay + 1;
    const endWord = Math.min(day * state.wordsPerDay, totalWords);

    card.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${isCleared ? 'bg-emerald-500/15 text-emerald-600' : isUnlocked ? 'theme-badge' : 'bg-gray-200 dark:bg-gray-800 theme-sub-text'}">
          ${isCleared ? '<i class="fa-solid fa-check"></i>' : day}
        </div>
        <div>
          <div class="font-bold text-sm flex items-center space-x-2">
            <span>Day ${day}</span>
            ${isCleared ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold">클리어</span>' : ''}
          </div>
          <div class="text-[11px] theme-sub-text mt-0.5">${startWord}번 ~ ${endWord}번 단어</div>
        </div>
      </div>
      <div>
        ${isCleared ? '<button class="text-xs font-bold px-3 py-1.5 rounded-xl border theme-border theme-sub-text hover:bg-black/5">학습/복습</button>' : 
          isUnlocked ? '<button class="text-xs font-bold px-3 py-1.5 rounded-xl theme-primary-bg text-white shadow-sm">학습시작</button>' : 
          '<i class="fa-solid fa-lock text-sm theme-sub-text pr-2"></i>'}
      </div>
    `;

    if (isUnlocked) card.onclick = () => openStudyView(day);
    dayList.appendChild(card);
  }
}

// 버튼 연결 (main.js에서 1번 호출)
function initDaysScreen() {
  document.getElementById("btn-mode-en-ko").onclick = () => {
    state.mode = "en-ko";
    saveState();
    renderHome();
  };
  document.getElementById("btn-mode-ko-en").onclick = () => {
    state.mode = "ko-en";
    saveState();
    renderHome();
  };
}
