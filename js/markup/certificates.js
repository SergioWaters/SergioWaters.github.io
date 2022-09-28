export const certificateMarkup = {
  markup: (item) => `
    <a class="certificates__link" href=${item.link} target="_blanc">
    <img class="certificates__img" src=${item.img} width="50" alt=${item.title}
    data-title="HTML + CSS Basic">
    <h4 class="certificates__title text"> ${item.title} </h4>
    </a>`,
  element: '.certificates__inner'
};