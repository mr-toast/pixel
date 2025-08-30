import { useState, useEffect } from 'react'

export function useResponsive() {
  const [responsive, setResponsive] = useState<{ sm?: boolean; md?: boolean; lg?: boolean }>({})

  useEffect(() => {
    const updateResponsive = () => {
      const sm = window.matchMedia('(min-width: 640px)').matches
      const md = window.matchMedia('(min-width: 768px)').matches
      const lg = window.matchMedia('(min-width: 1024px)').matches
      setResponsive({ sm, md, lg })
    }

    updateResponsive()
    
    const mediaQueries = [
      window.matchMedia('(min-width: 640px)'),
      window.matchMedia('(min-width: 768px)'),
      window.matchMedia('(min-width: 1024px)')
    ]
    
    mediaQueries.forEach(mq => mq.addEventListener('change', updateResponsive))
    
    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', updateResponsive))
    }
  }, [])

  return responsive
}