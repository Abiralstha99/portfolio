import FeedEntry from './FeedEntry'
import { socialLinks } from '../data/social'

function AboutEntry() {
  return (
    <FeedEntry id="about">
      <h1 className="font-display text-4xl sm:text-5xl leading-tight text-[#1a1a1a] mb-6">
        Abiral Shrestha
      </h1>

      <p className="text-[18px] text-[#1a1a1a] leading-relaxed mb-6">
        Hi, I'm Abiral, a sophomore at Gettysburg College studying Computer Science.
        I am a dedicated Software Engineer specializing in full-stack application development.
      </p>

      <div className="space-y-5 text-[17px] text-[#3a3a3a] leading-[1.75] mb-8">
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

      <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6b6b6b] mb-2">
        Education
      </p>
      <p className="text-[17px] text-[#1a1a1a] mb-8">
        Gettysburg College — B.S. Computer Science
      </p>

      <div className="flex flex-wrap items-center gap-5">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2 font-mono text-[13px] text-[#6b6b6b] hover:text-[#a02334] transition-colors duration-200"
          >
            <Icon size={16} weight="regular" />
            {label}
          </a>
        ))}
      </div>
    </FeedEntry>
  )
}

export default AboutEntry
