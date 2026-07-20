import FeedEntry from './FeedEntry'
import inhibitorImage from '../assets/projects/Inhibitor.png'
import cinemasImage from '../assets/projects/cinemas.png'
import footstepsImage from '../assets/projects/footsteps.png'
import hennestImage from '../assets/projects/hennest.png'
import huffmanImage from '../assets/projects/huffman.png'
import mrgImage from '../assets/projects/mrg.png'

// Local project images (in src/assets) – key must match the "image" value in projects.json
const projectImageMap = {
  inhibitor: inhibitorImage,
  cinemas: cinemasImage,
  footsteps: footstepsImage,
  hennest: hennestImage,
  huffman: huffmanImage,
  mrg: mrgImage,
}

function ProjectEntry({ project, index }) {
  const image = projectImageMap[project.image?.toLowerCase()] ?? null

  return (
    <FeedEntry id={`project-${index}`}>
      <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8a8a] mb-4">
        Project {String(index + 1).padStart(2, '0')}
      </p>

      {image && (
        <img
          src={image}
          alt={`${project.title} preview`}
          className="w-full rounded-md mb-6 border border-[#1f1f1f]"
        />
      )}

      <h2 className="font-display text-2xl sm:text-3xl text-[#e8e8e6] mb-4">
        {project.title}
      </h2>

      <p className="text-[15px] text-[#c4c4c2] leading-relaxed max-w-[65ch] mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-6">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-[0.05em] text-[#8a8a8a] hover:text-[#d4a15f] transition-colors duration-200"
          >
            Live →
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-[0.05em] text-[#8a8a8a] hover:text-[#d4a15f] transition-colors duration-200"
          >
            GitHub →
          </a>
        )}
        {project.youtubeLink && (
          <a
            href={project.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-[0.05em] text-[#8a8a8a] hover:text-[#d4a15f] transition-colors duration-200"
          >
            YouTube →
          </a>
        )}
      </div>
    </FeedEntry>
  )
}

export default ProjectEntry
