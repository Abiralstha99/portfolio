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
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  }

  // Bento grid sizes for variety
  const gridPatterns = [
    'lg:col-span-7 lg:row-span-2',  // Large featured
    'lg:col-span-5',                 // Medium
    'lg:col-span-5',                 // Medium
    'lg:col-span-6',                 // Half
    'lg:col-span-6',                 // Half
  ]

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#A0A0A0] mb-6">
            Selected Work
          </p>
          <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.05]">
            Featured <span className="italic">Projects</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`group bento-card bg-[#F5F5F7] rounded-xl overflow-hidden ${gridPatterns[index] || 'lg:col-span-6'}`}
              variants={itemVariants}
            >
              <a
                href={project.githubLink || project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/5 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-['Instrument_Serif'] text-2xl md:text-3xl text-[#1A1A1A] group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                    <span className="text-[#6B6B6B] text-lg flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/Abiralstha99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
          >
            View all projects on GitHub
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Project