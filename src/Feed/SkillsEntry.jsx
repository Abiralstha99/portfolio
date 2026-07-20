import skillsData from '../data/skills.json'
import FeedEntry from './FeedEntry'

function SkillsEntry() {
  return (
    <FeedEntry id="skills">
      <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8a8a] mb-4">
        Skills
      </p>
      <h2 className="font-display text-2xl sm:text-3xl text-[#e8e8e6] mb-8">
        Tools &amp; Technologies
      </h2>

      <div className="space-y-6">
        {skillsData.map((group) => (
          <div key={group.category}>
            <p className="text-[12px] tracking-[0.15em] uppercase text-[#8a8a8a] mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-[13px] text-[#e8e8e6] border border-[#1f1f1f] rounded-full px-3 py-1"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FeedEntry>
  )
}

export default SkillsEntry
