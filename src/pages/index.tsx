import Head from 'next/head'
import { Layout } from '~/layout'
import { VideoHero } from '~/components/videoHero'
import { HeroWithSplit } from '~/components/heroWithSplit'
import { LargeHeader } from '~/components/largeHeader'
import { FeaturedWork } from '~/components/featuredWork'
import { PreviousWork } from '~/components/previousWork'
import { Feedback } from '~/components/feedback'
import { ContainedContentPanel } from '~/components/containedContentPanel'
import { ContactWithSplit } from '~/components/contactWithSplit'

import siteData from '~/data.json'

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

      <Layout cms={cms}>
        <VideoHero cms={cms} />
        <HeroWithSplit cms={cms} id="about" />
        <LargeHeader cms={cms.featuredWorkHeader} id="featured-work" />

        {cms.featuredWork.map((item) => {
          return <FeaturedWork featuredWork={item} key={item.title} />
        })}

        <PreviousWork cms={cms} id="previous-work" />
        <ContainedContentPanel cms={cms} id="experience" />
        <Feedback cms={cms} id="feedback" />
        <ContactWithSplit cms={cms} id="contact" />
			</Layout>
    </>
  )
}
