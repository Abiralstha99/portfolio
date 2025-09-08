import React from 'react'
import { motion } from 'framer-motion'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'
import SchoolIcon from '@mui/icons-material/School'
import InfoIcon from '@mui/icons-material/Info'
import profileImage from '../assets/profile.jpg'

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-[#1a1a1a] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-[#2E8B57] font-['Bebas_Neue',sans-serif] text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-1"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Circular container */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                {/* Gradient border background */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #2E8B57, #66b28c)',
                    padding: '4px'
                  }}
                >
                  <div className="w-full h-full rounded-full bg-transparent"></div>
                </div>
                {/* Circular image */}
                <img
                  src={profileImage}
                  alt="Abiral Shrestha"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full shadow-2xl z-10"
                />
                {/* Decorative border ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#2E8B57]/30 z-20"></div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Card */}
          <motion.div
            className="order-2 lg:order-2"
            variants={itemVariants}
          >
            <div className="bg-[#2E8B57]/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#2E8B57]/30">
              {/* Card Title */}
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white font-['Bebas_Neue',sans-serif] mb-8 tracking-wide"
                variants={itemVariants}
              >
                Who am I?
              </motion.h3>

              {/* Paragraph Section */}
              <motion.div
                className="mb-8"
                variants={itemVariants}
              >
                <p className="text-white font-['Merriweather',serif] text-base leading-relaxed">
                  I'm a passionate Computer Science student dedicated to creating
                  innovative solutions through code. My journey in technology started
                  with curiosity and has evolved into a deep love for problem-solving
                  and creative development.
                </p>
              </motion.div>

              {/* Personal Info Section */}
              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div
                  className="flex items-center space-x-2 mb-6"
                  variants={itemVariants}
                >
                  <InfoIcon className="text-[#66b28c]" fontSize="medium" />
                  <h4 className="text-xl md:text-2xl font-bold text-[#66b28c] font-['Bebas_Neue',sans-serif] tracking-wide">
                    Personal Info
                  </h4>
                </motion.div>

                {/* Personal Details */}
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                >
                  <motion.div
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                  >
                    <PersonIcon className="text-[#66b28c]" fontSize="small" />
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                      <span className="text-[#66b28c] font-['Bebas_Neue',sans-serif] text-lg font-bold tracking-wide min-w-[100px]">
                        Name:
                      </span>
                      <span className="text-white font-['Merriweather',serif] text-lg">
                        Abiral Shrestha
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                  >
                    <HomeIcon className="text-[#66b28c]" fontSize="small" />
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                      <span className="text-[#66b28c] font-['Bebas_Neue',sans-serif] text-lg font-bold tracking-wide min-w-[100px]">
                        Hometown:
                      </span>
                      <span className="text-white font-['Merriweather',serif] text-lg">
                        Kathmandu, Nepal
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                  >
                    <SchoolIcon className="text-[#66b28c]" fontSize="small" />
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                      <span className="text-[#66b28c] font-['Bebas_Neue',sans-serif] text-lg font-bold tracking-wide min-w-[100px]">
                        University:
                      </span>
                      <span className="text-white font-['Merriweather',serif] text-lg">
                        Gettysburg College
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About