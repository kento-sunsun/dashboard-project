export function setupTabs() {
  const homeTab = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.querySelector('#home');
  const converterSection = document.querySelector('#converter');

  homeTab.addEventListener('click', (e) => {
    e.preventDefault();
    converterSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
  });

  converterTab.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.classList.add('hidden');
    converterSection.classList.remove('hidden');
  });
}