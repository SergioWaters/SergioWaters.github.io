import { render } from '../../script.js'
import { experienceArr } from './array.js'

export const expirienceComp = (lang) => {
  const arr = experienceArr[lang]
  render(
    arr,
    {
      element: '.xper__inner',
      markup: (item) => `
      <ul class="xper__list">
        <li class="xper__list__item">
        <h4 class="xper__item__title subtitle">${item.position} | ${item.title}</h4>
        <h3 class="xper__item__subtitle text">${item.city}</h3>
        <h3 class="xper__item__subtitle text">${item.startDate} - ${item.endDate}</h3>
        </li>
        <li class="xper__list__item text">${item.responsibilities}</li>  
      </ul>`,
    }
  );
}