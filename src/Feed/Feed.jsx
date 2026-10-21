import AboutEntry from './AboutEntry'
import EducationEntry from './EducationEntry'
import SkillsEntry from './SkillsEntry'
import ExperienceEntry from './ExperienceEntry'
import ProjectsEntry from './ProjectsEntry'

function Feed() {
  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8">
      <AboutEntry />
      <EducationEntry />
      <SkillsEntry />
      <ExperienceEntry />
      <ProjectsEntry />
    </div>
  )
}

export default Feed
