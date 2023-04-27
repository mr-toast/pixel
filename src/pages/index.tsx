import Head from 'next/head'
import { Navbar, NavbarWrapper } from '~/components/navbar'
import { VideoHero } from '~/components/videoHero'
import { HeroWithSplit } from '~/components/heroWithSplit'
import { LargeHeader } from '~/components/largeHeader'
import { FeatureWithTestimonial } from '~/components/featureWithTestimonial'
import { Testimonials } from '~/components/testimonials'
import { ContainedContentPanel } from '~/components/containedContentPanel'
// import { TeamGrid } from '~/components/teamGrid'
import { ContactWithSplit } from '~/components/contactWithSplit'
import { Footer } from '~/components/footer'

import siteData from '~/modules/cms/data.json'

// QUESTION do we really need the return type for a page or is it overkill for the sake of correctness
// import { type NextPage } from 'next'

type HomeProps = {
  cms: SiteData
}

// NOTE we're telling typscript to shut the f*ck up in next.config.mjs
// This is correct as per the Nextjs docs https://nextjs.org/docs/basic-features/data-fetching/get-static-props
export async function getStaticProps() {
  return {
    props: {
      cms: siteData,
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
        <VideoHero cms={cms} />
        <HeroWithSplit cms={cms} id="about" />
        <LargeHeader cms={cms.featuredWorkHeader} id="work" />

        {cms.featuredWork.map((item) => {
          return <FeatureWithTestimonial featuredWork={item} key={item.title} />
        })}

        {/* previousWork */}
        {/* TODO add previous work component here later */}

        <Testimonials cms={cms} id="testimonials" />

        {/* NOTE probably not going to use this component */}
        {/* <TeamGrid cms={cms} /> */}

        <ContainedContentPanel cms={cms} />

        <ContactWithSplit cms={cms} id="contact" />
      </main>

      <footer>
        <Footer cms={cms} />
      </footer>
    </>
  )
}
