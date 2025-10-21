import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import DiamondImage from '../assets/Diamond.svg'
import Resume from '../assets/Resume_AbiralShrestha.pdf'

function Intro() {
    return (
        <>
            {/* fixed navbar at the top */}
            <Navbar />

            {/* fixed social icons on the left (hidden on small screens) */}
            <div className='fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block'>
                <Social />
            </div>

            <section className='min-h-screen flex items-center justify-center px-4 sm:px-8'>
                <div className='text-center max-w-4xl mx-auto'>
                    {/* Main heading */}
                    <h1
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mb-4 sm:mb-6 font-['Bebas_Neue',sans-serif] text-[#2E8B57] tracking-[0.07em] leading-[0.9] font-normal"
                        style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}
                    >
                        {/* First name - letters appear one by one */}
                        <div className="inline-block">
                            {"ABIRAL".split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                        ease: "easeOut"
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                        <br />
                        {/* Last name - appears all at once */}
                        <motion.div
                            className="inline-block"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.6, // Delay after ABIRAL finishes (6 letters * 0.08 + 0.12)
                                ease: "easeOut"
                            }}
                        >
                            SHRESTHA
                        </motion.div>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16 px-4 pt-3 font-['Merriweather',serif] leading-[1.3]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.2, // Appears after SHRESTHA (0.6 + 0.4 + 0.2)
                            ease: "easeOut"
                        }}
                    >
                        Computer Science @ Gettysburg College
                    </motion.p>

                    <motion.button
                        className="mt-5 px-6 py-3 rounded-lg text-white font-medium text-base bg-[#2E8B57] font-['Merriweather',serif]"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        Know More
                    </motion.button>
                </div>
            </section>
        </>
    )
}

export default Intro