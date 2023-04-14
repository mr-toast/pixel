import { forwardRef, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'green' | 'black' | 'white' | 'transparent'
  format?: 'small' | 'normal' | 'icon'
  className?: string
  onClick?: () => void
}

const styleMap = {
  green:
    'bg-mint-9 border border-black hover:bg-emerald-400 focus-visible:outline-mint-9 dark:border-mintDark-10 dark:hover:bg-mintDark-10',
  black: 'bg-black text-white hover:bg-white hover:text-black focus-visible:outline-black',
  white: 'bg-white hover:bg-green-400 focus-visible:outline-white',
  transparent: 'bg-transparent hover:bg-white focus-visible:outline-transparent',
}

export function buttonStyles({ color = 'black', disabled, format }: ButtonProps) {
  return twMerge(
    'inline-flex gap-x-4 items-center justify-center rounded-md text-black bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 [&>svg]:h-4 [&>svg]:w-4',
    // styleMap[color],
    format === 'small' && 'text-xs',
    format === 'icon' && 'px-2.5 rounded-full'
    // disabled &&
    //   'bg-slate-400 border-slate-400 text-slate-800 hover:bg-slate-500 hover:border-slate-500 cursor-not-allowed'
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
  const { color = 'black', children, className, format = 'normal', ...rest } = props

  const classes = twMerge(buttonStyles({ color, disabled: props.disabled, format }), className)

  return (
    <button ref={forwardedRef} className={classes} {...rest}>
      {children}
    </button>
  )
})
