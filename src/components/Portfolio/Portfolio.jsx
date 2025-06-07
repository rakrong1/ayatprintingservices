import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Brochures',
      category: 'brochures',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      description: 'Premium corporate brochures with elegant design and high-quality finish.'
    },
    {
      id: 2,
      title: 'Business Cards Collection',
      category: 'business-cards',
      image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=400&h=300&fit=crop',
      description: 'Professional business cards with various finishes and materials.'
    },
    {
      id: 3,
      title: 'Event Banners',
      category: 'banners',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      description: 'Large format banners for events and promotional activities.'
    },
    {
      id: 4,
      title: 'Product Labels',
      category: 'labels',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Custom product labels with waterproof and durable materials.'
    },
    {
      id: 5,
      title: 'Marketing Flyers',
      category: 'flyers',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      description: 'Eye-catching marketing flyers for promotional campaigns.'
    },
    {
      id: 6,
      title: 'Annual Reports',
      category: 'documents',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      description: 'Professional annual reports with premium binding and finishing.'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'brochures', label: 'Brochures' },
    { key: 'business-cards', label: 'Business Cards' },
    { key: 'banners', label: 'Banners' },
    { key: 'labels', label: 'Labels' },
    { key: 'flyers', label: 'Flyers' },
    { key: 'documents', label: 'Documents' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our recent work and see the quality that sets us apart
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item glass">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <button className="view-btn">
                    <span>👁️</span>
                    View Details
                  </button>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio