// TODO finish poster logic and presentstion for slow connections

// import { Image } from '~/components/image'
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
      {/* show image until iframe is ready  */}
      {/* {imageUrl && <Image src={imageUrl} alt="" className="" width={1440} height={850} role="presentation" />} */}
      {/* check fro iframe to be ready */}
      {/* <iframe title="Video Hero" src={srcUrl} loading="lazy" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
      <iframe title="Video Hero" src={srcUrl} loading="lazy" allow="autoplay; fullscreen" allowFullScreen></iframe>
    </div>
  )
}
