import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const legalTexts = {
    'Privacy Policy': `This is our Privacy Policy. We are committed to protecting your personal information and your right to privacy.`,
    'Terms of Service': `These are our Terms of Service. By using our services, you agree to be bound by these terms.`,
    'Cookie Policy': `Our Cookie Policy explains how we use cookies to improve your browsing experience.`
  };

  const openModal = (title) => {
    setModalContent(legalTexts[title]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const footerLinks = {
    services: [
      'Digital Printing',
      'Document Services',
      'Custom Labels',
      'Large Format',
      'Business Cards',
      'Design Services'
    ],
    company: ['About Us', 'Our Team', 'Careers', 'News & Updates'],
    support: ['Contact Us', 'FAQ', 'Technical Support']
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' }
  ];

  return (
    <footer className="footer">
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>
            <div>{modalContent}</div>
          </div>
        </div>
      )}

      <div className="footer-container">
        <div className="footer-content non-interactive">
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
                <p>Techimantia, Ahafo Region.</p>
                <p>Ghana</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p>+233 24 592 7491</p>
                <p>+233 20 786 0773</p>
              </div>
            </div>
            <div className="contact-item">
            <span className="contact-icon">✉️</span>
             <div>
             <p>ayatmultimedia19@gmail.com</p>
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
            <div className="footer-bottom-links legal-links">
              {Object.keys(legalTexts).map((item) => (
                <button
                  key={item}
                  className="bottom-link"
                  onClick={() => openModal(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
