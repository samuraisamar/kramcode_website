import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function ComingSoon() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div
        className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-black/40 px-8 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-16"
        style={{
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 0 40px rgba(139, 92, 246, 0.08)',
        }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-1.5 text-sm font-medium text-[#a78bfa]">
          <Sparkles className="h-4 w-4" />
          Coming soon
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          More power, same simplicity
        </h2>
        <p className="mt-3 text-slate-400 sm:text-lg">
          We’re building the next pieces of the workflow. Stay tuned.
        </p>
      </div>
    </motion.section>
  )
}
