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
  const { className, id, isBackground = false, format, imageUrl } = props
  const query = `${id}` + (isBackground ? '?background=1' : '')
  const srcUrl = `https://player.vimeo.com/video/${query}`

  const classes = twMerge(
    'relative aspect-video bg-slate-700/25 [&>iframe]:absolute [&>iframe]:left-0 [&>iframe]:top-0 [&>iframe]:h-full [&>iframe]:w-full',
    className
  )

  return (
    <div className={classes}>
      <iframe src={srcUrl} allow="autoplay; fullscreen" allowFullScreen></iframe>
    </div>
  )
}
