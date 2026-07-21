import { motion as Motion, useScroll } from 'framer-motion'

// Thin left-margin bar that fills top→bottom as the page scrolls.
function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 bottom-0 w-[2px] bg-[#a02334] origin-top z-50"
      style={{ scaleY: scrollYProgress }}
    />
  )
}

export default ReadingProgress
