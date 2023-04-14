import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-mint-9 text-black selection:bg-teal-300 selection:text-teal-900  dark:bg-sageDark-1 dark:text-mintDark-11 dark:selection:bg-teal-300 dark:selection:text-teal-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
