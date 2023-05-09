export class XperienceCompany {
  constructor(
    title,
    position,
    startDate,
    endDate,
    totalDate,
    responsibilities,
    city
  ) {
    this.title = title;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalDate = totalDate;
    this.responsibilities = responsibilities;
    this.city = city;
  }
}
export class Project {
  constructor(title, description, steck, imgUrl, link, techInfo) {
    this.title = title;
    this.description = description;
    this.steck = steck;
    this.imgUrl = imgUrl;
    this.link = link;
    this.techInfo = techInfo;
  }
}
