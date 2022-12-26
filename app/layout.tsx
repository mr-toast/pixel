import './dist.css'

import { Cutive_Mono } from '@next/font/google'
// import localFont from '@next/font/local'

const cutiveMono = Cutive_Mono({
  variable: '--font-cutive-mono',
  weight: '400',
  subsets: ['latin'],
})

// const curfel = localFont({
//   src: './fonts/curfel.woff2',
//   weight: '400',
// })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-primary rx-text-slate-1 ${cutiveMono.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
