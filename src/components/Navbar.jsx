import { socialLinks } from '../data/social'

const navbarOrder = ['Resume', 'GitHub', 'LinkedIn', 'Email']

function Navbar() {
  const links = navbarOrder
    .map((label) => socialLinks.find((link) => link.label === label))
    .filter(Boolean)

  return (
    <nav>
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a
          href="#about"
          className="font-display text-lg whitespace-nowrap text-[#1a1a1a] hover:text-[#a02334] transition-colors"
        >
          Abiral Shrestha
        </a>

        <div className="flex items-center gap-1 sm:gap-5">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="p-1 sm:p-0 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              <Icon size={20} weight="regular" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
