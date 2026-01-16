import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'

function Project() {
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
    'lg:col-span-7 lg:row-span-2',  // Large featured
    'lg:col-span-5',                 // Medium
    'lg:col-span-5',                 // Medium  
    'lg:col-span-7',                 // Wide
  ]

  // Alternating card styles for 'stacked material' look
  const cardStyles = [
    'brutalist-card-white',
    'brutalist-card',
    'brutalist-card-white',
    'brutalist-card',
  ]

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Brutalist */}
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.3em] uppercase text-[#666666] mb-4">
              Selected Work
            </p>
            <h2 className="font-['Archivo_Black'] text-4xl md:text-5xl lg:text-6xl text-black leading-[0.95] uppercase">
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
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
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                  {/* Hard overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
                </div>

                {/* Content - Industrial typography */}
                <div className="p-6 md:p-8 border-t border-black">
                  {/* Category label */}
                  <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-3">
                    Project {String(index + 1).padStart(2, '0')}
                  </p>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-['Archivo_Black'] text-xl md:text-2xl text-black uppercase group-hover:opacity-70 transition-opacity duration-200">
                      {project.title}
                    </h3>
                    <span className="text-black text-lg flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                      ↗
                    </span>
                  </div>

                  <p className="text-[14px] text-[#333333] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link - Brutalist button */}
        <motion.div
          className="mt-16 flex justify-center"
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