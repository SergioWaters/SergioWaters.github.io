export const expirienceMarkup = {
  markup: (item) => `
      <ul class="xper__list">
        <li class="xper__list__item">
        <h4 class="xper__item__title subtitle">${item.position} | ${item.title}</h4>
        <h3 class="xper__item__subtitle text">${item.city}</h3>
        <h3 class="xper__item__subtitle text">${item.startDate} - ${item.endDate}</h3>
        </li>
        <li class="xper__list__item text">${item.responsibilities}</li>  
      </ul>`,
  element: '.xper__inner',
}

export const educationMarkup = {
  markup: (item) => `
    <ul class="education__list">
      <li class="education__list__item">
        <h4 class="education__item__title subtitle">${item.title}</h4>
        <h3 class="education__item__subtitle text">${item.city}</h3>
        <h3 class="education__item__subtitle text">${item.startDate} - ${item.endDate}</h3>
      </li>
      <li class="education__list__item text">${item.position}</li>  
    </ul>`,
  element: '.education__inner',
}

export const projectMarkup = {
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
  element: '.projects__inner',
};

export const stackMarkup = {
  markup: (item) => `<span class="more__item text">${item}</span>`,
  element: '.more__inner'
};

export const sertificateMarkup = {
  markup: (item) => `
    <a class="certificates__link" href=${item.link} target="_blanc">
    <img class="certificates__img" src=${item.img} width="50" alt=${item.title}
    data-title="HTML + CSS Basic">
    <h4 class="certificates__title text"> ${item.title} </h4>
    </a>`,
  element: '.certificates__inner'
};