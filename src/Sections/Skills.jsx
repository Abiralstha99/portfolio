import React from 'react'
import { motion } from 'framer-motion'
import skillsData from '../data/skills.json'
import {
    Language,
    Palette,
    Code,
    Storage,
    Air,
    Cake,
    Brush,
    SettingsEthernet,
    FlashOn,
    Build,
    GitHub,
    PostAdd,
    IntegrationInstructions,
    DataObject,
    AccountTree,
    Cloud,
    Timeline
} from '@mui/icons-material'

function Skills() {
    const groupVariants = {
        hidden: { opacity: 0 },
        visible: (i = 0) => ({
            opacity: 1,
            transition: { delay: i * 0.55 }
        })
    }

    const categoryTitle = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    const skillsListVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
    }

    const iconFor = (label) => {
        const iconMap = {
            HTML: <Language className="text-orange-500" />,
            CSS: <Palette className="text-blue-500" />,
            JavaScript: <Code className="text-yellow-500" />,
            TypeScript: <Code className="text-blue-600" />,
            React: <AccountTree className="text-cyan-400" />,
            Redux: <Storage className="text-purple-500" />,
            Motion: <Timeline className="text-pink-500" />,
            'Tailwind CSS': <Air className="text-cyan-500" />,
            SASS: <Cake className="text-pink-500" />,
            'Styled-Components': <Brush className="text-yellow-600" />,
            'Node.js': <SettingsEthernet className="text-green-500" />,
            Express: <SettingsEthernet className="text-gray-500" />,
            MongoDB: <Storage className="text-green-600" />,
            PostgreSQL: <DataObject className="text-blue-600" />,
            Git: <Build className="text-orange-600" />,
            GitHub: <GitHub className="text-white" />,
            Postman: <PostAdd className="text-orange-500" />,
            Figma: <IntegrationInstructions className="text-purple-500" />
        }
        return iconMap[label] || <Code className="text-gray-400" />
    }

    return (
        <section id="skills" className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pl-20 md:pl-24 lg:pl-32">
                {/* Small heading */}
                <div className="mb-8">
                    <span className="text-[#f4a261] tracking-widest text-sm flex items-center gap-2">
                        <span className="text-xl">*</span> MY STACK
                    </span>
                </div>

                {/* Groups */}
                <div className="flex flex-col gap-16">
                    {skillsData.map((group, idx) => (
                        <div
                            key={group.category}
                            className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10"
                        >
                            {/* Left: big category title */}
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.35 }}
                                variants={categoryTitle}
                                transition={{ duration: 0.6, delay: idx * 0.55 }}
                                className="text-[56px] leading-none md:text-[88px] lg:text-[110px] text-gray-300 font-['Bebas_Neue',sans-serif] tracking-wider"
                            >
                                {group.category.toUpperCase()}
                            </motion.h3>

                            {/* Right: skills list */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.35 }}
                                variants={skillsListVariants}
                                transition={{ delay: idx * 0.55 + 0.6, staggerChildren: 0.12 }}
                                className="flex flex-wrap items-center gap-x-16 gap-y-8"
                            >
                                {group.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        variants={itemVariants}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            {iconFor(skill)}
                                        </div>
                                        <span className="text-white text-2xl md:text-3xl font-['Merriweather',serif]">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills