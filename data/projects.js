import { Project } from './'
import GrupohuevosdelucasD from '../public/img/projects/grupohuevosdelucas_desktop.png'
import GrupohuevosdelucasM from '../public/img/projects/grupohuevosdelucas_mobile.png'

import AritzyestherD from '../public/img/projects/aritzyesther_desktop.png'
import AritzyestherM from '../public/img/projects/aritzyesther_mobile.png'

import DentalcosmeticsmileD from '../public/img/projects/dentalcosmeticsmile_desktop.png'
import DentalcosmeticsmileM from '../public/img/projects/dentalcosmeticsmile_mobile.png'

const cta = {
  es: 'visitar sitio',
  en: 'visit site'
}

const grupohuevosdelucas = new Project(
  GrupohuevosdelucasD,
  GrupohuevosdelucasM,
  'grupohuevosdelucas.com',
  {
    es: 'Una de las empresas más representativas del sector avícola en España, necesitaban un sitio web multiidioma que reflejara todos los servicios y productos que pueden ofrecer como marca, tanto a nivel nacional como internacional.',
    en: 'One of the most representative companies in the poultry sector in Spain, needed a multi-language website that reflects all the services and products they can offer as a brand, both nationally and internationally.'
  },
  'https://grupohuevosdelucas.com/',
  cta
)
const aritzyesther = new Project(
  AritzyestherD,
  AritzyestherM,
  'aritzyesther.com',
  {
    es: 'Aritz y Esther son una pareja de emprendedores del sector deportivo y la nutrición, su sitio tiene el objetivo de ayudar en la captación de potenciales clientes y de mostrar la filosofía que siguen para obtener sus resultados.',
    en: 'Aritz and Esther are a couple of entrepreneurs in the sports and nutrition sector, their site aims to help in attracting potential customers and to show the philosophy they follow to get their results.'
  },
  'https://www.aritzyesther.com/',
  cta
)
const dentalcosmeticsmile = new Project(
  DentalcosmeticsmileD,
  DentalcosmeticsmileM,
  'dentalcosmeticsmile.com',
  {
    es: 'Una clínica especializada en el "Diseño de sonrisa" con carillas de porcelana. Necesitaban una web para mostrar sus servicios, los testimonios de sus clientes y aumentar su presencia en internet para tener mayor alcance.',
    en: 'A clinic specialized in "Smile Design" with porcelain veneers. They needed a website to showcase their services, customer testimonials and increase their online presence to have a wider reach.'
  },
  'https://dentalcosmeticsmile.com/',
  cta
)

const projects = [
  grupohuevosdelucas,
  aritzyesther,
  dentalcosmeticsmile
]

export const projectsData = {
  heading: {
    es: 'proyectos',
    en: 'projects'
  },
  projects
}
