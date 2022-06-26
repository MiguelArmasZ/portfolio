import { Review } from './'
import Grupohuevosdelucas from '../public/img/reviews/grupohuevosdelucas.png'
import Aritzyesther from '../public/img/reviews/aritzyesther.png'
import Dentalcosmeticsmile from '../public/img/reviews/dentalcosmeticsmile.png'
import Stevenmartillo from '../public/img/reviews/stevenmartillo.png'

const stars = [...Array(5)]
const grupohuevosdelucas = new Review(
  stars,
  {
    es: 'Queríamos una página web para usarla como una carta de presentación. Miguel cumplió por mucho con nuestras expectativas, nos gustó mucho el diseño y que cargara tan rápido.',
    en: 'We wanted a website to use as a letter of introduction. Miguel met our expectations by far, we really liked the design and that it loaded so fast.'
  },
  Grupohuevosdelucas,
  'javier de lucas',
  'grupohuevosdelucas.com',
  'https://grupohuevosdelucas.com/'
)

const aritzyesther = new Review(
  stars,
  {
    es: 'En un principio queríamos un blog, pero Miguel nos asesoró y nos explicó que para el objetivo que teníamos, lo más indicado era una landing page, para así mejorar nuestra captación de clientes. Estamos muy contentos con el resultado.',
    en: 'At first we wanted a blog, but Miguel advised us and explained to us that for the objective we had, the most suitable was a landing page, in order to improve our customer acquisition. We are very happy with the result.'
  },
  Aritzyesther,
  'aritz garcía',
  'aritzyesther.com',
  'https://www.aritzyesther.com/'
)

const dentalcosmeticsmile = new Review(
  stars,
  {
    es: 'Contraté a Miguel para crear una página web sencilla que sirviera de complemento para mis redes sociales. Estoy encantada con su trabajo, recomendable 100%.',
    en: 'I hired Miguel to create a simple website to complement my social networks. I am delighted with his work, 100% recommendable.'
  },
  Dentalcosmeticsmile,
  'anais',
  'dentalcosmeticsmile.com',
  'https://dentalcosmeticsmile.com/'
)

const stevenmartillo = new Review(
  stars,
  {
    es: 'Mi idea era crear un portfolio para poder mostrar mis trabajos como artista de efectos especiales. Me gustó mucho el poder actualizar yo mismo el contenido de mi web de una forma fácil e intuitiva. Gracias Miguel.',
    en: 'My idea was to create a portfolio to show my work as a special effects artist. I really liked the fact that I could update the content of my website myself in an easy and intuitive way. Thanks Miguel'
  },
  Stevenmartillo,
  'steven martillo',
  'stevenmartillo.com',
  'https://stevenmartillo.com/'
)

const reviews = [
  grupohuevosdelucas,
  aritzyesther,
  dentalcosmeticsmile,
  stevenmartillo
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export const reviewsData = {
  heading: {
    es: 'lo importante son los resultados',
    en: 'what matters are the results'
  },
  responsive,
  reviews
}
