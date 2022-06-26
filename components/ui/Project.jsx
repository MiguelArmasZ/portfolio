import Image from 'next/image'
import React from 'react'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/Projects.module.css'

export const Project = ({ ...project }) => {
  const { lang } = useMainContext()
  const { desktop, mobile, domain, description, href, cta } = project

  return (
    <li className={s.Project}>
      <div className={s.WrapPhotos}>
        <Image
          layout='responsive'
          className={s.Desktop}
          src={desktop}
          alt='version desktop'
        />
        <figure className={s.Mobile}>
          <Image
            layout='responsive'
            src={mobile}
            alt='version mobile'
          />
        </figure>
      </div>
      <div className={s.WrapInfo}>
        <h3 className={s.Domain}>{domain}</h3>
        <p className={s.Description}>{description[lang]}</p>
        <a
          target='_black'
          rel='noreferrer noopener'
          className={`${s.Cta} btn`}
          href={href}
        >
          {cta[lang]}
        </a>
      </div>
    </li>
  )
}
