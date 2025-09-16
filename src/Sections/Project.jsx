import React from 'react'
import projects from './projects.json'
function Project() {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-16">
      {/* add left padding so this section doesn't sit under a fixed left social bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pl-20 md:pl-24 lg:pl-32 flex flex-col gap-2">
        <h1 className="text-5xl text-[#2E8B57] font-bold text-left ">
          Projects
        </h1>
        <p className="text-sm text-white">
          A list of projects I have been working on or built
        </p>

        <hr role="separator" className="w-full border-t border-[#f4a261] my-2" />
        {/* project items */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* now mapping through the projects.json file  */}
          {projects.map((project, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="bg-[#0f1720] rounded-lg shadow p-6 aspect-[16/10] w-full max-w-[520px] flex flex-col justify-between overflow-hidden">
                <h2 className="text-xl text-white font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="text-[#f4a261] hover:underline" target="_blank" rel="noopener noreferrer">
                    View project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project