import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const [clickedButton, setClickedButton] = useState(null)
  const [counters, setCounters] = useState({ clients: 0, projects: 0, years: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)

  // Function to animate counting
  const animateCounter = (start, end, duration, key) => {
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)
      
      setCounters(prev => ({ ...prev, [key]: current }))
      
      if (progress >= 1) {
        clearInterval(timer)
        setCounters(prev => ({ ...prev, [key]: end }))
      }
    }, 16) // ~60fps
  }

  // Intersection Observer to trigger animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            // Start counting animations with delays
            setTimeout(() => animateCounter(0, 500, 2000, 'clients'), 500)
            setTimeout(() => animateCounter(0, 1000, 2500, 'projects'), 700)
            setTimeout(() => animateCounter(0, 5, 1500, 'years'), 900)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Function to handle smooth scrolling with visual feedback
  const scrollToSection = (sectionId, buttonName) => {
    setClickedButton(buttonName)
    setTimeout(() => setClickedButton(null), 300)

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Premium</span>
              <span className="title-line highlight">Printing & Stationery</span>
              <span className="title-line">Solutions</span>
            </h1>
            <p className="hero-description">
              We provide top-quality printing services for lesson notes, end-of-term examinations, mock exams, and more. Beyond printing, we supply a wide range of stationery, textbooks, and educational materials.

              We also offer soft copies of lesson notes, exams, and other valuable academic resources online.
            </p>
            <div className="hero-buttons">
              <button 
                className={`btn btn-primary ${clickedButton === 'services' ? 'clicked' : ''}`}
                onClick={() => scrollToSection('services', 'services')}
              >
                Get Started
                <span className="btn-arrow">→</span>
              </button>
              <button 
                className={`btn btn-secondary ${clickedButton === 'portfolio' ? 'clicked' : ''}`}
                onClick={() => scrollToSection('portfolio', 'portfolio')}
              >
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item glass">
              <h3>{counters.clients}+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item glass">
              <h3>{counters.projects}+</h3>
              <p>Projects Done</p>
            </div>
            <div className="stat-item glass">
              <h3>{counters.years}+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero