import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlaceholderSection from './components/PlaceholderSection'
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
        <PlaceholderSection id="features" title="See how it works" />
        <FlowSection />
        <PlaceholderSection id="get-started" title="Get Started" />
        <PlaceholderSection id="docs" title="Docs" />
        <PlaceholderSection id="pricing" title="Pricing" />
        <PlaceholderSection id="login" title="Login" />
        <ComingSoon />
        <Footer />
      </main>
    </div>
  )
}

export default App
