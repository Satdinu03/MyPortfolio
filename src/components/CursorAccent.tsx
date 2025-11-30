import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorAccent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    let animationFrame: number

    const updateMousePosition = (e: MouseEvent) => {
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
      })
    }

    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed w-2 h-2 bg-violet/60 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  )
}