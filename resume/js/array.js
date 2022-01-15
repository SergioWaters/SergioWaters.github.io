'use strict'


class XperienceCompany {
  constructor(title, position, startDate, endDate, totalDate, responsibilities, city) {
    this.title = title;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalDate = totalDate;
    this.responsibilities = responsibilities;
    this.city = city;
  }
};
class Project {
  constructor(title, description, steck, imgUrl, link, techInfo) {
    this.title = title;
    this.description = description;
    this.steck = steck;
    this.imgUrl = imgUrl;
    this.link = link;
    this.techInfo = techInfo;
  }
};

const experienceArr = [

  new XperienceCompany(
    // company.title = title;
    "FERN",
    // company.position = position;
    "Администратор, Барменеджер",
    // company.startDate = startDate;
    `Февраль 2019`,
    // company.endDate = endDate;
    `август 2021`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Частично переработал концепцию заведения по барной части.
    Оптимизировал себестоимости.
    Занимался обучением персонала, как барменов так и официантов.
    Работал с кассой (IIKO), вел ежедневные кассовые отчеты.
    Собрал барную карту с нуля.
    Занимался закупкой по бару, вел коммуникацию с поставщиками.`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    "DelMar",
    // company.position = position;
    "Администратор",
    // company.startDate = startDate;
    `Сентябрь 2018`,
    // company.endDate = endDate;
    `февраль 2019`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Организация и поддержание рабочего процесса ресторана.
    Обучение персонала стандартам сервиса и гостеприимства.
    Решение конфликтных ситуаций с гостем.
    Ведение ежедневной документации.
    Работа с кассой в ночные смены. (R-Keeper)`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    "Barashki",
    // company.position = position;
    "Официант",
    // company.startDate = startDate;
    `Июнь 2018`,
    // company.endDate = endDate;
    `август 2018`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Акцент на личных продажах.
    Остальные стандартные обязанности.
    R-Keeper.`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    "KOROVABAR",
    // company.position = position;
    "Старший бармен",
    // company.startDate = startDate;
    `Сентябрь 2014`,
    // company.endDate = endDate;
    `февраль 2018`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Ведение документации и сертификатов алкогольной продукции;
    Работа с ЕГАИС;
    Поддержание коммуникации с поставщиками;
    Учет остатков продукции;
    Проведение инвентаризации;
    Составление тех. карт;
    Введение новых позиций;
    Составление графиков персонала;
    Организация рабочего процесса бара;
    Обучение персонала, проведение тренингов`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    "Illy group",
    // company.position = position;
    `Торговый представитель`,
    // company.startDate = startDate;
    `Май 2012`,
    // company.endDate = endDate;
    `ноябрь 2012`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Поддержание и увеличение продаж с имеющейся клиентской базой.
    Коучинг персонала на территории клиента и в офисе компании.
    Ведение переговоров и подготовка коммерческого предложения.`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    `Сеть кофеен "Кофе-Хауз"`,
    // company.position = position;
    `Администратор`,
    // company.startDate = startDate;
    `Июнь 2007`,
    // company.endDate = endDate;
    `декабрь 2010`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `В должности администратора занимался организацией рабочего процесса в кофейне, обучением персонала, повышением продаж выгодных позиций меню, ведением ежедневной документации, работал с кассой (IIKO, MagicSoft).`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    `Сеть кофеен "Кофе-Хауз"`,
    // company.position = position;
    `Менеджер по обучению`,
    // company.startDate = startDate;
    `Июнь 2007`,
    // company.endDate = endDate;
    `декабрь 2010`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `На должности менеджера по обучению был прикреплен к 4 кофейням, проводил в каждой из них анализ работы команды, выявлял слабые места в рабочем процессе и знаниях сотрудников. Составлял план по устранению и помогал выполнять этот план.`,
    // this.city = city;
    `Санкт-Петербург`,
  ),

  new XperienceCompany(
    // company.title = title;
    `Сеть кофеен "Кофе-Хауз"`,
    // company.position = position;
    `Бариста`,
    // company.startDate = startDate;
    `Июнь 2007`,
    // company.endDate = endDate;
    `декабрь 2010`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `На должности Бариста в сети занимался приготовлением всех напитков и блюд, участвовал в инвентаризациях, поддерживал чистоту в кофейне, проходил доп.обучения, участвовал и побеждал в конкурсах.`,
    // this.city = city;
    `Санкт-Петербург`,
  ),

];
const experienceArrEnglish = [

  new XperienceCompany(
    // company.title = title;
    "FERN",
    // company.position = position;
    "Administrator, Barmanager",
    // company.startDate = startDate;
    `February 2019`,
    // company.endDate = endDate;
    `august 2021`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Partially revised the concept of the bar section.
    Optimized cost.
    Was involved in training staff, both bartenders and waiters.
    Worked with the cash desk (IIKO), kept daily cash reports.
    Collected a bar list from scratch.
    I was engaged in purchasing at the bar, communicating with suppliers.`,
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    "DelMar",
    // company.position = position;
    "Administrator",
    // company.startDate = startDate;
    `September 2018`,
    // company.endDate = endDate;
    `february 2019`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Organized and supported the proper operation process of the restaurant.
    Trained staff on the standards of service and hospitality.
    Solved conflict situations with a guests.
    Maintained daily documentation.
    Worked with the cashier on night shifts. (R-Keeper)`,
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    "Barashki",
    // company.position = position;
    "Waiter",
    // company.startDate = startDate;
    `June 2018`,
    // company.endDate = endDate;
    `august 2018`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Emphasis on personal sales.
    All other standard duties.
    R-Keeper.`,
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    "KOROVABAR",
    // company.position = position;
    "Barmanager",
    // company.startDate = startDate;
    `September 2014`,
    // company.endDate = endDate;
    `february 2018`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Maintaining documentation and certificates of alcoholic beverages.
    Worked with EGAIS.
    Maintaining communication with suppliers.
    Accounting for product residues.
    Taking inventory.
    Created recipes.
    Introduction of new positions.
    Staff scheduling.
    Organization of the bar's workflow.
    Personnel training, trainings`,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    "Illy group",
    // company.position = position;
    `Sales Representative`,
    // company.startDate = startDate;
    `May 2012`,
    // company.endDate = endDate;
    `november 2012`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `Maintaining and increasing sales with an existing customer base.
    Personnel coaching on the client's premises and in the our company office.
    Negotiating and preparing a commercial proposal.`,
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    `"Coffie House" chain`,
    // company.position = position;
    `Administrator`,
    // company.startDate = startDate;
    `June 2007`,
    // company.endDate = endDate;
    `december 2010`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `As an administrator, was involved in organizing the workflow in a coffee shop, training staff, increasing sales of profitable menu items, maintaining daily documentation, and worked with the cashier (IIKO, MagicSoft).`,
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    `"Coffie House" chain`,
    // company.position = position;
    `Coach`,
    // company.startDate = startDate;
    `June 2007`,
    // company.endDate = endDate;
    `december 2010`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `As a coach, was assigned to 4 coffee shops, conducted an analysis of the team's work in each of them, and identified weaknesses in the work process and employee knowledge. Drew up an elimination plan and helped to carry out this plan.`,
    // this.city = city;
    `Saint-Petersburg`,
  ),

  new XperienceCompany(
    // company.title = title;
    `"Coffie House" chain`,
    // company.position = position;
    `Barista`,
    // company.startDate = startDate;
    `June 2007`,
    // company.endDate = endDate;
    `december 2010`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    `As a Barista, was engaged in the preparation of all drinks and dishes, participated in inventories, kept the coffee shop clean, underwent additional training, participated and won competitions.`,
    // this.city = city;
    `Saint-Petersburg`,
  ),

];

const educationArr = [
  new XperienceCompany(
    // company.title = title;
    `Гик Брейнс (gb.ru)`,
    // company.position = position;
    `Фронтенд Разработчик`,
    // company.startDate = startDate;
    `Август 2021`,
    // company.endDate = endDate;
    `август 2022`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    [`https://gb.ru/certificates/1597160`,
      `https://gb.ru/certificates/1541773`,
      `https://gb.ru/certificates/1477439`,
      `https://gb.ru/certificates/1378817`,
    ],
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    `СПбГУ ЭФ (ФИНЭК)`,
    // company.position = position;
    `Маркетинг`,
    // company.startDate = startDate;
    `Сентябрь 2007`,
    // company.endDate = endDate;
    `июнь 2009`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    null,
    // this.city = city;
    `Санкт-Петербург`,
  ),
  new XperienceCompany(
    // company.title = title;
    `АЭЮК (Ангарский экономико-юридический колледж)`,
    // company.position = position;
    `Общая экономика`,
    // company.startDate = startDate;
    `Сентябрь 2006`,
    // company.endDate = endDate;
    `июнь 2007`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    null,
    // this.city = city;
    `Ангарск`,
  ),
];
const educationArrEnglish = [
  new XperienceCompany(
    // company.title = title;
    `Geek Brains (gb.ru)`,
    // company.position = position;
    `Frontend`,
    // company.startDate = startDate;
    `August 2021`,
    // company.endDate = endDate;
    `august 2022`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    [`https://gb.ru/certificates/1597160`,
      `https://gb.ru/certificates/1541773`,
      `https://gb.ru/certificates/1477439`,
      `https://gb.ru/certificates/1378817`,
    ],
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    `Saint-Petersburg University of Economics and Finance`,
    // company.position = position;
    `Marketing`,
    // company.startDate = startDate;
    `September 2007`,
    // company.endDate = endDate;
    `june 2009`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    null,
    // this.city = city;
    `Saint-Petersburg`,
  ),
  new XperienceCompany(
    // company.title = title;
    `Angarsk College of Economics and Law`,
    // company.position = position;
    `Economics`,
    // company.startDate = startDate;
    `September 2006`,
    // company.endDate = endDate;
    `june 2007`,
    // company.totalDate = totalDate;
    null,
    // company.responsibilities = responsibilities;
    null,
    // this.city = city;
    `Angarsk`,
  ),
];


const projectsArr = [

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
    'https://sergiowaters.github.io/mobfirst_fashionpage/index.html',
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
    'https://sergiowaters.github.io/company_site/index.html',
    //techinfo
    'Залит на pages.github.io. Латиница. "Рыбный" текст 100%.'
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
    'https://sergiowaters.github.io/resume/index.html',
    //techinfo
    'Адаптивная страница 375p+, залит на pages.github.io. Русский и Английский языки. Без "рыбного" текста.'
  ),
]
const projectsArrEnglish = [
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
    'https://sergiowaters.github.io/mobfirst_fashionpage/index.html',
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
    'https://sergiowaters.github.io/company_site/index.html',
    //techinfo
    'Lorem:) language. Fish-text 100%. Uploaded to pages.github.io.'
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
    'https://sergiowaters.github.io/resume/index.html',
    //techinfo
    'Adaptive page 375p+, Russian and English languages. Uploaded to pages.github.io.'
  ),
]
