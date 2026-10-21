import { useEffect } from 'react'
import { motion as Motion, useMotionValue } from 'framer-motion'

// Thin left-margin bar that fills top→bottom as the page scrolls.
function ReadingProgress() {
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      scrollProgress.set(Math.min(1, Math.max(0, progress)))
    }

    const resizeObserver = new ResizeObserver(updateProgress)
    resizeObserver.observe(document.documentElement)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [scrollProgress])

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 bottom-0 w-[2px] bg-[#a02334] origin-top z-[60] pointer-events-none"
      style={{ scaleY: scrollProgress }}
    />
  )
}

export default ReadingProgress
