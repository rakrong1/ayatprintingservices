import React from 'react'
import './Hero.css'

const Hero = () => {
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
              <span className="title-line highlight">Printing</span>
              <span className="title-line">Solutions</span>
            </h1>
            <p className="hero-description">
              Printing of lesson notes,end of term
              examination, mock exams and other
              printing services.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Get Started
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn btn-secondary">
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item glass">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item glass">
              <h3>1000+</h3>
              <p>Projects Done</p>
            </div>
            <div className="stat-item glass">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero