import { type NextPage } from 'next'
import Head from 'next/head'

import NavBar from '@components/navbar/navbar'

import Logo from '/public/svg/logo.svg'
import Mailbox from '/public/svg/mailbox.svg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Storybook and Nextjs Frontend Development | Pixel on Pixel</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="I'm a Storybook and Nextjs frontend developer, get in touch here." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <NavBar />
      <div className="grid h-screen grid-rows-[1fr_auto] gap-y-4">
        <main className="container flex max-w-lg flex-col items-center justify-center px-4">
          <Logo className="mb-8  fill-mint-10 stroke-black opacity-60 dark:fill-transparent dark:stroke-mintDark-11" />
          <h1 className="sr-only">Pixel on Pixel</h1>

          <div className="my-12 flex items-center">
            <p className=" text-xl lowercase leading-none sm:text-3xl">&gt; Hand crafted binary</p>
            <div className="ml-4 h-5 w-2 animate-pulse bg-black dark:bg-mintDark-11 sm:h-7 sm:w-3" />
          </div>

          <a href="mailto:hello@pixelonpixel.com">
            <Mailbox className="icon mx-auto fill-black dark:fill-mintDark-11" />
            <p className="">say hi!</p>
          </a>
        </main>

        <footer className="container p-4 text-center text-xs">
          © Copyright {new Date().getFullYear()} | Pixel on Pixel
        </footer>
      </div>
    </>
  )
}

export default Home
