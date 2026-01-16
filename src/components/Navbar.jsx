import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#work', label: 'Work' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#E6E6E6] border-b border-black' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - Brutalist */}
                        <a
                            href="#"
                            className="font-['Archivo_Black'] text-sm uppercase tracking-wide text-black hover:opacity-60 transition-opacity"
                        >
                            Abiral.
                        </a>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] uppercase text-[#666666] hover:text-black transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Hamburger */}
                        <div className="md:hidden">
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                color="#000000"
                                size={18}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Brutalist */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                } bg-[#E6E6E6]`}>
                <div className="flex flex-col items-start justify-center h-full px-8">
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="font-['Archivo_Black'] text-5xl uppercase text-black hover:opacity-50 transition-opacity"
                                    onClick={() => setOpen(false)}
                                    style={{
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: `all 0.3s ease-out ${index * 0.1}s`
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
