// ==========================================================
// notebook.js : ⑧ 오답노트 화면 (외웠어요, 오답 모아보기 퀴즈)
// 헤더의 오답노트(책갈피) 버튼도 여기서 연결합니다.
// ==========================================================

function renderNotebook() {
  const container = document.getElementById("notebook-list-container");
  container.innerHTML = "";
  document.getElementById("txt-notebook-count").textContent = `${state.notebook.length}개`;

  if (state.notebook.length === 0) {
    container.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center theme-sub-text">
        <i class="fa-regular fa-circle-check text-4xl mb-3 opacity-40"></i>
        <p class="font-bold text-sm">오답 노트가 비어 있습니다.</p>
        <p class="text-xs mt-1">틀린 단어가 여기에 자동으로 저장됩니다.</p>
      </div>
    `;
    document.getElementById("btn-notebook-quiz-all").classList.add("hidden");
    return;
  }

  document.getElementById("btn-notebook-quiz-all").classList.remove("hidden");

  state.notebook.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "theme-card p-3 rounded-2xl border theme-border flex items-center justify-between";
    row.innerHTML = `
      <div class="flex items-center space-x-3">
        <button class="w-8 h-8 rounded-full theme-badge flex items-center justify-center" onclick="playTTS('${ttsArg(item.word)}')">
          <i class="fa-solid fa-volume-high text-xs"></i>
        </button>
        <div>
          <div class="font-bold text-sm">
            ${item.word}
            ${item.ipa ? `<span class="text-xs font-normal theme-sub-text ml-1">${item.ipa}</span>` : ''}
            <span class="text-[10px] theme-sub-text font-semibold">[${getKoreanPos(item.pos)}]</span>
          </div>
          <div class="text-xs theme-sub-text mt-0.5">${item.meaning}</div>
        </div>
      </div>
      <button class="btn-remove-note text-xs px-2.5 py-1.5 rounded-xl border border-rose-300 text-rose-600 font-semibold active:scale-95" data-index="${index}">
        외웠어요
      </button>
    `;
    container.appendChild(row);
  });

  container.querySelectorAll(".btn-remove-note").forEach(btn => {
    btn.onclick = (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-index"), 10);
      state.notebook.splice(idx, 1);
      saveState();
      renderNotebook();
    };
  });
}

// 버튼 연결 (main.js에서 1번 호출)
function initNotebookScreen() {
  document.getElementById("btn-open-notebook").onclick = () => {
    renderNotebook();
    switchView("view-notebook");
  };
  document.getElementById("btn-notebook-back").onclick = () => {
    renderHome();
    switchView("view-home");
  };

  document.getElementById("btn-notebook-quiz-all").onclick = () => {
    if (state.notebook.length === 0) return;
    startQuiz(1, "notebook", [...state.notebook]);
  };
}
