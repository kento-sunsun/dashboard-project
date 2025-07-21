// tabs.js
export function setupTabs() {
  const tabItems = document.querySelectorAll('.sidebar-menu-item, .sidebar-home');
  const contentSections = document.querySelectorAll('.content-section');

  tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = tab.dataset.tab;

      contentSections.forEach(section => {
        section.classList.add('hidden');
      });

      const targetSection = document.querySelector(`#${targetId}`);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
}
