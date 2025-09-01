import React from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

function Intro() {
    return (
        <>
            {/* fixed navbar at the top */}
            <Navbar />

            {/* fixed social icons on the left (hidden on small screens) */}
            <div className='fixed left-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block'>
                <Social />
            </div>

            <section className='min-h-screen flex items-center px-8'>
                <div className='w-full max-w-4xl mx-auto'>
                    <div className='text-left'>
                        {/* Comment opening */}
                        <p className='text-red-400 font-mono mb-2 text-lg'>/*</p>

                        <p className='text-yellow-400 font-mono mb-1 text-sm'>Hi, My name is</p>

                        <h1 className='text-green-400 text-6xl md:text-8xl leading-tight mb-3' style={{ fontFamily: 'Candal, sans-serif' }}>
                            Abiral
                            <br />
                            Shrestha
                        </h1>

                        <p className='text-green-400 font-mono text-xl mb-4'>
                            Computer Science @ Gettysburg College
                        </p>

                        {/* Comment closing */}
                        <p className='text-red-400 font-mono mb-8 text-lg'>*/</p>

                        <div className='mt-8'>
                            <button className='bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors text-lg'>
                                Resume
                            </button>
                        </div>
                    </div>
                </div>

                {/* Circle on the right side */}
                <div className='absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80 rounded-full border-4 border-amber-200 bg-amber-50/20 hidden md:block flex items-center justify-center overflow-hidden'>
                    <img
                        src="/src/assets/Intro.JPG"
                        alt="Abiral Shrestha"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </section>
        </>
    )
}

export default Intro