import { forwardRef } from 'react'
import { default as NextLink } from 'next/link'
import { twMerge } from 'tailwind-merge'
import { buttonStyles } from '../button'

type LinkProps = {
  children: React.ReactNode
  className?: string
  color?: 'black' | 'white' | 'transparent'
  decoration?: 'none' | 'always' | 'hoverOnly'
  decorationStyle?: 'solid' | 'fancy'
  href?: string
  rel?: string
  target?: string
  format?: 'button' | 'link'
  disabled?: boolean
  onClick?: () => void
}

const styleMap = {
  always: 'pb-2 bg-[]',
  hoverOnly: 'pb-2 bg-none hover:bg-[]',
  none: 'bg-none',
}

/**
 * Link
 * @packageDocumentation
 * @module Link
 *
 * @remarks
 * Renders an <a> tag with optoinal decoration
 * Uses next/link for internal links
 * @example
 * ```jsx
 * <Link href="https://website.com" decoration=''>Link Text</Link>
 * ```
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function (props, forwardedRef) {
  const {
    children,
    className,
    decoration = 'none',
    decorationStyle,
    format = 'link',
    color = 'transparent',
    href,
    onClick,
  } = props

  // If there is no href just return the children
  if (!href || href.length === 0) return <>{children}</>

  // Determin if the link is internal or external
  const linkType = !href ? null : href.includes('http') ? 'external' : 'internal'

  const classes = twMerge(
    format === 'button'
      ? buttonStyles({ color, disabled: props.disabled })
      : 'text-inherit bg-bottom bg-repeat-x hover:animate-scroll',
    className,
    format !== 'button' && decoration && decorationStyle === 'fancy' && styleMap[decoration],
    format !== 'button' && decoration && decorationStyle === 'solid' && 'underline'
  )

  return (
    <>
      {linkType === 'internal' ? (
        <NextLink ref={forwardedRef} href={href} className={classes} onClick={onClick} passHref>
          {children}
        </NextLink>
      ) : (
        <a ref={forwardedRef} href={href} target="_blank" rel="noopener" className={classes}>
          {children}
        </a>
      )}
    </>
  )
})
