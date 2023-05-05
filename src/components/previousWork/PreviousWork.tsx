import { Link } from '~/components/link'
import ShopifyIcon from '/public/svg/stack/shopify.svg'
import WordpressIcon from '/public/svg/stack/wordpress.svg'

type PreviousWorkProps = {
  cms: SiteData
  id: string
}

export function PreviousWork(props: PreviousWorkProps) {
  const { cms, id } = props
  return (
    <div id={id} className="bg-zinc-50 py-24 dark:bg-zinc-950 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-6 mt-6 flex justify-center gap-2 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:grayscale">
            <WordpressIcon />
            <ShopifyIcon />
          </div>
          <h2 className="text-5xl font-bold leading-8 tracking-tight">{cms.previousWorkHeader.heading}</h2>
          <p className="mt-6 leading-6 text-zinc-950 dark:text-zinc-50">{cms.previousWorkHeader.body}</p>
        </div>

        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {cms.previousWork?.map((item) => {
            return (
              <Link
                href={item.href}
                className="bg-zinc-400/10 p-8 last-of-type:hidden dark:bg-zinc-50/5 sm:p-10 md:last-of-type:block hover:[&>img]:scale-110"
                key={item.title}
              >
                <img
                  className="max-h-12 w-full object-contain transition-transform dark:invert"
                  src={item.imageUrl}
                  alt={item.title}
                  width={158}
                  height={48}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
