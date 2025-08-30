import React from 'react'

export default function ParentTeacher() {
  const items = [
    { title: 'Classroom Starter Kit', link: '#', desc: 'Quick routines for the classroom.' },
    { title: '7 Day Calm Plan', link: '#', desc: 'Build a family habit together.' },
    { title: 'Conversation Pack', link: '#', desc: 'Prompts to help kids talk about feelings.' },
  ]
  return (
    <section className="section">
      <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-soft md:grid-cols-3">
        {items.map(i => (
          <a key={i.title} href={i.link} className="card hover:shadow-glow">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="muted mt-1">{i.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
