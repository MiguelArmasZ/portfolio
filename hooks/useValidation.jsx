import { useFeedback } from './'

export const useValidation = () => {
  const handleFeedback = useFeedback()

  const validations = {
    nameAndEmailRequired: (name, email) => {
      if ([name, email].includes('')) {
        handleFeedback(true, {
          es: 'el nombre y el correo son obligatorios',
          en: 'name and e-mail are required'
        })

        return true
      }
    },

    nameToShort: (name) => {
      if (name.length < 2) {
        handleFeedback(true, {
          es: 'el nombre es demasiado corto',
          en: 'the name is too short'
        })
        return true
      }
    },

    validationEmail: (email) => {
      const er =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!er.test(email)) {
        handleFeedback(true, {
          es: 'el email no es válido',
          en: 'the email is invalid'
        })
        return true
      }
    },

    validationPhone: (phone) => {
      const er = /^\d*$/
      if (!er.test(phone)) {
        handleFeedback(true, {
          es: 'el teléfono no es correcto',
          en: 'the phone is not correct'
        })
        return true
      }
    }
  }

  return validations
}
