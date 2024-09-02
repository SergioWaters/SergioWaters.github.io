import { projects } from "./array.js";
import { projectMarkup } from "./projectMarkup.js";
import { runNotSlider } from "./notslider.js";

export const projectsComp = (lang) => {
  const root = document.querySelector(".projects__inner");
  const btnArr = document.querySelectorAll("button.project-switch");
  const markup = (p) => p.map((i) => projectMarkup(i, lang)).join("");

  root.innerHTML = markup(projects[btnArr[0].dataset.project]);
  runNotSlider();
  let swiperInstance = null
  if (Swiper) {
    swiperInstance = new Swiper('.swiper', {
      autoplay: {
        duration: 3000,
        pauseOnMouseEnter: true
      },
      slidesPerView: 1
    });
  }

  btnArr.forEach((item, indx) => {
    !indx && item.classList.add('projects__switch_active')
    item.addEventListener("click", () => {
      if (!item.classList.contains('projects__switch_active')) {
        btnArr.forEach(b => b.classList.remove('projects__switch_active'))
        item.classList.add('projects__switch_active')
        root.innerHTML = markup(projects[item.dataset.project]);
        runNotSlider();
        swiperInstance.update()
      }
    })
  });
};
