import { forwardRef } from 'react'
import Typist from 'react-typist-component'
import Logo from '/public/svg/logo.svg'
import { Vimeo } from '~/components/vimeo'
import { twMerge } from 'tailwind-merge'

type AboutProps = {
  cms: any // Replace 'any' with the correct type for 'cms'
}

const classes = twMerge(
  'relative mx-auto flex h-[69vh] max-w-full items-center justify-center overflow-hidden px-6 md:h-[720px]',
  // :before gradient mask
  'before:absolute before:inset-x-0 before:top-0 before:z-10 before:block before:h-[128px] before:bg-gradient-to-b before:from-mintDark-9 before:to-transparent dark:before:from-sageDark-1',
  // :after gradient mask
  'after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:block after:h-[128px] after:bg-gradient-to-t after:from-mintDark-9 after:to-transparent dark:after:from-sageDark-1'
)

const Cursor = <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-black leading-5 dark:bg-mintDark-11"></span>

export const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  const { cms } = props
  return (
    <div className={classes} ref={ref}>
      <div className="w-full sm:w-4/5 md:w-1/2">
        <Logo className="mb-8 w-full fill-mint-10/70 stroke-black dark:fill-sageDark-1/70 dark:stroke-mintDark-11" />
        <h1 className="sr-only">{cms.site_title}</h1>
        <div className="mb-4 flex h-16 w-full gap-2 text-left">
          <span className="grow-0">&gt;</span>
          <div className="relative grow">
            <p className="absolute left-0 top-0 text-xl" aria-hidden>
              <Typist startDelay={1000} typingDelay={70} cursor={Cursor} loop finishDelay={5000}>
                {cms.about.blurb}
              </Typist>
            </p>
            <span className="sr-only">{cms.about.blurb}</span>
          </div>
        </div>
      </div>

      <Vimeo
        id={cms.video[0].id}
        isBackground={true}
        className="absolute left-0 top-0 -z-10 h-full w-auto bg-mintDark-11 opacity-30 dark:bg-sageDark-1 dark:opacity-60 xl:h-auto xl:w-full [&>iframe]:mix-blend-luminosity dark:[&>iframe]:mix-blend-lighten dark:[&>iframe]:grayscale"
      />
    </div>
  )
})
