import { render } from "../../script.js";
import { header } from "./array.js";

export const headerComp = (lang) => {
  const arr = header[lang];
  render(arr, {
    element: ".about__info",
    markup: (item) => `
          <h1 class="about__info__title">${item.name}</h1>
          <h3 class="about__info__subtitle">${item.position}</h3>
          <h4 class="about__info__location">${item.location}</h4>
        `,
  });
};
