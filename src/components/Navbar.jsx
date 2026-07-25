function Navbar() {
  return (
    <nav className="border-b border-[#e5e5e5]">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a
          href="#about"
          className="font-display text-lg text-[#1a1a1a] hover:text-[#a02334] transition-colors"
        >
          Abiral Shrestha
        </a>

        <div className="flex items-center gap-6">
          {['about', 'skills', 'experience', 'projects'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-[11px] tracking-[0.08em] text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
