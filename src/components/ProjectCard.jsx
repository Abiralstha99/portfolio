import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard({ project, index }) {
    return (
        <motion.article
            className="group brutalist-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            {/* Image */}
            <a
                href={project.githubLink || project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/10] overflow-hidden bg-[#D9D9D9]"
            >
                {project.image && (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                )}
            </a>

            {/* Content */}
            <div className="p-6 border-t border-black space-y-3">
                {/* Label */}
                <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666]">
                    Project {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="font-['Archivo_Black'] text-xl text-black uppercase group-hover:opacity-70 transition-opacity duration-200">
                    {project.title}
                </h3>

                <p className="text-[14px] text-[#333333] leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.15em] uppercase text-[#666666] hover:text-black transition-colors duration-200"
                        >
                            Live Demo →
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.15em] uppercase text-[#666666] hover:text-black transition-colors duration-200"
                        >
                            GitHub →
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    )
}

export default ProjectCard