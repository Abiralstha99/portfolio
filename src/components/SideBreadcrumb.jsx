import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

const sections = ['about', 'education', 'skills', 'experience', 'projects']

export default function SideBreadcrumb() {
  const [active, setActive] = useState('about')
  const ratios = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current[entry.target.id] = entry.intersectionRatio
        })
        const top = Object.entries(ratios.current).reduce(
          (best, [id, ratio]) => (ratio > best.ratio ? { id, ratio } : best),
          { id: 'about', ratio: 0 }
        )
        setActive(top.id)
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav aria-label="Section navigation" className="lg:hidden max-w-[680px] mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-x-4 gap-y-2">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'location' : undefined}
            className={clsx(
              'font-mono text-[11px] tracking-[0.1em] border-b-2 pb-0.5 transition-colors duration-200 hover:text-[#a02334]',
              active === id ? 'text-[#1a1a1a] border-[#a02334]' : 'text-[#6b6b6b] border-transparent'
            )}
          >
            {id}
          </a>
        ))}
      </nav>
      <nav aria-label="Section navigation" className="hidden lg:flex flex-col gap-4 fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'location' : undefined}
            className={clsx(
              'font-mono text-[11px] tracking-[0.1em] transition-colors duration-200 hover:text-[#a02334]',
              active === id
                ? 'text-[#1a1a1a] border-l-2 border-[#a02334] pl-2'
                : 'text-[#6b6b6b] pl-[10px]'
            )}
          >
            {id}
          </a>
        ))}
      </nav>
    </>
  )
}
