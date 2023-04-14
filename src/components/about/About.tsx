import Typist from 'react-typist-component'
import Logo from '/public/svg/logo.svg'

export function About({ cms }) {
  const Cursor = (
    <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-black leading-5 dark:bg-mintDark-11"></span>
  )

  return (
    <div className="mx-auto max-w-lg">
      <Logo className="mb-8  fill-mint-10 stroke-black opacity-60 dark:fill-transparent dark:stroke-mintDark-11" />
      <h1 className="sr-only">{cms.site_title}</h1>

      <div className="mx-auto mb-4 flex h-16 w-full gap-2 text-left sm:w-4/5">
        <span className="grow-0">&gt;</span>
        <div className="relative grow">
          <p className="absolute left-0 top-0" aria-hidden>
            <Typist startDelay={1000} typingDelay={70} cursor={Cursor} loop finishDelay={5000}>
              {cms.about.blurb}
            </Typist>
          </p>
          <span className="sr-only">{cms.about.blurb}</span>
        </div>
      </div>
    </div>
  )
}
