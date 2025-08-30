import React from 'react'

const plans = [
  { name: 'Starter', price: 0, features: ['5 Guided Sessions', 'Basic Progress'], cta: 'Start' },
  { name: 'Premium', price: 299, features: ['All Programs', 'Sleep Stories', 'Streaks & Rewards'], cta: 'Premium⭐', featured: true },
  { name: 'Family', price: 499, features: ['Everything In Premium Plus', '4 Profiles'], cta: 'Premium Plus✨' },
]

export default function Pricing() {
  const period: 'mo' | 'yr' = 'mo'
  return (
    <section id="pricing" className="section">
      <div className="mb-8 text-center">
        <h2 className="h2">Choose Your Plan</h2>
        <p className="muted">Start free, then upgrade anytime.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map(p => (
          <div key={p.name} className={`card transition-transform hover:-translate-y-1 ${p.featured ? 'border-brand-200 ring-2 ring-brand-300' : ''}`}>
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="text-xl font-bold">{p.name}</h3>
              {p.featured && <span className="badge">Popular</span>}
            </div>
            <div className="mb-4">
              <span className="text-4xl font-extrabold">{p.price === 0 ? 'Free' : `₹${p.price}`}</span>
              {p.price !== 0 && <span className="muted">/{period}</span>}
            </div>
            <ul className="mb-6 space-y-2">
              {p.features.map(f => (<li key={f} className="flex items-center gap-2"><span>✅</span><span>{f}</span></li>))}
            </ul>
            <a href="#" className={`btn w-full ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>{p.cta}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
