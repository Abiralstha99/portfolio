import Navbar from './components/Navbar'
import ReadingProgress from './components/ReadingProgress'
import Feed from './Feed/Feed'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Feed />
      </main>
    </div>
  )
}

export default App
