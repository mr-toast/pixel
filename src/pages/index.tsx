import Head from 'next/head'
import { Navbar, NavbarWrapper } from '~/components/navbar'
import { VideoHero } from '~/components/videoHero'
import { HeroWithSplit } from '~/components/heroWithSplit'
import { LargeHeader } from '~/components/largeHeader'
import { FeatureWithTestimonial } from '~/components/featureWithTestimonial'
import { PreviousWork } from '~/components/previousWork'
import { Testimonials } from '~/components/testimonials'
import { ContainedContentPanel } from '~/components/containedContentPanel'
import { ContactWithSplit } from '~/components/contactWithSplit'
import { Footer } from '~/components/footer'

import siteData from '~/modules/cms/data.json'

type HomeProps = {
  cms: SiteData
}

// NOTE we're telling typscript to shut the f*ck up
// This is correct as per the Nextjs docs https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// eslint-disable-next-line @typescript-eslint/require-await
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
        <LargeHeader cms={cms.featuredWorkHeader} id="featured-work" />

        {cms.featuredWork.map((item) => {
          return <FeatureWithTestimonial featuredWork={item} key={item.title} />
        })}

        <PreviousWork cms={cms} id="previous-work" />

        <ContainedContentPanel cms={cms} id="experience" />

        <Testimonials cms={cms} id="testimonials" />

        <ContactWithSplit cms={cms} id="contact" />
      </main>

      <footer>
        <Footer cms={cms} />
      </footer>
    </>
  )
}
