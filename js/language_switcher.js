'use strict'

import { experience, education, projects } from './array.js'

const swBtnEng = document.querySelector('.switch-lang-eng');
const swBtnRus = document.querySelector('.switch-lang-rus');
const titleArr = document.querySelectorAll('h3.title');



swBtnRus.addEventListener('click', clickHandler(titleArr, 'rus'));

swBtnEng.addEventListener('click', () => {

  creatorHTML.renderEducation(educationArrEnglish);
  creatorHTML.renderExperience(experienceArrEnglish);
  creatorHTML.renderProjects(projectsArrEnglish);;

  titleArr.forEach((title) => {

    title.innerHTML = title.dataset.eng;

  })
});