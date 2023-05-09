import { useResponsive } from 'ahooks'
import { Fragment, useState } from 'react'
import { Dialog , Transition} from '@headlessui/react'
import { useTheme } from 'next-themes'
import { Image } from '~/components/image'
import { Button } from '~/components/button'
import { Link } from '~/components/link'
import { Typist } from '~/components/typist'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import GithubIcon from '/public/svg/icon/github.svg'
import AlgoliaIcon from '/public/svg/stack/algolia.svg'
import CmsIcon from '/public/svg/stack/cms.svg'
import DockerIcon from '/public/svg/stack/docker.svg'
import GatsbyIcon from '/public/svg/stack/gatsby.svg'
import JavascriptIcon from '/public/svg/stack/javascript.svg'
import ReactIcon from '/public/svg/stack/react.svg'
import ShopifyIcon from '/public/svg/stack/shopify.svg'
import SketchIcon from '/public/svg/stack/sketch.svg'
import StorybookIcon from '/public/svg/stack/storybook.svg'
import TailwindIcon from '/public/svg/stack/tailwind.svg'
import TypescriptIcon from '/public/svg/stack/typescript.svg'
import WordpressIcon from '/public/svg/stack/wordpress.svg'

type FeatureWithTestimonialProps = {
  featuredWork: FeaturedWork
}

type StackIconsMapType = {
  [key in StackIcons]: SvgComponent
}

const stackIconsMap: StackIconsMapType = {
  algolia: AlgoliaIcon,
  cms: CmsIcon,
  docker: DockerIcon,
  gatsby: GatsbyIcon,
  javascript: JavascriptIcon,
  react: ReactIcon,
  shopify: ShopifyIcon,
  sketch: SketchIcon,
  storybook: StorybookIcon,
  tailwind: TailwindIcon,
  typescript: TypescriptIcon,
  wordpress: WordpressIcon,
}


const constants = {
  OPEN_TEXT: 'Open Gallery',
  CLOSE_TEXT: 'Close Gallery',
}

export function FeatureWithTestimonial({ featuredWork }: FeatureWithTestimonialProps) {
	let [isOpen, setIsOpen] = useState(false)

	const responsive = useResponsive()
	const { theme } = useTheme()
	
  const featuredWorkGallery = responsive?.md ? featuredWork.galleryDesktop : featuredWork.gallery
	
	function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }



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
              <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{featuredWork.description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                {featuredWork.stack?.map((item: StackIcons) => {
                  const Icon = stackIconsMap[item]
                  return <Icon key={item} className="h-12 w-12" aria-hidden="true" />
                })}
              </div>

              <div className="mt-8">
                <Button color="black" onClick={openModal}>
                  {featuredWork.button.label}
                </Button>


								<Transition appear show={isOpen} as={Fragment}>
									{/* HACK using this className __className_f820ce becuase I don't know how to get the custom font to apply */}
									<Dialog as="div" className="relative z-50 __className_f820ce" onClose={closeModal}>
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
													<Dialog.Panel className="w-full transform overflow-hidden bg-zinc-50 dark:bg-zinc-950 p-6 text-left align-middle transition-all">
														<div className="flex items-center justify-center">
															<Button
																color={theme === 'dark' ? 'white' : 'black' }
																format="icon"
																className=""		
																onClick={closeModal}
															>
																<span className="sr-only">{constants.CLOSE_TEXT}</span>
																<XMarkIcon className="h-6 w-6" aria-hidden="true" />
															</Button>
														</div>
														<div className="mt-8 flow-root text-center">
															<div className="mb-8 rounded-md bg-zinc-400/10 dark:bg-zinc50/5 p-6">
																<div className="max-w-prose mx-auto">
																	<h4 className="mb-4 text-2xl">{featuredWork.title}</h4>
																	<p>{featuredWork.description}</p>
																	<div className="flex gap-4 justify-center mt-6">
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
																{featuredWorkGallery && (featuredWorkGallery.map((item, index) => (
																	<Image className="rounded-xl shadow-xl" src={item} alt="" width={640} height={376} key={index} />
																)))}
															</div>
														</div>
													
													</Dialog.Panel>
												</Transition.Child>
											</div>
										</div>
									</Dialog>
								</Transition>

              </div>
              {featuredWork.testimonial && (
							<figure className="mt-16 border-l border-zinc-700 pl-8 text-zinc-700 dark:border-zinc-100 dark:text-zinc-300">
                <blockquote className="text-base leading-7">
                  <p>&ldquo;{featuredWork.testimonial.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                  <Image
                    src={featuredWork.testimonial.avatarUrl}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full"
                    width={48}
                    height={48}
                  />
                  <div>
                    <span className="font-semibold text-zinc-950 dark:text-zinc-50">{featuredWork.testimonial.name}</span>{' '}
                    {featuredWork.testimonial.title}
                  </div>
                </figcaption>
              </figure>)}
            </div>
          </div>
          <Image
            src={featuredWork.imageUrl}
            alt=""
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-zinc-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}