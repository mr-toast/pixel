import { create } from 'zustand'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '/public/svg/icon.svg'
import { ThemeSwitcher } from '~/components/themeSwitcher'
import { Link } from '~/components/link'
import { Button } from '~/components/button'
import GithubIcon from '/public/svg/github.svg'
import TwitterIcon from '/public/svg/twitter.svg'
import UpworkIcon from '/public/svg/upwork.svg'

type NavbarProps = {
  cms: any
}

type MobileMenuStore = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (value: boolean) => set(() => ({ mobileMenuOpen: value })),
}))

const constants = {
  OPEN_TEXT: 'Open menu',
  CLOSE_TEXT: 'Close menu',
}

const socialIconsMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  upwork: UpworkIcon,
}

export function Navbar(props: NavbarProps) {
  const { cms } = props
  const mobileMenuOpen = useMobileMenuStore((state) => state.mobileMenuOpen)
  const setMobileMenuOpen = useMobileMenuStore((state) => state.setMobileMenuOpen)

  return (
    <>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">{cms.site_title}</span>
          <Logo className="h-8 w-8" />
        </Link>
        <div className="flex gap-3 lg:hidden">
          <ThemeSwitcher />
          <Button
            type="button"
            format="icon"
            className="border border-zinc-950 dark:border-zinc-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{constants.OPEN_TEXT}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {cms.mainNavigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-semibold leading-6 ">
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>
      </nav>

      <MobileMenuDialog cms={cms} />
    </>
  )
}

const MobileMenuDialog = ({ cms }) => {
  const mobileMenuOpen = useMobileMenuStore((state) => state.mobileMenuOpen)
  const setMobileMenuOpen = useMobileMenuStore((state) => state.setMobileMenuOpen)

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-20" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-zinc-50  px-6 py-4 dark:bg-zinc-950 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{cms.site_title}</span>
            <Logo className="h-8 w-8" />
          </Link>
          <div className="flex gap-3">
            <ThemeSwitcher />
            <Button
              type="button"
              format="icon"
              color="transparent"
              className="border border-zinc-950 dark:border-zinc-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{constants.CLOSE_TEXT}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <nav className="mt-6 flow-root">
          <ul className="-my-6 divide-y divide-zinc-500/10">
            <li className="space-y-2 py-6">
              {cms.burgerNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-zinc-500"
                >
                  {item.label}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
        <div className="mt-10 flex w-full justify-start gap-4">
          {cms.social.map((item) => {
            const Icon = socialIconsMap[item.icon]
            return (
              <Link key={item.name} href={item.href} format="button" color="transparent" className="rounded-full p-2.5">
                <span className="sr-only">{item.name}</span>
                <Icon className="h-12 w-12" aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}
