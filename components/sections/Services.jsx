import React from 'react'
import { servicesData } from '../../data/services'
import { useMainContext } from '../../hooks'
import { SectionLayout } from '../layouts'
import { CardService, Heading } from '../ui'
import s from '../../styles/components/Services.module.css'

export const Services = () => {
  const { lang } = useMainContext()
  const { heading, services } = servicesData
  return (
    <>
      <span id='services'></span>
      <SectionLayout>
        <Heading>{heading[lang]}</Heading>
        <ul className={s.Services}>
          {services.map((service, i) => (
            <CardService key={i} {...service} />
          ))}
        </ul>
      </SectionLayout>
    </>
  )
}
