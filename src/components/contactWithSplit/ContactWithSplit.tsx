// TODO move form state into zustand ans add mailbox animation
import { Link } from '~/components/link'
import { ContactForm } from './ContactForm'
import Mailbox from '/public/svg/mailbox.svg'
import MailboxFlag from '/public/svg/mailbox-flag.svg'
import { MapPinIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

type ContactWithSplitProps = {
  cms: SiteData
  id: string
}

const classes = twMerge(
  'relative isolate bg-zinc-50 dark:bg-zinc-950',
  // :before gradient mask
  'before:absolute before:inset-x-0 before:top-0 before:z-10 before:block before:h-[128px] before:bg-gradient-to-b before:from-zinc-50 before:to-transparent dark:before:from-zinc-950',
  // :after gradient mask
  'lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:z-10 lg:after:block lg:after:h-[128px] lg:after:bg-gradient-to-t lg:after:from-zinc-50 lg:after:to-transparent dark:lg:after:from-zinc-950'
)

const innerClasses = twMerge(
  'relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48',
  // :after gradient mask
  'after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:block after:h-[128px] after:bg-gradient-to-t after:from-zinc-50 after:to-transparent dark:after:from-zinc-950 lg:after:content-none'
)

export function ContactWithSplit(props: ContactWithSplitProps) {
  const { cms, id } = props

  return (
    <div id={id} className={classes}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className={innerClasses}>
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* NOTE background artwork */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-700"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#e1f2fd] to-[#9d9d9e] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>

            {/* TODO add state change to mailbox flag when mail sent */}
            <div className="group relative mb-2 h-16 w-16">
              <Mailbox className="icon absolute stroke-zinc-950 dark:stroke-zinc-50" />
              <MailboxFlag className="icon absolute fill-transparent stroke-zinc-950  transition  group-hover:-scale-x-100 group-hover:fill-zinc-700 dark:stroke-zinc-50  dark:group-hover:fill-zinc-300" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{cms.contact.heading}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{cms.contact.body}</p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400 dark:text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-gray-900 dark:hover:text-white" href="mailto:hello@pixelonpixel.com">
                    hello@pixelonpixel.com
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Location</span>
                  <MapPinIcon className="h-7 w-6 text-gray-400 dark:text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Chaing Mai, Thailand</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Timezone</span>
                  <ClockIcon className="h-7 w-6 text-gray-400 dark:text-gray-400" aria-hidden="true" />
                </dt>
                <dd>UTC +7</dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
