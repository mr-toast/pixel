import { Image } from '~/components/image'

type TestimonialsProps = {
  cms: unknown
  id: string
}

export function Testimonials(props: TestimonialsProps) {
  const { cms, id } = props
  return (
    <div id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight">{cms.testimonials.heading}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">{cms.testimonials.body}</p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {cms.testimonials.feedback.map((testimonial, index) => (
              <div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-zinc-200 p-8 text-sm leading-6 dark:bg-zinc-400">
                  <div className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{testimonial.title}</div>
                  <blockquote className="text-zinc-900 dark:text-zinc-200">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-16 w-16 bg-zinc-50 mix-blend-multiply"
                      src={testimonial.meta.imageUrl}
                      alt=""
                      width={64}
                      height={64}
                    />
                    <div>
                      <div className="font-semibold text-zinc-600">{testimonial.meta.name}</div>
                      <div className="text-zinc-500">{testimonial.meta.shortDate}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
