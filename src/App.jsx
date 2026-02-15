import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen min-h-[100dvh] overflow-x-hidden bg-[#0a0a0a]">
      <div className="grid-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        {/* Features, Stats, Footer will go here */}
      </main>
    </div>
  )
}

export default App
