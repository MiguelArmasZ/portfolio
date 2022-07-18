/* eslint-disable space-before-function-paren */
import { ProviderContext } from '../context/MainContext'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderContext>
      <Component {...pageProps} />
    </ProviderContext>
  )
}

export default MyApp
