import { useResponsive } from 'ahooks'
import { Fragment, useState } from 'react'
import parse from 'html-react-parser'
import { Dialog, Disclosure, Transition} from '@headlessui/react'
import { useTheme } from 'next-themes'
import { Image } from '~/components/image'
import { Button } from '~/components/button'
import { Link } from '~/components/link'
import { Typist } from '~/components/typist'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Gauge as GaugeIcon } from 'lucide-react'
import GithubIcon from '/public/svg/icon/github.svg'
import AlgoliaIcon from '/public/svg/stack/algolia.svg'
import CmsIcon from '/public/svg/stack/cms.svg'
import DockerIcon from '/public/svg/stack/docker.svg'
import GatsbyIcon from '/public/svg/stack/gatsby.svg'
import JavascriptIcon from '/public/svg/stack/javascript.svg'
import PlanetScaleIcon from '/public/svg/stack/planetscale.svg'
import PrismaIcon from '/public/svg/stack/prisma.svg'
import RadixIcon from '/public/svg/stack/radix.svg'
import ReactIcon from '/public/svg/stack/react.svg'
import ReactMailIcon from '/public/svg/stack/react-mail.svg'
import ShopifyIcon from '/public/svg/stack/shopify.svg'
import SketchIcon from '/public/svg/stack/sketch.svg'
import StitchesIcon from '/public/svg/stack/stitches.svg'
import StorybookIcon from '/public/svg/stack/storybook.svg'
import TailwindIcon from '/public/svg/stack/tailwind.svg'
import TypescriptIcon from '/public/svg/stack/typescript.svg'
import WordpressIcon from '/public/svg/stack/wordpress.svg'

type FeaturedWorkProps = {
  featuredWork: FeaturedWork
}

const stackIconsMap = {
  algolia: AlgoliaIcon,
  cms: CmsIcon,
  docker: DockerIcon,
  gatsby: GatsbyIcon,
  javascript: JavascriptIcon,
  planetscale: PlanetScaleIcon,
  prisma: PrismaIcon,
  radix: RadixIcon,
  react: ReactIcon,
  reactMail: ReactMailIcon,
  shopify: ShopifyIcon,
  sketch: SketchIcon,
  stitches: StitchesIcon,
  storybook: StorybookIcon,
  tailwind: TailwindIcon,
  typescript: TypescriptIcon,
  wordpress: WordpressIcon,
}

export function FeaturedWork({ featuredWork }: FeaturedWorkProps) {
  const [isOpen, setIsOpen] = useState(false)

  const responsive = useResponsive()
  const { theme } = useTheme()

  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7">
                <Typist withPrompt>{featuredWork.header}</Typist>
              </h2>

              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{featuredWork.title}</p>
              <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                {parse(featuredWork.description)}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <p className="w-full">Built with:</p>
                {featuredWork.stack?.map((item: StackIcons) => {
                  const Icon = stackIconsMap[item]
                  return <Icon key={item} className="h-12 w-12" aria-hidden="true" />
                })}
              </div>

              <div className="mt-8">
                <Button onClick={() => setIsOpen(true)}>{featuredWork.button.label}</Button>

                <FeaturedWorkGallery
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  featuredWork={featuredWork}
                  theme={theme}
                  responsive={responsive}
                />
              </div>
            </div>
          </div>
          <Image
            src={featuredWork.imageUrl}
            alt={featuredWork.title}
            className="w-[48rem] max-w-none cursor-pointer rounded-xl shadow-xl ring-1 ring-zinc-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}

function FeaturedWorkGallery({ isOpen, setIsOpen, featuredWork, theme, responsive }) {
  const galleryItems = responsive?.md ? featuredWork.galleryDesktop : featuredWork.gallery
  return (
    <Transition appear show={isOpen} as={Fragment}>
      {/* HACK using this className __className_f820ce becuase I don't know how to get the custom font to apply. */}
      <Dialog as="div" className="__className_f820ce relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-950 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto bg-zinc-50 dark:bg-zinc-950">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden bg-zinc-50 p-6 text-left align-middle transition-all dark:bg-zinc-950">
                <div className="flex items-center justify-center">
                  <Button format="icon" onClick={() => setIsOpen(false)}>
                    <span className="sr-only">Close Gallery</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
                <div className="mt-8 flow-root">
                  <div className="dark:bg-zinc50/5 mb-8 rounded-md bg-zinc-400/10 p-6">
                    <div className="mx-auto max-w-prose">
                      <h4 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                        {featuredWork.title}
                      </h4>
                      {featuredWork.performanceCta && (
                        <div className="text-center">
                          <Link
                            href={featuredWork.performanceCta.href}
                            format="button"
                            color="black"
                            className="inline-flex gap-4 px-6"
                          >
                            View live PageSpeed score
                            <GaugeIcon className="h-5 w-5" aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                      <div className="my-8 flex flex-wrap justify-center gap-2 text-center">
                        <p className="w-full">Built with:</p>
                        {featuredWork.stack?.map((item: StackIcons) => {
                          const Icon = stackIconsMap[item]
                          return <Icon key={item} className="h-12 w-12" aria-hidden="true" />
                        })}
                      </div>
                      <p>{featuredWork.description}</p>

                      <Disclosure {...(responsive?.md ? { defaultOpen: true } : { defaultOpen: false })}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button as={Fragment}>
                              <Button className="my-6 inline-flex gap-3 rounded-full bg-zinc-300 px-3 py-1 text-sm font-semibold leading-6 text-zinc-700 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-300/70 dark:bg-zinc-500/10 dark:text-zinc-400 dark:ring-zinc-500/20 dark:hover:bg-zinc-500/20 md:hidden">
                                <div className={open ? '-rotate-180 transition-all' : 'transition-all'}>
                                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                {open ? 'Show Less' : 'More Details'}
                              </Button>
                            </Disclosure.Button>
                            <Disclosure.Panel className="md:mt-3 [&>p]:mb-3">
                              {parse(featuredWork.descriptionExtended)}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      <div className="mt-6 flex justify-center gap-4">
                        {featuredWork.gitUrl && (
                          <Link href={featuredWork.gitUrl}>
                            <GithubIcon className="h-6 w-6" />
                          </Link>
                        )}
                        {featuredWork.siteUrl && (
                          <Link href={featuredWork.siteUrl}>
                            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    {galleryItems &&
                      galleryItems.map((item, index) => (
                        <Image
                          className="rounded-xl shadow-xl"
                          src={item}
                          alt={`${featuredWork.title} gallery image ${index}`}
                          width={640}
                          height={376}
                          key={index}
                        />
                      ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}