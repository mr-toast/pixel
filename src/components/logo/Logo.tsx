// TODO add css glow/flicker effect to logo
// TODO extend logo by adding site name to monogram

import React, { forwardRef } from 'react'
import { useTheme } from 'next-themes'
import { twMerge } from 'tailwind-merge'

type LogoProps = {
  className?: string
}

export const Logo = forwardRef<SVGSVGElement, LogoProps>((props, ref) => {
  const { className } = props
  const theme = useTheme()

  const classes = twMerge('shadow-[-35px 0px 60px 8px white]', className)

  return (
    <svg className={classes} width="100%" height="100%" viewBox="0 0 544 544" ref={ref}>
      <rect x="0" y="0" width="544" height="544" className="fill-zinc-950 opacity-100 dark:fill-zinc-50" />
      <rect x="206" y="336.055" width="66" height="87.945" className="fill-zinc-400 dark:fill-zinc-500" />
      <rect x="140" y="248.028" width="66" height="87.945" className="fill-zinc-500 dark:fill-zinc-400" />
      <rect x="74" y="160" width="66" height="87.945" className="fill-zinc-400 dark:fill-zinc-500" />
      <rect x="206" y="248.028" width="66" height="87.945" className="fill-zinc-300 dark:fill-zinc-600" />
      <rect x="140" y="160" width="66" height="87.945" className="fill-zinc-300 dark:fill-zinc-600" />
      <rect x="206" y="160" width="66" height="87.945" className="fill-zinc-200 dark:fill-zinc-700" />
      <path
        d="M272,160l-0,264l66,0l-0,-55l132,0l-0,-209l-198,0Zm132,143l-66,0l-0,-77l66,0l-0,77Z"
        className="fill-zinc-100 dark:fill-zinc-800"
      />
    </svg>
  )
})
