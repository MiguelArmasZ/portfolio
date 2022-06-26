import React from 'react'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/CardService.module.css'
import { Icon } from './'

export const CardService = ({ ...service }) => {
  const { lang } = useMainContext()
  const { heading, description, icon, cta, href } = service

  return (
    <li className={`${s.Service} Card-Service`}>
      <h3 className={`${s.Heading} Card-Heading`}>{heading[lang]}</h3>
      <p className={s.Description}>{description[lang]}</p>

      <span className={`${s.Icon} Card-Icon`}>
        <Icon icon={icon} />
      </span>
      <a
        target='_black'
        rel='noreferrer noopener'
        className={`${s.Cta} btn`}
        href={href}
      >
        {cta[lang]}
      </a>
    </li>
  )
}
