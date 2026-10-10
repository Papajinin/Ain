// ==========================================================
// main.js : 앱 시작 순서 (index.html에서 가장 마지막에 불러옵니다)
// 원래 단일 파일의 시작 순서를 그대로 유지합니다.
// 새 화면 파일을 추가하면 아래에 init 함수 호출을 한 줄 추가합니다.
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  parseEmbeddedDatabase();
  initTTS();
  refreshTheme();
  if (window.matchMedia) {
    const darkMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkMq.addEventListener) darkMq.addEventListener("change", refreshTheme);
    else if (darkMq.addListener) darkMq.addListener(refreshTheme);
  }

  renderCategoryView();
  renderPosGuideView();
  switchView("view-categories");

  // 화면별 버튼 연결
  initCategoryScreen();
  initPosGuideScreen();
  initDaysScreen();
  initStudyScreen();
  initNotebookScreen();
  initSettingsScreen();
  initQuizScreen();
  initResultScreen();
});
