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
            <nav className='font-[Cinzel] fixed top-0 left-0 right-0 z-50 bg-black'>
                {/* Top bar */}
                <div className="flex items-center justify-end px-15 py-3 mt-3">

                    {/* Desktop links - visible on md and up */}
                    <ul className="hidden md:flex space-x-12 text-1.5xl">
                        <li>
                            <a
                                href="#home"
                                style={{ color: "#66D9EF" }}
                                className="relative pb-1 hover:opacity-80 transition-opacity"
                                onMouseEnter={() => setHovered('home')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Home
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'home' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                style={{ color: "#F92672" }}
                                className="relative pb-1 hover:opacity-80 transition-opacity"
                                onMouseEnter={() => setHovered('about')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                About
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'about' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                style={{ color: "#E6DB74" }}
                                className="relative pb-1 hover:opacity-80 transition-opacity"
                                onMouseEnter={() => setHovered('projects')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Projects
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'projects' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                style={{ color: "#F8F8F2" }}
                                className="relative pb-1 hover:opacity-80 transition-opacity"
                                onMouseEnter={() => setHovered('contact')}
                                onMouseLeave={() => setHovered(null)}
                            >
                                Say Hi
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'contact' ? 'w-full' : 'w-0'}`}
                                ></span>
                            </a>
                        </li>
                    </ul>

                    {/* Mobile hamburger - hidden on desktop, visible on mobile */}
                    <div className="md:hidden absolute right-7 top-6/5 -translate-y-1/2">
                        <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={24} rounded />
                    </div>
                </div>
            </nav>

            {/* Full-screen mobile menu overlay with smooth transitions */}
            <div className={`md:hidden fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>

                {/* Centered menu content */}
                <div className="flex items-center justify-center h-full">
                    <ul className="flex flex-col space-y-8 text-center font-[Cinzel]">
                        <li>
                            <a
                                href="#home"
                                style={{ color: "#66D9EF" }}
                                className="text-4xl font-light hover:opacity-80 transition-opacity relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                HOME
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                style={{ color: "#F92672" }}
                                className="text-4xl font-light hover:opacity-80 transition-opacity relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                ABOUT
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                style={{ color: "#E6DB74" }}
                                className="text-4xl font-light hover:opacity-80 transition-opacity relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                PROJECTS
                                <div className="w-full h-px bg-gray-400 mt-2 opacity-30"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                style={{ color: "#F8F8F2" }}
                                className="text-4xl font-light hover:opacity-80 transition-opacity relative pb-2 block"
                                onClick={() => setOpen(false)}
                            >
                                SAY HI
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