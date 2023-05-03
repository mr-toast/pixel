import { type AppType } from 'next/dist/shared/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import { Cutive_Mono } from 'next/font/google'

const cutiveMono = Cutive_Mono({
  variable: '--font-cutive-mono',
  weight: '400',
  subsets: ['latin'],
  preload: true,
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <div className={`${cutiveMono.className}`}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
