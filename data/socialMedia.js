import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faTelegram,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { SocialMedia } from './'

const linkedin = new SocialMedia(
  'https://www.linkedin.com/in/mikecode/',
  faLinkedin
)
const instagram = new SocialMedia(
  'https://www.instagram.com/mikecode.dev/',
  faInstagram
)
const github = new SocialMedia(
  'https://github.com/MiguelArmasZ?tab=repositories',
  faGithub
)
const whatsapp = new SocialMedia(
  'https://api.whatsapp.com/send?phone=34661082338&text=Hola%20Miguel,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.%20Un%20saludo',
  faWhatsapp
)

const youtube = new SocialMedia(
  'https://www.youtube.com/channel/UC4f1t6u3fUoXydIoIhNOS7Q/featured',
  faYoutube
)

const telegram = new SocialMedia('https://t.me/maaz_dev', faTelegram)
const call = new SocialMedia('tel:+34661082338', faPhone)

export const socialAbove = [telegram, instagram, whatsapp]
export const socialContact = [telegram, call, whatsapp]
export const socialFooter = [linkedin, instagram, github, youtube]
