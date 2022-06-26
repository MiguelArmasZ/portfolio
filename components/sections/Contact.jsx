import React from 'react'
import { SectionLayout } from '../layouts'
import { Form, Heading, SocialIcon } from '../ui'
import s from '../../styles/components/Contact.module.css'
import { useForm, useMainContext } from '../../hooks'
import { contactData } from '../../data'

export const Contact = () => {
  const { lang } = useMainContext()
  const [form, handleChange, handleSubmit] = useForm({
    name: '',
    phone: '',
    email: ''
  })
  const {
    heading,
    subHeading,
    text,
    text2,
    socialMedia,
    fields,
    submit
  } = contactData

  return (
    <>
      <span id='contact'></span>
      <SectionLayout>
        <div className={`${s.Contact} content`}>
          <Heading class$='heading--long heading--contact'>
            {heading[lang]}
          </Heading>
          <p className={s.SubHeading}>{subHeading[lang]}</p>
        </div>

        <p className={s.Text}>{text[lang]}</p>
        <div className={s.Social}>
          {socialMedia.map(({ icon, href }, i) => (
            <SocialIcon key={i} icon={icon} href={href} />
          ))}
        </div>

        <p className={s.Text}>{text2[lang]}</p>
        <Form
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fields={fields}
          submit={submit}
        />
      </SectionLayout>
    </>
  )
}
