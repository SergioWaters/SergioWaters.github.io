import {
  headerComp,
  certificatesComp,
  educationComp,
  expirienceComp,
  projectsComp,
  steckComp,
} from "./components/index.js";
import { runNotSlider } from "./notslider.js";
import { activateScroll } from "./scroll.js";

export const switchTitle = (lang) => {
  const titleArr = document.querySelectorAll("h3.title");
  titleArr.forEach((title) => {
    title.innerText = title.dataset[lang];
  });
};

export const languageSwitcher = () => {
  const btnArr = document.querySelectorAll("button.lang-switch");
  btnArr.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();
      renderAll(e.target.dataset.lang);
    })
  );
};

export const renderAll = (lang) => {
  switchTitle(lang);
  headerComp(lang);
  educationComp(lang);
  expirienceComp(lang);
  projectsComp(lang);
  steckComp(lang);
  certificatesComp(lang);
  runNotSlider();
  activateScroll();
};
