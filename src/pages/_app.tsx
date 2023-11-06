import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald } from 'next/font/google'
import Head from 'next/head'

const oswald = Oswald({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={oswald.className}>
      <Head>
        <title>Efficiency Service</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
