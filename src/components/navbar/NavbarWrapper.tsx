import { create } from 'zustand'
import { ReactNode, useEffect, useRef, useLayoutEffect, RefObject } from 'react'
import { twMerge } from 'tailwind-merge'
import { useResponsive } from 'ahooks'
type NavbarWrapperProps = {
  children: ReactNode
  backgroundColor?: string
}

type NavbarWrapperStore = {
  visible: boolean
  lastScrollPos: number
  isTransparent: boolean
  pageTopOffset: number
  setVisible: (visible: boolean) => void
  setIsTransparent: (isTransparent: boolean) => void
  handleScroll: () => void
}

const useNavbarStore = create<NavbarWrapperStore>((set, get) => ({
  visible: true,
  lastScrollPos: 0,
  isTransparent: true,
  pageTopOffset: 0,
  setVisible: (visible) => set({ visible }),
  setIsTransparent: (isTransparent) => set({ isTransparent }),

  handleScroll: () => {
    const { visible, lastScrollPos, isTransparent } = get()
    const currentScrollPos = window.pageYOffset
    const isAtTop = currentScrollPos === 0
    const isScrollingUp = currentScrollPos < lastScrollPos
    const shouldTransparent = currentScrollPos <= get().pageTopOffset

    if (isTransparent !== shouldTransparent) {
      set({ isTransparent: shouldTransparent })
    }

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
  const responsive = useResponsive()
  const pageTopOffset = responsive?.sm ? 240 : 160
  const visible = useNavbarStore((state) => state.visible)
  const isTransparent = useNavbarStore((state) => state.isTransparent)
  const handleScroll = useNavbarStore((state) => state.handleScroll)

  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    useNavbarStore.setState({ pageTopOffset: pageTopOffset })
  }, [pageTopOffset])

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
    'fixed left-0 right-0 top-0 z-20 transform  transition-all duration-300 ease-in-out',
    visible ? 'translate-y-0' : '-translate-y-full',
    isTransparent ? 'bg-transparent shadow-none' : 'bg-zinc-50 dark:dark:bg-zinc-950 shadow-md'
  )

  return <div className={classes}>{children}</div>
}
