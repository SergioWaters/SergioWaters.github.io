

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
      <h3 class="xper__item__subtitle">${job.city}</h3>
      <h3 class="xper__item__subtitle">${job.startDate} - ${job.endDate}</h3>
      </li>
      <li class="xper__list__item">${job.responsibilities}</li>  
      </ul>`);
    })
  },

  getEduHTML(educationArr) {
    //get element to put in
    let eduEl = document.querySelector('.edu__inner');

    //HTML markup for Working expirience item
    educationArr.forEach(job => {
      eduEl.insertAdjacentHTML('beforeend', `<!-- Above content has been generated from JavaScript -->
      <ul class="xper__list">
      <li class="xper__list__item">
      <h4 class="xper__item__title subtitle">${job.title}</h4>
      <h3 class="xper__item__subtitle">${job.city}</h3>
      <h3 class="xper__item__subtitle">${job.startDate} - ${job.endDate} 
      </li>
      <li class="xper__list__item">${job.position}</li>  
      </ul>`);
    })
  }

}

creatorHTML.getEduHTML(educationList);
creatorHTML.getXperHTML(jobList);

