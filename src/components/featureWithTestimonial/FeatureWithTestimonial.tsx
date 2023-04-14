import { Image } from '~/components/image'
import { Link } from '~/components/link'

export function FeatureWithTestimonial({ item }) {
  const { header, title, description, button, testimonial, image } = item
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7">{header}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-mintDark-10">{description}</p>
              <div className="mt-8">
                <Link format="button" href={button.href}>
                  {button.label}
                </Link>
              </div>
              <figure className="dark:border-mintDark-100 mt-16 border-l border-slate-700 pl-8 text-slate-700 dark:text-mintDark-10">
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
                    <span className="font-semibold text-black dark:text-mintDark-11">{testimonial.name}</span> –{' '}
                    {testimonial.title}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            src={image}
            alt=""
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
