import React, { useEffect, useRef } from 'react'

const testimonials = [
  { name: 'Sanjeevni (Parent)', text: 'My son uses it nightly bedtime is finally calm.', rating: 5 },
  { name: 'Apurva (Parent)', text: 'Focus improved in a week. The rewards keep him engaged.', rating: 5 },
  { name: 'Amish (Teacher)', text: 'Perfect for classroom transitions. Kids love it!', rating: 5 },
  { name: 'Richa (Techer)', text: 'Good for kids development'},
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % testimonials.length
      el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section">
      <h2 className="h2 mb-6">What Users Say</h2>
      <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
        {testimonials.map(t => (
          <div key={t.name} className="mr-4 w-full shrink-0 snap-center rounded-2xl border border-black/5 bg-white p-6 shadow-soft md:w-1/2">
            <div className="mb-2">{'★'.repeat(t.rating)}</div>
            <p className="mb-3">“{t.text}”</p>
            <p className="muted">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
