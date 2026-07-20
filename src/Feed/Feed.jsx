import AboutEntry from './AboutEntry'
import SkillsEntry from './SkillsEntry'
import ProjectEntry from './ProjectEntry'
import projects from '../data/projects.json'

function Feed() {
  return (
    <div className="max-w-[720px] mx-auto px-6 sm:px-8">
      <AboutEntry />
      <SkillsEntry />
      {projects.map((project, index) => (
        <ProjectEntry key={project.title} project={project} index={index} />
      ))}
    </div>
  )
}

export default Feed
