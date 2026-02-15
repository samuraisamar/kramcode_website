import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const tagline = 'Automate Your Infrastructure with AI'
const subtext =
  'Deploy, scale, and manage your cloud infrastructure with AI-driven automation. Less manual work, more reliability.'

function TypingHeading() {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i <= tagline.length) {
        setDisplay(tagline.slice(0, i))
        i++
      } else {
        setDone(true)
        clearInterval(t)
      }
    }, 50)
    return () => clearInterval(t)
  }, [])

  return (
    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
      <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
        {display}
      </span>
      {!done && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
    </h1>
  )
}

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[90vh] flex-col items-center px-4 pt-28 pb-16 md:flex-row md:items-center md:justify-between md:px-12 md:pt-36 lg:px-20 lg:pt-40">
      {/* Left: Copy */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl flex-shrink-0 text-center md:text-left"
      >
        <TypingHeading />
        <p className="mt-6 max-w-xl text-lg text-slate-400 md:text-xl">
          {subtext}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg bg-[#8b5cf6] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#7c3aed]"
            style={{
              boxShadow: '0 0 24px rgba(139, 92, 246, 0.5), 0 0 48px rgba(139, 92, 246, 0.2)',
            }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#3b82f6]/50 hover:bg-white/10"
          >
            See how it works
          </motion.a>
        </div>
      </motion.div>

      {/* Right: Monitor frame with hero GIF */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="relative mt-12 w-full max-w-2xl flex-shrink-0 md:mt-0"
      >
        <div
          className="relative overflow-hidden rounded-xl border-2 border-white/10 bg-black/60 p-2 backdrop-blur-sm"
          style={{
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(139, 92, 246, 0.15), inset 0 0 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Monitor bezel */}
          <div className="rounded-lg border border-white/5 bg-[#0a0a0a] p-1">
            {/* Screen area */}
            <div className="relative aspect-video overflow-hidden rounded-md bg-[#0f0f0f]">
              <img
                src="/hero-animation.gif"
                alt="Kramcode infrastructure automation"
                className="h-full w-full object-cover object-center"
              />
              {/* Fallback gradient if GIF not loaded */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 via-transparent to-[#3b82f6]/20"
                aria-hidden
              />
            </div>
          </div>
          {/* Glow accent line */}
          <div
            className="absolute bottom-2 left-2 right-2 h-px rounded-full opacity-60"
            style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, #3b82f6, transparent)' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
