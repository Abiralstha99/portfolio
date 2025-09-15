import React from 'react'

function Project() {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-16">
      {/* add left padding so this section doesn't sit under a fixed left social bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pl-20 md:pl-24 lg:pl-32 flex flex-col gap-2">
        <h1 className="text-5xl text-[#2E8B57] font-bold text-left">
          Projects
        </h1>
        <p className="text-sm text-amber-100">
          A list of projects I have been working on or built
        </p>

        <hr role="separator" className="w-full border-t border-amber-100/20 my-2" />
        {/* project items */}
        <div className="w-full">
          {/* add your project cards/list here */}
        </div>
      </div>
    </section>
  )
}

export default Project