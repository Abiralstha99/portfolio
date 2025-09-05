import React from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import DiamondImage from '../assets/Diamond.svg'

function Intro() {
    return (
        <>
            {/* fixed navbar at the top */}
            <Navbar />

            {/* fixed social icons on the left (hidden on small screens) */}
            <div className='fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block'>
                <Social />
            </div>

            <section className='min-h-screen flex items-center justify-center px-4 sm:px-8 bg-[#1a1a1a]'>
                <div className='text-center max-w-4xl mx-auto'>
                    {/* Main heading */}
                    <h1
                        className="mb-4 sm:mb-6 font-['Montserrat',sans-serif] font-black text-[#2E8B57] tracking-[0.05em] leading-[0.9]"
                        style={{ fontSize: '140px', height: '250px', width: '841px', margin: '0 auto' }}
                    >
                        ABIRAL
                        <br />
                        SHRESTHA
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16 px-4 pt-3 font-['Merriweather',serif] leading-[1.3]">
                        Computer Science @ Gettysburg College
                    </p>
                </div>

                {/* View Resume button - responsive positioning */}
                <button
                    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 text-sm sm:text-base bg-[#2E8B57] font-['Merriweather',serif]"
                >
                    View Resume
                </button>
            </section>
        </>
    )
}

export default Intro