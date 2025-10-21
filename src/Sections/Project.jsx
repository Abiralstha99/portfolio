import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

function Project() {
  return (
    <section id="project" className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pl-20 md:pl-24 lg:pl-32">
        <div className="mb-12">
          {/* Small heading */}
          <div className="mb-8">
            <span className="text-[#f4a261] tracking-widest text-sm flex items-center gap-2">
              <span className="text-xl">*</span> PROJECTS
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project