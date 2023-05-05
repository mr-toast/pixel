import { useEffect, useRef, useState } from 'react'
import VimeoPlayer from '@vimeo/player'
import { Image } from '~/components/image'
import { twMerge } from 'tailwind-merge'

export function Vimeo(props: VimeoVideo) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [player, setPlayer] = useState<VimeoPlayer | null>(null)
  const playerRef = useRef<HTMLDivElement | null>(null)
  const { className, videoId, isBackground = false, imageUrl } = props

  const width = 1280
  const height = 720

  useEffect(() => {
    if (!playerRef.current) return

    // eslint-disable-next-line @typescript-eslint/require-await
    const createPlayer = async () => {
      try {
        const newPlayer = new VimeoPlayer(playerRef.current as HTMLElement, {
          id: videoId,
          width,
          height,
          muted: isBackground,
          loop: isBackground,
          autoplay: isBackground,
        })

        newPlayer.on('loaded', function () {
          isBackground ? newPlayer.play().catch(console.error) : newPlayer.pause().catch(console.error)
          // console.log('loaded')
        })

        newPlayer.on('playing', function () {
          setIsLoaded(true)
          // console.log('playing')
        })

        setPlayer(newPlayer)
      } catch (error) {
        console.error('Error creating VimeoPlayer', error)
        return
      }
    }

    createPlayer().catch(console.error)

    return () => {
      player?.destroy().catch(console.error)
      // console.log('destroyed')
    }
  }, [videoId, width, height, isBackground, player])

  useEffect(() => {
    if (!player || !isLoaded) return

    const onIntersection: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      if (entry?.isIntersecting) {
        player.play().catch(console.error)
      } else {
        player.pause().catch(console.error)
      }
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0,
    }

    const observer = new IntersectionObserver(onIntersection, observerOptions)
    if (playerRef.current) {
      observer.observe(playerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [player, isLoaded])

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
