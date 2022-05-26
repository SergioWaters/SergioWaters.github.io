'use strict'

import { experience, education, projects, stackArr, certificateArr } from './array.js';
import { expirienceMarkup, educationMarkup, projectMarkup, stackMarkup, sertificateMarkup } from './markup.js'
import { darkThemeSwitcher } from './dark_theme.js';

const render = (arr, el) => {
  //get element to put in
  let findEl = document.querySelector(el.element);

  //clear innerHTML
  findEl.innerHTML = '';

  //generate and insert HTML markup for item
  arr.forEach(item => {
    findEl.insertAdjacentHTML('beforeend', el.markup(item));
  })
};

function switchTitle(lang) {
  const titleArr = document.querySelectorAll('h3.title');
  titleArr.forEach((title) => {
    title.innerText = title.dataset[lang];
  });
};

function renderAll(lang) {
  switchTitle(lang);
  render(experience[lang], expirienceMarkup);
  render(education[lang], educationMarkup);
  render(projects[lang], projectMarkup);
}

const languageSwitcher = () => {
  const btnArr = document.querySelectorAll('button.lang-switch');
  btnArr.forEach((item) => item.addEventListener('click', (e) => renderAll(e.target.dataset.lang)))
};


document.addEventListener("DOMContentLoaded", () => {
  renderAll('rus')
  render(stackArr, stackMarkup);
  render(certificateArr, sertificateMarkup);
  darkThemeSwitcher()
  languageSwitcher()
});