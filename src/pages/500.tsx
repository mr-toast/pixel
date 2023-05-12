import { Link } from '~/components/link'

export default function Custom500() {
  return (
    <>
      <main className="bg-zinc-950">
        <div className="flex flex-col justify-center items-center h-screen mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-50 sm:text-5xl">500</h1>
          <p className="mb-8 text-zinc-50">It&apos;s bad, I mean really bad, there&apos;s fire and tears and stuff.</p>
					<Link href="/" format="button" color="white" className="hover:bg-zinc-50 max-w-min px-6 py-1 rounded-full animate-pulse hover:animate-none">
						<span className="">reset</span>
					</Link>
				</div>
      </main>
    </>
  )
}
