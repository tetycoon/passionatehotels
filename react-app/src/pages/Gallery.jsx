import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "/assets/src_images/campfire2.webp",
    "/assets/src_images/Midvalley_1.webp",
    "/assets/src_images/restaurant.webp",
    "/assets/src_images/Sithulpawwa-Rock-Temple-Ancient-Buddhist-Monastery-Guide.jpg",
    "/assets/src_images/Kurinji_3.webp",
    "/assets/src_images/Midvalley_4.webp",
    "/assets/src_images/yercaud-lake-e1767956215728.webp",
    "/assets/src_images/chennai.webp"
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
