import { Pin } from 'lucide-react'
import FeedEntry from './FeedEntry'
import { socialLinks } from '../data/social'

function AboutEntry() {
  return (
    <FeedEntry id="about" pinned>
      <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8a8a8a] mb-6">
        <Pin size={12} strokeWidth={2} />
        <span>Pinned</span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl text-[#e8e8e6] mb-6">
        Abiral Shrestha
      </h1>

      <p className="text-[15px] text-[#e8e8e6] leading-relaxed mb-6 max-w-[65ch]">
        Hi, I'm Abiral, a sophomore at Gettysburg College studying Computer Science.
        I am a dedicated Software Engineer specializing in full-stack application development.
      </p>

      <div className="space-y-4 text-[15px] text-[#c4c4c2] leading-relaxed max-w-[65ch] mb-8">
        <p>
          I started coding because I was curious, and now I can't stop building stuff.
          Some projects are useful, some are just for fun, and some teach me what not
          to do again.
        </p>
        <p>
          Most of my work is in React and TypeScript. I like the challenge of making
          things that are fast, look good, and don't break when people actually use them.
        </p>
        <p>
          Right now I'm learning backend development with NestJS and figuring out how
          to build systems that scale. Still early in the journey, but that's the fun part.
        </p>
      </div>

      <p className="text-[12px] tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
        Education
      </p>
      <p className="text-[15px] text-[#e8e8e6] mb-8">
        Gettysburg College — B.S. Computer Science
      </p>

      <div className="flex flex-wrap items-center gap-5">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.05em] text-[#8a8a8a] hover:text-[#d4a15f] transition-colors duration-200"
          >
            <Icon size={16} strokeWidth={1.75} />
            {label}
          </a>
        ))}
      </div>
    </FeedEntry>
  )
}

export default AboutEntry
