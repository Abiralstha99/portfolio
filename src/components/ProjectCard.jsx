import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: index * 0.1 }}
        >
            {/* Image Side */}
            <div className="relative">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    {project.image &&
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-64 lg:h-80 object-cover"
                        />
                }
                </div>
            </div>

            {/* Details Side */}
            <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    {project.title}
                </h2>

                <div className="space-y-4">
                    <div className="text-gray-400 text-sm font-medium tracking-wider">
                        PROJECT INFO
                    </div>


                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                </p>



                <div className="flex flex-col gap-3 pt-4">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2E8B57] text-lg font-medium flex items-center gap-2 hover:text-green-400 transition-colors"
                        >
                            Live Demo ↗
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2E8B57] text-lg font-medium flex items-center gap-2 hover:text-green-400 transition-colors"
                        >
                            See on GitHub ↗
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard