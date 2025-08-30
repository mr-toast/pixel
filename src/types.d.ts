// types.d.ts
type NavigationItem = {
  label: string
  href: string
}

type LargeHeader = {
  heading: string
  body: string
}

type SocialIcons = 'github' | 'twitter' | 'upwork'

type StackIcons =
  | 'algolia'
  | 'cms'
  | 'docker'
  | 'gatsby'
  | 'javascript'
  | 'radix'
	| 'react'
  | 'shopify'
  | 'sketch'
  | 'stitches'
	| 'storybook'
  | 'tailwind'
  | 'typescript'
  | 'wordpress'

type ServicesIcons = 'bookmarkSquare' | 'codeBracket' | 'commandLine' |  'shoppingBag'

type SocialItem = {
  name: string
  href: string
  icon: SocialIcons
}

type VimeoVideo = {
  className: string
  imageUrl: string
  isBackground?: boolean
  videoId?: number
}

type Button = {
  label: string
  format?: string
}

type PerformanceCta = {
  body: string
  href: string
}

type FeaturedWork = {
  header: string
  title: string
  description: string
  descriptionExtended: string
  performanceCta: PerformanceCta
  stack: StackIcons[]
  button: Button
  imageUrl: string
  gitUrl?: string
  siteUrl?: string
  gallery?: string[]
  galleryDesktop?: string[]
}

type PreviousWork = {
  title: string
  imageUrl: string
  href: string
}

type FeedbackMeta = {
  name: string
  shortDate: string
  imageUrl: string
}

type Feedback = {
  title: string
  body: string
  meta: FeedbackMeta
}

type ServiceListItem = {
  name: string
  description: string
  icon: ServicesIcons
}

type SiteData = {
  site_title: string
  seo: {
    title: string
    description: string
  }
  mainNavigation: NavigationItem[]
  burgerNavigation: NavigationItem[]
  footerNavigation: NavigationItem[]
  social: SocialItem[]
  hero: {
    vimeo: VimeoVideo
  }
  introduction: {
    badge: string
    heading: string
    body: string
    button: Button
    imageUrl: string
  }
  featuredWorkHeader: LargeHeader
  featuredWork: FeaturedWork[]
  previousWorkHeader: LargeHeader
  previousWork: PreviousWork[]
  feedbackHeader: LargeHeader
  feedback: Feedback[]
  services: {
    heading1: string
    heading2: string
    body: string
    list: ServiceListItem[]
    imageUrl: string
  }
  contact: {
    heading: string
    body: string
    email: string
    location: string
    timezone: string
  }
}

type SvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

// NOTE // BUG I think next/image and  global.d.ts is overriding this definition and causeing all the errors during build. Work out how to fix this
declare module '*.svg' {
  const ReactComponent: SvgComponent
  export { ReactComponent }

  export default ReactComponent
}

declare module '*.svg?url' {
  const content: string
  export default content
}
