/* eslint-disable space-before-function-paren */
import emailjs from '@emailjs/browser'

export const useSendEmail = () => {
  function sendEmail(objectSend) {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        objectSend,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((result) => result)
      .catch((err) => console.error(err))
  }

  return sendEmail
}
