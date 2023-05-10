import { render } from "../../script.js";
import { skills } from "./array.js";

export const steckComp = (lang) => {
  const item = (item) => `<span class="more__item text">${item}</span>`;
  const element = (obj) => `
            <div class="skill">
              <h4 class="skill_title subtitle" >${obj[lang]}</h4>
              <div class="skill_list">
                ${obj.arr.map(item).join("")}
              </div>
            </div>
  `;
  const section = (arr) => arr.map(element).join("");

  render([], {
    element: ".more__inner",
    markup: () => section(skills),
  });
};
