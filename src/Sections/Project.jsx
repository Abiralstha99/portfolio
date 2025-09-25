import React, { useState } from 'react'
import { motion } from 'framer-motion'
import projects from './projects.json'
function Project() {
  return (
    <section className="min-h-screen py-16">

      {/* add left padding so this section doesn't sit under a fixed left social bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pl-20 md:pl-24 lg:pl-32 flex flex-col gap-2">
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl text-[#2E8B57] font-bold text-left mb-1"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-sm text-white"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            A list of projects I have been working on or built
          </motion.p>
        </motion.div>

        <motion.hr
          role="separator"
          className="w-full border-t border-[#f4a261] my-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* project items */}
        <div className="w-full py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* now mapping through the projects.json file  */}
          {projects.map((project, index) => {
            const [hover, setHover] = useState(false)
            return (
              <motion.div
                key={index}
                className="w-full flex justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 100, damping: 18, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="relative group bg-[#0f1720] border border-[#2E8B57]/40 hover:border-[#2E8B57] transition-colors rounded-lg shadow aspect-[16/10] w-full max-w-[520px] overflow-hidden"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {/* Title always visible */}
                  <div className="absolute top-0 left-0 right-0 p-4 pointer-events-none">
                    <h2 className="text-xl text-white font-semibold tracking-wide">{project.title}</h2>
                  </div>
                  {/* Gradient overlay appears on hover */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-4"
                    animate={hover ? { opacity: 1 } : { opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    <div className="relative z-10 space-y-3">
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-5">
                        {project.description}
                      </p>
                      {project.link && (
                        <div className="flex">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-[#2E8B57] text-white text-xs sm:text-sm font-medium rounded-md shadow hover:bg-[#236946] transition-colors"
                          >
                            Live
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project