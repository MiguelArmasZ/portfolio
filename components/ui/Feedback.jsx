import React from 'react'
import { useMainContext } from '../../hooks'

export const Feedback = ({ feedback }) => {
  const { msg = { es: '', en: '' }, error, state } = feedback
  const { lang } = useMainContext()

  return (
    <p
      className={`${error ? 'error' : ''} ${
        state ? 'active' : ''
      } feedback`}
    >
      {msg[lang]}
    </p>
  )
}
