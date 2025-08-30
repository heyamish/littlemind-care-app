import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '../context/ModalContext'

export default function Modal({ children }: { children: React.ReactNode }) {
  const { open, closeModal } = useModal()
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-glow"
            role="dialog"
            aria-modal="true"
          >
            <button aria-label="Close modal" onClick={closeModal} className="absolute right-4 top-4 text-gray-500">✕</button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
