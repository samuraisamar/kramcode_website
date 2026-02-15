import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative z-10 border-t border-white/10 bg-black/30 px-4 py-8 backdrop-blur-sm sm:px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-slate-400 sm:text-left">
          © {new Date().getFullYear()} Kramcode OPC Private Limited. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#docs" className="text-slate-400 transition-colors hover:text-white">
            Docs
          </a>
          <a href="#pricing" className="text-slate-400 transition-colors hover:text-white">
            Pricing
          </a>
          <a href="#login" className="text-slate-400 transition-colors hover:text-white">
            Login
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
