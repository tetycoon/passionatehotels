import React from 'react';
import { Link } from 'react-router-dom';

const DestinationTemplate = ({ title, subtitle, image, description }) => {
  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '600px' }}>
        <div className="hero-bg" style={{ backgroundImage: `url(${image})`, filter: 'brightness(0.7) grayscale(0.2)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">{subtitle}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <section className="section container section-padding text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="subtitle">THE EXPERIENCE</p>
        <h2 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-4)' }}>Sanctuary of Serenity</h2>
        <p style={{ fontSize: '1rem', lineHeight: '2', color: 'rgba(229, 226, 223, 0.8)' }}>
          {description}
        </p>
        <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()} style={{ marginTop: 'var(--space-6)' }}>
          Reserve Your Stay
        </button>
      </section>
    </div>
  );
};

export const Yercaud = () => (
  <DestinationTemplate 
    title="Yercaud" 
    subtitle="GOLDEN PARADISE"
    image="/assets/uploads/2026/01/Top-10-Beautiful-Places-To-Visit-In-Yercaud-Tour-Plan-To-India-e1767956437965.jpg"
    description="As a leading family resort in Yercaud, we offer spacious rooms, scenic views, and a calm environment that makes every stay special. Guests consistently choose us as the best resort in Yercaud for weekend holidays, family vacations, and couple retreats."
  />
);

export const Yelagiri = () => (
  <DestinationTemplate 
    title="Yelagiri" 
    subtitle="TRANQUIL HILLS"
    image="/assets/uploads/2026/02/Swami-Malai-Hills.jpg"
    description="A Yelagiri resort is the perfect choice for a refreshing weekend escape from busy city life. Known for its peaceful climate and scenic hills, Yelagiri has become one of the best weekend getaway destinations for families, couples, and friends."
  />
);

export const Chennai = () => (
  <DestinationTemplate 
    title="Chennai OMR" 
    subtitle="LYNWOOD VILLA"
    image="/assets/uploads/2026/01/Kovalam-Covelong-Beach-e1773050031455.jpg"
    description="Lynwood Villa is an ideal destination for a peaceful weekend stay in OMR, Chennai, offering a perfect blend of privacy, comfort, and open space. Located along the scenic OMR, for families, friends, and corporate groups looking for a premium stay experience."
  />
);
