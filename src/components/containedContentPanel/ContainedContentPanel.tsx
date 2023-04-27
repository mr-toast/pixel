import { Image } from '~/components/image'
import { CommandLineIcon } from '@heroicons/react/20/solid'

type ContainedContentPanelProps = {
  cms: SiteData
}

// make sure you update the icons in types.d.ts as well
const iconsMap = {
  commandLine: CommandLineIcon,
}

// function getIconComponent(icon: string) {
//   return iconsMap[icon as keyof typeof iconsMap]
// }

export function ContainedContentPanel(props: ContainedContentPanelProps) {
  const { cms } = props
  return (
    <div className=" py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-zinc-950 px-6 py-20 dark:bg-zinc-50 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-50 dark:text-zinc-950 sm:text-4xl">
                {cms.services.heading1}
                <br />
                {cms.services.heading2}
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-50 dark:text-zinc-700 ">{cms.services.body}</p>
            </div>
            <Image
              src={cms.services.imageUrl}
              alt=""
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-zinc-50/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
              width={2432}
              height={1442}
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-zinc-50/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-zinc-300 dark:text-zinc-700 lg:max-w-none">
                {cms.services.list.map((item) => {
                  const Icon = iconsMap[item.icon]

                  return (
                    <div key={item.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-zinc-50 dark:text-zinc-950">
                        <Icon
                          className="absolute left-1 top-1 h-5 w-5 text-zinc-50 dark:text-zinc-950"
                          aria-hidden="true"
                        />
                        {item.name}
                      </dt>{' '}
                      <dd className="inline text-zinc-50 dark:text-zinc-700">{item.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
