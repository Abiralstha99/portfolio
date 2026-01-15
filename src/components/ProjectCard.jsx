import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard({ project, index }) {
    return (
        <motion.article
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Image */}
            <a
                href={project.githubLink || project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/10] overflow-hidden rounded-lg bg-[#141414] mb-5"
            >
                {project.image && (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
            </a>

            {/* Content */}
            <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[#fafafa] group-hover:text-[#3b82f6] transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-[#a1a1a1] leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#6b6b6b] hover:text-[#fafafa] transition-colors"
                        >
                            Live Demo →
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#6b6b6b] hover:text-[#fafafa] transition-colors"
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