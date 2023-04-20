'use client'

import { Button } from '~/components/button'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
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
    <Button type="button" format="icon" className="border border-zinc-950 dark:border-zinc-50" onClick={switchTheme}>
      <span className="sr-only">Theme Switcher</span>
      {theme === 'light' ? (
        <MoonIcon className="h-12 w-12" aria-hidden="true" />
      ) : (
        <SunIcon className="h-12 w-12" aria-hidden="true" />
      )}
    </Button>
  )
}
