import { ReactNode, useEffect } from 'react'
import { create } from 'zustand'

type NavbarWrapperProps = {
  children: ReactNode
}

type NavbarWrapperStore = {
  visible: boolean
  lastScrollPos: number
  setVisible: (visible: boolean) => void
  handleScroll: () => void
}

const useNavbarStore = create<NavbarWrapperStore>((set, get) => ({
  visible: true,
  lastScrollPos: 0,
  setVisible: (visible) => set({ visible }),
  handleScroll: () => {
    const { visible } = get()
    const currentScrollPos = window.pageYOffset
    set({
      visible:
        currentScrollPos === 0
          ? true
          : visible
          ? currentScrollPos < get().lastScrollPos
          : currentScrollPos < get().lastScrollPos - 20,
    })
    set({ lastScrollPos: currentScrollPos })
  },
}))

export function NavbarWrapper(props: NavbarWrapperProps) {
  const { children } = props
  const visible = useNavbarStore((state) => state.visible)
  const handleScroll = useNavbarStore((state) => state.handleScroll)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed left-0 right-0 top-0 z-20 transform shadow-md transition-all duration-200"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      {children}
    </div>
  )
}
