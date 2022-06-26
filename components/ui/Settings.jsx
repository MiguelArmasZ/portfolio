/* eslint-disable space-before-function-paren */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useMainContext } from '../../hooks/useMainContext'
import s from '../../styles/components/Settings.module.css'

export const Settings = () => {
  const { lang, setLang, dark, setDark } = useMainContext()
  const [langAnimate, setLangAnimate] = useState(false)
  const path = '/img/icons/'

  function handleLang() {
    if (lang === 'es') setLang('en')
    if (lang === 'en') setLang('es')
    setLangAnimate(!langAnimate)

    setTimeout(() => {
      setLangAnimate(false)
    }, 1200)
  }

  function handleDark() {
    const body = document.querySelector('body')
    body.classList.toggle('light')
    setDark(!dark)
  }

  return (
    <div className={s.Settings}>
      <figure onClick={handleLang} className={s.Lang}>
        <img
          className={`${s.Planet} ${langAnimate ? s.active : ''}`}
          src={`${path}${dark ? 'lang_light.png' : 'lang_dark.png'}`}
          alt='cambiar idioma'
        />
        <img
          className={`${s.Flag} ${langAnimate ? s.active : ''}`}
          src={`${path}${lang === 'es' ? 'spn.png' : 'uk.png'}`}
          alt='bandera de pais'
        />
      </figure>
      <img
        onClick={handleDark}
        className={s.Mode}
        src={`${path}${dark ? 'sun.png' : 'moon.png'}`}
        alt='cambiar modo oscuro'
      />
    </div>
  )
}
