import { create } from 'zustand'
import { ReactNode, useEffect, useRef, useLayoutEffect, RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

type NavbarWrapperProps = {
  children: ReactNode
  backgroundColor?: string
}

type NavbarWrapperStore = {
  visible: boolean
  lastScrollPos: number
  isTransparent: boolean
  setVisible: (visible: boolean) => void
  setIsTransparent: (isTransparent: boolean) => void
  handleScroll: () => void
}

const useNavbarStore = create<NavbarWrapperStore>((set, get) => ({
  visible: true,
  lastScrollPos: 0,
  isTransparent: true,
  setVisible: (visible) => set({ visible }),
  setIsTransparent: (isTransparent) => set({ isTransparent }),

  handleScroll: () => {
    const { visible, lastScrollPos, isTransparent } = get()
    const currentScrollPos = window.pageYOffset
    const isAtTop = currentScrollPos === 0
    const isScrollingUp = currentScrollPos < lastScrollPos

    if (isAtTop || (isScrollingUp && currentScrollPos < lastScrollPos - 20)) {
      set({ visible: true })
    } else if (!visible && isScrollingUp) {
      set({ visible: true })
    } else if (!isScrollingUp) {
      set({ visible: false })
    }

    set({ lastScrollPos: currentScrollPos })
  },
}))

export function NavbarWrapper(props: NavbarWrapperProps) {
  const { children } = props
  const visible = useNavbarStore((state) => state.visible)
  const isTransparent = useNavbarStore((state) => state.isTransparent)
  const handleScroll = useNavbarStore((state) => state.handleScroll)

  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!visible) {
      if (timeoutId.current) clearTimeout(timeoutId.current)
      timeoutId.current = setTimeout(() => {
        if (window.pageYOffset === 0) {
          useNavbarStore.getState().setVisible(true)
        } else {
          useNavbarStore.getState().setVisible(false)
        }
      }, 2000)
    }
  }, [visible])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const classes = twMerge(
    'fixed left-0 right-0 top-0 z-20 transform shadow-md transition-all duration-300 ease-in-out',
    visible ? 'translate-y-0' : '-translate-y-full',
    isTransparent ? 'bg-transparent' : 'bg-mintDark-9 dark:dark:bg-sageDark-1'
  )

  return <div className={classes}>{children}</div>
}
