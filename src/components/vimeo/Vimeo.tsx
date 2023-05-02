import { useEffect, useRef, useState } from 'react'
import VimeoPlayer from '@vimeo/player'
import { Image } from '~/components/image'
import { twMerge } from 'tailwind-merge'

export function Vimeo(props: VimeoVideo) {
  const [isLoaded, setIsLoaded] = useState(false)
  const playerRef = useRef(null)
  const { className, videoId, isBackground = false, imageUrl } = props

  const width = 1920
  const height = 1080

  useEffect(() => {
    if (!playerRef.current) return
    const player = new VimeoPlayer(playerRef.current, {
      id: videoId,
      width,
      height,
      muted: true,
      loop: true,
      autoplay: true,
    })

    player.on('loaded', function () {
      player.play()
    })

    player.on('playing', function () {
      setIsLoaded(true)
    })

    // player.on('pause', function () {})

    const onIntersection: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      if (entry?.isIntersecting) {
        player.play()
      } else {
        player.pause()
      }
    }

    const observerOptions = {
      root: null,
      threshold: 0,
    }

    const observer = new IntersectionObserver(onIntersection, observerOptions)
    observer.observe(playerRef.current)

    return () => {
      observer.disconnect()
      player.destroy()
    }
  }, [videoId, width, height])

  const classes = twMerge(
    'relative aspect-video [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:object-cover [&>iframe]:transition-opacity',
    isLoaded ? '[&>iframe]:opacity-100' : '[&>iframe]:opacity-0',
    className
  )

  return (
    <div className={classes} ref={playerRef}>
      {!isLoaded && <Image src={imageUrl} alt="" width={width} height={height} priority />}
    </div>
  )
}
