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

      {experiences.map((entry, index) => {
        const destination = entry.companyUrl || (entry.url ? `https://${entry.url}` : entry.organizationUrl)

        return (
          <div
            key={index}
            className={`relative border border-[#e5e5e5] rounded-lg p-5 mb-4 last:mb-0 ${destination ? 'group hover:border-[#d0d0d0] focus-within:border-[#d0d0d0] transition-colors duration-200' : ''}`}
          >
            {destination && (
              <a
                href={destination}
                aria-label={`Visit ${entry.company}`}
                className="absolute inset-0 z-10 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
              />
            )}
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start sm:gap-4">
              <span className="font-semibold text-[16px] text-[#1a1a1a]">
                {entry.role}
              </span>
              <span className="font-mono text-[11px] text-[#6b6b6b] sm:mt-0.5 sm:shrink-0">
                {entry.period}
              </span>
            </div>
            <p className="text-[14px] text-[#6b6b6b] mt-1">
              {destination ? (
                <a href={destination} className="relative z-20 group-hover:text-[#a02334] hover:underline focus-visible:underline">
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}
              {entry.formerName && ` (formerly ${entry.formerName})`}
              {entry.organization && (
                <>
                  {' × '}
                  <a href={entry.organizationUrl} className="relative z-20 hover:text-[#a02334] hover:underline focus-visible:underline">
                    {entry.organization}
                  </a>
                </>
              )}
            </p>
            <p className="text-[15px] text-[#3a3a3a] leading-relaxed mt-2">
              {entry.description}
            </p>
            {entry.url && (
              <p className="font-mono text-[11px] text-[#6b6b6b] mt-3">
                <a href={entry.companyUrl || `https://${entry.url}`} className="relative z-20 hover:text-[#a02334] hover:underline focus-visible:underline">
                  {entry.url}
                </a>
              </p>
            )}
          </div>
        )
      })}
    </FeedEntry>
  )
}

export default ExperienceEntry
