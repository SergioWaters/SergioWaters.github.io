import { render } from "../../render.js";
import { educationArr } from "./array.js";

export const educationComp = (lang) => {
  const arr = educationArr[lang];
  render(arr, {
    element: ".education__inner",
    markup: (item) => `
        <ul class="education__list">
          <li class="education__list__item">
            <h4 class="education__item__title subtitle">${item.title}</h4>
            <h3 class="education__item__subtitle text">${item.city}</h3>
            <h3 class="education__item__subtitle text">${item.startDate} - ${item.endDate}</h3>
          </li>
          <li class="education__list__item text">${item.position}</li>  
        </ul>`,
  });
};
