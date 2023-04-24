type HeaderCenteredProps = {
  cms: HeaderCentered
  id: string
}

export function HeaderCentered(props: HeaderCenteredProps) {
  const { cms, id } = props
  return (
    <div id={id} className=" px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{cms.heading}</h2>
        <p className="mt-6 text-lg leading-8 text-zinc-950 dark:text-zinc-50">{cms.body}</p>
      </div>
    </div>
  )
}
