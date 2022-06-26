import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export const ProviderContext = ({ children }) => {
  const [lang, setLang] = useState('es')
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(true)
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({})
  const [feedback, setFeedback] = useState({})

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
        setFeedback
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
