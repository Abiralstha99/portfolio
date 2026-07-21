import { useRef } from 'react'
import { motion as Motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
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

const linkClass =
  'font-mono text-[12px] tracking-[0.05em] text-[#6b6b6b] hover:text-[#a02334] transition-colors duration-200'

function ProjectEntry({ project, index }) {
  const image = projectImageMap[project.image?.toLowerCase()] ?? null
  const reduceMotion = useReducedMotion()

  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  // Image drifts slightly slower than the page; no drift when reduced-motion is on.
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24])

  return (
    <FeedEntry id={`project-${index}`}>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-3">
        {project.title}
      </h2>

      <p className="text-[17px] text-[#3a3a3a] leading-[1.75] mb-4">
        {project.description}
      </p>

      {project.stack?.length > 0 && (
        <p className="font-mono text-[12px] tracking-[0.05em] text-[#6b6b6b] mb-6">
          {project.stack.join('  ·  ')}
        </p>
      )}

      {image && (
        <Motion.img
          ref={imageRef}
          src={image}
          alt={`${project.title} preview`}
          style={{ y }}
          className="w-full block rounded-md border border-[#e5e5e5] mb-6"
        />
      )}

      <div className="flex flex-wrap items-center gap-6">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Live
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
        )}
        {project.youtubeLink && (
          <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
            YouTube
          </a>
        )}
      </div>
    </FeedEntry>
  )
}

export default ProjectEntry
