// TODO convert to zustand
import { useState, forwardRef } from 'react'
import { default as NextImage } from 'next/image'
import { twMerge } from 'tailwind-merge'

type Sizes = [number | undefined, number?, (string | undefined)?][] | string

interface ImageProps {
  src: string
  width?: number
  height?: number
  blurDataURL?: string
  alt: string
  className?: string
  onIsLoaded?: () => void
  role?: string
  isVignette?: boolean
  sizes?: Sizes
}

const generateSizesQuery = (sizes: Sizes) => {
  if (typeof sizes === 'string') return sizes
  return sizes.length === 0
    ? '100vw'
    : sizes
        .map(([minQuery, width, unit]) => {
          const u = unit || 'vw'
          return minQuery ? `(min-width: ${minQuery}${u}) ${width}${u}` : `100vw`
        })
        .join(', ')
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(function (props, forwardedRef) {
  const { className, isVignette, sizes = [], ...rest } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const classes = twMerge(
    'image-wrapper w-full h-auto transition-opacity duration-200 ease-in-out overflow-hidden [&>img]:object-cover [&>img]:w-full [&>img]:h-full',
    isLoaded ? 'opacity-1' : 'opacity-0',
    isVignette && 'absolute inset-0 filter blur-[2px] opacity-50',
    className
  )

  return (
    <div ref={forwardedRef} className={classes}>
      <NextImage
        // BUG work out why this is throwing an error
        // placeholder="blur"
        onLoadingComplete={() => setIsLoaded(true)}
        draggable="false"
        sizes={generateSizesQuery(sizes)}
        {...rest}
      />
    </div>
  )
})
