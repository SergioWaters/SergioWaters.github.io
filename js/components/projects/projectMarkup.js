export const projectMarkup = (item, lang) => `
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
        <div class="links">
          <a class="link skills__item subtext" href=${item.link} target="_blank"
          rel="noopener noreferrer">
            ${item.title[lang]} &#10148;
          </a>
          <a class="link skills__item subtext" href=${
            item.gitLink
          } target="_blank"
          rel="noopener noreferrer">
            GIT &#10148;
          </a>
        </div>
        <div class="project__description__list">                
            <div class="project__description__list__item text stack">
              <p>${item.stack}</p>
            </div>       
            
          <div class="project__description__list__item text stack">${
            item.techInfo[lang]
          }
          </div>
        </div>
      </div>
    </article>`;
