'use strict'

let swBtnEl = document.querySelector('.theme-switch-btn');
let mainEl = document.querySelector('main');

swBtnEl.addEventListener('click', function () {

  mainEl.classList.toggle('dark_theme')

});