import { forwardRef, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'green' | 'black' | 'white' | 'transparent'
  format?: 'small' | 'normal' | 'icon'
  className?: string
  onClick?: () => void
}

const styleMap = {
  // green:
  //   'bg-mint-9 border border-black hover:bg-emerald-400 focus-visible:outline-mint-9 dark:border-mintDark-10 dark:hover:bg-mintDark-10',
  green: 'text-black bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-600',
  black: 'text-white hover:text-black bg-black hover:bg-white focus-visible:outline-black',
  white: 'text-black bg-white hover:bg-slate-300 focus-visible:outline-white',
  transparent:
    'bg-transparent hover:bg-black/25 dark:hover:bg-white/25 shadow-none focus-visible:outline-black/25 dark:focus-visible:outline-white/25',
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
    disabled && 'bg-slate-400 hover:bg-slate-500 text-slate-800 cursor-not-allowed'
  )
}

/**
 * Button
 * @packageDocumentation
 * @module Button
 *
 * @remarks
 * The button will render the correct element <a> | <button> | <div> based on onClick and href
 * You can place and SVG igon inside the button on either side of the text
 * @example
 * ```jsx
 * <Button onClick={() => console.log('click')}>Click Me</Button>
 * <Button href="https://website.com">Click Me</Button>
 * <Button><Svg />Click Me</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (props, forwardedRef) {
  const { color = 'transparent', children, className, format = 'normal', ...rest } = props

  const classes = twMerge(buttonStyles({ color, disabled: props.disabled, format }), className)

  return (
    <button ref={forwardedRef} className={classes} {...rest}>
      {children}
    </button>
  )
})
