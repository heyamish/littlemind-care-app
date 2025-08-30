import React, { useState } from 'react'
import { useModal } from '../context/ModalContext'

const links = [
  { href: '#why', label: 'Why LittleMind' },
  { href: '#programs', label: 'Programs' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { openModal } = useModal()
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="section flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 font-extrabold text-brand-700">
          <span className="h-3 w-3 rounded-full bg-mint" />
          <span>LittleMind Care</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-gray-700 hover:text-brand-600">
              {l.label}
            </a>
          ))}
          <button onClick={openModal} className="btn btn-primary">Start Free</button>
        </div>

        <button aria-label="Toggle menu" className="md:hidden btn btn-ghost" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="section flex flex-col gap-4 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-semibold">
                {l.label}
              </a>
            ))}
            <button onClick={() => { openModal(); setOpen(false) }} className="btn btn-primary w-full">Start Free</button>
          </div>
        </div>
      )}
    </header>
  )
}
