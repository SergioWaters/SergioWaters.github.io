import { render } from "../../render.js";
import { skills } from "./array.js";

export const steckComp = (lang) => {
  const item = (item) => `<span class="skills__item text">${item}</span>`;
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
    element: ".skills__inner",
    markup: () => section(skills),
  });
};
