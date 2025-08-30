import React, { useState } from 'react'

const qas = [
  { q: 'What ages do you cover?', a: 'We offer programs for ages 4–14, tailored by developmental stage.' },
  { q: 'Is it free?', a: 'Start on the Starter plan for free. Upgrade for premium programs.' },
  { q: 'Do you have offline access?', a: 'Yes, download sessions for offline listening on mobile.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section">
      <h2 className="h2 mb-6">Frequently Asked Questions</h2>
      <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
        {qas.map((qa, i) => (
          <button key={qa.q} className="w-full px-6 py-4 text-left" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <div className="flex items-center justify-between">
              <span className="font-semibold">{qa.q}</span>
              <span className="text-xl">{open === i ? '−' : '+'}</span>
            </div>
            {open === i && <p className="muted mt-2">{qa.a}</p>}
          </button>
        ))}
      </div>
    </section>
  )
}
