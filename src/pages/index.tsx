import Head from 'next/head'
import { Navbar, NavbarWrapper } from '~/components/navbar'
import { About } from '~/components/about'
import { HeroWithSplit } from '~/components/heroWithSplit'
import { HeaderCentered } from '~/components/headerCentered/HeaderCentered'
import { TeamGrid } from '~/components/teamGrid'
import { FeatureWithTestimonial } from '~/components/featureWithTestimonial'
import { Testimonials } from '~/components/testimonials'
import { ContainedContentPanel } from '~/components/containedContentPanel'
import { ContactWithTestimonial } from '~/components/contactWithTestimonial'
import { Footer } from '~/components/footer'

import cmsData from '~/modules/cms/data.json'

// QUESTION do we really need the return type for a page or is it overkill for the sake of correctness
// import { type NextPage } from 'next'

type HomeProps = {
  cms: typeof cmsData
}

export async function getStaticProps() {
  return {
    props: {
      cms: cmsData,
    },
  }
}

export default function Home({ cms }: HomeProps) {
  return (
    <>
      <Head>
        <title>{cms.seo.title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={cms.seo.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
      </Head>

      <header>
        <NavbarWrapper>
          <Navbar cms={cms} />
        </NavbarWrapper>
      </header>

      <main>
        <About cms={cms} />
        <HeroWithSplit cms={cms} />

        <TeamGrid cms={cms} />

        <HeaderCentered cms={cms} />
        {cms.featuredWork.items.map((item) => (
          <FeatureWithTestimonial item={item} key={item.title} />
        ))}

        <Testimonials cms={cms} />
        <ContainedContentPanel cms={cms} />
        <ContactWithTestimonial cms={cms} />
      </main>

      <footer>
        <Footer cms={cms} />
      </footer>
    </>
  )
}
