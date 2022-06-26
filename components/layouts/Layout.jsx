import Head from 'next/head'
import React from 'react'
import { ProviderContext } from '../../context/MainContext'
import { Footer, Header } from '../ui'

export const Layout = ({ children, title }) => {
  return (
    <ProviderContext>
      <Head>
        <title>{title}</title>
        <meta name='google' content='notranslate' />
      </Head>
      <Header />
      {children}
      <Footer />
    </ProviderContext>
  )
}
