/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable multiline-ternary */
import React from 'react'
import Link from 'next/link'
import { navbarData } from '../../data'
import { useMainContext } from '../../hooks'
import { Link as JumpLink } from 'react-scroll'
import s from '../../styles/components/Navbar.module.css'

export const Navbar = () => {
  const { lang, menu, setMenu, homeNavbar } = useMainContext()
  const { links } = navbarData

  function handleMenu() {
    setMenu(false)
  }

  return (
    <nav
      className={`${s.Navbar} ${menu ? s.active : ''} ${
        homeNavbar ? s.NavbarHome : ''
      } Navbar`}
    >
      {!homeNavbar
        ? links.map(({ href, text, link }, i) => {
            return !link ? (
              <JumpLink
                onClick={handleMenu}
                activeClass='active'
                smooth
                duration={1000}
                className={`${s.Link} Link`}
                key={text[lang]}
                to={href}
              >
                {text[lang]}
              </JumpLink>
            ) : (
              <Link key={text[lang]} href={href}>
                <a onClick={handleMenu} className={`${s.Link} Link`}>
                  {text[lang]}
                </a>
              </Link>
            )
          })
        : links.map(({ href, text }, i) => {
            return (
              <Link key={text[lang]} href={`/#${href}`}>
                <a onClick={handleMenu} className={`${s.Link} Link`}>
                  {text[lang]}
                </a>
              </Link>
            )
          })}
    </nav>
  )
}
