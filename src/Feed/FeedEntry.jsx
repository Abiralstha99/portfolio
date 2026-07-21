import { motion as Motion, useReducedMotion } from 'framer-motion'

// Shared wrapper for every feed entry: consistent vertical rhythm, a hairline
// divider between entries, and a single subtle fade/slide-up on scroll-in.
function FeedEntry({ id, children }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.article
      id={id}
      className="py-16 sm:py-20 border-b border-[#e5e5e5] last:border-b-0"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Motion.article>
  )
}

export default FeedEntry
