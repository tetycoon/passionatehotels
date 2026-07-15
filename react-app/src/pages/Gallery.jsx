import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "/assets/uploads/2026/01/Top-10-Beautiful-Places-To-Visit-In-Yercaud-Tour-Plan-To-India-e1767956437965.jpg",
    "/assets/uploads/2026/01/indoor-games-1.jpg",
    "/assets/uploads/2026/01/Las-Brisas-multi-cuisine-restaurants-in-Rishikesh.jpeg",
    "/assets/uploads/2026/02/Swami-Malai-Hills.jpg",
    "/assets/uploads/2026/02/Jalagamparai-Falls.jpg",
    "/assets/uploads/2026/02/Jalakandeswarar-Temple.jpg",
    "/assets/uploads/2026/01/Kovalam-Covelong-Beach-e1773050031455.jpg",
    "/assets/uploads/2026/01/download-11.jpg"
  ];

  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '500px', backgroundColor: 'var(--color-primary)' }}>
        <div className="container hero-content">
          <p className="subtitle">EXHIBITION</p>
          <h1>The Gallery</h1>
          <p style={{ color: 'var(--color-neutral)', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
            A curated visual journey through our serene sanctuaries, majestic landscapes, and refined experiences.
          </p>
        </div>
      </div>
      
      <section className="section container section-padding">
        <div className="masonry-grid">
          {images.map((src, index) => (
            <div className={`masonry-item item-${index}`} key={index}>
              <img src={src} alt={`Gallery Image ${index + 1}`} />
              <div className="masonry-overlay">
                <span className="plus-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
