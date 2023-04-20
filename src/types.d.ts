type NavigationItem = {
  label: string
  href: string
}

type Button = {
  label: string
  href: string
}

type Testimonial = {
  quote: string
  image: string
  name: string
  title: string
}

type FeedbackMeta = {
  name: string
  dates?: string
  shortDate: string
  rating: number
  hrs: number | string
  imageUrl: string
}

type Feedback = {
  title: string
  body: string
  meta: FeedbackMeta
}

type Service = {
  name: string
  description: string
  icon: string
}

type Person = {
  name: string
  role: string
  imageUrl: string
  upwork?: string
  github?: string
  twitter?: string
}

type WorkItem = {
  header: string
  title: string
  description: string
  stack: string[]
  button: Button
  testimonial: Testimonial
  image: string
}

type Testimonial = {
  quote: string
  image: string
  name: string
  title: string
  logo: string
}

type FooterNavigation = {
  label: string
  href: string
}

type Social = {
  name: string
  href: string
  icon: string
}

type Video = {
  id: string
  title: string
  format: string
  imageUrl: string | null
}

type SiteData = {
  site_title: string
  seo: {
    title: string
    description: string
  }
  mainNavigation: NavigationItem[]
  burgerNavigation: NavigationItem[]
  hero: {
    badge: string
    heading: string
    body: string
    button: Button
    image: string
  }
  about: {
    heading: string
    body: string
    blurb: string
  }
  team: {
    heading: string
    body: string
    people: Person[]
  }
  featuredWork: {
    heading: string
    body: string
    items: WorkItem[]
  }
  previousWork: WorkItem[]
  testimonials: {
    heading: string
    body: string
    feedback: Feedback[]
  }
  services: {
    heading1: string
    heading2: string
    body: string
    list: Service[]
    image: string
  }
  contact: {
    heading: string
    body: string
    legal: string
    button: {
      label: string
    }
    testimonial: Testimonial
    mailLabel: string
  }
  footerNavigation: FooterNavigation[]
  social: Social[]
  video: Video[]
}
