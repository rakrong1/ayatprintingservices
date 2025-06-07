import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Precision & Quality',
      description: 'Every project is executed with meticulous attention to detail and the highest quality standards.'
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality. We understand your time is valuable.'
    },
    {
      icon: '💡',
      title: 'Creative Solutions',
      description: 'Innovative approaches to bring your vision to life with creative design and printing solutions.'
    },
    {
      icon: '🤝',
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We work closely with you throughout the entire process.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About AYAT Business Services</h2>
            <p className="about-description">
              With over 5 years of experience in the printing industry, AYAT Business Services 
              has established itself as a trusted partner for businesses seeking premium printing 
              solutions. We combine cutting-edge technology with traditional craftsmanship to 
              deliver exceptional results.
            </p>
            <p className="about-description">
              Our team of skilled professionals is dedicated to transforming your ideas into 
              tangible, high-quality printed materials that represent your brand with excellence. 
              From concept to completion, we ensure every detail meets our rigorous standards.
            </p>
            
            <div className="about-stats">
              <div className="stat-box glass-dark">
                <h3>500+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="stat-box glass-dark">
                <h3>1000+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-box glass-dark">
                <h3>99%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <h3 className="features-title">Why Choose Us?</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item glass">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About