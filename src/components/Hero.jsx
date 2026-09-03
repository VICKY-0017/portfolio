import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TYPING_PHRASES = [
  'Generative AI Engineer',
  'Agentic AI Builder',
  'LLM Systems Developer',
  'RAG Architect',
  'AI Product Engineer',
]

export default function Hero() {
  const typingRef = useRef(null)
  const canvasRef = useRef(null)
  const photoWrapperRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Typing animation
  useEffect(() => {
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeout

    const type = () => {
      const phrase = TYPING_PHRASES[phraseIndex]
      const el = typingRef.current
      if (!el) return

      if (isDeleting) {
        el.textContent = phrase.substring(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length
          timeout = setTimeout(type, 600)
          return
        }
        timeout = setTimeout(type, 45)
      } else {
        el.textContent = phrase.substring(0, charIndex + 1)
        charIndex++
        if (charIndex === phrase.length) {
          isDeleting = true
          timeout = setTimeout(type, 2200)
          return
        }
        timeout = setTimeout(type, 70)
      }
    }

    timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [])

  // Interactive 3D Neural Constellation Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let nodes = []
    let mouse = { x: -1000, y: -1000, radius: 160 }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class NeuralNode {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 0.8 + 0.2 // Depth factor for 3D feel
        this.size = (Math.random() * 2 + 1) * this.z
        this.vx = (Math.random() - 0.5) * 0.4 * this.z
        this.vy = (Math.random() - 0.5) * 0.4 * this.z
        this.pulse = Math.random() * Math.PI * 2
        this.baseColor = Math.random() > 0.4 ? '59, 130, 246' : '139, 92, 246'
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += 0.025

        // Boundary wrap
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Subtle 3D mouse attraction/repulsion
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 1.5 * this.z
          this.x -= (dx / dist) * force
          this.y -= (dy / dist) * force
        }
      }

      draw() {
        const glow = 0.5 + 0.5 * Math.sin(this.pulse)
        const alpha = (0.25 + 0.45 * glow) * this.z
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.baseColor}, ${alpha})`
        ctx.shadowBlur = 10 * this.z
        ctx.shadowColor = `rgba(${this.baseColor}, 0.8)`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    resize()
    const nodeCount = Math.min(85, Math.floor((canvas.width * canvas.height) / 11000))
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new NeuralNode())
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw neural connections between nodes
      const maxDistance = 115
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const depthFactor = (nodes[i].z + nodes[j].z) * 0.5
            const alpha = (1 - dist / maxDistance) * 0.18 * depthFactor
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`
            ctx.lineWidth = 0.75 * depthFactor
            ctx.stroke()
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update()
        nodes[i].draw()
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  // 3D Photo Parallax Tilt on mouse move
  const handleHeroMouseMove = (e) => {
    if (!photoWrapperRef.current) return
    const rect = photoWrapperRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) / (window.innerWidth / 2)
    const deltaY = (e.clientY - centerY) / (window.innerHeight / 2)

    // Smooth tilt angles
    const rotY = Math.max(-16, Math.min(16, deltaX * 16))
    const rotX = Math.max(-16, Math.min(16, -deltaY * 16))
    setMousePos({ x: rotY, y: rotX })
  }

  const handleHeroMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const scrollToWork = (e) => {
    e.preventDefault()
    document.getElementById('ai-work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      {/* 3D Cyber grid */}
      <div className="hero__grid" aria-hidden="true" />
      {/* High-voltage radial glows */}
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />
      <div className="hero__glow hero__glow--center" aria-hidden="true" />

      {/* Interactive 3D Neural Constellation */}
      <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          {/* Status badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Available for AI Engineering Roles</span>
          </div>

          {/* Name */}
          <h1 className="hero__name">
            Vignesh Babu T R
          </h1>

          {/* Dynamic typing headline */}
          <div className="hero__headline">
            <span ref={typingRef} className="hero__typing" aria-live="polite" />
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          {/* Description */}
          <p className="hero__description">
            I build practical AI systems using Generative AI, LLMs, RAG,
            agentic workflows, and modern software engineering — turning
            complex problems into intelligent, scalable applications.
          </p>

          {/* Identity */}
          <div className="hero__identity">
            <span className="hero__identity-item">
              <span className="hero__identity-dot hero__identity-dot--blue" />
              AI Engineer @ Kaar Technologies
            </span>
            <span className="hero__identity-sep">·</span>
            <span className="hero__identity-item">
              <span className="hero__identity-dot hero__identity-dot--violet" />
              Building 4CIKI
            </span>
          </div>

          {/* CTAs */}
          <div className="hero__actions">
            <a href="#ai-work" className="btn btn-primary" onClick={scrollToWork}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              Explore My Work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={scrollToContact}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Connect With Me
            </a>
            <a
              href="https://github.com/VICKY-0017"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero__github-btn"
              aria-label="GitHub Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* 3D Photo Centerpiece */}
        <div
          ref={photoWrapperRef}
          className="hero__photo-wrapper"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
          }}
        >
          {/* Dual 3D Gyroscope Holographic Rings */}
          <div className="hero__gyro-ring hero__gyro-ring--outer" />
          <div className="hero__gyro-ring hero__gyro-ring--inner" />
          <div className="hero__photo-ring" />

          <div className="hero__photo-container">
            <img
              src="/Vignesh_babu_TR.png"
              alt="Vignesh Babu T R — AI Engineer"
              className="hero__photo"
              loading="eager"
              decoding="async"
            />
            {/* Ambient specular highlight inside photo */}
            <div className="hero__photo-specular" />
          </div>

          {/* 3D Floating Tech Badges with Z-elevation */}
          <div className="hero__float hero__float--top">
            <div className="hero__float-tag">
              <span className="hero__float-dot" style={{ background: '#3b82f6' }} />
              <span>LangChain + LangGraph</span>
              <span className="hero__float-badge">Agentic</span>
            </div>
          </div>
          <div className="hero__float hero__float--bottom">
            <div className="hero__float-tag">
              <span className="hero__float-dot" style={{ background: '#8b5cf6' }} />
              <span>RAG · Agents · LLMs</span>
              <span className="hero__float-badge">GenAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero__scroll"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to about"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </a>
    </section>
  )
}
