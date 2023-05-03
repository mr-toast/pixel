// TODO improve logo and add light flickering animations

import { Vimeo } from '~/components/vimeo'
import { twMerge } from 'tailwind-merge'
import Logo from '/public/svg/logo.svg'

type VideoHeroProps = {
  cms: SiteData
}

const classes = twMerge(
  'relative mx-auto flex h-[69vh] max-w-full items-center justify-center overflow-hidden px-6 md:h-[720px]',
  // :before gradient mask
  'before:absolute before:inset-x-0 before:top-0 before:z-10 before:block before:h-[128px] before:bg-gradient-to-b before:from-zinc-50 before:to-transparent dark:before:from-zinc-950',
  // :after gradient mask
  'after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:block after:h-[128px] after:bg-gradient-to-t after:from-zinc-50 after:to-transparent dark:after:from-zinc-950'
)

const vimeoClasses = twMerge(
  // positioning
  'absolute left-0 top-0 -z-10 h-full w-auto xl:h-auto xl:left-auto xl:w-full xl:max-w-7xl',
  // filters
  'bg-zinc-50 dark:bg-zinc-950 [&>*]:mix-blend-difference [&>*]:grayscale dark:[&>*]:mix-blend-lighten'
)

export function VideoHero(props: VideoHeroProps) {
  const { cms } = props
  return (
    <div className={classes}>
      <div className="w-full sm:w-4/5 md:w-1/2">
        <Logo className="mb-8 w-full fill-zinc-50 stroke-zinc-950 opacity-80 dark:fill-zinc-950 dark:stroke-zinc-50" />
        <h1 className="sr-only">{cms.site_title}</h1>
      </div>

      {cms.hero.vimeo.videoId && (
        <Vimeo
          videoId={cms.hero.vimeo.videoId}
          imageUrl={cms.hero.vimeo.imageUrl}
          isBackground={true}
          className={vimeoClasses}
        />
      )}
    </div>
  )
}
