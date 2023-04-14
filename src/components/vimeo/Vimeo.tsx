import { Image } from '~/components/image'

// NOTE decide on src format later on then cleanup types
type VimeoProps = {
  id: string
  src: string
  options: any
  format: string
  imageUrl: string
}

export function Vimeo(props: VimeoProps) {
  const { id, src, options, format, imageUrl } = props
  const srcUrl = `https://player.vimeo.com/video/${id}${options}`
  return (
    <div className="relative aspect-video bg-gray-700   [&>iframe]:absolute [&>iframe]:left-0 [&>iframe]:top-0 [&>iframe]:h-full [&>iframe]:w-full">
      <Image src={imageUrl} alt="" role="presentation" className="absolute left-0 top-0 h-full w-full" />
      <iframe src={srcUrl} allow="autoplay; fullscreen" allowFullScreen></iframe>
    </div>
  )
}
