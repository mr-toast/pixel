import { Link } from '~/components/link'
import GithubIcon from '/public/svg/github.svg'
import TwitterIcon from '/public/svg/twitter.svg'
import UpworkIcon from '/public/svg/upwork.svg'

type FooterProps = {
  cms: SiteData
}

const socialIconsMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  upwork: UpworkIcon,
}

export function Footer(props: FooterProps) {
  const { cms } = props
  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer">
        {cms.footerNavigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm leading-6 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 flex justify-center space-x-10">
        {cms.social.map((item) => {
          const Icon = socialIconsMap[item.icon]
          return (
            <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-zinc-500">
              <span className="sr-only">{item.name}</span>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          )
        })}
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        &copy; Copyright {new Date().getFullYear()} | {cms.site_title}
      </p>
    </div>
  )
}
