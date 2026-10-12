// ==========================================================
// settings.js : ⑨ 설정 화면 (테마, 다크모드 연동, 세트 크기, 음성, 백업/복원/초기화)
// 백업은 파일로 저장·불러오기 합니다 (저장 기능 자체는 app.js 의 backupToFile).
// 헤더의 설정(톱니바퀴) 버튼도 여기서 연결합니다.
// 테마 색상 자체는 style.css 에서 고칩니다.
// ==========================================================

function renderLastBackup() {
  const el = document.getElementById("txt-last-backup");
  if (!state.lastBackupAt) {
    el.textContent = "아직 백업한 적이 없어요";
    return;
  }
  const d = new Date(state.lastBackupAt);
  const days = Math.floor((Date.now() - state.lastBackupAt) / DAY_MS);
  el.textContent = `${d.getMonth() + 1}월 ${d.getDate()}일 (${days === 0 ? "오늘" : days + "일 전"})`;
}

// 백업 파일 내용(JSON)으로 복원. 검사 규칙은 예전 텍스트 복원과 동일
function restoreFromText(text) {
  try {
    const parsed = JSON.parse(text);
    if (!isValidBackup(parsed)) throw new Error("invalid backup");
    if (Array.isArray(parsed.notebook)) {
      parsed.notebook = parsed.notebook
        .map(n => n && allWords.find(w => w.word === n.word && w.pos === normalizePosTag(n.pos)))
        .filter(Boolean);
    }
    state = { ...state, ...parsed };
    saveState();
    alert("진도가 완벽하게 복원되었습니다!");
    location.reload();
  } catch (e) {
    alert("올바르지 않은 백업 파일입니다. 이 앱에서 저장한 백업 파일인지 확인해 주세요.");
  }
}

function clearAllProgress() {
  state.clearedDays = {};
  state.notebook = [];
  state.backupRemindFrom = null;
  saveState();
  renderCategoryView();
  switchView("view-categories");
}

// 버튼 연결 (main.js에서 1번 호출)
function initSettingsScreen() {
  document.getElementById("btn-open-settings").onclick = () => {
    document.getElementById("setting-voice-speed").value = state.ttsSpeed;
    document.getElementById("lbl-voice-speed").textContent = `${state.ttsSpeed}x`;
    document.getElementById("setting-auto-dark").checked = state.autoDark;
    renderLastBackup();

    document.querySelectorAll(".btn-wpd").forEach(b => {
      const c = parseInt(b.getAttribute("data-count"), 10);
      if (c === state.wordsPerDay) {
        b.className = "btn-wpd px-4 py-2 rounded-xl border theme-border font-bold text-xs flex-1 theme-primary-bg text-white";
      } else {
        b.className = "btn-wpd px-4 py-2 rounded-xl border theme-border font-bold text-xs flex-1";
      }
    });

    switchView("view-settings");
  };
  document.getElementById("btn-settings-back").onclick = () => {
    renderHome();
    switchView("view-home");
  };

  document.querySelectorAll(".theme-choice-btn").forEach(btn => {
    btn.onclick = () => {
      const th = btn.getAttribute("data-theme");
      if (state.autoDark && isSystemDark() && th !== "theme-dark") {
        state.autoDark = false;
        document.getElementById("setting-auto-dark").checked = false;
      }
      applyTheme(th);
    };
  });

  document.querySelectorAll(".btn-wpd").forEach(btn => {
    btn.onclick = () => {
      const count = parseInt(btn.getAttribute("data-count"), 10);
      state.wordsPerDay = count;
      saveState();
      document.querySelectorAll(".btn-wpd").forEach(b => {
        b.className = "btn-wpd px-4 py-2 rounded-xl border theme-border font-bold text-xs flex-1";
      });
      btn.className = "btn-wpd px-4 py-2 rounded-xl border theme-border font-bold text-xs flex-1 theme-primary-bg text-white";
    };
  });

  document.getElementById("setting-voice-select").onchange = (e) => {
    state.ttsVoice = e.target.value;
    saveState();
  };

  const speedInput = document.getElementById("setting-voice-speed");
  speedInput.oninput = (e) => {
    state.ttsSpeed = parseFloat(e.target.value);
    document.getElementById("lbl-voice-speed").textContent = `${state.ttsSpeed}x`;
    saveState();
  };

  document.getElementById("btn-test-voice").onclick = () => playTTS("apple");

  document.getElementById("setting-auto-dark").onchange = (e) => {
    state.autoDark = e.target.checked;
    saveState();
    refreshTheme();
  };

  document.getElementById("btn-export-data").onclick = async () => {
    await backupToFile();
    renderLastBackup();
  };

  const fileInput = document.getElementById("input-import-file");
  document.getElementById("btn-import-data").onclick = () => {
    fileInput.value = "";
    fileInput.click();
  };
  fileInput.onchange = () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => restoreFromText(String(reader.result));
    reader.onerror = () => alert("파일을 읽지 못했습니다. 다시 시도해 주세요.");
    reader.readAsText(file);
  };

  // 초기화: 어느 단계에서든 [취소]를 누르면 지우지 않음
  document.getElementById("btn-reset-data").onclick = async () => {
    if (!window.confirm("정말 모든 진도를 지울까요?\n클리어한 Day와 오답노트가 모두 지워져요.")) return;
    if (window.confirm("지우기 전에 백업할까요?\n\n[확인] 백업 파일을 저장한 뒤 지워요\n[취소] 다음 단계로")) {
      const result = await backupToFile();
      // 공유 창으로 저장했으면 지움. 다운로드로 대체됐으면 저장됐는지 한 번 더 확인. 공유 창을 닫았으면 지우지 않음
      if (result === "shared" ||
          (result === "downloaded" && window.confirm("백업 파일이 저장됐는지 확인해 주세요.\n저장됐으면 [확인]을 눌러 지워요."))) {
        clearAllProgress();
      }
      return;
    }
    if (window.confirm("백업 없이 지울까요?\n지우면 되돌릴 수 없어요.")) {
      clearAllProgress();
    }
  };
}
