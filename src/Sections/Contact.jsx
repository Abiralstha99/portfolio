import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    const currentYear = new Date().getFullYear()

    return (
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
                    {/* Left - Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] tracking-[0.25em] uppercase text-[#A0A0A0] mb-6">
                            Get in Touch
                        </p>
                        <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.05]">
                            Let's create something <span className="italic">beautiful</span> together.
                        </h2>
                    </motion.div>

                    {/* Right - Contact Info */}
                    <motion.div
                        className="flex flex-col justify-end"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-8">
                            I'm currently open to new opportunities, collaborations,
                            and interesting projects. Whether you have a question or
                            just want to say hello, I'd love to hear from you.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:your.email@example.com"
                            className="font-['Instrument_Serif'] text-2xl md:text-3xl text-[#1A1A1A] hover:opacity-50 transition-opacity mb-8"
                        >
                            your.email@example.com
                        </a>

                        {/* Social Links */}
                        <div className="flex items-center gap-8">
                            <a
                                href="https://github.com/Abiralstha99"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs tracking-[0.15em] uppercase text-[#A0A0A0] hover:text-[#1A1A1A] transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs tracking-[0.15em] uppercase text-[#A0A0A0] hover:text-[#1A1A1A] transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://instagram.com/yourhandle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs tracking-[0.15em] uppercase text-[#A0A0A0] hover:text-[#1A1A1A] transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#A0A0A0]">
                        © {currentYear} Abiral Shrestha
                    </p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#A0A0A0]">
                        Designed with intention
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
