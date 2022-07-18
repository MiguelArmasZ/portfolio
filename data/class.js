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
export class CardBlog {
  constructor(href, title, description, stack, bg, post) {
    this.href = href
    this.title = title
    this.description = description
    this.stack = stack
    this.bg = bg
    this.post = post
  }
}

export class Post {
  constructor(title, iframe, description, repo, code, linksText) {
    this.title = title
    this.iframe = iframe
    this.description = description
    this.repo = repo
    this.code = code
    this.linksText = linksText
  }
}
