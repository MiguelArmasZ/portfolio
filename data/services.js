import { Service } from './'
import {
  faBullhorn,
  faDesktop,
  faTrophy
} from '@fortawesome/free-solid-svg-icons'

const cta = {
  es: 'más información',
  en: 'more info'
}

const websites = new Service(
  {
    es: 'páginas web',
    en: 'websites'
  },
  {
    es: 'crearemos tu sitio web con un diseño personalizado y con una estrategia pensada para conseguir el objetivo que te has propuesto, ya sea Obteber Ventas, Aumentar Suscriptores, Reforzar tu Marca o incluso algo tan básico como mostrar los servicios que ofreces.',
    en: 'we will create your website with a custom design and a strategy designed to achieve the goal you have set for yourself, whether it is to achieve sales, increase subscribers, strengthen your brand or even something as basic as showing the services you offer.'
  },
  faDesktop,
  cta,
  'https://api.whatsapp.com/send?phone=34661082338&text=Hola%20Miguel,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20la%20creaci%C3%B3n%20de%20P%C3%A1ginas%20Web.%20Un%20saludo'
)

const seo = new Service(
  {
    es: 'posicionamiento',
    en: 'positioning'
  },
  {
    es: 'tener un buen posicionamiento significa aparecer en las búsquedas que hacen tus potenciales clientes en Google, lo que se traduce en un tráfico a tu web GRATIS y de alta CALIDAD ¿Por qué? Simple, esas personas te están buscando a TÍ, y no al revés.',
    en: 'having a good positioning means appearing in the searches that your potential clients do in Google, which translates into FREE and high QUALITY traffic to your website. Why? Simple, those people are looking for YOU, not the other way around.'
  },
  faTrophy,
  cta,
  'https://api.whatsapp.com/send?phone=34661082338&text=Hola%20Miguel,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20SEO.%20Un%20saludo'
)

const campañas = new Service(
  {
    es: 'campañas',
    en: 'campaigns'
  },
  {
    es: 'una campaña de publicidad sirve para darte un buen retorno a corto y medio plazo, aumentas tu exposición y te ayuda a consolidar tu marca. Sin mencionar que aumentarás el tráfico de tu web, lo cual tiene un impacto positivo para el posicionamiento.',
    en: 'an advertising campaign serves to give you a good return in the short and medium term, increases your exposure and helps you consolidate your brand. Not to mention that you will increase traffic to your website, which has a positive impact on your SEO.'
  },
  faBullhorn,
  cta,
  'https://api.whatsapp.com/send?phone=34661082338&text=Hola%20Miguel,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20las%20Campa%C3%B1as%20Publicitarias.%20Un%20saludo'
)

const services = [seo, websites, campañas]

export const servicesData = {
  heading: {
    es: 'servicios',
    en: 'services'
  },
  services
}
