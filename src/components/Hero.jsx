import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const headline = 'Automate Your Infrastructure with AI'
const tagline = 'Logic in Sequence, Precision in Code.'
const subtext =
  'Deploy, scale, and manage your cloud infrastructure with AI-driven automation. Less manual work, more reliability.'

function TypingHeading() {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i <= headline.length) {
        setDisplay(headline.slice(0, i))
        i++
      } else {
        setDone(true)
        clearInterval(t)
      }
    }, 50)
    return () => clearInterval(t)
  }, [])

  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
      <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
        {display}
      </span>
      {!done && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
    </h1>
  )
}

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[85vh] min-h-[85dvh] flex-col items-center px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 md:min-h-[90vh] md:flex-row md:items-center md:justify-between md:px-12 md:pt-36 md:pb-16 lg:px-20 lg:pt-40">
      {/* Left: Copy */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl flex-shrink-0 text-center md:text-left"
      >
        <TypingHeading />
        <p className="mt-3 text-sm font-medium text-[#8b5cf6] sm:text-base md:text-lg">
          {tagline}
        </p>
        <p className="mt-4 max-w-xl text-base text-slate-400 sm:mt-6 sm:text-lg md:text-xl">
          {subtext}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 md:justify-start">
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-h-[48px] items-center justify-center rounded-lg bg-[#8b5cf6] px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#7c3aed] active:scale-[0.98] sm:min-h-0"
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
            className="flex min-h-[48px] items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#3b82f6]/50 hover:bg-white/10 active:scale-[0.98] sm:min-h-0"
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
        className="relative mt-8 w-full max-w-2xl flex-shrink-0 px-0 sm:mt-12 md:mt-0 md:pl-4"
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
            {/* Screen area – centered content */}
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-md bg-[#0f0f0f]">
              <img
                src="/hero-animation.gif"
                alt="Kramcode infrastructure automation"
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain object-center"
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
