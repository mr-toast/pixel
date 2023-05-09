// TODO add new effects and styles to buttons

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'black' | 'white' | 'transparent'
  format?: 'small' | 'normal' | 'icon'
  className?: string
  onClick?: () => void
}

const styleMap = {
  black: 'text-zinc-50 hover:text-zinc-50 bg-zinc-800 hover:bg-zinc-700 focus-visible:outline-zinc-800',
  white: 'text-zinc-950 bg-zinc-200 hover:bg-zinc-400 focus-visible:outline-zinc-200',
  transparent:
    'bg-transparent hover:bg-zinc-950/25 dark:hover:bg-zinc-50/25 shadow-none focus-visible:outline-zinc-950/25 dark:focus-visible:outline-zinc-50/25',
}

export function buttonStyles({ color = 'transparent', disabled, format }: ButtonProps) {
  return twMerge(
    // Generic shape and size
    'inline-flex gap-x-4 items-center justify-center rounded-md px-3.5 py-2.5 text-center text-sm font-semibold [&>svg]:h-4 [&>svg]:w-4',
    // Shadow and effects
    'shadow-sm hover:shadow-none',
    // Focus ring settings
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    // Color variants
    styleMap[color],
    // Formats
    format === 'icon' && 'px-2.5 rounded-full',
    format === 'small' && 'text-xs',
    // Disabled state
    disabled && 'bg-zinc-400 hover:bg-zinc-500 text-zinc-800 cursor-not-allowed'
  )
}

/**
 * Button
 * @packageDocumentation
 * @module Button
 *
 * @remarks
 * You can place and SVG igon inside the button on either side of the text
 * @example
 * ```jsx
 * <Button onClick={() => console.log('click')}>Click Me</Button>
 * <Button href="https://website.com">Click Me</Button>
 * <Button><Svg />Click Me</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonComponent(props, forwardedRef) {
  const { color = 'transparent', children, className, format = 'normal', ...rest } = props

  const classes = twMerge(buttonStyles({ color, disabled: props.disabled, format }), className)

  return (
    <button ref={forwardedRef} className={classes} {...rest}>
      {children}
    </button>
  )
})
Button.displayName = 'Button'
