import React from 'react'
import { motion } from 'framer-motion'

function Intro() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20">
            <div className="max-w-7xl mx-auto w-full">
                {/* Main Hero Typography */}
                <div className="mb-16">
                    <motion.h1
                        className="font-['Instrument_Serif'] text-[clamp(3rem,12vw,10rem)] text-[#1A1A1A] leading-[0.9] tracking-[-0.02em] mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        Abiral
                        <br />
                        <span className="italic">Shrestha</span>
                    </motion.h1>

                    <motion.p
                        className="text-sm text-[#6B6B6B] max-w-md leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        Developer & designer crafting thoughtful digital
                        experiences. Currently studying Computer Science
                        at Gettysburg College.
                    </motion.p>
                </div>

                {/* Bento Info Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {/* Status Card */}
                    <div className="bento-card bg-[#F5F5F7] p-6 rounded-lg">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-2">Status</p>
                        <p className="text-sm text-[#1A1A1A]">Available for work</p>
                    </div>

                    {/* Location Card */}
                    <div className="bento-card bg-[#F5F5F7] p-6 rounded-lg">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-2">Based in</p>
                        <p className="text-sm text-[#1A1A1A]">Kathmandu, Nepal</p>
                    </div>

                    {/* Focus Card */}
                    <div className="bento-card bg-[#F5F5F7] p-6 rounded-lg">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-2">Focus</p>
                        <p className="text-sm text-[#1A1A1A]">Full-Stack Development</p>
                    </div>

                    {/* CTA Card */}
                    <a
                        href="#work"
                        className="bento-card bg-[#1A1A1A] p-6 rounded-lg flex flex-col justify-between group"
                    >
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mb-2">Explore</p>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-white">View Work</p>
                            <span className="text-white text-lg group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="mt-24 flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <div className="w-px h-12 bg-[#E5E5E5]" />
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0]">Scroll to explore</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Intro