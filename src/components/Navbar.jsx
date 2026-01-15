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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - Serif */}
                        <a
                            href="#"
                            className="font-['Instrument_Serif'] text-lg text-[#1A1A1A] italic hover:opacity-60 transition-opacity"
                        >
                            Abiral
                        </a>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-xs tracking-[0.15em] uppercase text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-300"
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
                                color="#1A1A1A"
                                size={18}
                                rounded
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                } bg-white`}>
                <div className="flex flex-col items-center justify-center h-full">
                    <ul className="flex flex-col items-center gap-10">
                        {navLinks.map((link, index) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="font-['Instrument_Serif'] text-4xl text-[#1A1A1A] hover:opacity-50 transition-opacity"
                                    onClick={() => setOpen(false)}
                                    style={{
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                        transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
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
