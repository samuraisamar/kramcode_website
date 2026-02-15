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
        className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl md:mx-8 md:px-8"
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)' }}
      >
        <div className="flex items-center justify-between">
          {/* Logo – use logo.png when available, else text fallback */}
          <a href="/" className="flex items-center gap-2">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Kramcode"
                className="h-8 w-auto object-contain md:h-9"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-semibold tracking-tight text-white">Kramcode</span>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="relative rounded-lg bg-[#8b5cf6] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#7c3aed]"
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.2)',
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Toggle menu"
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
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-semibold text-white"
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
