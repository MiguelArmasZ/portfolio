import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from '../../styles/components/Header.module.css'
import { Navbar, BtnMenu, Settings } from './'

export const Header = () => {
  return (
    <header className={`${s.Header} Header`}>
      <div className={`content ${s.Wrap}`}>
        <Link href='/'>
          <a>
            <Image
              className={s.Logo}
              src='/img/mark/logo.png'
              alt='logo'
              width={50}
              height={60}
              priority={true}
            />
          </a>
        </Link>
        <Navbar />
        <Settings />
        <BtnMenu />
      </div>
    </header>
  )
}
