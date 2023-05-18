import { renderAll, languageSwitcher } from "./script.js";
import { darkThemeSwitcher } from "./dark_theme.js";

const langList = {
  ru: "rus",
  en: "eng",
};

window.addEventListener("DOMContentLoaded", () => {
  renderAll(langList.ru);
  darkThemeSwitcher();
  languageSwitcher();
});
