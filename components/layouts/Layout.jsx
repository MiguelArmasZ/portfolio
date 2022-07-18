import Head from 'next/head'
import React from 'react'
import { Footer, Header } from '../ui'

const origin =
  typeof window === 'undefined' ? '' : window.location.origin

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='▶ Maximiza los beneficios de tu negocio con una buena presencia digital'
        />
        <meta name='author' content='Miguel Armas' />
        <meta
          name='keywords'
          content='desarrollo web, crear una pagina web, cuanto cuesta una pagina web, paginas web en pamplona'
        />
        <meta
          property='og:title'
          content='Miguel Armas - Desarrollador Web'
        />
        <meta
          property='og:description'
          content='Maximiza los beneficios de tu negocio con una buena presencia digital'
        />
        <meta
          property='og:image'
          content={`${origin}/img/mark/cover.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${origin}/img/mark/logo.png`}
        />
        <meta
          name='google-site-verification'
          content='Ns3n6eufnFHpwlhnaFme1GbdsjJ3D2MTLponKOf9su4'
        />
        <meta name='google' content='notranslate' />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
