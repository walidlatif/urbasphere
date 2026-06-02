document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-mobile-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (!toggle || !menu) return;

  const setMenuState = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('overflow-hidden', isOpen);
  };

  toggle.addEventListener('click', () => {
    setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  document.addEventListener('click', (event) => {
    if (!menu.classList.contains('is-open')) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setMenuState(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) setMenuState(false);
  });
});
