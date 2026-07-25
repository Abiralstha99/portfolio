import { socialLinks } from '../data/social'

const footerLinks = socialLinks.filter((l) => ['Email', 'GitHub', 'LinkedIn'].includes(l.label))

function Footer() {
  return (
    <footer className="max-w-[680px] mx-auto px-6 sm:px-8">
      <div className="border-t border-[#e5e5e5] flex items-center justify-between py-6">
        <div className="flex items-center gap-5">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              <Icon size={20} weight="regular" />
            </a>
          ))}
        </div>
        <span className="font-mono text-[13px] text-[#6b6b6b]">© 2026</span>
      </div>
    </footer>
  )
}

export default Footer
