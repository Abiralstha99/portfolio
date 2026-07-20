import { socialLinks } from '../data/social'

function Social() {
  const iconLinks = socialLinks.filter((link) => link.label !== 'Resume')

  return (
    <div className="flex items-center gap-4">
      {iconLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={label}
          className="text-[#8a8a8a] hover:text-[#e8e8e6] transition-colors duration-200"
        >
          <Icon size={18} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  )
}

export default Social