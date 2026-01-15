import React from 'react'
import { motion } from 'framer-motion'
import skillsData from '../data/skills.json'

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section id="skills" className="py-32 px-6 md:px-12 lg:px-16 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto">
                {/* Section Label */}
                <motion.p
                    className="text-[10px] tracking-[0.25em] uppercase text-[#A0A0A0] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Capabilities
                </motion.p>

                <motion.h2
                    className="font-['Instrument_Serif'] text-4xl md:text-5xl text-[#1A1A1A] mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Tools & <span className="italic">Technologies</span>
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            className="bento-card bg-white p-8 rounded-xl"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            {/* Category Title */}
                            <motion.p
                                className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-6 pb-4 border-b border-[#E5E5E5]"
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
                                                className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                            />
                                        )}
                                        <span className="text-sm text-[#1A1A1A]">
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