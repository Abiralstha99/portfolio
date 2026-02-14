import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import inhibitorImage from '../assets/projects/Inhibitor.png'
import cinemasImage from '../assets/projects/cinemas.png'
import hennestImage from '../assets/projects/hennest.png'
import huffmanImage from '../assets/projects/huffman.png'
import mrgImage from '../assets/projects/mrg.png'

// Local project images (in src/assets) – key must match "image" value in projects.json
const projectImageMap = {
  'inhibitor': inhibitorImage,
  'cinemas': cinemasImage,
  'hennest': hennestImage,
  'huffman': huffmanImage,
  'mrg': mrgImage,
}

function Project() {
  const getProjectImage = (project) => {
    const key = project.image?.toLowerCase?.().replace(/^\//, '').replace(/\.(png|jpg|jpeg|webp)$/i, '').split('/').pop()
    return projectImageMap[key] ?? project.image
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  }

  // Brutalist Bento grid patterns - varied sizes for visual interest
  const gridPatterns = [
    'lg:col-span-7 lg:row-span-2',  // Project 01 – large featured
    'lg:col-span-5',                // Project 02 – medium
    'lg:col-span-5',                // Project 03 – medium next to featured
    'lg:col-span-6',                // Project 04 – half-width on final row
  ]                                 // Project 05 uses default 'lg:col-span-6'

  // Alternating card styles for 'stacked material' look
  const cardStyles = [
    'brutalist-card-white',
    'brutalist-card',
    'brutalist-card-white',
    'brutalist-card',
  ]

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Brutalist */}
        <motion.div
          className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.3em] uppercase text-[#666666] mb-4">
              Selected Work
            </p>
            <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[0.95] uppercase">
              Featured
              <br />
              Projects
            </h2>
          </div>

          {/* Project count indicator */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-black" />
            <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] uppercase text-[#666666]">
              {projects.length} Projects
            </span>
          </div>
        </motion.div>

        {/* Brutalist Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`group ${cardStyles[index % cardStyles.length]} overflow-hidden ${gridPatterns[index] || 'lg:col-span-6'}`}
              variants={itemVariants}
            >
              <a
                href={project.githubLink || project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {/* Image Container - Sharp edges */}
                <div className={`relative overflow-hidden bg-[#D9D9D9] ${index === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
                  {(getProjectImage(project)) && (
                    <img
                      src={getProjectImage(project)}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                  {/* Hard overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
                </div>

                {/* Content - Industrial typography */}
                <div className="p-4 sm:p-6 md:p-8 border-t border-black">
                  {/* Category label + award pill */}
                  <div className="flex items-center justify-between gap-3 mb-2 sm:mb-3">
                    <p className="font-['IBM_Plex_Mono'] text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#666666]">
                      Project {String(index + 1).padStart(2, '0')}
                    </p>

                    {project.title === 'Grease Analysis Tool' && (
                      <span className="inline-flex items-center rounded-full border border-black/10 bg-yellow-300/80 px-3 py-1 text-[7px] sm:text-[8px] tracking-[0.18em] uppercase text-black backdrop-blur-[1px] shadow-[0_2px_0_rgba(0,0,0,0.45)]">
                        Winner: YCP Hacks 2025
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <h3 className="font-['Archivo_Black'] text-lg sm:text-xl md:text-2xl text-black uppercase group-hover:opacity-70 transition-opacity duration-200">
                      {project.title}
                    </h3>
                    <span className="text-black text-base sm:text-lg flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                      ↗
                    </span>
                  </div>

                  <p className="text-[13px] sm:text-[14px] text-[#333333] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link - Brutalist button */}
        <motion.div
          className="mt-10 sm:mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/Abiralstha99"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-btn-outline"
          >
            View All on GitHub
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Project
