import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '📄',
      title: 'Document Services',
      description: 'Professional document printing, binding, and finishing services for lesson notes, terminal and mock exams, reports, manuals, and presentations.',
      features: ['Binding Options', 'Professional Finish', 'Bulk Orders']
    },
    {
      icon: '🖨️',
      title: 'Digital Printing',
      description: 'High-quality digital printing for all your business needs including brochures, flyers, and marketing materials.',
      features: ['High Resolution', 'Fast Turnaround', 'Color Accuracy']
    },
    {
      icon: '🏷️',
      title: 'Custom Labels',
      description: 'Custom label printing for products, packaging, and branding with various materials and finishes.',
      features: ['Waterproof Options', 'Custom Shapes', 'Durable Materials']
    },
    {
      icon: '📊',
      title: 'Large Format',
      description: 'Large format printing for banners, posters, signage, and display materials for events and advertising.',
      features: ['Weather Resistant', 'Various Sizes', 'Indoor/Outdoor']
    },
    {
      icon: '💼',
      title: 'Business Cards',
      description: 'Premium business cards with various finishes and materials to make a lasting first impression.',
      features: ['Premium Materials', 'Special Finishes', 'Quick Delivery']
    },
    {
      icon: '🎨',
      title: 'Design Services',
      description: 'Professional graphic design services to create stunning visuals for all your printing needs.',
      features: ['Custom Design', 'Brand Consistency', 'Creative Solutions']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive printing solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">
                Learn More
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services