import Image from 'next/image'
import React from 'react'
import { aboveData } from '../../data'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/Above.module.css'
import { SocialIcon, Text, Title } from '../ui'

export const Above = () => {
  const { lang } = useMainContext()
  const { tagline, slogan, socialMedia } = aboveData

  return (
    <section className={`${s.Above} content`}>
      <div className={s.WrapText}>
        <Title />
        <Text class$={`${s.Tagline} Tagline`}>{tagline[lang]}</Text>
        <Text class$={s.Slogan}>{slogan[lang]}</Text>
      </div>
      <div className={s.WrapPhoto}>
        <Image
          className={s.Photo}
          width={200}
          height={200}
          layout='responsive'
          src='/img/mark/me_profile.jpg'
          alt='foto de perfíl'
          priority={true}
        />
        <div className={s.Social}>
          {socialMedia.map(({ icon, href }, i) => (
            <SocialIcon key={i} icon={icon} href={href} />
          ))}
        </div>
      </div>
    </section>
  )
}
