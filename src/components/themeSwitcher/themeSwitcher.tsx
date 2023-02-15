'use client'

// Hooks
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Icons
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 cursor-default items-center rounded-full border border-black p-2 hover:bg-mint-10 dark:border-mintDark-7 dark:hover:border-mintDark-8 dark:hover:bg-mintDark-3"
      onClick={switchTheme}
    >
      <span className="sr-only">Theme Switcher</span>
      {theme === 'light' ? (
        <MoonIcon className="h-12 w-12" aria-hidden="true" />
      ) : (
        <SunIcon className="h-12 w-12" aria-hidden="true" />
      )}
    </button>
  )
}
