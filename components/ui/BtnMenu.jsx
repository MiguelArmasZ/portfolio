/* eslint-disable space-before-function-paren */
import React from 'react'
import { useMainContext } from '../../hooks/useMainContext'
import s from '../../styles/components/BtnMenu.module.css'

export const BtnMenu = () => {
  const { menu, setMenu } = useMainContext()

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <button
      onClick={handleMenu}
      className={`${s.BtnMenu} ${menu ? s.active : ''} BtnMenu`}
    >
      <span className={s.Line}></span>
      <span className={s.Line}></span>
      <span className={s.Line}></span>
    </button>
  )
}
