import { useState } from 'react'
import { Intro, About, Skills, Project, Contact } from '.'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#E6E6E6] grain-overlay">
      <Navbar />
      <main>
        <Intro />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  )
}

export default App
