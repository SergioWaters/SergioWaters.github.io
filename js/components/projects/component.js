import { render } from "../../script.js";
import { projects } from "./array.js";

export const projectsComp = (lang) => {
  const markup = (p = projects) =>
    p
      .map(
        (item) => `
          <article class="project">
            <h4 class="project__title subtitle">${item.title[lang]}</h4>
            
            <div class="project__slide-box">
              ${item.imgUrl
                .map(
                  (element) =>
                    `<div class="slide" style="background-image: url(${element});"></div>`
                )
                .join("")}
            </div>
  
            <div class="project__description">
              <div class="project__links">
                <a class="link more__item subtext" href=${
                  item.link
                } target="_blank"
                rel="noopener noreferrer">
                  ${item.title[lang]}
                </a>
                <a class="link more__item subtext" href=${
                  item.link
                } target="_blank"
                rel="noopener noreferrer">
                  GIT
                </a>
              </div>
              <div class="project__description__list">                
                <div class="project__description__list__item text">${
                  item.description[lang]
                }</div>
                <div class="project__description__list__item text">${
                  item.techInfo[lang]
                }</div>
                <div class="project__description__list__item text stack">
                <p>${item.stack}</p></div>       
              </div>
            </div>
          </article>`
      )
      .join("");

  render([], {
    element: ".projects__inner",
    markup: markup,
  });
};
