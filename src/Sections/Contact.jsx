import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    const currentYear = new Date().getFullYear()

    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 mb-16 sm:mb-24">
                    {/* Left - Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.3em] uppercase text-[#666666] mb-4 sm:mb-6">
                            Get in Touch
                        </p>
                        <h2 className="font-['Archivo_Black'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[0.95] uppercase">
                            Let's Create
                            <br />
                            Something
                            <br />
                            Bold.
                        </h2>
                    </motion.div>

                    {/* Right - Contact Info */}
                    <motion.div
                        className="flex flex-col justify-end"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <p className="text-[14px] sm:text-[15px] text-[#333333] leading-relaxed mb-6 sm:mb-8">
                            I'm currently open to new opportunities, collaborations,
                            and interesting projects. Whether you have a question or
                            just want to say hello, I'd love to hear from you.
                        </p>

                        {/* Email - Brutalist Style */}
                        <a
                            href="abiralstha333@gmail.com"
                            className="brutalist-btn inline-flex w-fit max-w-full mb-8 sm:mb-10 min-w-0"
                        >
                            <span className="truncate min-w-0">abiralstha333@gmail.com</span>
                            <span className="flex-shrink-0">↗</span>
                        </a>

                        {/* Social Links - Industrial */}
                        <div className="flex flex-wrap items-end sm:gap-10">
                            <a
                                href="https://github.com/Abiralstha99"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] uppercase text-[#666666] hover:text-black transition-colors duration-200"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abiral-shrestha-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] uppercase text-[#666666] hover:text-black transition-colors duration-200"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer - Brutalist */}
                <motion.div
                    className="pt-6 sm:pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <p className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.2em] uppercase text-[#666666]">
                        © {currentYear} Abiral Shrestha
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
