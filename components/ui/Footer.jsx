import Image from 'next/image'
import React from 'react'
import s from '../../styles/components/Footer.module.css'
import Logo from '../../public/img/mark/logo.png'
import { SocialIcon } from './'
import { socialFooter } from '../../data'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={s.Footer}>
      <div className={`${s.Wrap} content Footer-Wrap`}>
        <Image
          className={s.Logo}
          src={Logo}
          width={100}
          height={100}
          alt='logo de mikecode'
        />
        <div>
          <p className={s.Name}>mikecode.dev &copy; {year}</p>
          <div className={s.Social}>
            {socialFooter.map(({ icon, href }, i) => (
              <SocialIcon key={i} icon={icon} href={href} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
