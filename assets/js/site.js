/* Progressive enhancement for native controls. No tracking or autoplay. */
(() => {
  'use strict';
  const audios = [...document.querySelectorAll('audio')];
  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(other => { if (other !== audio) other.pause(); });
    });
  });

  const menu = document.querySelector('.lx-mobile-menu');
  if (!menu) return;
  const trigger = menu.querySelector('summary');
  const close = (restoreFocus = false) => {
    if (!menu.open) return;
    menu.open = false;
    if (restoreFocus) trigger.focus();
  };
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      close(menu.contains(document.activeElement));
    }
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) close();
  });
  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) close();
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => close());
  });
  const desktop = window.matchMedia('(min-width: 1101px)');
  desktop.addEventListener('change', event => {
    if (!event.matches) return;
    const focusInMenu = menu.contains(document.activeElement);
    close();
    if (focusInMenu) {
      const navigation = document.querySelector('.lx-primary-nav');
      const next = navigation?.querySelector('a[aria-current="page"]') || navigation?.querySelector('a');
      next?.focus();
    }
  });
  window.addEventListener('pagehide', () => close());
})();
