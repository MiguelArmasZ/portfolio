import React from 'react'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/Form.module.css'

export const Field = ({ handleChange, form, ...field }) => {
  const { label, type, name, id } = field
  const { lang } = useMainContext()

  return (
    <div className={s.Field}>
      <label className={`${s.Label} Label`} htmlFor={id}>
        {label[lang]}
      </label>
      <input
        onChange={handleChange}
        className={`${s.Input} Input`}
        type={type}
        name={name}
        id={id}
        value={form[name]}
      />
    </div>
  )
}
