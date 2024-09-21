import { projects } from "./array.js";
import { projectMarkup } from "./projectMarkup.js";
import { runNotSlider } from "./notslider.js";

export const projectsComp = (lang) => {
  // const slider = document.querySelector(".projects__inner");
  const rootHorizontal = document.querySelector(".projects-horizontal");
  const btnArr = document.querySelectorAll("button.project-switch");
  const markup = (p) => p.map((i) => projectMarkup(i, lang)).join("");
  let swiperInstance = null
  let gsapTrigger = null

  // slider && (slider.innerHTML = markup(projects[btnArr[0].dataset.project]));
  rootHorizontal && (rootHorizontal.innerHTML = markup(projects[btnArr[0].dataset.project]))

  // runSlider()
  runGSAP()
  runNotSlider();

  btnArr.forEach((item, indx) => {
    !indx && item.classList.add('projects__switch_active')
    item.addEventListener("click", () => {
      if (!item.classList.contains('projects__switch_active')) {
        btnArr.forEach(b => b.classList.remove('projects__switch_active'))
        item.classList.add('projects__switch_active')
        // if (slider) {
        //   slider.innerHTML = markup(projects[item.dataset.project])
        //   swiperInstance.update()
        // }
        if (rootHorizontal) {
          rootHorizontal.innerHTML = markup(projects[item.dataset.project])
          gsapTrigger.kill()
          runGSAP()
        }
        runNotSlider();
      }
    })
  });

  // window.addEventListener('scroll', () => {    
  //   const scrollY = window.scrollY
  //   const totlaHeight = document.body.scrollHeight - window.innerHeight
  //   const percentScrolled = scrollY / totlaHeight * 100
  //   const translateX = `translateX(${percentScrolled / 5 * -4}%)`
  //   rootHorizontal.style.transform = translateX
  // })

  function runSlider () {
    if (Swiper && slider) {
      swiperInstance = new Swiper('.swiper', {
        autoplay: {
          duration: 3000,
          pauseOnMouseEnter: true
        },
        slidesPerView: 1
      });
    }
  }

  function runGSAP () {
    if (rootHorizontal) {
      const sectionsArr = gsap.utils.toArray('.projects-horizontal .project')
      gsapTrigger = gsap.to(sectionsArr, {
        xPercent: (sectionsArr.length - 1) * -100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.projects',
          pin: true,
          scrub: 1,
          end: '+=3000'
        }
      })
    }
  }
};
