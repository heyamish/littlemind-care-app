import React from 'react'
import { ModalProvider } from './context/ModalContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Programs from './components/Programs'
import Features from './components/Features'
import Pricing from './components/Pricing'
import ParentTeacher from './components/ParentTeacher'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SignupModal from './components/SignupModal'

export default function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main>
          <Hero />
          <WhyUs />
          <Programs />
          <Features />
          <Pricing />
          <ParentTeacher />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <SignupModal />
      </div>
    </ModalProvider>
  )
}
