import React from 'react'

export default function Footer() {
  return (
    <footer className="section">
      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-semibold">LittleMind Care</p>
          <p className="muted text-sm">© {new Date().getFullYear()} LittleMind Care. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
