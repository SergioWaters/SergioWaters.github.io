export const projects = [
  {
    title: {
      rus: "Сайт детского сада Sherwood",
      eng: "Sherwood kids club site",
    },
    description: { eng: `*description*`, rus: `*description*` },
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
    techInfo: {
      rus: "Адаптивный, залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. English language. ",
    },
    imgUrl: ["./img/sherwood.png"],
    link: "https://sherwoodkidsclub.ru",
  },
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
    imgUrl: ["./img/todo_vue.png"],
    link: "https://sergiowaters-todolist.netlify.app/",
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
    stack: "Vue.js, VueX, VueRouter, JavaScript, Vuetify, Chart.js",
    imgUrl: ["./img/expences_vue.png"],
    link: "https://sergiowaters.github.io/expences_vue/",
    techInfo: {
      rus: "Залит на pages.github.io. Английский язык. ",
      eng: "Hosted by GitHub Pages. English language. ",
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
    imgUrl: ["./img/letscolor.png"],
    link: "https://sergiowaters.github.io/letscolor/index.html",
    techInfo: {
      rus: 'Адаптивный макет 1440p to 375p, залит на pages.github.io. Английский язык. "Рыбный" текст 50%',
      eng: 'Adaptive mockup 1440p to 375p, located on pages.github.io. English "fish" text 50%',
    },
  },
  {
    title: { rus: "Персональная страница", eng: "Personal Page" },
    description: {
      rus: "Личная страница, резюме, портфолио",
      eng: "My personal page. One page + dynamic content. It has dark and normal themes. Two languages to choose from - Russian and English",
    },
    stack: "HTML5, CSS3, SVG, BEM, SASS, JavaScript",
    imgUrl: ["./img/resume.jpg"],
    link: "https://sergiowaters.github.io/index.html",
    techInfo: {
      rus: 'Адаптивная страница 375p+, залит на pages.github.io. Русский и Английский языки. Без "рыбного" текста.',
      eng: "Adaptive page 375p+, Russian and English languages. Uploaded to pages.github.io.",
    },
  },
  {
    title: { rus: "Лендинг Space shop", eng: "Space shop landing" },
    description: { rus: "*description*", eng: "*description*" },
    techInfo: {
      rus: "Залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. Russian language. ",
    },
    imgUrl: ["./img/spaceshop.png"],
    link: "https://sergiowaters.github.io/spaceshop/",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
  },

  {
    title: {
      rus: "Рекламный лендинг Nootris",
      eng: "Advertising landing page Nootris",
    },
    description: { rus: "*description*", eng: "*description*" },
    techInfo: {
      rus: "Залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. Russian language. ",
    },
    imgUrl: ["./img/willskill.png"],
    link: "https://sergiowaters.github.io/willskill/",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static.",
  },

  {
    title: { rus: "Ювелирный магазин", eng: "Jewelry store" },
    description: { rus: "*description*", eng: "*description*" },
    imgUrl: ["./img/goldystore.png"],
    techInfo: {
      rus: "Залит на pages.github.io. Русский язык.",
      eng: "Hosted by GitHub Pages. Russian language.",
    },
    link: "https://sergiowaters.github.io/landing_diamonds/",
    stack: "HTML5, CSS3, SVG, BEM, SASS, Static, Slick-slider.",
  },
  {
    title: { rus: "Онлайн магазин модной одежды", eng: "Online fashion store" },
    description: {
      rus: 'HTML+CSS Макет безымянного магазина. <br> В макете пять статичных страниц: <br> 1. Главная, со списком карточек товаров, <br> 2. Каталог с аналогичным списком, breadcrumbs и блоком сортировки товаров, <br> 3. Карточка выбранного товара с более полным описанием, <br> 4. Корзина с формой для доставки и блоком оплаты, <br> 5. Страничка с формой регистрации. <br> Ссылки на все страницы есть в дроп-меню, вызываемом кнопкой "бургер".',
      eng: '"Luxerious" fashion online store. There are five pages in this mockup: <p>Main page, has a featured items and list of products.</p> <p>Catalog page, with the same list, breadcrumbs and filter box.</p> <p>Product page with more detailed information.</p> <p>Cart / bascket page has a shipping form and prices.</p> <p>Registration form page.</p> <p>All the links to all the pages are in "burger"-menu.</p>',
    },
    imgUrl: ["./img/online_store.png"],
    techInfo: {
      rus: 'Адаптивный макет 1440p to 375p, залит на pages.github.io. Английский язык. "Рыбный" текст 50%',
      eng: "English language. 50% fish-text. Adaptive mockup from 1440p to 375p. Uploaded to pages.github.io.",
    },
    link: "https://sergiowaters.github.io/site_clothes_store/",
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
    imgUrl: ["./img/cosmotourism.png"],
    techInfo: {
      rus: 'Адаптивный сайт 1220p to 320p + адаптивные шрифты, залит на pages.github.io. Английский язык. Без "рыбного" текста.',
      eng: "Adaptive page from 1220p to 320p + adaptive fonts, Uploaded to pages.github.io. English language. No fish text.",
    },
    link: "https://sergiowaters.github.io/cosmotourism/index.html",
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
    imgUrl: ["./img/mob_first.png"],
    techInfo: {
      rus: 'Адаптивная страница 375p+, залит на pages.github.io. Русский язык. Без "рыбного" текста.',
      eng: "Adaptive page 375p+. Russian language. No fish-text. Uploaded to pages.github.io. ",
    },
    link: "https://sergiowaters.github.io/masters_page/index.html",
    stack: "HTML5, CSS3, BEM, SASS, Static, Slick-slider",
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
    imgUrl: ["./img/company_site.png"],
    techInfo: {
      rus: 'Залит на pages.github.io. Латиница. "Рыбный" текст 100%.',
      eng: "Lorem:} language. Fish-text 100%. Uploaded to pages.github.io.",
    },
    link: "https://sergiowaters.github.io/company_site_mockup/index.html",
    stack: "HTML5, CSS3, Yandex.maps, Static",
  },
];
