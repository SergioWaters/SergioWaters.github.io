import { render } from '../../script.js'
import { projects } from './array.js'

export const projectsComp = (lang) => {
  const arr = projects[lang]
  render(
    arr,
    {
      element: '.projects__inner',
      markup: (item) => `
        <article class="project">
          <a class="project__link" href=${item.link} target="_blank"
            rel="noopener noreferrer">
            <img src="${item.imgUrl}" width="250" alt="Online fashion store image" class="project__img">
          </a>
          <div class="project__description">
            <h4 class="project__description__title subtitle">${item.title}</h4>
            <div class="project__description__list">                
              <div class="project__description__list__item text">${item.description}</div>
              <div class="project__description__list__item text">${item.techInfo}</div>
              <div class="project__description__list__item text">${item.steck}</div>       
            </div>
          </div>
        </article>`,
    }
  );
}