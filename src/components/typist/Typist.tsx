// TODO replace IntersectionObserver with ahooks

import { useState, useRef, useEffect } from 'react'
import ReactTypist from 'react-typist-component'

type TypistProps = {
  children: string
  withPrompt: boolean
}

const Cursor = <span className="inline-block h-4 w-2 animate-pulse bg-zinc-950 leading-5 dark:bg-zinc-50" />

export function Typist(props: TypistProps) {
  const { children, withPrompt = false } = props
  const [isPaused, setIsPaused] = useState(true)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set the 'isPaused' state based on the component's visibility
          setIsPaused(!entry.isIntersecting)
        })
      },
      { threshold: 0.2 } // Adjust the threshold if necessary
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
      <div ref={ref} className="flex items-center gap-2">
        {withPrompt && (
          <span className="grow-0" role="presentation">
            &gt;
          </span>
        )}
        <ReactTypist
          startDelay={1000}
          typingDelay={70}
          cursor={Cursor}
          loop
          finishDelay={5000}
          pause={isPaused}
          aria-hidden
        >
          {children}
        </ReactTypist>
        <span className="sr-only">{children}</span>
      </div>
    </>
  )
}
