import { projects } from "./array.js";
import { projectMarkup } from "./projectMarkup.js";
import { runNotSlider } from "./notslider.js";

export const projectsComp = (lang) => {
  const root = document.querySelector(".projects__inner");
  const btnArr = document.querySelectorAll("button.project-switch");
  const markup = (p) => p.map((i) => projectMarkup(i, lang)).join("");

  root.innerHTML = markup(projects[btnArr[0].dataset.project]);
  runNotSlider();
  
  const swiper = new Swiper('.swiper', {
      autoplay: {
        duration: 3000
      },
      slidesPerView: 1
    });

  btnArr.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.add('project-switch_active')
      root.innerHTML = markup(projects[e.target.dataset.project]);
      runNotSlider();
      swiper.update()
    })
  );
};
