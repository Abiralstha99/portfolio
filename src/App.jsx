import Navbar from './components/Navbar'
import Feed from './Feed/Feed'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Feed />
      </main>
    </div>
  )
}

export default App
