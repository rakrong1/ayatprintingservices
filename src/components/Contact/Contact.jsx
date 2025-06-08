import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { clientDataUtils } from '../../utils/localStorage'
import './Contact.css'

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_wnhzjxr',
  TEMPLATE_ID: 'template_6to7r86',
  PUBLIC_KEY: 'YtL9VGJdNOoOhEGJh'
}

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
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true)
  const [lastSaved, setLastSaved] = useState(null)
  const [showSavedDataPrompt, setShowSavedDataPrompt] = useState(false)

  // Load saved data on component mount
  useEffect(() => {
    const savedData = clientDataUtils.getSavedContactForm()
    const preferences = clientDataUtils.getClientPreferences()
    
    if (savedData.name || savedData.email || savedData.message) {
      setShowSavedDataPrompt(true)
    }
    
    setAutoSaveEnabled(preferences.autoSave)
  }, [])

  // Auto-save form data
  useEffect(() => {
    if (autoSaveEnabled && (formData.name || formData.email || formData.message)) {
      const timeoutId = setTimeout(() => {
        clientDataUtils.saveContactForm(formData)
        setLastSaved(new Date())
      }, 2000) // Save after 2 seconds of inactivity

      return () => clearTimeout(timeoutId)
    }
  }, [formData, autoSaveEnabled])

  // Load saved data
  const loadSavedData = () => {
    const savedData = clientDataUtils.getSavedContactForm()
    setFormData({
      name: savedData.name || '',
      email: savedData.email || '',
      phone: savedData.phone || '',
      service: savedData.service || '',
      message: savedData.message || ''
    })
    setShowSavedDataPrompt(false)
  }

  // Dismiss saved data prompt
  const dismissSavedData = () => {
    setShowSavedDataPrompt(false)
    clientDataUtils.removeItem('ayat_contact_form')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorDetails('')

    try {
      // Initialize EmailJS
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
          message: formData.message
        }
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      // Save to service history
      clientDataUtils.saveServiceHistory({
        service: formData.service,
        clientName: formData.name,
        clientEmail: formData.email,
        status: 'submitted'
      })

      // Clear saved form data after successful submission
      clientDataUtils.removeItem('ayat_contact_form')
      
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
      setErrorDetails(`Error: ${error.text || error.message}`)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus(null)
        setErrorDetails('')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Ready to bring your printing needs to life? Let's discuss your project!</p>
        </div>

        {/* Saved Data Prompt */}
        {showSavedDataPrompt && (
          <div className="saved-data-prompt">
            <div className="prompt-content">
              <h4>📝 We found your previously saved information</h4>
              <p>Would you like to continue where you left off?</p>
              <div className="prompt-buttons">
                <button onClick={loadSavedData} className="btn btn-primary">
                  Load Saved Data
                </button>
                <button onClick={dismissSavedData} className="btn btn-secondary">
                  Start Fresh
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Kumasi, Ghana</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+233 24 123 4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>ayatmultimedia19@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Fri: 8AM - 6PM<br />Sat: 9AM - 4PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Auto-save indicator */}
            {autoSaveEnabled && lastSaved && (
              <div className="auto-save-indicator">
                💾 Auto-saved at {lastSaved.toLocaleTimeString()}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="lesson-notes">Lesson Notes Printing</option>
                  <option value="exam-papers">Examination Papers</option>
                  <option value="mock-exams">Mock Exams</option>
                  <option value="business-cards">Business Cards</option>
                  <option value="flyers">Flyers & Brochures</option>
                  <option value="banners">Banners & Posters</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell us about your printing needs, quantity, timeline, and any special requirements..."
              ></textarea>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={autoSaveEnabled}
                  onChange={(e) => setAutoSaveEnabled(e.target.checked)}
                />
                <span className="checkmark"></span>
                Auto-save my information
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                ❌ Failed to send message. Please try again.
                {errorDetails && <div className="error-details">{errorDetails}</div>}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact