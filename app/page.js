import Logo from '../public/svg/logo.svg'
import Mailbox from '../public/svg/mailbox.svg'

export default function Home() {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] gap-y-4">
      <main className="container flex max-w-lg flex-col items-center justify-center px-4">
        <Logo className="mb-8 w-full" />
        <h1 className="sr-only">Pixel on Pixel</h1>

        <div className="my-12 flex items-center">
          <p className=" text-xl lowercase leading-none sm:text-3xl">&gt; Hand crafted binary</p>
          <div className="ml-4 h-5 w-2 animate-pulse rx-bg-cyan-7 sm:h-7 sm:w-3" />
        </div>

        <a href="mailto:hello@pixelonpixel.com">
          <Mailbox className="icon mx-auto" />
          <p className="">say hi!</p>
        </a>
      </main>

      <footer className="container mx-auto p-4 text-center text-xs">
        © Copyright {new Date().getFullYear()} | Pixel on Pixel
      </footer>
    </div>
  )
}
