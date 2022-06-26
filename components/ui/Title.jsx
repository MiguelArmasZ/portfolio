import React, { useState } from 'react'
import s from '../../styles/components/Above.module.css'

const name = 'miguel armas'
const arrayName = name.split('')

export const Title = () => {
  const [css, setCss] = useState(false)

  setTimeout(() => {
    setCss(true)
  }, 3500)

  return (
    <h1 className={`${s.Title} Title ${css ? 'title-gradient' : ''}`}>
      {arrayName.map((letter, i) => (
        <span
          style={{
            animationDelay: `${i * 0.15 + 1}s`
          }}
          className='flash'
          key={i}
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}
