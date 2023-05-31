const vueProjects = [
  {
    title: { rus: "Список дел", eng: "To do list" },
    description: {
      rus: `SPA проект на Vue.js v3. <br> Разбит на компоненты и страницы. 
    Переход между компонентами осуществляется с помощью VueRouter.<br> 
    Список дел хранится локально, для взаимодействия с ним используется Vuex и LocalStorage.`,
      eng: "Vue.js SPA project. Separated by Components, Views and Modules. It uses VueRouter for routing between views. ",
    },
    techInfo: {
      rus: "Залит на netlify. Русский язык.",
      eng: "Hosted by Netlify. Russian language. ",
    },
    stack: "Vue.js, VueX, VueRouter, JavaScript, Vue 3, LocalStorage",
    imgUrl: [
      "./img/todo_vue-2.png",
      "./img/todo_vue-3.png",
      "./img/todo_vue-4.png",
      "./img/todo_vue-5.png",
      "./img/todo_vue-1.png",
      "./img/todo_vue-6.png",
    ],
    link: "https://sergiowaters-todolist.netlify.app/",
    gitLink: "https://github.com/SergioWaters/todolist",
  },
  {
    title: {
      eng: "App to store expences",
      rus: "Приложение учета расходов",
    },
    description: {
      rus: "Vue.js v2 SPA проект.<br> Разбит на компоненты, страницы и модули. Переход между компонентами осуществляется с помощью VueRouter.<br> Используется Chart.js библиотека для отображения графика.<br> Стили по большей части из библиотеки Vuetify. Компонент калькулятора покрыт unit-тестами.",
      eng: "Vue.js SPA project. Separated by Components, Views and Modules. It uses VueRouter for routing between views. Uses Chart.js for doughnut chart. Uses Vuetify for styles. Calculator component covered by unit-tests.",
    },
    stack: "Vue.js v2, VueX, VueRouter, JavaScript, Vuetify, Chart.js",
    imgUrl: [
      "./img/expences_vue-1.png",
      "./img/expences_vue-2.png",
      "./img/expences_vue-3.png",
      "./img/expences_vue-4.png",
      "./img/expences_vue-5.png",
    ],
    link: "https://prod--amazing-douhua-aa8431.netlify.app/",
    gitLink: "https://github.com/SergioWaters/vue_project",
    techInfo: {
      rus: "Залит на Netlify. Английский язык. ",
      eng: "Hosted by Netlify. English language. ",
    },
  },
  {
    title: {
      rus: "Макет корзины онлайн магазина",
      eng: "Cart for online store mockup",
    },
    description: {
      rus: "",
      eng: "",
    },
    stack: "Nuxt.js@3.5, VueX, VueRouter, Swiper.js, JavaScript",
    imgUrl: [
      "./img/nuxtcart-1.png",
      "./img/nuxtcart-2.png",
      "./img/nuxtcart-3.png",
      "./img/nuxtcart-4.png",
      "./img/nuxtcart-5.png",
      "./img/nuxtcart-6.png",
    ],
    link: "https://lively-praline-787525.netlify.app/",
    gitLink: "https://github.com/SergioWaters/positron",
    techInfo: {
      rus: "Залит на netlify. Русский язык.",
      eng: "Hosted by Netlify. Russian language.",
    },
  },
];

const noframeworkProjects = [
  {
    title: {
      rus: "Сайт детского сада Sherwood",
      eng: "Sherwood kids club site",
    },
    description: { eng: ` `, rus: ` ` },
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
    techInfo: {
      rus: "Адаптивный, залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. English language. ",
    },
    imgUrl: [
      "./img/sherwood-1.png",
      "./img/sherwood-2.png",
      "./img/sherwood-3.png",
      "./img/sherwood-4.png",
      "./img/sherwood-5.png",
    ],
    link: "https://sherwoodkidsclub.ru",
    gitLink: "https://github.com/SergioWaters/sherwood",
  },
  {
    title: { rus: "Персональная страница", eng: "Personal Page" },
    description: {
      rus: "Личная страница, резюме, портфолио",
      eng: "My personal page. One page + dynamic content. It has dark and normal themes. Two languages to choose from - Russian and English",
    },
    stack: "HTML5, CSS3, SVG, BEM, SASS, JavaScript",
    imgUrl: [
      "./img/resume-1.png",
      "./img/resume-2.png",
      "./img/resume-3.png",
      "./img/resume-4.png",
      "./img/resume-5.png",
    ],
    link: "https://sergiowaters.github.io/index.html",
    gitLink: "https://github.com/SergioWaters/SergioWaters.github.io",
    techInfo: {
      rus: 'Адаптивная страница 375p+, залит на pages.github.io. Русский и Английский языки. Без "рыбного" текста.',
      eng: "Adaptive page 375p+, Russian and English languages. Uploaded to pages.github.io.",
    },
  },
  {
    title: {
      rus: "Сайт Ателье Let's Color!",
      eng: "Let's Color! atelier site",
    },
    description: {
      eng: "Mockup for new site.",
      rus: "Макет будущего сайта. ",
    },
    stack: "HTML5, CSS3, BEM, SASS, Static, JavaScript",
    imgUrl: [
      "./img/letscolor-1.jpg",
      "./img/letscolor-2.png",
      "./img/letscolor-3.png",
      "./img/letscolor-4.png",
      "./img/letscolor-5.png",
    ],
    link: "https://sergiowaters.github.io/letscolor/index.html",
    gitLink: "https://github.com/SergioWaters/letscolor",
    techInfo: {
      rus: 'Адаптивный макет 1440p to 375p, залит на pages.github.io. Английский язык. "Рыбный" текст 50%',
      eng: 'Adaptive mockup 1440p to 375p, located on pages.github.io. English "fish" text 50%',
    },
  },
  {
    title: { rus: "Ювелирный магазин", eng: "Jewelry store" },
    description: { rus: " ", eng: " " },
    imgUrl: [
      "./img/goldystore-1.png",
      "./img/goldystore-2.png",
      "./img/goldystore-3.png",
      "./img/goldystore-4.png",
      "./img/goldystore-5.png",
    ],
    techInfo: {
      rus: "Залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. Russian language.",
    },
    link: "https://sergiowaters.github.io/landing_diamonds/",
    gitLink: "https://github.com/SergioWaters/landing_diamonds",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
  },
  {
    title: { rus: "Онлайн магазин модной одежды", eng: "Online fashion store" },
    description: {
      rus: 'HTML+CSS Макет безымянного магазина. <br> В макете пять статичных страниц: <br> 1. Главная, со списком карточек товаров, <br> 2. Каталог с аналогичным списком, breadcrumbs и блоком сортировки товаров, <br> 3. Карточка выбранного товара с более полным описанием, <br> 4. Корзина с формой для доставки и блоком оплаты, <br> 5. Страничка с формой регистрации. <br> Ссылки на все страницы есть в дроп-меню, вызываемом кнопкой "бургер".',
      eng: '"Luxerious" fashion online store. There are five pages in this mockup: <p>Main page, has a featured items and list of products.</p> <p>Catalog page, with the same list, breadcrumbs and filter box.</p> <p>Product page with more detailed information.</p> <p>Cart / bascket page has a shipping form and prices.</p> <p>Registration form page.</p> <p>All the links to all the pages are in "burger"-menu.</p>',
    },
    imgUrl: [
      "./img/online_store-1.png",
      "./img/online_store-2.png",
      "./img/online_store-3.png",
      "./img/online_store-4.png",
      "./img/online_store-5.png",
    ],
    techInfo: {
      rus: 'Адаптивный макет 1440p to 375p, залит на pages.github.io. Английский язык. "Рыбный" текст 50%',
      eng: "English language. 50% fish-text. Adaptive mockup from 1440p to 375p. Uploaded to pages.github.io.",
    },
    link: "https://sergiowaters.github.io/site_clothes_store/",
    gitLink: "https://github.com/SergioWaters/site_clothes_store/",
    stack: "HTML5, CSS3, BEM, SASS, Static, JavaScript",
  },
  {
    title: {
      rus: 'Лендинг-страница "Космический туризм"',
      eng: "Space Tourism landing",
    },
    description: {
      rus: `Сайт про коммерческое использование космоса для туризма. <br> В недалеком будующем, полеты в космос стали настолько дешевыми, что билет в невесомость можно купить не выходя из дома.`,
      eng: "Joke landing page about nearby times, when the space tourism could become usual thing. Space is now like Disney Land. Buy a ticket and go to Mars.",
    },
    imgUrl: [
      "./img/cosmotourism-1.png",
      "./img/cosmotourism-2.png",
      "./img/cosmotourism-3.png",
      "./img/cosmotourism-4.png",
      "./img/cosmotourism-5.png",
    ],
    techInfo: {
      rus: 'Адаптивный сайт 1220p to 320p + адаптивные шрифты, залит на pages.github.io. Английский язык. Без "рыбного" текста.',
      eng: "Adaptive page from 1220p to 320p + adaptive fonts, Uploaded to pages.github.io. English language. No fish text.",
    },
    link: "https://sergiowaters.github.io/cosmotourism/index.html",
    gitLink: "https://github.com/SergioWaters/cosmotourism/",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
  },
  {
    title: {
      rus: "Персональная страница мастера",
      eng: "Personal page of sewer",
    },
    description: {
      rus: "Макет с приятным нестандартным дизайном. Страница ориентирована на мобильные устройства.",
      eng: "Nice and clean mockup. Not usual design. Mobile-first oriented page.",
    },
    imgUrl: ["./img/mobfirst-1.png", "./img/mobfirst-2.png"],
    techInfo: {
      rus: 'Адаптивная страница 375p+, залит на pages.github.io. Русский язык. Без "рыбного" текста.',
      eng: "Adaptive page 375p+. Russian language. No fish-text. Uploaded to pages.github.io. ",
    },
    link: "https://sergiowaters.github.io/masters_page/index.html",
    gitLink: "https://github.com/SergioWaters/masters_page/",
    stack: "HTML5, CSS3, BEM, SASS, Static, Slick-slider",
  },
  {
    title: { rus: "Лендинг Space shop", eng: "Space shop landing" },
    description: { rus: " ", eng: " " },
    techInfo: {
      rus: "Залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. Russian language. ",
    },
    imgUrl: ["./img/spaceshop-1.png", "./img/spaceshop-2.png"],
    link: "https://sergiowaters.github.io/spaceshop/",
    gitLink: "https://github.com/SergioWaters",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
  },

  {
    title: {
      rus: "Рекламный лендинг Nootris",
      eng: "Advertising landing page Nootris",
    },
    description: { rus: " ", eng: " " },
    techInfo: {
      rus: "Залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. Russian language. ",
    },
    imgUrl: ["./img/nootris-1.png", "./img/nootris-2.png"],
    link: "https://sergiowaters.github.io/willskill/",
    gitLink: "https://github.com/SergioWaters/willskill/",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static.",
  },
  {
    title: {
      rus: "Базовый нейтральный макет для сайта компании",
      eng: "Basic, neutral mockup for some company",
    },
    description: {
      rus: 'Сайт безымянной компании. Две страницы: главная и контакты. Залит на pages.github.io. Латиница. "Рыбный" текст 100%.',
      eng: "There are two pages: <p>Main page with description</p> <p>Contacts page has feedback form and yandex.maps api.</p> ",
    },
    imgUrl: [
      "./img/company_site-1.png",
      "./img/company_site-2.png",
      "./img/company_site-3.png",
      "./img/company_site-4.png",
    ],
    techInfo: {
      rus: 'Залит на pages.github.io. Латиница. "Рыбный" текст 100%.',
      eng: "Lorem:} language. Fish-text 100%. Uploaded to pages.github.io.",
    },
    link: "https://sergiowaters.github.io/company_site_mockup/index.html",
    gitLink: "https://github.com/SergioWaters/company_site_mockup/",
    stack: "HTML5, CSS3, Yandex.maps, Static",
  },
];

export const projects = {
  vue: vueProjects,
  native: noframeworkProjects,
};
