import { Button } from '~/components/button'
import { Image } from '~/components/image'
import { Link } from '~/components/link'
import { Input } from '~/components/input'
import Mailbox from '/public/svg/mailbox.svg'
import MailboxFlag from '/public/svg/mailbox-flag.svg'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export function ContactWithTestimonial({ cms }) {
  return (
    <div className="relative isolate  px-6 py-24 sm:py-32 lg:px-8">
      {/* NOTE background artwork */}
      <svg
        // className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        className="absolute inset-0 -z-10 h-full w-full stroke-black/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-emerald-800/25"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        {/* <svg x="50%" y={-64} className="overflow-visible fill-gray-50"> */}
        <svg x="50%" y={-64} className="overflow-visible fill-black/25 dark:fill-emerald-800/25">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>

      <div className="mx-auto max-w-xl lg:max-w-4xl">
        {/* TODO add state change to mailbox flag when mail sent */}
        <div className="group relative mb-2 h-16 w-16">
          <Mailbox className="icon absolute stroke-black dark:stroke-mintDark-11" />
          <MailboxFlag className="icon absolute fill-transparent stroke-black  transition  group-hover:-scale-x-100 group-hover:fill-mint-8 dark:stroke-mintDark-11  dark:group-hover:fill-mintDark-8" />
        </div>

        <h2 className="text-4xl font-bold tracking-tight">{cms.contact.heading}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-700 dark:text-mintDark-9">{cms.contact.body}</p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold leading-6">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 bg-emerald-200 px-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-mintDark-9 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-emerald-200 px-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-mintDark-9 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold leading-6 ">
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md border-0 bg-emerald-200 px-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-mintDark-9 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-emerald-200 px-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-emerald-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-mintDark-9 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button type="submit" className="w-full" color="black">
                {cms.contact.button.label}
                <PaperAirplaneIcon className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm leading-6">
              {cms.contact.legal}{' '}
              <Link href="#" className="font-semibold text-gray-700 dark:text-mintDark-10">
                privacy&nbsp;policy
              </Link>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <Image
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
              alt=""
              width={196}
              height={48}
            />
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 ">
                <p>"{cms.contact.testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <Image
                  src={cms.contact.testimonial.image}
                  alt=""
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="text-base font-semibold dark:text-mintDark-10">{cms.contact.testimonial.name}</div>
                  <div className="text-sm leading-6 ">{cms.contact.testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
