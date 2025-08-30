import { Image } from '~/components/image'
import { twMerge } from 'tailwind-merge'

export function Vimeo(props: VimeoVideo) {
  const { className, videoId, isBackground = false, imageUrl } = props

  const width = 1280
  const height = 720

  const classes = twMerge(
    'relative aspect-video',
    className
  )

  if (isBackground && videoId) {
    return (
      <div className={classes}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1`}
          width={width}
          height={height}
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className={classes}>
      <Image src={imageUrl} alt="Video Poster" role="presentation" width={width} height={height} priority />
    </div>
  )
}
