import { forwardRef } from 'react'
import { Image } from '~/components/image'
import { Link } from '~/components/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Typist } from '~/components/typist'
// import backgroundTexture from '/public/images/background-texture-3.jpg'

type HeroWithSplitProps = {
  id: string
  cms: SiteData
}

export const HeroWithSplit = forwardRef<HTMLDivElement, HeroWithSplitProps>((props, ref) => {
  const { cms, id } = props
  return (
    <div id={id} className="relative isolate overflow-hidden" ref={ref}>
      {/* NOTE background artwork */}
      {/* <Image
        src={backgroundTexture.src}
        alt=""
        role="presentation"
        className="dark: optacity-25 absolute inset-0 -z-10 h-full w-full -scale-100 object-cover object-center opacity-30 grayscale dark:invert"
        height={864}
        width={1376}
      /> */}
      {/* <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-zinc-950/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-800/25"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-950/25 dark:fill-zinc-800/25">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>

      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div> */}

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pb-40 lg:pt-20">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="sm:mt-32 lg:mt-16">
            <Typist withPrompt>{cms.introduction.badge}</Typist>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">{cms.introduction.heading}</h1>
          <p className="mt-6 text-lg  leading-8 text-zinc-700 dark:text-zinc-50">{cms.introduction.body}</p>

          <Link
            href={'#'}
            className="mt-6 inline-flex gap-3 rounded-full bg-zinc-300 px-3 py-1 text-sm font-semibold leading-6 text-zinc-700 ring-1 ring-inset ring-zinc-700 dark:bg-zinc-500/10 dark:text-zinc-400 dark:ring-zinc-500/20"
          >
            {cms.introduction.button.label}
            <div className="-rotate-90">
              <ChevronDownIcon className="h-5 w-5 animate-bounce" aria-hidden="true" />
            </div>
          </Link>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src={cms.introduction.imageUrl}
              alt=""
              width={2432}
              height={1442}
              className="rounded-md bg-zinc-50/5 shadow-2xl ring-1 ring-zinc-50/10 [&>img]:w-[76rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
})
