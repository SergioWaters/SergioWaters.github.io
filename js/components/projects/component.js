import { projects } from "./array.js";
import { projectMarkup } from "./projectMarkup.js";
import { runNotSlider } from "./notslider.js";

export const projectsComp = (lang) => {
  const root = document.querySelector(".projects__inner");
  const btnArr = document.querySelectorAll("button.project-switch");
  const markup = (p) => p.map((i) => projectMarkup(i, lang)).join("");

  root.innerHTML = markup(projects[btnArr[0].dataset.project]);
  runNotSlider();

  btnArr.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();
      root.innerHTML = markup(projects[e.target.dataset.project]);
      runNotSlider();
    })
  );
};
