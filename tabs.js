// tabs.js
export function setupTabs() {
  const tabItems = document.querySelectorAll('.sidebar-menu-item, .sidebar-home');
  const sections = document.querySelectorAll('.content-section');

  tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.dataset.tab;

      // 全セクションを非表示にする
      sections.forEach(section => section.classList.add('hidden'));

      // 対象のセクションを表示する
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      } else {
        console.error(`Section with ID ${targetId} not found.`);
      }
    });
  });
}
