import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'
import Resume from '../assets/Resume_AbiralShrestha.pdf'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  }

  return (
    <motion.section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.3em] uppercase text-[#666666] mb-16"
          variants={itemVariants}
        >
          About
        </motion.p>

        {/* Brutalist Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Large Text Card - Spans 8 columns */}
          <motion.div
            className="lg:col-span-8 brutalist-card p-8 md:p-12"
            variants={itemVariants}
          >
            <h2 className="font-['Archivo_Black'] text-2xl md:text-3xl lg:text-4xl text-black leading-[1.15] uppercase mb-8">
              I believe in the power of simplicity and intentional design.
            </h2>
            <p className="text-[15px] text-[#333333] leading-relaxed max-w-2xl">
              As a Computer Science student at Gettysburg College, I blend technical
              expertise with creative vision. I enjoy exploring new technologies,
              solving complex problems, and crafting digital experiences that are
              both beautiful and functional.
            </p>
          </motion.div>

          {/* Profile Image Card - Spans 4 columns */}
          <motion.div
            className="lg:col-span-4 brutalist-card-white overflow-hidden aspect-[3/4] lg:aspect-auto"
            variants={itemVariants}
          >
            <img
              src={profileImage}
              alt="Abiral Shrestha"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Info Cards Row */}
          <motion.div
            className="lg:col-span-4 brutalist-card-white p-8"
            variants={itemVariants}
          >
            <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-4">
              Education
            </p>
            <p className="font-['Archivo_Black'] text-xl text-black uppercase mb-2">
              Gettysburg College
            </p>
            <p className="text-[14px] text-[#333333]">B.S. Computer Science</p>
          </motion.div>

          <motion.div
            className="lg:col-span-4 brutalist-card p-8"
            variants={itemVariants}
          >
            <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-4">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {['Web Dev', 'UI/UX', 'ML', 'Open Source'].map((interest) => (
                <span
                  key={interest}
                  className="font-['IBM_Plex_Mono'] text-[10px] tracking-wide uppercase text-black border border-black px-3 py-1.5"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-4 brutalist-card-dark p-8 flex flex-col justify-between group"
            variants={itemVariants}
          >
            <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-4">
              Resume
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-white font-medium">Download CV</p>
              <span className="text-white text-lg group-hover:translate-x-1 transition-transform duration-200">
                ↗
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default About
