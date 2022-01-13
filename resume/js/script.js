'use strict'

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
  },

  getProjectsHTML(projectsArr) {
    //get element to put in
    let eduEl = document.querySelector('.projects__inner');

    //HTML markup for Working expirience item
    projectsArr.forEach(project => {
      eduEl.insertAdjacentHTML('beforeend', `<!-- Above content has been generated from JavaScript -->
      <article class="project">
            <a class="project__link" href=${project.link} target="_blank"
              rel="noopener noreferrer">
              <img src="${project.imgUrl}" width="250" alt="Online fashion store image" class="project__img">
            </a>
            <div class="project__description">
              <h4 class="project__description__title subtitle">${project.title}</h4>
              <div class="project__description__list">                
                <div class="project__description__list__item text">${project.techInfo}</div>
                <div class="project__description__list__item text">${project.steck}</div>       
                <div class="project__description__list__item text">${project.description}</div>
              </div>
            </div>
          </article>`);
    })
  }

}

creatorHTML.getEduHTML(educationList);
creatorHTML.getXperHTML(jobList);
creatorHTML.getProjectsHTML(projectsEnglish);






// const creatorHTML = {

//   //here goes xperience element
//   xperEl: document.querySelector('.xper__inner'),
//   xperHTML: [],
//   //here goes education element
//   eduEl: document.querySelector('.education__inner'),
//   eduHTML: [],


//   //HTML markup for Working expirience item
//   xperMarkup() {
//     return `<!-- Above content has been generated from JavaScript -->
//             <ul class="xper__list">
//             <li class="xper__list__item">
//             <h4 class="xper__item__title subtitle">${this.position} | ${this.title}</h4>
//             <h3 class="xper__item__subtitle text">${this.city}</h3>
//             <h3 class="xper__item__subtitle text">${this.startDate} - ${this.endDate}</h3>
//             </li>
//             <li class="xper__list__item text">${this.responsibilities}</li>
//             </ul>`
//   },
//   //HTML markup for education item
//   eduMarkup() {
//     return `<!-- Above content has been generated from JavaScript -->
//             <ul class="xper__list">
//             <li class="xper__list__item">
//             <h4 class="xper__item__title subtitle">${this.title}</h4>
//             <h3 class="xper__item__subtitle text">${this.city}</h3>
//             <h3 class="xper__item__subtitle text">${this.startDate} - ${this.endDate}</h3>
//             <li class="xper__list__item text">${this.position}</li>
//             </ul>`
//   },

//   generateHTML() {

//     this.eduHTML = jobList.forEach(item => this.xperMarkup(item));
//     this.xperHTML = educationList.forEach(item => this.eduMarkup(item));

//   },

//   postHtmlToPage() {

//     this.eduEl.insertAdjacentHTML('beforeend', this.eduHTML)
//     this.xperEl.insertAdjacentHTML('beforeend', this.xperHTML);

//   },

// }
// creatorHTML.generateHTML();
// creatorHTML.postHtmlToPage();
