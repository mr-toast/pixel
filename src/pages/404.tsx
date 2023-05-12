import { Link } from '~/components/link'

export default function Custom404() {
  return (
    <>
      <main className="bg-zinc-950">
        <div className="flex flex-col justify-center items-center h-screen mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-50 sm:text-5xl">404</h1>
          <p className="mb-8 text-zinc-50">Sorry we&apos;ve looked everywhere, I mean everywhere, and we can&apos;t find it.</p>
					<Link href="/" format="button" color="white" className="max-w-min px-6 py-1 rounded-full hover:bg-zinc-50 animate-pulse hover:animate-none">
						<span className="">reset</span>
					</Link>
				</div>
      </main>
    </>
  )
}
