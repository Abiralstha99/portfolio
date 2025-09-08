import React from 'react'
import { motion } from 'framer-motion'

function About() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 bg-[#1a1a1a]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 text-[#2E8B57] font-['Bebas_Neue',sans-serif]"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
        >
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-white font-['Merriweather',serif]"
            variants={itemVariants}
          >
            I'm a passionate Computer Science student at Gettysburg College,
            dedicated to creating innovative solutions through code. My journey
            in technology started with curiosity and has evolved into a deep
            love for problem-solving and creative development.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-white font-['Merriweather',serif]"
            variants={itemVariants}
          >
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with
            fellow developers.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-white font-['Merriweather',serif]"
            variants={itemVariants}
          >
            I specialize in full-stack development, with expertise in React,
            Node.js, Python, and modern web technologies. I'm always eager
            to learn new skills and take on challenging projects.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About