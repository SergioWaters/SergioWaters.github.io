

const creatorHTML = {

  getXperHTML(xperienceArr) {

    //get element to put in
    let xperEl = document.querySelector('.xper__inner');

    //HTML markup for Working expirience item
    xperienceArr.forEach(job => {
      xperEl.insertAdjacentHTML('beforeend', `<!-- Above content has been generated from JavaScript -->
      <ul class="xper__list">
      <li class="xper__list__item">
      <h4 class="xper__item__title subtitle">${job.position} | ${job.title}</h4>
      <h3 class="xper__item__subtitle text">${job.city}</h3>
      <h3 class="xper__item__subtitle text">${job.startDate} - ${job.endDate}</h3>
      </li>
      <li class="xper__list__item text">${job.responsibilities}</li>  
      </ul>`);
    })
  },

  getEduHTML(educationArr) {
    //get element to put in
    let eduEl = document.querySelector('.education__inner');

    //HTML markup for Working expirience item
    educationArr.forEach(edu => {
      eduEl.insertAdjacentHTML('beforeend', `<!-- Above content has been generated from JavaScript -->
      <ul class="xper__list">
      <li class="xper__list__item">
      <h4 class="xper__item__title subtitle">${edu.title}</h4>
      <h3 class="xper__item__subtitle text">${edu.city}</h3>
      <h3 class="xper__item__subtitle text">${edu.startDate} - ${edu.endDate}</h3>
      <li class="xper__list__item text">${edu.position}</li>  
      </ul>`);
    })
  }

}

creatorHTML.getEduHTML(educationList);
creatorHTML.getXperHTML(jobList);



let swBtnEl = document.querySelector('.theme-switch-btn');
let mainEl = document.querySelector('main');

swBtnEl.addEventListener('click', function () {

  mainEl.classList.toggle('dark_theme')

});
