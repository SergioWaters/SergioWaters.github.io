import { render } from '../../script.js'
import { steckArr } from './array.js'

export const steckComp = (lang) => {

  render(
    steckArr,
    {
      element: '.more__inner',
      markup: (item) => `<span class="more__item text">${item}</span>`
    }
  );
}