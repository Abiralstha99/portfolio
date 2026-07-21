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
          className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
        >
          <Icon size={20} weight="regular" />
        </a>
      ))}
    </div>
  )
}

export default Social