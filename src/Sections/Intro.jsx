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

            <section className='min-h-screen flex items-center px-8 pt-20'>
                <div className='w-full max-w-6xl mx-auto flex items-center justify-between'>
                    <div className='flex-1 justify-self-end'>
                        {/* Comment opening */}
                        <p className='text-red-400 font-mono mb-2 text-lg'>/*</p>

                        <p className='text-yellow-400 font-mono mb-4 text-sm'>Hi, My name is</p>

                        <h1 className='text-green-400 text-6xl md:text-8xl leading-tight mb-4' style={{ fontFamily: 'Candal, sans-serif' }}>
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

                    <div className='w-80 h-80 rounded-full bg-amber-50 flex-shrink-0 ml-12 hidden md:block' aria-hidden>
                        {/* decorative/profile circle */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro