import { useState } from 'react'

import './App.css'
import Navbar from './components/Layout/Navbar'
import Social from './components/Layout/Social'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black min-h-screen'>
        <Navbar />
        <Social/>
      </div>

    </>
  )
}

export default App
