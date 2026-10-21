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
    <nav className="hidden lg:flex flex-col gap-4 fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={clsx(
            'font-mono text-[11px] tracking-[0.1em] transition-colors duration-200',
            active === id
              ? 'text-[#1a1a1a] border-l-2 border-[#a02334] pl-2'
              : 'text-[#b0b0b0] pl-[10px]'
          )}
        >
          {id}
        </a>
      ))}
    </nav>
  )
}
