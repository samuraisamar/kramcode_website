import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlowSection from './components/FlowSection'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen min-h-[100dvh] overflow-x-hidden overflow-y-auto bg-[#0a0a0a]">
      <div className="grid-overlay" aria-hidden />
      <Navbar />
      <main className="relative">
        <Hero />
        <FlowSection />
        <ComingSoon />
        <Footer />
      </main>
    </div>
  )
}

export default App
