// types.d.ts

type NavigationItem = {
  label: string
  href: string
}

type HeaderCentered = {
  heading: string
  body: string
}

type SocialIcons = 'github' | 'twitter' | 'upwork'

type StackIcons =
  | 'docker'
  | 'gatsby'
  | 'javascript'
  | 'materialUi'
  | 'react'
  | 'shopify'
  | 'storybook'
  | 'tailwind'
  | 'typescript'
  | 'wordpress'

type ServicesIcons = 'commandLine'

type SocialItem = {
  name: string
  href: string
  icon: SocialIcons
}

type VimeoVideo = {
  id: string
  title: string
  format: string
  imageUrl: string
}

type Button = {
  label: string
  href: string
}

type Testimonial = {
  name: string
  title: string
  quote: string
  avatarUrl: string
  imageUrl: string
}

type FeaturedWork = {
  header: string
  title: string
  description: string
  stack: StackIcons[]
  button: Button
  testimonial: Testimonial
  imageUrl: string
}

type PreviousWork = {
  header: string
  title: string
  description: string
  stack: string[]
  imageUrl: string
}

type FeedbackMeta = {
  name: string
  dates?: string
  shortDate: string
  rating: number
  hrs: string | number
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

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  upwork?: string
  github?: string
  twitter?: string
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
  featuredWorkHeader: HeaderCentered
  featuredWork: FeaturedWork[]
  previousWork: PreviousWork[]
  feedbackHeader: HeaderCentered
  feedback: Feedback[]
  services: {
    heading1: string
    heading2: string
    body: string
    list: ServiceListItem[]
    imageUrl: string
  }
  team: {
    heading: string
    body: string
    people: TeamMember[]
  }
  contact: {
    heading: string
    body: string
    legal: string
    button: Button
    testimonial: Testimonial
  }
}
