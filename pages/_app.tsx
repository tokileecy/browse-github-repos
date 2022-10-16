import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('hidden')
    }, 100)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
