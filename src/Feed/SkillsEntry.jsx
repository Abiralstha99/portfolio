import skillsData from '../data/skills.json'
import FeedEntry from './FeedEntry'

function SkillsEntry() {
  return (
    <FeedEntry id="skills">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-4">
        Skills
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-8">
        Tools &amp; Technologies
      </h2>

      <div className="space-y-6">
        {skillsData.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6b6b6b] mb-3">
              {group.category}
            </p>
            <p className="font-mono text-[13px] text-[#1a1a1a] leading-relaxed">
              {group.skills.map((skill) => skill.name).join('  ·  ')}
            </p>
          </div>
        ))}
      </div>
    </FeedEntry>
  )
}

export default SkillsEntry
