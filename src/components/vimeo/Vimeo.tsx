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

    const createPlayer = async () => {
      try {
        const newPlayer = new VimeoPlayer(playerRef.current as HTMLElement, {
          id: videoId,
          width,
          height,
          muted: true,
          loop: true,
          autoplay: true,
        })

        newPlayer.on('loaded', function () {
          newPlayer.play()
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

    createPlayer()

    return () => {
      player?.destroy()
      // console.log('destroyed')
    }
  }, [videoId, width, height])

  useEffect(() => {
    if (!player || !isLoaded) return

    const onIntersection: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      if (entry?.isIntersecting) {
        player.play()
      } else {
        player.pause()
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
