import { render } from "../../render.js";
import { certificateArr } from "./array.js";

export const certificatesComp = (lang) => {
  render(certificateArr, {
    element: ".certificates__inner",
    markup: (item) => `
      <a class="certificates__link" href=${item.link} target="_blanc">
      <img class="certificates__img" src=${item.img} width="50" alt=${item.title}
      data-title=${item.title}>
      <h4 class="certificates__text text"> ${item.title} </h4>
      </a>`,
  });
};
