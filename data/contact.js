import { socialContact } from './socialMedia'

const name = {
  label: {
    es: 'nombre',
    en: 'name'
  },
  type: 'text',
  name: 'name',
  id: 'name'
}

const phone = {
  label: {
    es: 'teléfono',
    en: 'phone'
  },
  type: 'tel',
  name: 'phone',
  id: 'phone'
}

const email = {
  label: {
    es: 'correo',
    en: 'email'
  },
  type: 'email',
  name: 'email',
  id: 'email'
}

const fields = [name, phone, email]

export const contactData = {
  heading: {
    es: 'tú no quieres solo una página web',
    en: "you don't want just a website"
  },
  subHeading: {
    es: 'tú quieres hacer crecer tu negocio',
    en: 'you want to grow your business'
  },
  text: {
    es: 'contáctame por cualquiera de estas vías, estaré encantado de ayudarte con tu proyecto.',
    en: 'contact me in any of these ways, I will be happy to help you with your project.'
  },
  text2: {
    es: 'si lo prefieres, rellena los campos y me pondré en contacto contigo.',
    en: 'if you prefer, fill in the fields and I will contact you.'
  },
  socialMedia: socialContact,
  fields,
  submit: {
    es: 'enviar',
    en: 'submit'
  }
}
