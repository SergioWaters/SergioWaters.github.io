import { XperienceCompany } from './classes.js'

export const educationArrRussian = [
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
export const educationArrEnglish = [
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

export const education = {
  eng: educationArrEnglish,
  rus: educationArrRussian
};