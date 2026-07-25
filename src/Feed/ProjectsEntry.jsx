import projects from '../data/projects.json'
import FeedEntry from './FeedEntry'

const extractDomain = (url) => {
  try { return new URL(url).hostname.replace('www.', '') } catch { return url }
}

function ProjectCard({ project }) {
  const href = project.liveLink ?? project.githubLink
  const domain = extractDomain(href)
  const stackLabel = project.stack.join('  ·  ')

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="border border-[#e5e5e5] rounded-lg p-5 group-hover:border-[#d0d0d0] transition-colors duration-200">
        <div className="flex justify-between items-start">
          <span className="font-semibold text-[17px] text-[#1a1a1a]">{project.title}</span>
          <span className="text-[#6b6b6b] group-hover:text-[#a02334] transition-colors duration-200 text-[16px] leading-none mt-0.5">↗</span>
        </div>
        <p className="mt-2 text-[15px] text-[#3a3a3a] leading-relaxed line-clamp-2">{project.description}</p>
        <p className="mt-3 font-mono text-[12px] text-[#6b6b6b]">{stackLabel}</p>
        <p className="mt-3 font-mono text-[11px] text-[#9b9b9b]">{domain}</p>
      </div>
    </a>
  )
}

function ProjectsEntry() {
  return (
    <FeedEntry id="projects">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-4">Projects</p>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-8">Some of the things I've been building.</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </FeedEntry>
  )
}

export default ProjectsEntry
