/* eslint-disable space-before-function-paren */
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { whyData } from '../../data'
import { useMainContext } from '../../hooks'
import { Heading, Icon, Modal } from '../ui'
import s from '../../styles/components/Why.module.css'

export const Why = () => {
  const { lang, modal, setModal } = useMainContext()
  const { heading } = whyData

  function handlePlay() {
    setModal(true)
  }

  return (
    <section className={s.Why}>
      <Heading class$='heading--long content'>
        {heading[lang]}
      </Heading>
      <div className={s.VideoMask}>
        <video
          className={s.Video}
          autoPlay
          loop
          playsInline
          muted
          src='/video/wolf.mp4'
          type='video/mp4'
        ></video>
        <span onClick={handlePlay} className={s.Play}>
          <Icon icon={faPlay} />
        </span>
      </div>
      {modal && <Modal />}
    </section>
  )
}
