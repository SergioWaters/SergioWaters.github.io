import { experience, education, projects, steckArr, certificateArr } from './array/index.js';
import { expirienceMarkup, educationMarkup, projectMarkup, steckMarkup, certificateMarkup } from './markup/index.js'

export const render = (arr, el) => {
  //get element to put in
  let findEl = document.querySelector(el.element);

  //clear innerHTML
  findEl.innerHTML = '';

  //generate and insert HTML markup for item
  arr.forEach(item => {
    findEl.insertAdjacentHTML('beforeend', el.markup(item));
  })
};

export const switchTitle = (lang) => {
  const titleArr = document.querySelectorAll('h3.title');
  titleArr.forEach((title) => {
    title.innerText = title.dataset[lang];
  });
};

export const renderAll = (lang) => {
  switchTitle(lang);
  render(experience[lang], expirienceMarkup);
  render(education[lang], educationMarkup);
  render(projects[lang], projectMarkup);
  render(steckArr, steckMarkup);
  render(certificateArr, certificateMarkup);
}

export const languageSwitcher = () => {
  const btnArr = document.querySelectorAll('button.lang-switch');
  btnArr.forEach((item) => item.addEventListener('click', (e) => renderAll(e.target.dataset.lang)))
};