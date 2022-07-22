import { CardBlog } from './'
import {
  currencyFormatPost,
  firstLetterPost,
  wordCounterPost,
  jumpLinksPost,
  flashEffectPost,
  scrollToTopPost,
  countdownPost,
  gradientsPost,
  sliderPost
} from './posts'

import HTML from '../public/img/stack/html.svg'
import CSS from '../public/img/stack/css.svg'
import JS from '../public/img/stack/js.svg'
import REACT from '../public/img/stack/react.svg'
import NEXT from '../public/img/stack/next.svg'
import NODE from '../public/img/stack/node.svg'
import MONGO from '../public/img/stack/mongodb.svg'

const stack = {
  HTML,
  CSS,
  JS,
  REACT,
  NEXT,
  NODE,
  MONGO
}

const currencyFormat = new CardBlog(
  'formato-moneda',
  {
    es: 'dale un formato de moneda a valores númericos',
    en: 'give a currency format to numeric values'
  },
  {
    es: 'mira que fácil es hacer que un número tome un formato de moneda con JavaScript',
    en: 'see how easy it is to make a number take a currency format with JavaScript'
  },
  [stack.JS],
  'green',
  currencyFormatPost
)

const firstLetter = new CardBlog(
  'primera-letra',
  {
    es: 'aplica estilos a la primera letra de cada texto',
    en: 'apply styles to the first letter of each text'
  },
  {
    es: 'estilar la primera de cada párrafo es muy fácil gracias a este pseudoelemento',
    en: 'styling the first of each paragraph is very easy thanks to this pseudo-element'
  },
  [stack.CSS],
  'blue',
  firstLetterPost
)

const wordCounter = new CardBlog(
  'contador-de-palabras',
  {
    es: 'creamos un contador de palabras y caracteres',
    en: 'we create a word and character counter'
  },
  {
    es: 'hacer este contador es más fácil de lo que crees con unas cuantas líneas de JavaScript',
    en: 'making this counter is easier than you think with a few lines of JavaScript'
  },
  [stack.HTML, stack.CSS, stack.JS],
  'violet',
  wordCounterPost
)

const jumpLinks = new CardBlog(
  'jump-links',
  {
    es: 'añade jump links a tu aplicación de react',
    en: 'add jump links to your react application'
  },
  {
    es: 'te enseño como usar esta librería para que añadas jump links facilmente y en menos de un minuto',
    en: 'I show you how to use this library to add jump links easily and in less than a minute.'
  },
  [stack.REACT],
  'orange',
  jumpLinksPost
)

const flashEffect = new CardBlog(
  'efecto-destello',
  {
    es: 'efecto de destello para tus titulares',
    en: 'sparkle effect for your headlines'
  },
  {
    es: 'aprende a hacer este efecto tan original de una forma óptima, generando los elementos con JavaScript.',
    en: 'learn how to make this original effect in an optimal way, generating the elements with JavaScript.'
  },
  [stack.HTML, stack.CSS, stack.JS],
  'red',
  flashEffectPost
)

const scrollToTop = new CardBlog(
  'scroll-to-top',
  {
    es: 'volver arriba',
    en: 'scroll to top'
  },
  {
    es: 'Aprende cómo hacer un Scroll To Top. Muy fácil y con una animación suavizada para mejorar la experiencia de usuario.',
    en: 'Learn how to make a Scroll To Top. Very easy and with a smoothed animation to improve the user experience.'
  },
  [stack.JS],
  'rose',
  scrollToTopPost
)

const countdown = new CardBlog(
  'cuenta-atras',
  {
    es: 'cuenta atrás',
    en: 'countdown'
  },
  {
    es: 'vamos a hacer un cuenta atrás con JavaScript, que nos muestre los días, horas, minutos y segundos.',
    en: "let's make a countdown with JavaScript, that shows the days, hours, minutes and seconds.."
  },
  [stack.JS],
  'yellow',
  countdownPost
)
const gradients = new CardBlog(
  'degradados',
  {
    es: '3 tipos de degradados',
    en: '3 types of gradients'
  },
  {
    es: 'mira como crear degradados en CSS. Te enseño 3 de los muchos posibles degradados que se pueden hacer.',
    en: 'see how to create gradients in CSS. I show you 3 of the many possible gradients that you can make.'
  },
  [stack.CSS],
  'sky',
  gradientsPost
)

const slider = new CardBlog(
  'degradados',
  {
    es: 'creamos un slider solo con HTML y CSS',
    en: 'we create a slider just using HTML and CSS'
  },
  {
    es: 'Exacto, un slider automático sin la necesidad de usar JS. Entra y mira cómo.',
    en: 'Exactly, an automatic slider without the need to use JS. Enter and see how.'
  },
  [stack.HTML, stack.CSS],
  'aqua',
  sliderPost
)

export const posts = [
  slider,
  gradients,
  countdown,
  scrollToTop,
  flashEffect,
  jumpLinks,
  wordCounter,
  firstLetter,
  currencyFormat
]
