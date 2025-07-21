import { setupTabs } from './tabs.js';
import { setupConverter } from './converter.js';
import { setupFlashcards } from './flashcards.js';

document.addEventListener("DOMContentLoaded", () => {
  const tabItems = document.querySelectorAll(".sidebar-menu-item, .sidebar-home");
  const sections = document.querySelectorAll(".content-section");

  tabItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;

      // 全セクションを非表示
      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      // 対象のセクションのみ表示
      const targetSection = document.getElementById(targetTab);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      } else {
        console.error(`Section with ID "${targetTab}" not found.`);
      }
    });
  });
});
