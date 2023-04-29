// QUESTION TODO can 500 pages be embelished? If so bring it inline with the 404 page

// import { Image } from '~/components/image'
import { Link } from '~/components/link'

export default function Custom500() {
  return (
    <>
      <main className="relative isolate h-screen">
        {/* <Image
          src="/images/video-hero-poster.png"
          alt=""
          width={1440}
          height={850}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-10"
        /> */}
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-zinc-950">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            500 - Server-side error occurred
          </h1>
          <p className="mt-4 text-base text-zinc-950/70 sm:mt-6">
            It&apos;s bad, I mean really bad, there&apos;s fire and tears and stuff.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm font-semibold leading-7 text-zinc-950">
              <span aria-hidden="true">&larr;</span> Start over
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
