




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
  getTotalDate() {
    totalDate = endDate - startDate;
  }
}

const jobList = [

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

const educationList = [
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
]
