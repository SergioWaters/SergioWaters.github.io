'use strict'

const swBtnEng = document.querySelector('.switch-lang-eng');
const swBtnRus = document.querySelector('.switch-lang-rus');
const titleArr = document.querySelectorAll('h3.title');

swBtnRus.addEventListener('click', function () {

  creatorHTML.renderEducation(educationArr);
  creatorHTML.renderExperience(experienceArr);
  creatorHTML.renderProjects(projectsArr);

  titleArr.forEach(function (title) {

    title.innerText = title.dataset.rus;

  })
});

swBtnEng.addEventListener('click', function () {

  creatorHTML.renderEducation(educationArrEnglish);
  creatorHTML.renderExperience(experienceArrEnglish);
  creatorHTML.renderProjects(projectsArrEnglish);;

  titleArr.forEach(function (title) {

    title.innerHTML = title.dataset.eng;

  })
});