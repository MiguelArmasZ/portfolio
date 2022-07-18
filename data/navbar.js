import { Link } from './'

const sites = new Link(
  'projects',
  {
    es: 'sitios',
    en: 'sites'
  },
  false
)
const services = new Link(
  'services',
  {
    es: 'servicios',
    en: 'services'
  },
  false
)
const reviews = new Link(
  'reviews',
  {
    es: 'reseñas',
    en: 'reviews'
  },
  false
)
const blog = new Link(
  '/blog',
  {
    es: 'blog',
    en: 'blog'
  },
  true
)
const contact = new Link(
  'contact',
  {
    es: 'hablémos',
    en: "let's talk"
  },
  false
)

export const navbarData = {
  links: [sites, services, reviews, contact, blog]
}
