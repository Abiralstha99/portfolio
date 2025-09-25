import { useState } from 'react'
import { Intro, About, Skills, Project } from '.'
import BackgroundWrapper from './components/BackgroundWrapper'

function App() {
  return (
    <BackgroundWrapper>
      <Intro />
      <About />
      <Skills />
      <Project />
    </BackgroundWrapper>
  )
}

export default App
