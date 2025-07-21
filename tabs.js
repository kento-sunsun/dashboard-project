// tabs.js

export function setupTabs() {
  // Select all sidebar buttons with tab functionality
  const tabItems = document.querySelectorAll('.sidebar-menu-item, .sidebar-home');
  // Select all content sections for toggling
  const sections = document.querySelectorAll('.content-section');

  // Loop through each tab button
  tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default action (useful for button behavior)

      // Fetch the target tab's ID from data attributes
      const targetId = tab.dataset.tab;

      // Hide all sections (add 'hidden' class)
      sections.forEach(section => section.classList.add('hidden'));

      // Show the targeted section (remove 'hidden' class)
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      } else {
        console.error(`Section with ID ${targetId} not found.`);
      }
    });
  });

  console.info('Tab setup initialized successfully.');
}
