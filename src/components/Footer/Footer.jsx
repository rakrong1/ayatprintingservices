import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const legalTexts = {
    'Privacy Policy': `
At AYAT Business Services, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our services.

1. **Information We Collect**: We may collect personal information such as your name, email address, phone number, and company details when you contact us or use our services.

2. **How We Use Your Information**: Your data is used to deliver services, respond to inquiries, process transactions, and improve our website and customer experience.

3. **Data Sharing**: We do not sell or rent your personal information. We may share it with trusted partners who help us operate our business, as long as they agree to keep it confidential.

4. **Cookies and Tracking**: We use cookies to understand user behavior, improve our website performance, and deliver relevant advertisements.

5. **Your Rights**: You have the right to access, correct, or request deletion of your personal data. To exercise your rights, please contact us.

6. **Security**: We implement appropriate measures to protect your personal data against unauthorized access or disclosure.

By using our services, you agree to the terms outlined in this Privacy Policy.
`,

    'Terms of Service': `
Welcome to AYAT Business Services. By accessing or using our website and services, you agree to comply with the following Terms of Service:

1. **Use of Services**: Our services are provided for lawful purposes only. You agree not to misuse them or violate any applicable laws or regulations.

2. **Intellectual Property**: All content, including logos, designs, and graphics, are the property of AYAT Business Services and may not be reproduced without our written consent.

3. **Orders and Payments**: By placing an order, you agree to provide accurate information and pay the full amount for the services selected.

4. **Cancellation and Refunds**: You may cancel your order within a specified period. Refunds are issued at our discretion, based on the service and project status.

5. **Limitation of Liability**: We strive to provide quality service, but we are not liable for any indirect, incidental, or consequential damages that may arise from using our website or services.

6. **Changes to Terms**: We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of the revised terms.

If you do not agree to these terms, please do not use our services.
`
,
    'Cookie Policy': `
Our Cookie Policy explains how AYAT Business Services uses cookies and similar technologies to enhance your experience on our website.

1. **What Are Cookies**: Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and optimize website functionality.

2. **Types of Cookies We Use**:
- **Essential Cookies**: Enable basic functions like navigation and access to secure areas.
- **Performance Cookies**: Help us analyze how visitors use our site.
- **Marketing Cookies**: Used to deliver relevant ads and track campaign performance.

3. **Managing Cookies**: You can control or delete cookies through your browser settings. Disabling cookies may affect site functionality.

4. **Third-Party Cookies**: We may use third-party services like Google Analytics to understand website traffic and improve performance.

By continuing to use our site, you consent to the use of cookies in accordance with this policy.
`

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
      'General Stationery',
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
