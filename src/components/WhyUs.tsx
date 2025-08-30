import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { emoji: '🧠', title: 'Guided Adventures', desc: 'Quick ten minutes sessions designed by child psychologists.' },
  { emoji: '📘', title: 'Tools for Big Feelings', desc: 'Calm down skills, sleep stories, and focus boosters.' },
  { emoji: '🫱🏿‍🫲🏿', title: 'Habits & Routines', desc: 'Stickers, streaks, and gentle reminders build habits.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="mb-8">
        <h2 className="h2">Why LittleMind Care?</h2>
        <p className="muted">Delightful design, research backed programs, loved by parents and teachers.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ emoji, title, desc }) => (
          <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="card">
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="muted mt-1">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
