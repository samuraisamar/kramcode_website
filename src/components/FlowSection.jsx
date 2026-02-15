import { motion } from 'framer-motion'
import { Terminal, GitBranch, Workflow, LayoutDashboard } from 'lucide-react'

const steps = [
  {
    icon: Terminal,
    label: 'Terminal',
    description: 'Start from your terminal. One CLI to trigger deploys and run commands.',
  },
  {
    icon: GitBranch,
    label: 'Repo',
    description: 'Connect your repo. We watch your branches and triggers.',
  },
  {
    icon: Workflow,
    label: 'Pipeline',
    description: 'Pipelines run. AI-optimized build, test, and validate in sequence.',
  },
  {
    icon: LayoutDashboard,
    label: 'Panel',
    description: 'Observe, control and monitor your deployments through a customized panel.',
  },
]

export default function FlowSection() {
  return (
    <section id="how-it-works" className="relative z-10 scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl md:mb-16 md:text-4xl"
      >
        Terminal → Repo → Pipeline → Panel
      </motion.h2>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:gap-10 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:gap-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-1 flex-col items-center text-center"
          >
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm sm:h-20 sm:w-20"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 0 24px rgba(139, 92, 246, 0.15)',
              }}
            >
              <step.icon className="h-8 w-8 text-[#8b5cf6] sm:h-9 sm:w-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">{step.label}</h3>
            <p className="mt-1 max-w-[220px] text-sm text-slate-400 sm:text-base">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="mt-4 hidden md:block">
                <span className="text-2xl text-slate-500">→</span>
              </div>
        )}
          </motion.div>
        ))}
      </div>
      {/* Decorative pipeline line on desktop */}
      <div className="mx-auto mt-8 hidden max-w-2xl md:block">
        <div
          className="h-px w-full rounded-full opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, #3b82f6, transparent)' }}
        />
      </div>
    </section>
  )
}
