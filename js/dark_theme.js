'use strict'

export const darkThemeSwitcher = (btn, clssName) => {
  let swBtnEl = document.querySelector(btn || '.theme-switch-btn');
  let mainEl = document.querySelector('main');

  swBtnEl.addEventListener('click', () => {

    mainEl.classList.toggle(clssName || 'dark_theme')

  });
}