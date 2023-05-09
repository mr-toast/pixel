import { Cutive_Mono } from 'next/font/google'
import type { PropsWithChildren } from "react"
import { Navbar, NavbarWrapper } from '~/components/navbar'
import { Footer } from '~/components/footer'

export type LayoutProps = {
	cms: SiteData
}

const cutiveMono = Cutive_Mono({
  variable: '--font-cutive-mono',
  weight: '400',
  subsets: ['latin'],
  preload: true,
})

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { cms, children } = props;
	return (
		<>
			<header className={`${cutiveMono.className}`}>
        <NavbarWrapper>
          <Navbar cms={cms} />
        </NavbarWrapper>
      </header>
			<main className={`${cutiveMono.className}`}>
				{children}		
			</main>
			<footer className={`${cutiveMono.className}`}>
				<Footer cms={cms} />
			</footer>
		</>
	)
}