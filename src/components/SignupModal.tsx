import React, { useState } from 'react'
import Modal from './Modal'
import { useModal } from '../context/ModalContext'

export default function SignupModal() {
  const { open } = useModal()
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', classGrade: '', message: '' })
  const [errors, setErrors] = useState<Record<string,string>>({})

  function validate() {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!/^\+?[0-9]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.classGrade.trim()) e.classGrade = 'Required'
    return e
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return
    setSending(true)
    await new Promise((r) => setTimeout(r, 900))
    console.log('Signup form submitted:', form)
    setSending(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <Modal>
      <div>
        <h3 className="text-2xl font-bold">Start Your Free Trial</h3>
        <p className="muted mt-1">Enter details below and we will contact you to get started.</p>

        {open && (
          <form onSubmit={onSubmit} className="mt-6 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-lg border border-black/10 p-2" />
              {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-lg border border-black/10 p-2" />
              {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-lg border border-black/10 p-2" placeholder="+919876543210" />
              {errors.phone && <div className="text-xs text-red-500 mt-1">{errors.phone}</div>}
            </div>

            <div>
              <label className="text-sm font-medium">Class</label>
              <select value={form.classGrade} onChange={(e) => setForm({...form, classGrade: e.target.value})} className="mt-1 w-full rounded-lg border border-black/10 p-2">
                <option value="">Select class</option>
                <option>KG</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
              </select>
              {errors.classGrade && <div className="text-xs text-red-500 mt-1">{errors.classGrade}</div>}
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-lg border border-black/10 p-2" rows={4} />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="text-sm muted">We respect your privacy. No spam.</div>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending...' : 'Request Free Trial'}
              </button>
            </div>

            {success && <div className="sm:col-span-2 mt-2 rounded-md bg-green-50 p-3 text-green-800">Thanks! We will reach out soon.</div>}
          </form>
        )}
      </div>
    </Modal>
  )
}
