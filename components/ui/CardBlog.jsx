import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMainContext } from '../../hooks'
import s from '../../styles/components/CardBlog.module.css'

export const CardBlog = ({ ...card }) => {
  const { lang } = useMainContext()
  const { href, title, description, stack, bg } = card

  return (
    <Link href={`/blog/${href}`}>
      <li className={`${s.Card} ${bg}`}>
        <h2 className={s.Heading}>{title[lang]}</h2>
        <p>{description[lang]}</p>

        <div className={s.WrapStacked}>
          {stack.map((item, i) => {
            const prename = item.src.split('/').at(-1)
            const [name] = prename.split('.')

            return (
              <span className={`${s.ItemStack} ${name}`} key={i}>
                <Image
                  height={40}
                  width={40}
                  src={item}
                  alt={`logo de ${item}`}
                  priority
                />
              </span>
            )
          })}
        </div>
      </li>
    </Link>
  )
}
