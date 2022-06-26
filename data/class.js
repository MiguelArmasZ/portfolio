/* eslint-disable space-before-function-paren */
export class Link {
  constructor(href, text, link) {
    this.href = href
    this.text = text
    this.link = link
  }
}

export class SocialMedia {
  constructor(href, icon) {
    this.href = href
    this.icon = icon
  }
}

export class Service {
  constructor(heading, description, icon, cta, href) {
    this.heading = heading
    this.description = description
    this.icon = icon
    this.cta = cta
    this.href = href
  }
}

export class Project {
  constructor(desktop, mobile, domain, description, href, cta) {
    this.desktop = desktop
    this.mobile = mobile
    this.domain = domain
    this.description = description
    this.href = href
    this.cta = cta
  }
}

export class Review {
  constructor(stars, description, logo, name, domain, href) {
    this.stars = stars
    this.description = description
    this.logo = logo
    this.name = name
    this.domain = domain
    this.href = href
  }
}
