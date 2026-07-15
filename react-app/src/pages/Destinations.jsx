import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
        <p style={{ fontSize: '1rem', lineHeight: '2', color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
        <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()} style={{ marginTop: 'var(--space-6)' }}>
          Reserve Your Stay
        </button>
      </section>
    </div>
  );
};

export const Yercaud = () => {
  return (
    <div className="page-wrapper yercaud-page">
      <Helmet>
        <title>Best Family Resort in Yercaud Near Bus Stand – 2026</title>
        <meta name="description" content="Looking for the best family resort in Yercaud near bus stand? Discover peaceful stays, top amenities, & why Golden Paradise is the perfect choice for families." />
        <link rel="canonical" href="https://passionatehotels.in/family-resort-in-yercaud/" />
        <meta property="og:title" content="Best Family Resort in Yercaud Near Bus Stand – 2026" />
        <meta property="og:description" content="Looking for the best family resort in Yercaud near bus stand? Discover peaceful stays, top amenities, & why Golden Paradise is the perfect choice for families." />
      </Helmet>

      <div className="hero" style={{ minHeight: '600px' }}>
        <div className="hero-bg" style={{ backgroundImage: 'url(/assets/src_images/goldenparadise.jpeg)', filter: 'brightness(0.8)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">GOLDEN PARADISE HOTEL</p>
          <h1>Best Family Resort in Yercaud</h1>
        </div>
      </div>

      <section className="section container section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">THE EXPERIENCE</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>Comfortable Resort in Yercaud for Family Stays</h2>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-4)' }}>
          Golden Paradise Hotel is a peaceful and welcoming best family resort in Yercaud, thoughtfully designed for families, couples, and friends seeking a relaxing hill-station getaway. Located as a convenient resort near Yercaud bus stand, our property offers easy access while maintaining calm, nature-filled surroundings.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-6)' }}>
          We’ve created a comfortable and welcoming experience where every detail is carefully planned to help you relax and feel cared for. As a trusted family resort, Golden Paradise Hotel focuses on comfort, safety, and peaceful living so guests of all ages can enjoy their stay without stress or worry.
        </p>
        <div className="text-center">
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Reserve Your Stay
          </button>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <h2 style={{ color: 'var(--color-tertiary)' }}>Family-Friendly Amenities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
            {[
              "Spacious and comfortable family rooms",
              "Free parking facility",
              "24/7 front desk assistance",
              "Clean and hygienic environment",
              "Hot water facility",
              "Peaceful garden and sit-out areas",
              "Room service for guest convenience"
            ].map((amenity, idx) => (
              <div key={idx} className="glass" style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-none)', textAlign: 'center' }}>
                <p style={{ margin: 0, fontWeight: '500', color: 'var(--color-text-primary)' }}>{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-3)' }}>Resort Near Yercaud Bus Stand & Popular Attractions</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Golden Paradise Hotel is a well-located resort near Yercaud bus stand, making travel easy for families, senior citizens, and weekend visitors. Our resort is uniquely positioned in the middle of Peeku Park and Sky Park, allowing guests to enjoy nearby sightseeing spots without long travel. This prime location helps guests explore Yercaud’s attractions comfortably during the day and return to a peaceful, relaxing resort atmosphere in the evening.
            </p>
            <ul style={{ marginTop: 'var(--space-3)', color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: '2' }}>
              <li>Prime location near Yercaud bus stand</li>
              <li>Located between Peeku Park and Sky Park</li>
              <li>Ideal resort for family vacations</li>
              <li>Affordable pricing with quality comfort</li>
            </ul>
          </div>
          <div>
            <img src="/assets/src_images/pagoda-point-e1773050096125.png" alt="Yercaud View" style={{ borderRadius: 'var(--radius-none)', boxShadow: 'var(--shadow-glow)' }} />
          </div>
        </div>
      </section>

      <section className="section container section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ color: 'var(--color-tertiary)' }}>A Message from the Owner</h2>
        </div>
        <div className="glass" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', textAlign: 'justify', fontStyle: 'italic', boxShadow: 'var(--shadow-glow)' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            Welcome to Golden Paradise, my peaceful hill retreat in Yercaud. I personally created this resort with one simple intention — to give every guest a safe, comfortable, and genuinely relaxing stay that feels like home. As someone who truly loves Yercaud and its calm beauty, I wanted to build a place where guests could disconnect from stress and reconnect with nature.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
            Surrounded by misty hills, cool weather, and greenery, Golden Paradise is designed to offer peace, privacy, and comfort in every detail. I sincerely look forward to welcoming you personally and hosting you at Golden Paradise — a place built with care, run with heart, and surrounded by Yercaud’s golden charm.
          </p>
          <p style={{ color: 'var(--color-text-primary)', fontWeight: '600', marginTop: 'var(--space-6)', textAlign: 'right', fontSize: '1.1rem' }}>
            — Arun., Owner of PassionateHotels
          </p>
        </div>
      </section>
    </div>
  );
};

export const Yelagiri = () => (
  <DestinationTemplate 
    title="Yelagiri" 
    subtitle="TRANQUIL HILLS"
    image="/assets/src_images/Yelagiri-Nature-Park.jpg"
    description="A Yelagiri resort is the perfect choice for a refreshing weekend escape from busy city life. Known for its peaceful climate and scenic hills, Yelagiri has become one of the best weekend getaway destinations for families, couples, and friends."
  />
);

export const Chennai = () => (
  <DestinationTemplate 
    title="Chennai OMR" 
    subtitle="LYNWOOD VILLA"
    image="/assets/src_images/Muttukadu-Boat-House-East-Coast-Road_.jpg"
    description="Lynwood Villa is an ideal destination for a peaceful weekend stay in OMR, Chennai, offering a perfect blend of privacy, comfort, and open space. Located along the scenic OMR, for families, friends, and corporate groups looking for a premium stay experience."
  />
);
