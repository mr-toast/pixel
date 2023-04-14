import { Link } from '~/components/link'
import GithubIcon from '/public/svg/github.svg'
import TwitterIcon from '/public/svg/twitter.svg'
import UpworkIcon from '/public/svg/upwork.svg'

const socialIconsMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  upwork: UpworkIcon,
}

export function Footer({ cms }) {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 flex flex-wrap justify-center gap-x-12" aria-label="Footer">
          {cms.footerNavigation.map((item) => (
            <div key={item.label} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {cms.social.map((item) => {
            const Icon = socialIconsMap[item.icon]
            return (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            )
          })}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; Copyright {new Date().getFullYear()} | {cms.site_title}
        </p>
      </div>
    </footer>
  )
}
