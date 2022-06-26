import React from 'react'
import Image from 'next/image'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/Reviews.module.css'
import { Icon } from './'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const Review = ({ ...review }) => {
  const { lang } = useMainContext()
  const { stars, description, logo, name, domain, href } = review

  return (
    <div className={`${s.Review} Review`}>
      <p className={s.Stars}>
        {stars.map((_, i) => (
          <span className={s.Icon} key={i}>
            <Icon icon={faStar} />
          </span>
        ))}
      </p>
      <p className={s.Description}>
        &quot;
        {description[lang]}&quot;
      </p>
      <div className={s.WrapCompany}>
        <p className={s.Name}>{name}</p>
        <Image
          className='Review-Logo'
          src={logo}
          width={75}
          height={75}
          alt='logo de la empresa'
        />
      </div>
      <a
        rel='noreferrer noopener'
        target='_blank'
        className={`${s.Link} Review-Link`}
        href={href}
      >
        {domain}
      </a>
    </div>
  )
}
