import React from 'react'
import { Navbar, Social } from '../index'

function Layout({ children }) {
    return (
        <div className='bg-black min-h-screen flex'>
            {/* Social Icons - Left Side */}
            <div className='fixed left-4 top-1/2 transform -translate-y-1/2 z-10'>
                <Social />
            </div>

            {/* Main Content Area */}
            <div className='flex-1 ml-20'>
                <Navbar />
                <main className='flex-1'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
