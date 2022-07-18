import React, { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const MainContext = createContext()

export const ProviderContext = ({ children }) => {
  const [lang, setLang] = useState('es')
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(true)
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({})
  const [feedback, setFeedback] = useState({})
  const [homeNavbar, setHomeNavbar] = useState(false)

  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.includes('/blog')) {
      setHomeNavbar(true)
    } else {
      setHomeNavbar(false)
    }
  }, [asPath])

  return (
    <MainContext.Provider
      value={{
        lang,
        setLang,
        menu,
        setMenu,
        dark,
        setDark,
        modal,
        setModal,
        modalInfo,
        setModalInfo,
        feedback,
        setFeedback,
        homeNavbar,
        setHomeNavbar
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
