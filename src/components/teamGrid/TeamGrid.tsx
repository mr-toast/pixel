import Image from 'next/image'
import { Link } from '~/components/link'
import GithubIcon from '/public/svg/github.svg'
import TwitterIcon from '/public/svg/twitter.svg'
import UpworkIcon from '/public/svg/upwork.svg'

export function TeamGrid({ cms }) {
  return (
    <div className="py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{cms.team.heading}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-mintDark-10">{cms.team.body}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {cms.team.people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto aspect-square w-72 rounded-full"
                src={person.imageUrl}
                alt={`${person.name} profile picture`}
                height="288"
                width="288"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
              <p className="text-sm leading-6 dark:text-mintDark-10">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                {person.upwork && (
                  <li>
                    <Link href={person.upwork} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Upwork</span>
                      <UpworkIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </li>
                )}
                {person.github && (
                  <li>
                    <Link href={person.github} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Github</span>
                      <GithubIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </li>
                )}
                {person.twitter && (
                  <li>
                    <Link href={person.twitter} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <TwitterIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
