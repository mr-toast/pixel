import { Image } from '~/components/image'
import { twMerge } from 'tailwind-merge'

type VimeoProps = {
  id: string
  isBackground: boolean
  className?: string
  format?: string
  imageUrl?: string
}

export function Vimeo(props: VimeoProps) {
  const { className, id, isBackground = false, imageUrl } = props
  const query = `${id}` + (isBackground ? '?background=1' : '')
  const srcUrl = `https://player.vimeo.com/video/${query}`

  const classes = twMerge(
    'relative aspect-video [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:object-cover',
    className
  )

  return (
    <div className={classes}>
      {imageUrl && <Image src={imageUrl} alt="" role="presentation" />}
      <iframe src={srcUrl} allow="autoplay; fullscreen" allowFullScreen></iframe>
    </div>
  )
}
