import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'
import Resume from '../assets/Resume_AbiralShrestha.pdf'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
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
          className="text-[10px] tracking-[0.25em] uppercase text-[#A0A0A0] mb-16"
          variants={itemVariants}
        >
          About
        </motion.p>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Large Text Card - Spans 8 columns */}
          <motion.div
            className="lg:col-span-8 bento-card bg-[#F5F5F7] p-8 md:p-12 rounded-xl"
            variants={itemVariants}
          >
            <h2 className="font-['Instrument_Serif'] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.1] mb-8">
              I believe in the power of <span className="italic">simplicity</span> and
              <span className="italic"> intentional</span> design.
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-2xl">
              As a Computer Science student at Gettysburg College, I blend technical
              expertise with creative vision. I enjoy exploring new technologies,
              solving complex problems, and crafting digital experiences that are
              both beautiful and functional.
            </p>
          </motion.div>

          {/* Profile Image Card - Spans 4 columns */}
          <motion.div
            className="lg:col-span-4 bento-card bg-[#F5F5F7] rounded-xl overflow-hidden aspect-[3/4] lg:aspect-auto"
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
            className="lg:col-span-4 bento-card bg-[#F5F5F7] p-8 rounded-xl"
            variants={itemVariants}
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-4">Education</p>
            <p className="font-['Instrument_Serif'] text-2xl text-[#1A1A1A] mb-2">Gettysburg College</p>
            <p className="text-sm text-[#6B6B6B]">B.A. Computer Science</p>
          </motion.div>

          <motion.div
            className="lg:col-span-4 bento-card bg-[#F5F5F7] p-8 rounded-xl"
            variants={itemVariants}
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-4">Interests</p>
            <div className="flex flex-wrap gap-2">
              {['Web Development', 'UI/UX', 'Machine Learning', 'Open Source'].map((interest) => (
                <span key={interest} className="text-xs text-[#1A1A1A] border border-[#E5E5E5] px-3 py-1.5 rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-4 bento-card bg-[#1A1A1A] p-8 rounded-xl flex flex-col justify-between group"
            variants={itemVariants}
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-4">Resume</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white">Download CV</p>
              <span className="text-white text-lg group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default About
