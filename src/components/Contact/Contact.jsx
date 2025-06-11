import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorDetails, setErrorDetails] = useState('')

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_sr7lf1h',
    TEMPLATE_ID: 'template_6to7r86', 
    PUBLIC_KEY: 'deh4hgFhztL2HAI5I'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorDetails('')

    // Debug: Log the data being sent
    console.log('Sending email with data:', {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    })

    try {
      // Initialize EmailJS (add this line)
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          // Remove to_email - this should be set in your EmailJS template
        }
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

    } catch (error) {
      console.error('Detailed error:', error)
      setSubmitStatus('error')
      
      // Set detailed error message
      if (error.text) {
        setErrorDetails(`Error: ${error.text}`)
      } else if (error.message) {
        setErrorDetails(`Error: ${error.message}`)
      } else {
        setErrorDetails('Unknown error occurred')
      }
      
    } finally {
      setIsSubmitting(false)
      
      // Clear status message after 8 seconds (longer for debugging)
      setTimeout(() => {
        setSubmitStatus(null)
        setErrorDetails('')
      }, 8000)
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['Techimantia', 'Ahafo Region', 'Ghana']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+233 24 592 7491', '+233 20 786 0773']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['ayatmultimedia19@gmail.com']
    },
    {
      icon: '🕒',
      title: 'Working Hours',
      details: ['Mon - Fri: 7:00 AM - 6:00 PM', 'Sat: 8:00 AM - 4:00 PM']
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next printing project? Contact us today for a free consultation
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item glass">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3 className="form-title">Send us a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  ❌ Failed to send message. Please try again or contact us directly.
                  {errorDetails && <div style={{fontSize: '0.9em', marginTop: '0.5rem'}}>{errorDetails}</div>}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select Service</option>
                    <option value="digital-printing">Digital Printing</option>
                    <option value="document-services">Document Services</option>
                    <option value="custom-labels">General Stationary</option>
                    <option value="large-format">Large Format</option>
                    <option value="business-cards">Business Cards</option>
                    <option value="design-services">Design Services</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact