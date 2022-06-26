import React from 'react'
import { Field, Feedback } from './'
import s from '../../styles/components/Form.module.css'
import { useMainContext } from '../../hooks'

export const Form = ({
  form,
  fields,
  submit,
  handleChange,
  handleSubmit
}) => {
  const { lang, feedback } = useMainContext()

  return (
    <form onSubmit={handleSubmit} className={`${s.Form} Form`}>
      {fields.map((field, i) => (
        <Field
          key={i}
          {...field}
          handleChange={handleChange}
          form={form}
        />
      ))}

      <Feedback feedback={feedback} />

      <button className={`${s.Submit}   btn`} type='submit'>
        {submit[lang]}
      </button>
    </form>
  )
}
