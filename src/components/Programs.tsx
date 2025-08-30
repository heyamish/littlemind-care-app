import React from 'react'

const groups = [
  {
    title: 'Little Explorers (4-6 Yrs.)',
    bullets: ['Sleep Stories', 'Focus Fun', 'Gentle Breath'],
    img: 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Brave Explorers (7-10 Yrs.)',
    bullets: ['Peace Timer', 'Confidence Builder', 'Emotion Notebooks'],
    img: 'https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fHww',
  },
  {
    title: 'Curious Explorers (11-14 Yrs.)',
    bullets: ['Mindful Minutes', 'Focus Builder', 'Goal Cards'],
    img: 'https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="section">
      <div className="mb-8">
        <h2 className="h2">Programs</h2>
        <p className="muted">Pick a track that grows with your child.</p>
      </div>
      <div className="grid gap-10">
        {groups.map((g, i) => (
          <div key={g.title} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
              <img src={g.img} alt={g.title} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{g.title}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {g.bullets.map(b => (
                  <li key={b} className="badge">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
