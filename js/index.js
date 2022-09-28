import { renderAll, languageSwitcher } from './script.js';
import { darkThemeSwitcher } from './dark_theme.js'

window.addEventListener("DOMContentLoaded", () => {
  renderAll('rus')
  darkThemeSwitcher()
  languageSwitcher()
});