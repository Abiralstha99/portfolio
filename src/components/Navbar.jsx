import { useState, useEffect } from 'react'
import Social from './Social'
import { socialLinks } from '../data/social'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const resume = socialLinks.find((link) => link.label === 'Resume')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur border-b border-[#1f1f1f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[720px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a
          href="#about"
          className="font-display text-base text-[#e8e8e6] hover:opacity-70 transition-opacity"
        >
          Abiral Shrestha
        </a>

        <div className="flex items-center gap-5">
          <Social />
          {resume && (
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.1em] uppercase text-[#8a8a8a] hover:text-[#d4a15f] transition-colors duration-200"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
