// tabs.js
export function setupTabs() {
  const tabItems = document.querySelectorAll('.sidebar-menu-item, .sidebar-home');
  const sections = document.querySelectorAll('.content-section');

  tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.dataset.tab;

      // 全セクションを非表示
      sections.forEach(section => section.classList.add('hidden'));

      // 対象のみ表示
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
}
