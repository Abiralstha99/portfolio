import FeedEntry from './FeedEntry'
import experiences from '../data/experience.json'

function ExperienceEntry() {
  return (
    <FeedEntry id="experience">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-4">
        Experience
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-8">
        Work & Internships
      </h2>

      {experiences.map((entry, index) => (
        <div
          key={index}
          className="border border-[#e5e5e5] rounded-lg p-5 mb-4 last:mb-0"
        >
          <div className="flex justify-between items-start">
            <span className="font-semibold text-[16px] text-[#1a1a1a]">
              {entry.role}
            </span>
            <span className="font-mono text-[11px] text-[#9b9b9b] mt-0.5">
              {entry.period}
            </span>
          </div>
          <p className="text-[14px] text-[#6b6b6b] mt-1">{entry.company}</p>
          <p className="text-[15px] text-[#3a3a3a] leading-relaxed mt-2">
            {entry.description}
          </p>
          <p className="font-mono text-[11px] text-[#9b9b9b] mt-3">{entry.url}</p>
        </div>
      ))}
    </FeedEntry>
  )
}

export default ExperienceEntry
