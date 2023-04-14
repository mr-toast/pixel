import Head from 'next/head'

import { Navbar } from '~/components/navbar'
import { FeatureWithTestimonial } from '~/components/featureWithTestimonial'
import { Footer } from '~/components/footer'
import { HeroWithSplit } from '~/components/heroWithSplit'
import { Testimonials } from '~/components/testimonials'
import { ContainedContentPanel } from '~/components/containedContentPanel'
import { HeaderCentered } from '~/components/headerCentered/HeaderCentered'
import { About } from '~/components/about'
import { TeamGrid } from '~/components/teamGrid'

import cmsData from '~/modules/cms/data.json'

import { ContactWithTestimonial } from '~/components/contactWithTestimonial'

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

      <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-y-4">
        {/* NOTE the navbar containes the header element */}
        <Navbar cms={cms} />

        <main className="">
          <HeroWithSplit cms={cms} />
          <About cms={cms} />
          <TeamGrid cms={cms} />

          <HeaderCentered cms={cms} />
          {cms.featuredWork.items.map((item) => (
            <FeatureWithTestimonial item={item} key={item.title} />
          ))}

          <Testimonials cms={cms} />
          <ContainedContentPanel cms={cms} />
          <ContactWithTestimonial cms={cms} />
        </main>

        <Footer cms={cms} />
      </div>
    </>
  )
}
