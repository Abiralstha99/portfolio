import React from 'react'
import { motion } from 'framer-motion'

function Intro() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-16 sm:pt-20">
            <div className="max-w-7xl mx-auto w-full">
                {/* Main Hero Typography - Massive Brutalist */}
                <div className="mb-10 sm:mb-14 md:mb-16">
                    <motion.h1
                        className="font-['Archivo_Black'] text-[clamp(2.75rem,12vw,12rem)] sm:text-[clamp(3.5rem,15vw,12rem)] text-black leading-[0.85] tracking-[-0.03em] uppercase"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        Abiral
                        <br />
                        Shrestha
                    </motion.h1>

                    <motion.div
                        className="mt-4 sm:mt-6 max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <p className="text-[14px] sm:text-[15px] text-[#333333] leading-relaxed">
                            Hi, I'm Abiral, a sophomore at Gettysburg College studying Computer Science. 
                            I am a dedicated Software Engineer specializing in full-stack application development.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Info Grid - Sharp Corners, Hard Shadows */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {/* Status Card */}
                    <div className="brutalist-card p-4 sm:p-6">
                        <p className="font-['IBM_Plex_Mono'] text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-2 sm:mb-3">
                            Status
                        </p>
                        <p className="text-[12px] sm:text-[14px] text-black font-medium">
                            Available for work
                        </p>
                    </div>

                    {/* Location Card */}
                    <div className="brutalist-card-white p-4 sm:p-6">
                        <p className="font-['IBM_Plex_Mono'] text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-2 sm:mb-3">
                            Based in
                        </p>
                        <p className="text-[12px] sm:text-[14px] text-black font-medium">
                            Pennsylvania, USA
                        </p>
                    </div>

                    {/* Focus Card */}
                    <div className="brutalist-card p-4 sm:p-6">
                        <p className="font-['IBM_Plex_Mono'] text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-2 sm:mb-3">
                            Focus
                        </p>
                        <p className="text-[12px] sm:text-[14px] text-black font-medium">
                            Full-Stack Dev
                        </p>
                    </div>

                    {/* CTA Card - Dark */}
                    <a
                        href="#work"
                        className="brutalist-card-dark p-4 sm:p-6 flex flex-col justify-between group min-h-[44px]"
                    >
                        <p className="font-['IBM_Plex_Mono'] text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#666666] mb-2 sm:mb-3">
                            Explore
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="text-[12px] sm:text-[14px] text-white font-medium">
                                View Work
                            </p>
                            <span className="text-white text-lg group-hover:translate-x-1 transition-transform duration-200">
                                →
                            </span>
                        </div>
                    </a>
                </motion.div>

                {/* Scroll Indicator - Industrial */}
                <motion.div
                    className="mt-10 sm:mt-14 md:mt-20 flex items-center gap-4 sm:gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <div className="w-12 h-px bg-black" />
                    <p className="font-['IBM_Plex_Mono'] text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#666666]">
                        Scroll to explore
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Intro