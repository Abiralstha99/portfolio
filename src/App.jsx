import Navbar from './components/Navbar'
import ReadingProgress from './components/ReadingProgress'
import SideBreadcrumb from './components/SideBreadcrumb'
import Feed from './Feed/Feed'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navbar />
      <SideBreadcrumb />
      <main>
        <Feed />
      </main>
      <Footer />
    </div>
  )
}

export default App
