/* eslint-disable space-before-function-paren */
import { useState } from 'react'
import { useValidation, useFeedback, useSendEmail } from './'

export const useForm = (init) => {
  const [form, setForm] = useState(init)
  const {
    nameAndEmailRequired,
    nameToShort,
    validationEmail,
    validationPhone
  } = useValidation()
  const handleFeedback = useFeedback()
  const sendEmail = useSendEmail()

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (nameAndEmailRequired(form.name, form.email)) return
    if (nameToShort(form.name)) return
    if (validationEmail(form.email)) return
    if (validationPhone(form.phone)) return

    sendEmail(form)

    handleFeedback(false, {
      es: 'enviado correctamente',
      en: 'successfully sent'
    })
    setForm(init)
  }

  return [form, handleChange, handleSubmit]
}
