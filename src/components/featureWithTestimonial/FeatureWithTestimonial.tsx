import { Image } from '~/components/image'
import { Link } from '~/components/link'
import { Typist } from '~/components/typist'
import CmsIcon from '/public/svg/cms.svg'
import DockerIcon from '/public/svg/docker.svg'
import GatsbyIcon from '/public/svg/gatsby.svg'
import JavascriptIcon from '/public/svg/javascript.svg'
import MateriakUiIcon from '/public/svg/material-ui.svg'
import ReactIcon from '/public/svg/react.svg'
import ShopifyIcon from '/public/svg/shopify.svg'
import StorybookIcon from '/public/svg/storybook.svg'
import TailwindIcon from '/public/svg/tailwind.svg'
import TypescriptIcon from '/public/svg/typescript.svg'
import WordpressIcon from '/public/svg/wordpress.svg'

type FeatureWithTestimonialProps = {
  cms: unknown
}

const stackIconsMap = {
  cms: CmsIcon,
  docker: DockerIcon,
  gatsby: GatsbyIcon,
  javascript: JavascriptIcon,
  materialUi: MateriakUiIcon,
  react: ReactIcon,
  shopify: ShopifyIcon,
  storybook: StorybookIcon,
  tailwind: TailwindIcon,
  typescript: TypescriptIcon,
  wordpress: WordpressIcon,
}

export function FeatureWithTestimonial(props: FeatureWithTestimonialProps) {
  console.log(props)
  const { cms } = props

  const { header, title, description, stack, button, testimonial, image } = cms
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7">
                <Typist withPrompt>{header}</Typist>
              </h2>

              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                {stack?.map((item) => {
                  const Icon = stackIconsMap[item]
                  return <Icon key={item} className="h-12 w-12" aria-hidden="true" />
                })}
              </div>

              <div className="mt-8">
                <Link format="button" color="black" href={button.href}>
                  {button.label}
                </Link>
              </div>
              <figure className="mt-16 border-l border-zinc-700 pl-8 text-zinc-700 dark:border-zinc-100 dark:text-zinc-300">
                <blockquote className="text-base leading-7">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                  <Image
                    src={testimonial.image}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full"
                    width={48}
                    height={48}
                  />
                  <div>
                    <span className="font-semibold text-zinc-950 dark:text-zinc-50">{testimonial.name}</span>{' '}
                    {testimonial.title}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            src={image}
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
