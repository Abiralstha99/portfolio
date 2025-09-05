import React from 'react'

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400 font-['Merriweather',serif]">
          About Me
        </h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-green-400 font-['Merriweather',serif]">
            I'm a passionate Computer Science student at Gettysburg College,
            dedicated to creating innovative solutions through code. My journey
            in technology started with curiosity and has evolved into a deep
            love for problem-solving and creative development.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-blue-400 font-['Merriweather',serif]">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with
            fellow developers.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-purple-400 font-['Merriweather',serif]">
            I specialize in full-stack development, with expertise in React,
            Node.js, Python, and modern web technologies. I'm always eager
            to learn new skills and take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About