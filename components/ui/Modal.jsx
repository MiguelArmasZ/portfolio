/* eslint-disable space-before-function-paren */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/Modal.module.css'
import { Icon } from './'

export const Modal = () => {
  const { setModal } = useMainContext()

  function handleExit() {
    setModal(false)
  }
  return (
    <div className={`${s.Modal} fade`}>
      <span onClick={handleExit} className={s.Exit}>
        <Icon icon={faXmark} />
      </span>
      <p>contenido</p>
    </div>
  )
}
