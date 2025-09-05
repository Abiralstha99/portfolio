import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

function Navbar() {
    const [hovered, setHovered] = useState(null)
    const [isOpen, setOpen] = useState(false)

    // Prevent background scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]'>
                {/* Top bar */}
                <div className="flex items-center justify-center px-8 py-6">

                    {/* Desktop links - visible on md and up */}
                    <ul className="hidden md:flex space-x-12 text-lg font-['Merriweather',serif] leading-[1.2]">
                        <li>
                            <a
                                href="#about"
                                className="text-white hover:text-[#66b28c] transition-colors duration-300 relative pb-1"
                                onMouseEnter={() => setHovered('about')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                About
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-[#66b28c] transition-all duration-300 ${hovered === 'about' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="text-white hover:text-[#66b28c] transition-colors duration-300 relative pb-1"
                                onMouseEnter={() => setHovered('skills')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Skills
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-[#66b28c] transition-all duration-300 ${hovered === 'skills' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-white hover:text-[#66b28c] transition-colors duration-300 relative pb-1"
                                onMouseEnter={() => setHovered('projects')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Project
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-[#66b28c] transition-all duration-300 ${hovered === 'projects' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-white hover:text-[#66b28c] transition-colors duration-300 relative pb-1"
                                onMouseEnter={() => setHovered('contact')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Contact
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-[#66b28c] transition-all duration-300 ${hovered === 'contact' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                    </ul>

                    {/* Mobile hamburger - hidden on desktop, visible on mobile */}
                    <div className="md:hidden absolute right-8">
                        <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={24} rounded />
                    </div>
                </div>
            </nav>

            {/* Full-screen mobile menu overlay with smooth transitions */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} bg-[#1a1a1a]`}>

                {/* Centered menu content */}
                <div className="flex items-center justify-center h-full">
                    <ul className="flex flex-col space-y-8 text-center font-['Merriweather',serif] leading-[1.2]">
                        <li>
                            <a
                                href="#about"
                                className="text-white text-4xl font-light hover:text-[#66b28c] transition-colors relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                ABOUT
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="text-white text-4xl font-light hover:text-[#66b28c] transition-colors relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                SKILLS
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-white text-4xl font-light hover:text-[#66b28c] transition-colors relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                PROJECT
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-white text-4xl font-light hover:text-[#66b28c] transition-colors relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                CONTACT
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar