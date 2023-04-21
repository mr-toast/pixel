import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-zinc-50 text-zinc-950 selection:bg-zinc-300  selection:text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 dark:selection:bg-zinc-300 dark:selection:text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
