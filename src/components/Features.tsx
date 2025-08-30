import React from 'react'

const features = [
  { title: 'Ad-Free & Safe', desc: 'No ads. Kid‑safe content and privacy friendly.' },
  { title: 'Sleep Mode', desc: 'Soothing audios and stories for bedtime.' },
  { title: 'Classroom Friendly', desc: 'Teacher approved and easy to run in class.' },
  { title: 'Offline Access', desc: 'Download sessions for future.' },
  { title: 'Research Backed', desc: 'Built with child development experts.' },
  { title: 'Multi Child Profiles', desc: 'Personalized tracks for each child.' },
]

export default function Features() {
  return (
    <section className="section">
      <h2 className="h2 mb-8">Built for Kids, Loved by Parents</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map(f => (
          <div key={f.title} className="card">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="muted mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
