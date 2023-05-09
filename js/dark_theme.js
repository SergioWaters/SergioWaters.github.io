"use strict";

export const darkThemeSwitcher = (btn, clssName) => {
  let swBtnEl = document.querySelector(btn || ".theme-switch-btn");
  let mainEl = document.querySelector("main");

  swBtnEl.addEventListener("click", () => {
    mainEl.classList.toggle(clssName || "dark_theme");

    mainEl.classList.contains("dark_theme")
      ? (swBtnEl.style.backgroundImage = `url("/icons/sun_bright.png")`)
      : (swBtnEl.style.backgroundImage = 'url("/icons/sun_dark.png")');
  });
};
