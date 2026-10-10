// ==========================================================
// category.js : ① 카테고리 화면 (레벨 A1~C1, 품사 그룹 카드)
// 헤더의 [< 카테고리] 버튼도 여기서 연결합니다.
// ==========================================================

function renderCategoryView() {
  document.getElementById("lbl-selected-level-hint").textContent = `(선택된 레벨: ${state.selectedLevel})`;
  document.querySelectorAll(".btn-level-select").forEach(btn => {
    const lvl = btn.getAttribute("data-level");
    if (lvl === state.selectedLevel) {
      btn.className = "btn-level-select py-3 rounded-2xl border theme-border font-extrabold text-sm flex flex-col items-center justify-center active:scale-95 transition theme-primary-bg text-white shadow-sm";
    } else {
      btn.className = "btn-level-select py-3 rounded-2xl border theme-border font-extrabold text-sm flex flex-col items-center justify-center active:scale-95 transition theme-card";
    }
  });

  const container = document.getElementById("pos-group-container");
  container.innerHTML = "";
  POS_GROUPS.forEach(group => {
    const words = getWordsForCategory(state.selectedLevel, group.id);
    const count = words.length;
    const hasWords = count > 0;

    const card = document.createElement("div");
    card.className = `theme-card p-4 rounded-2xl border theme-border flex items-center justify-between scale-card ${hasWords ? 'cursor-pointer' : 'opacity-50 cursor-pointer'}`;
    card.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${hasWords ? 'theme-badge' : 'bg-gray-200 dark:bg-gray-800 theme-sub-text'}">
          ${group.name[0]}
        </div>
        <div>
          <div class="font-bold text-sm flex items-center space-x-2">
            <span>${state.selectedLevel} ${group.name}</span>
            ${hasWords ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold">${count}단어</span>` : '<span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-500 font-medium">준비 중</span>'}
          </div>
          <div class="text-[11px] theme-sub-text mt-0.5">포함: ${group.subList.join(', ')}</div>
        </div>
      </div>
      <div>
        ${hasWords ? '<i class="fa-solid fa-chevron-right text-xs theme-sub-text"></i>' : '<i class="fa-solid fa-lock text-xs theme-sub-text"></i>'}
      </div>
    `;
    card.onclick = () => {
      if (!hasWords) {
        alert("해당 카테고리의 단어가 아직 준비 중입니다. 단어가 추가되면 바로 열립니다!");
        return;
      }
      state.selectedPosGroup = group.id;
      saveState();
      renderHome();
      switchView("view-home");
    };
    container.appendChild(card);
  });
}

// 버튼 연결 (main.js에서 1번 호출)
function initCategoryScreen() {
  document.querySelectorAll(".btn-level-select").forEach(btn => {
    btn.onclick = () => {
      state.selectedLevel = btn.getAttribute("data-level");
      saveState();
      renderCategoryView();
    };
  });

  document.getElementById("btn-header-back-cat").onclick = () => {
    renderCategoryView();
    switchView("view-categories");
  };
}
