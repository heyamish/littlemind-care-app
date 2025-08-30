import React from 'react'
import { motion } from 'framer-motion'
import { useModal } from '../context/ModalContext'

export default function Hero() {
  const { openModal } = useModal()
  return (
    <section className="section grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <div className="badge">As featured in Health Today Magazine</div>
        <h1 className="h1">Mindfulness & Meditation for Kids</h1>
        <p className="muted max-w-xl">Kid friendly exercises that boost attention, builds focus and confidence, and improve sleep created with ❤️ by Manish and trusted by parents.</p>
        <div className="flex flex-wrap gap-3">
          <button onClick={openModal} className="btn btn-primary">Start Free Trial</button>
          <a href="#programs" className="btn btn-ghost">Browse Programs</a>
        </div>
        <div className="flex flex-wrap gap-2 pt-2 text-sm">
          {['Focus', 'Stress', 'Sleep', 'Empathy'].map(tag => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-soft"
      >
        <img src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fHww" alt="Happy kid meditating" className="object-cover w-full h-full" />
      </motion.div>
    </section>
  )
}
