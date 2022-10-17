import Global from '@/components/Global'
import type { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('hidden')
    }, 100)
  }, [])

  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
