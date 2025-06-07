import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'Digital Printing',
      'Document Services',
      'Custom Labels',
      'Large Format',
      'Business Cards',
      'Design Services'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates',
      'Privacy Policy',
      'Terms of Service'
    ],
    support: [
      'Contact Us',
      'FAQ',
      'Order Tracking',
      'File Upload',
      'Technical Support',
      'Pricing Guide'
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">AYAT BUSINESS SERVICES</h3>
            <p className="footer-tagline">Premium Printing Solutions</p>
            <p className="footer-description">
              Your trusted partner for all printing needs. We deliver quality, 
              creativity, and professionalism in every project.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="social-link glass"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">Services</h4>
              <ul className="link-list">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Company</h4>
              <ul className="link-list">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Support</h4>
              <ul className="link-list">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Get In Touch</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <p>123 Business Street</p>
                <p>City, State 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p>+233 24 592 7491</p>
              
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <p><p>ayatmultimedia19@gmail.com</p></p>
              
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} AYAT Business Services. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <a href="#" className="bottom-link">Terms of Service</a>
              <a href="#" className="bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer