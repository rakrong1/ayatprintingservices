import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Business Street', 'City, State 12345']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+233 24 592 7491']
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
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                  />
                </div>
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="digital-printing">Digital Printing</option>
                    <option value="document-services">Document Services</option>
                    <option value="custom-labels">Custom Labels</option>
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
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact