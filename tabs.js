// tabs.js
export function setupTabs() {
  const tabItems = document.querySelectorAll(".sidebar-menu-item, .sidebar-home");
  const sections = document.querySelectorAll(".content-section");

  tabItems.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = tab.dataset.tab;

      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      const targetSection = document.getElementById(targetTab);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      } else {
        console.error(`Section with ID "${targetTab}" not found.`);
      }
    });
  });
}
