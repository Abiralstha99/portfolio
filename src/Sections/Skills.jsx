import React from 'react'
import { motion } from 'framer-motion'
import skillsData from '../data/skills.json'

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#D9D9D9]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Brutalist */}
                <div className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
                    <div>
                        <motion.p
                            className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.3em] uppercase text-[#666666] mb-3 sm:mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            Capabilities
                        </motion.p>

                        <motion.h2
                            className="font-['Archivo_Black'] text-3xl sm:text-4xl md:text-5xl text-black uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            Tools &<br />Technologies
                        </motion.h2>
                    </div>

                    {/* Decorative element */}
                    <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="w-12 h-px bg-black" />
                        <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] uppercase text-[#666666]">
                            {skillsData.length} Categories
                        </span>
                    </motion.div>
                </div>

                {/* Skills Grid - Brutalist Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {skillsData.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            className="brutalist-card-white p-6 sm:p-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            {/* Category Title */}
                            <motion.p
                                className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-black"
                                variants={itemVariants}
                            >
                                {group.category}
                            </motion.p>

                            {/* Skills List */}
                            <motion.div
                                className="space-y-3"
                                variants={containerVariants}
                            >
                                {group.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="flex items-center gap-3 group"
                                    >
                                        {skill.logo && (
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                                            />
                                        )}
                                        <span className="text-[13px] sm:text-[14px] text-black">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills