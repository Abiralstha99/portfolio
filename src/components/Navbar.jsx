
import React, { useState } from 'react'

function Navbar() {
    const [hovered, setHovered] = useState(null);

    return (
        <nav className='font-[Cinzel]'>
            <div className="flex justify-end">
                <ul className="min-h-7 md:flex space-x-16" >
                    <li>
                        <a
                            href="#home"
                            style={{ color: "#66D9EF" }}
                            className="relative pb-1"
                            onMouseEnter={() => setHovered('home')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Home
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'home' ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            style={{ color: "#F92672" }}
                            className="relative pb-1"
                            onMouseEnter={() => setHovered('about')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            About
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'about' ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            style={{ color: "#E6DB74" }}
                            className="relative pb-1"
                            onMouseEnter={() => setHovered('projects')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Projects
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'projects' ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            style={{ color: "#F8F8F2" }}
                            className="relative pb-1"
                            onMouseEnter={() => setHovered('contact')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Contact
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${hovered === 'contact' ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar