import ThemeSwitcher from '@components/themeSwitcher/themeSwitcher'

export function navbar() {
  return (
    <div className="container max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-end">
        <ThemeSwitcher />
      </div>
    </div>
  )
}
