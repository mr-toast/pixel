import { type AppType } from 'next/dist/shared/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

import '~/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
			<Component {...pageProps} />
			<Analytics />
    </ThemeProvider>
  )
}

export default MyApp
