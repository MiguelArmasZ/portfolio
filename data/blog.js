import { CardBlog } from './'
import {
  currencyFormatPost,
  firstLetterPost,
  wordCounterPost,
  jumpLinksPost,
  flashEffectPost
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
  'currency-format',
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
  'first-letter',
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
  'word-counter',
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
  'flash-effect',
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

export const posts = [
  currencyFormat,
  firstLetter,
  wordCounter,
  jumpLinks,
  flashEffect
]
