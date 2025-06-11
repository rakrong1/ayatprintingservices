import React, { useState, useEffect } from 'react'
import './Services.css'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: '📄',
      title: 'Document Services',
      description: 'Professional document printing, binding, and finishing services for lesson notes, terminal and mock exams, reports, manuals, and presentations.',
      features: ['Binding Options', 'Professional Finish', 'Bulk Orders'],
      details: {
        overview: 'Our document services cater to educational institutions, businesses, and individuals who need professional document preparation and printing.',
        specifications: [
          'Paper sizes: A4, A3, Letter, Legal, and custom sizes',
          'Binding options: Spiral, comb, perfect binding, saddle stitching',
          'Paper types: Standard copy paper, premium paper, cardstock',
          'Finishing: Lamination, hole punching, folding'
        ],
        useCases: [
          'Educational materials and lesson notes',
          'Terminal and mock examination papers',
          'Business reports and presentations',
          'Training manuals and handbooks',
          'Thesis and dissertation printing'
        ],
        pricing: 'Contact for pricing'
      }
    },
    {
      icon: '📘',
      title: 'General Stationery',
      description: 'Wide range of stationery supplies including soft copies of lesson notes, Textbooks, examinations, and other educational resources online.',
      features: ['Lesson Notes', 'Textbooks', 'Mock Exams', 'End of Term Exams', 'Past Questions'],
      details: {
        overview: 'Wide range of stationery supplies including soft copies of lesson notes, textbooks, examinations, past questions, customized stationery, and other educational resources.',
        specifications: [
          'Materials: Vinyl, paper, polyester, clear labels',
          'Adhesives: Permanent, removable, repositionable',
          'Finishes: Matte, gloss, textured',
          'Shapes: Round, square, oval, custom die-cut shapes'
        ],
        useCases: [
          'Tutoring and lesson planning',
          'Educational institutions and schools',
          'Corporate training materials',
          'Mock exams and assessments',
          'End of term examinations and past questions',
          'Promotional stickers'
        ],
        pricing: 'Custom quotes based on size, quantity, and material'
      }
    },
    {
      icon: '🖨️',
      title: 'Digital Printing',
      description: 'High-quality digital printing for all your business needs including brochures, flyers, and marketing materials.',
      features: ['High Resolution', 'Fast Turnaround', 'Color Accuracy'],
      details: {
        overview: 'State-of-the-art digital printing technology ensuring crisp, vibrant prints for all your marketing and business materials.',
        specifications: [
          'Resolution: Up to 1200 DPI for sharp, clear images',
          'Color matching: Pantone color matching available',
          'Paper weights: 80gsm to 350gsm',
          'Formats: Single-sided, double-sided printing'
        ],
        useCases: [
          'Marketing brochures and flyers',
          'Product catalogs and price lists',
          'Event programs and invitations',
          'Corporate stationery',
          'Promotional materials'
        ],
        pricing: 'Competitive rates with bulk discounts available'
      }
    },
    {
      icon: '📊',
      title: 'Large Format',
      description: 'Large format printing for banners, posters, signage, and display materials for events and advertising.',
      features: ['Weather Resistant', 'Various Sizes', 'Indoor/Outdoor'],
      details: {
        overview: 'Professional large format printing for impactful visual displays, perfect for events, advertising, and business signage.',
        specifications: [
          'Maximum size: Up to 60 inches wide, unlimited length',
          'Materials: Vinyl banners, canvas, photo paper, fabric',
          'Inks: UV-resistant, fade-resistant inks',
          'Finishing: Grommets, pole pockets, mounting options'
        ],
        useCases: [
          'Event banners and backdrops',
          'Retail and trade show displays',
          'Outdoor advertising signage',
          'Wall murals and decorative prints',
          'Vehicle wraps and decals'
        ],
        pricing: 'Custom quotes based on size, quantity, and material'
      }
    },
    {
      icon: '💼',
      title: 'Business Cards',
      description: 'Premium business cards with various finishes and materials to make a lasting first impression.',
      features: ['Premium Materials', 'Special Finishes', 'Quick Delivery'],
      details: {
        overview: 'Create professional business cards that make a memorable first impression with premium materials and finishing options.',
        specifications: [
          'Standard size: 3.5" x 2" (89mm x 51mm)',
          'Materials: Standard cardstock, premium paper, plastic, metal',
          'Finishes: Matte, gloss, spot UV, embossing, foil stamping',
          'Thickness: 14pt to 32pt cardstock options'
        ],
        useCases: [
          'Professional networking',
          'Business meetings and conferences',
          'Marketing and brand promotion',
          'Contact information sharing',
          'Corporate identity building'
        ],
        pricing: 'Custom quotes based on quantity, materials, and finishing options'
      }
    },
    {
      icon: '🎨',
      title: 'Design Services',
      description: 'Professional graphic design services to create stunning visuals for all your printing needs.',
      features: ['Custom Design', 'Brand Consistency', 'Creative Solutions'],
      details: {
        overview: 'Complete graphic design services from concept to completion, ensuring your brand stands out with professional, eye-catching designs.',
        specifications: [
          'Software: Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
          'Formats: Print-ready files, web graphics, vector graphics',
          'Revisions: Up to 3 rounds of revisions included',
          'Delivery: High-resolution files in multiple formats'
        ],
        useCases: [
          'Logo design and brand identity',
          'Marketing materials design',
          'Packaging and label design',
          'Website graphics and banners',
          'Social media graphics'
        ],
        pricing: 'Custom quotes based on project complexity and timeline'
      }
    }
  ]

  const openModal = (service) => {
    setSelectedService(service)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  // NEW FUNCTION: Handle Get Quote button
  const handleGetQuote = () => {
    // Close the modal first
    closeModal()
    
    // Wait a bit for modal to close, then scroll to contact
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 300) // 300ms delay to allow modal close animation
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (selectedService) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset' // Cleanup
    }
  }, [selectedService])

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
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button 
                className="service-btn"
                onClick={() => openModal(service)}
              >
                Learn More
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedService.icon}</div>
              <h2 className="modal-title">{selectedService.title}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{selectedService.details.overview}</p>
              </div>

              <div className="modal-section">
                <h3>Specifications</h3>
                <ul className="modal-list">
                  {selectedService.details.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Common Use Cases</h3>
                <ul className="modal-list">
                  {selectedService.details.useCases.map((useCase, index) => (
                    <li key={index}>{useCase}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section pricing-section">
                <h3>Pricing</h3>
                <p className="pricing-info">{selectedService.details.pricing}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="contact-btn" onClick={handleGetQuote}>
                Get Quote
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services