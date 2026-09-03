import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FourCIKI from './components/FourCIKI'
import WhatIBuild from './components/WhatIBuild'
import Projects from './components/Projects'
import EarlierProjects from './components/EarlierProjects'
import Skills from './components/Skills'
import Recognition from './components/Recognition'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const ambientGlowRef = useRef(null)

  useEffect(() => {
    // 1. Scroll reveal observer
    const revealEls = document.querySelectorAll('.reveal:not(.visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    )
    revealEls.forEach((el) => observer.observe(el))

    // Fallback timer
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('visible')
        }
      })
    }, 400)

    // 2. Global Interactive 3D Card Tilt Physics
    const handleCardMouseMove = (e) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Subtle 3D tilt angles (max ~6 degrees for classiness, not cartoonish)
      const rotY = ((x - centerX) / centerX) * 5.5
      const rotX = ((y - centerY) / centerY) * -5.5

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`
    }

    const handleCardMouseLeave = (e) => {
      const card = e.currentTarget
      card.style.transform = ''
    }

    // Attach to all .card elements
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
      card.addEventListener('mousemove', handleCardMouseMove)
      card.addEventListener('mouseleave', handleCardMouseLeave)
    })

    // 3. Smooth Ambient Cursor Lighting Follower
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let glowX = mouseX
    let glowY = mouseY
    let animId

    const onPointerMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    const renderGlow = () => {
      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      if (ambientGlowRef.current) {
        ambientGlowRef.current.style.transform = `translate3d(${glowX - 350}px, ${glowY - 350}px, 0)`
      }
      animId = requestAnimationFrame(renderGlow)
    }
    renderGlow()

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleCardMouseMove)
        card.removeEventListener('mouseleave', handleCardMouseLeave)
      })
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      {/* 3D Global Ambient Lighting Aura */}
      <div ref={ambientGlowRef} className="global-ambient-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FourCIKI />
        <WhatIBuild />
        <Projects />
        <EarlierProjects />
        <Skills />
        <Recognition />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
