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
  sliderPost,
  centerElementsPost,
  addIconsFAPost,
  clockPost,
  readMorePost
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
  'slider',
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

const centerElements = new CardBlog(
  'centrar-elementos',
  {
    es: '3 formas de centrar elementos con CSS',
    en: '3 ways to center elements with CSS'
  },
  {
    es: 'Aprende 3 sencillas formas de centrar elementos, tanto vertical como horizontalmente con CSS.',
    en: 'Learn 3 simple ways to center elements both vertically and horizontally with CSS.'
  },
  [stack.CSS],
  'violet',
  centerElementsPost
)

const addIconsFA = new CardBlog(
  'agregar-iconos',
  {
    es: 'Agrega iconos a tu aplicación de React',
    en: 'Add icons in your React App'
  },
  {
    es: 'Mira lo fácil que es agregar iconos a tu aplicación de React gracias a Font Awesome.',
    en: 'See how easy it is to add icons to your React application thanks to Font Awesome.'
  },
  [stack.REACT],
  'red',
  addIconsFAPost
)

const clock = new CardBlog(
  'reloj',
  {
    es: 'Creamos un reloj con JavaScript con solo 5 líneas de código',
    en: 'we create a clock with JavaScript use just five code lines'
  },
  {
    es: 'hay muchas formas de hacer un reloj con JS, pero aquí te muestro la más corta y fácil de implementar.',
    en: 'There are many ways to make a clock with JS, but here I show you the shortest and easiest to implement.'
  },
  [stack.JS],
  'yellow',
  clockPost
)

const readMore = new CardBlog(
  'leer-mas',
  {
    es: 'Cómo hacer un leer más con JS',
    en: 'How to make read more with JS'
  },
  {
    es: 'Con algunas líneas de código puedes crear esta función para tus aplicaciones.',
    en: 'With a few lines of code you can create this function for your applications.'
  },
  [stack.JS],
  'blue',
  readMorePost
)

export const posts = [
  readMore,
  clock,
  addIconsFA,
  centerElements,
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
