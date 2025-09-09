import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'
import Resume from '../assets/Resume_AbiralShrestha.pdf'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import SchoolIcon from '@mui/icons-material/School'
import EmailIcon from '@mui/icons-material/Email'
import CakeIcon from '@mui/icons-material/Cake'

function About() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 bg-[#1a1a1a] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Profile Image */}
          <motion.div
            className="flex justify-center order-2 lg:order-1"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Simple circular container */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] relative">
                {/* Circular image */}
                <img
                  src={profileImage}
                  alt="Abiral Shrestha"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
                {/* Simple green border */}
                <div className="absolute inset-0 rounded-full border-4 border-[#2E8B57]"></div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left space-y-6"
            variants={containerVariants}
          >
            {/* Section Heading */}
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2E8B57] font-['Bebas_Neue',sans-serif] tracking-wide"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            {/* Underline accent */}
            <motion.div
              className="w-16 h-1 bg-[#f4a261] mx-auto lg:mx-0"
              variants={itemVariants}
            ></motion.div>

            {/* Main description */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white font-['Merriweather',serif] leading-relaxed"
              variants={itemVariants}
            >
              I am a developer with a keen interest in technology. Beside challenging
              myself, I love learning new technologies and languages.
            </motion.p>

            {/* Personal Info Section */}
            <motion.div
              className="space-y-6 pt-6"
              variants={containerVariants}
            >
              {/* Personal Info Heading */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white font-['Merriweather',serif] tracking-wide flex items-center gap-3"
                variants={itemVariants}
              >
                <PersonIcon className="text-white" fontSize="medium" />
                Personal Info
              </motion.h3>

              {/* Personal Details Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {/* Hometown */}
                <motion.div
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#2E2E2E] rounded-lg flex items-center justify-center">
                    <LocationOnIcon className="text-white" fontSize="small" />
                  </div>
                  <div>
                    <div className="text-white font-['Merriweather',serif] text-base">
                      <span className="font-bold">Hometown:</span> Kathmandu, Nepal
                    </div>
                  </div>
                </motion.div>

                {/* Date of Birth */}
                <motion.div
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#2E2E2E] rounded-lg flex items-center justify-center">
                    <CakeIcon className="text-white" fontSize="small" />
                  </div>
                  <div>
                    <div className="text-white font-['Merriweather',serif] text-base">
                      <span className="font-bold">Date of Birth:</span> 1st June 2005
                    </div>
                  </div>
                </motion.div>

                {/* University */}
                <motion.div
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#2E2E2E] rounded-lg flex items-center justify-center">
                    <SchoolIcon className="text-white" fontSize="small" />
                  </div>
                  <div>
                    <div className="text-white font-['Merriweather',serif] text-base">
                      <span className="font-bold">University:</span> Gettysburg College
                    </div>
                  </div>
                </motion.div>

                {/* Class Year */}
                <motion.div
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-[#2E2E2E] rounded-lg flex items-center justify-center">
                    <PersonIcon className="text-white" fontSize="small" />
                  </div>
                  <div>
                    <div className="text-white font-['Merriweather',serif] text-base">
                      <span className="font-bold">Class Year:</span> Sophomore
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Resume Button */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                className="px-8 py-4 bg-[#2E8B57] text-white font-bold text-lg rounded-lg font-['Bebas_Neue',sans-serif] tracking-wider shadow-lg transition-all duration-300 hover:bg-[#184c30] hover:shadow-xl"
                onClick={() => window.open(Resume, '_blank')}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1, ease: "easeInOut" }
                }}
              >
                RESUME
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
