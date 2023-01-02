import { type NextPage } from 'next'
import Head from 'next/head'
import Typist from 'react-typist-component'
import NavBar from '@components/navbar/navbar'

import Logo from '/public/svg/logo.svg'
import Mailbox from '/public/svg/mailbox.svg'
import MailboxFlag from '/public/svg/mailbox-flag.svg'

const Home: NextPage = () => {
  const Cursor = (
    <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-black leading-5 dark:bg-mintDark-11"></span>
  )

  const content = {
    title: 'Pixel on Pixel',
    blurb: "HI, I'm a Nextjs and Storybook frontend developer. You can contact me here.",
    mailLabel: 'message',
  }

  return (
    <>
      <Head>
        <title>Nextjs, Frontend Development and Storybook | Pixel on Pixel</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="I'm a Nextjs, Storybook developer, get in touch here." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-y-4">
        <NavBar />
        <main className="container flex max-w-lg flex-col items-center justify-center px-4">
          <Logo className="mb-8  fill-mint-10 stroke-black opacity-60 dark:fill-transparent dark:stroke-mintDark-11" />
          <h1 className="sr-only">{content.title}</h1>

          <div className="mx-auto mb-4 flex h-16 w-full gap-2 text-left sm:w-4/5">
            <span className="grow-0">&gt;</span>
            <div className="relative grow">
              <p className="absolute top-0 left-0" aria-hidden>
                <Typist startDelay={1000} typingDelay={70} cursor={Cursor} loop finishDelay={5000}>
                  {content.blurb}
                </Typist>
              </p>
              <span className="sr-only">{content.blurb}</span>
            </div>
          </div>

          <a href="mailto:hello@pixelonpixel.com">
            <div className="group relative mx-auto mb-2 h-16 w-16">
              <Mailbox className="icon absolute stroke-black dark:stroke-mintDark-11" />
              <MailboxFlag className="icon absolute fill-transparent stroke-black  transition  group-hover:-scale-x-100 group-hover:fill-mint-8 dark:stroke-mintDark-11 dark:stroke-mintDark-11  dark:group-hover:fill-mintDark-8" />
            </div>
            <p className="text-center text-xs">{content.mailLabel}</p>
          </a>
        </main>

        <footer className="container p-4 text-center text-xs">
          © Copyright {new Date().getFullYear()} | {content.title}
        </footer>
      </div>
    </>
  )
}

export default Home
