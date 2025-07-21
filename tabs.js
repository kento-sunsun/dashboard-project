export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const flashcardsTab = document.querySelector('[data-tab="flashcards"]'); // この行を追加
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");
  const flashcardsSection = document.getElementById("flashcards"); // この行を追加

  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    flashcardsSection.classList.add("hidden"); // この行を追加
    homeSection.classList.remove("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    flashcardsSection.classList.add("hidden"); // この行を追加
    converterSection.classList.remove("hidden");
  });

　// 以下の処理を追加
  flashcardsTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.add("hidden");
    flashcardsSection.classList.remove("hidden"); 
  });
}
