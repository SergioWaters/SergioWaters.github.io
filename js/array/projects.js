import { Project } from './classes.js';

const projectsArrRussian = [
  new Project(
    //title
    "Список дел",
    //description
    'Vue.js v3.0 SPA проект. Разбит на компоненты, Views. Переход между компонентами осуществляется с помощью VueRouter. Используется local storage для хранения данных.',
    //steck
    'Vue.js, VueX, VueRouter, JavaScript, Vue 3',
    //imgUrl
    './img/todo_vue.png',
    //link
    'https://sergiowaters-todolist.netlify.app/',
    //techinfo
    'Залит на pages.github.io. Английский язык. ',
  ),
  new Project(
    //title
    "Приложение учета расходов",
    //description
    'Vue.js SPA проект. Разбит на компоненты, Views и модули. Переход между компонентами осуществляется с помощью VueRouter. Используется Chart.js библиотека для отображения графика. Стили по большей части из библиотеки Vuetify. Компонент калькулятора покрыт unit-тестами.',
    //steck
    'Vue.js, VueX, VueRouter, JavaScript, Vuetify, Chart.js',
    //imgUrl
    './img/expences_vue.png',
    //link
    'https://sergiowaters.github.io/expences_vue/',
    //techinfo
    'Залит на pages.github.io. Английский язык. ',
  ),
  new Project(
    //title
    "Сайт Ателье Let's Color!",
    //description
    'Макет будущего сайта. ',
    //steck
    'HTML5, CSS3, BEM, SASS, Static, JavaScript',
    //imgUrl
    './img/letscolor.png',
    //link
    'https://sergiowaters.github.io/letscolor/index.html',
    //techinfo
    'Адаптивный макет 1440p to 375p, залит на pages.github.io. Английский язык. "Рыбный" текст 50%',
  ),
  new Project(
    //title
    'Персональная страница',
    //description
    'Личная страница, резюме, портфолио',
    //steck
    'HTML5, CSS3, SVG, BEM, SASS, JavaScript',
    //imgUrl
    './img/resume.jpg',
    //link
    'https://sergiowaters.github.io/index.html',
    //techinfo
    'Адаптивная страница 375p+, залит на pages.github.io. Русский и Английский языки. Без "рыбного" текста.'
  ),
  new Project(
    //title
    'Онлайн магазин модной одежды',
    //description
    'Макет безымянного магазина. В макете пять статичных страниц: Главная, со списком карточек товаров, Каталог с аналогичным списком, breadcrumbs и блоком сортировки товаров, Карточка выбранного товара с более полным описанием, Корзина с формой для доставки и блоком оплаты, Страничка с формой регистрации. Ссылки на все страницы есть в дроп-меню, вызываемом кнопкой "бургер".',
    //steck
    'HTML5, CSS3, BEM, SASS, Static, JavaScript',
    //imgUrl
    './img/online_store.png',
    //link
    'https://sergiowaters.github.io/online_store/index.html',
    //techinfo
    'Адаптивный макет 1440p to 375p, залит на pages.github.io. Английский язык. "Рыбный" текст 50%',
  ),
  new Project(
    //title
    'Лендинг-страница "Космический туризм"',
    //description
    'Сайт про коммерческое использование космоса для туризма.',
    //steck
    'HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.',
    //imgUrl
    './img/cosmotourism.png',
    //link
    'https://sergiowaters.github.io/cosmotourism/index.html',
    //techinfo
    'Адаптивный сайт 1220p to 320p + адаптивные шрифты, залит на pages.github.io. Английский язык. Без "рыбного" текста.'),
  new Project(
    //title
    'Персональная страница мастера',
    //description
    'Макет с приятным нестандартным дизайном. Страница ориентирована на мобильные устройства.',
    //steck
    'HTML5, CSS3, BEM, SASS, Static, Slick-slider',
    //imgUrl
    './img/mob_first.png',
    //link
    'https://sergiowaters.github.io/masters_page/index.html',
    //techinfo
    'Адаптивная страница 375p+, залит на pages.github.io. Русский язык. Без "рыбного" текста.'
  ),
  new Project(
    //title
    'Базовый нейтральный макет для сайта компании',
    //description
    'Сайт безымянной компании. Две страницы: главная и контакты. Залит на pages.github.io. Латиница. "Рыбный" текст 100%.',
    //steck
    'HTML5, CSS3, Yandex.maps, Static',
    //imgUrl
    './img/company_site.png',
    //link
    'https://sergiowaters.github.io/company_site_mockup/index.html',
    //techinfo
    'Залит на pages.github.io. Латиница. "Рыбный" текст 100%.'
  ),

];
const projectsArrEnglish = [
  new Project(
    //title
    "To do list",
    //description
    'Vue.js SPA project. Separated by Components, Views and Modules. It uses VueRouter for routing between views. ',
    //steck
    'Vue.js, VueX, VueRouter, JavaScript, Vue 3, LocalStorage',
    //imgUrl
    './img/todo_vue.png',
    //link
    'https://sergiowaters-todolist.netlify.app/',
    //techinfo
    'Hosted by Netlify. Russian language. ',
  ),
  new Project(
    //title
    "App to store expences",
    //description
    'Vue.js SPA project. Separated by Components, Views and Modules. It uses VueRouter for routing between views. Uses Chart.js for doughnut chart. Uses Vuetify for styles. Calculator component covered by unit-tests.',
    //steck
    'Vue.js, VueX, VueRouter, JavaScript, Vuetify, Chart.js',
    //imgUrl
    './img/expences_vue.png',
    //link
    'https://sergiowaters.github.io/expences_vue/',
    //techinfo
    'Hosted by GitHub Pages. English language. ',
  ),
  new Project(
    //title
    "Let's Color! atelier site",
    //description
    'Mockup for new site.',
    //steck
    'HTML5, CSS3, BEM, SASS, Static, JavaScript',
    //imgUrl
    './img/letscolor.png',
    //link
    'https://sergiowaters.github.io/letscolor/index.html',
    //techinfo
    'Adaptive mockup 1440p to 375p, located on pages.github.io. English "Fish" text 50%',
  ),
  new Project(
    //title
    'Personal Page',
    //description
    'My personal page. One page + dynamic content. It has dark and normal themes. Two languages to choose from - Russian and English',
    //steck
    'HTML5, CSS3, SVG, BEM, SASS, JavaScript',
    //imgUrl
    './img/resume.jpg',
    //link
    'https://sergiowaters.github.io/index.html',
    //techinfo
    'Adaptive page 375p+, Russian and English languages. Uploaded to pages.github.io.'
  ),
  new Project(
    //title
    'Online fashion store',
    //description
    '"Luxerious" fashion online store. There are five pages in this mockup: <p>Main page, has a featured items and list of products.</p> <p>Catalog page, with the same list, breadcrumbs and filter box.</p> <p>Product page with more detailed information.</p> <p>Cart / bascket page has a shipping form and prices.</p> <p>Registration form page.</p> <p>All the links to all the pages are in "burger"-menu.</p>',
    //steck
    'HTML5, CSS3, BEM, SASS, Static, JavaScript',
    //imgUrl
    './img/online_store.png',
    //link
    'https://sergiowaters.github.io/online_store/index.html',
    //techinfo
    'English language. 50% fish-text. Adaptive mockup from 1440p to 375p. Uploaded to pages.github.io.'
  ),
  new Project(
    //title
    'Space Tourism landing',
    //description
    'Joke landing page about nearby times, when the space tourism could become usual thing. Space is now like Disney Land. Buy a ticket and go to Mars.',
    //steck
    'HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider',
    //imgUrl
    './img/cosmotourism.png',
    //link
    'https://sergiowaters.github.io/cosmotourism/index.html',
    //techinfo
    'Adaptive page from 1220p to 320p + adaptive fonts, Uploaded to pages.github.io. English language. No fish text.'
  ),
  new Project(
    //title
    'Personal page of sewer',
    //description
    'Nice and clean mockup. Not usual design. Mobile-first oriented page.',
    //steck
    'HTML5, CSS3, BEM, SASS, Static, Slick-slider',
    //imgUrl
    './img/mob_first.png',
    //link
    'https://sergiowaters.github.io/masters_page/index.html',
    //techinfo
    'Adaptive page 375p+. Russian language. No fish-text. Uploaded to pages.github.io. '
  ),
  new Project(
    //title
    'Basic, neutral mockup for some company',
    //description
    'There are two pages: <p>Main page with description</p> <p>Contacts page has feedback form and yandex.maps api.</p> ',
    //steck
    'HTML5, CSS3, Yandex.maps, Static',
    //imgUrl
    './img/company_site.png',
    //link
    'https://sergiowaters.github.io/company_site_mockup/index.html',
    //techinfo
    'Lorem:) language. Fish-text 100%. Uploaded to pages.github.io.'
  ),

];

export const projects = {
  eng: projectsArrEnglish,
  rus: projectsArrRussian
};