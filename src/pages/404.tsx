// import { Image } from '~/components/image/'
import { Link } from '~/components/link'
export default function Custom404() {
  return (
    <>
      <main className="relative isolate h-screen">
        {/* <Image
          src="/images/video-hero-poster.png"
          alt=""
          width={1440}
          height={850}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        /> */}
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-zinc-950">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base text-zinc-950/70 sm:mt-6">
            Sorry we&apos;ve looked everywhere, I mean everywhere, and we can&apos;t find it.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm font-semibold leading-7 text-zinc-950">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
