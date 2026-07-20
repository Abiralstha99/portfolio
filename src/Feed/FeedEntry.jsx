// Aliased to a PascalCase name so the linter's varsIgnorePattern treats it as
// used (JSX member usage `Motion.article` isn't tracked by this config).
import { motion as Motion } from 'framer-motion'

function FeedEntry({ id, pinned = false, children }) {
  return (
    <Motion.article
      id={id}
      className={`py-14 sm:py-20 border-b border-[#1f1f1f] last:border-b-0 ${
        pinned ? 'border-l-2 border-l-[#d4a15f] pl-6 -ml-6 bg-[rgba(212,161,95,0.06)]' : ''
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Motion.article>
  )
}

export default FeedEntry
