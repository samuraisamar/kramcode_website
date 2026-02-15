import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Login', href: '#login' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav
        className="mx-3 mt-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl sm:mx-4 sm:mt-4 sm:px-6 md:mx-8 md:px-8"
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)' }}
      >
        <div className="relative flex min-h-[3.25rem] items-center justify-between md:min-h-[3.5rem]">
          {/* Logo – use logo.png when available, else text fallback; block removes inline gap for even padding */}
          <a href="/" className="flex flex-shrink-0 items-center justify-center">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Kramcode"
                className="block h-12 w-auto object-contain sm:h-14 md:h-16 lg:h-[4.25rem]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">Kramcode</span>
            )}
          </a>

          {/* Tagline – centred in app bar; same size/weight as nav links (text-base ≈ +2pt from text-sm) */}
          <span className="absolute left-1/2 hidden -translate-x-1/2 text-base font-medium text-slate-400 md:inline">
            Logic in Sequence, Precision in Code.
          </span>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="relative rounded-lg bg-[#8b5cf6] px-5 py-2.5 text-base font-semibold text-white transition-all hover:bg-[#7c3aed]"
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.2)',
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button – min 44px touch target */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="-mr-2 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white active:bg-white/10 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-slate-300 hover:text-white active:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center justify-center rounded-lg bg-[#8b5cf6] px-5 py-3 text-center text-base font-semibold text-white"
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
              }}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
