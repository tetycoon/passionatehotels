import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/src_images/yercaud_main.webp')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">PASSIONATE HOTELS</p>
          <h1>Sanctuaries of<br/>Elegance & Serenity</h1>
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Destinations Section (The Sanctuaries) */}
      <section className="section container section-padding">
        <div className="section-header text-center">
          <p className="subtitle">THE SANCTUARIES</p>
          <h2>Curated Escapes</h2>
        </div>
        
        <div className="destinations-grid">
          <Link to="/family-resort-in-yercaud" className="destination-card">
            <img src="/assets/src_images/yercaud-view-1.jpg" alt="Yercaud Resort" className="dest-img" />
            <div className="dest-overlay">
              <h3>Yercaud</h3>
              <p>Elevated tranquility.</p>
            </div>
          </Link>
          
          <Link to="/yelagiri" className="destination-card">
            <img src="/assets/src_images/Jalagamparai-Falls.webp" alt="Yelagiri Resort" className="dest-img" />
            <div className="dest-overlay">
              <h3>Yelagiri</h3>
              <p>Untamed adventure.</p>
            </div>
          </Link>
          
          <Link to="/chennai" className="destination-card">
            <img src="/assets/src_images/The-coastline-of-Chennai.jpg" alt="Chennai Resort" className="dest-img" />
            <div className="dest-overlay">
              <h3>Chennai OMR</h3>
              <p>Urban luxury.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Amenities Section (The Art of Living) */}
      <section className="section container section-padding text-center">
        <div className="section-header">
          <p className="subtitle">THE ART OF LIVING</p>
          <h2>Refined Experiences</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-img-wrapper">
               <img src="/assets/src_images/campfire2.webp" alt="Leisure" />
            </div>
            <h4>Leisure & Recreation</h4>
            <p>Camp fires and bespoke activity guides.</p>
          </div>
          <div className="feature-item">
            <div className="feature-img-wrapper">
               <img src="/assets/src_images/restaurant.webp" alt="Dining" />
            </div>
            <h4>Culinary Mastery</h4>
            <p>Multi-cuisine dining under the stars.</p>
          </div>
          <div className="feature-item">
            <div className="feature-img-wrapper">
               <img src="/assets/src_images/Midvalley_1.webp" alt="Events" />
            </div>
            <h4>Celebrations</h4>
            <p>Flawless venues for corporate and family gatherings.</p>
          </div>
        </div>
      </section>

      {/* Founder's Promise Section */}
      <section className="section container section-padding animate-fade-in-up">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div className="hover-zoom-container" style={{ height: '400px' }}>
            <img src="/assets/src_images/cropped-Harvest-Hill.png" alt="Arun Venkatesan, Founder" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
          </div>
          <div>
            <p className="subtitle">THE VISION</p>
            <h2 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-4)' }}>Our Founder's Promise</h2>
            <div className="glass animate-fade-in-up" style={{ padding: 'var(--space-5)', borderRadius: '0px', borderLeft: '4px solid var(--color-tertiary)', fontStyle: 'italic' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify' }}>
                "Passionate Hotels was born from my love for the serene beauty of the hills and the coast. What began as a dream inspired by Yelagiri has grown into welcoming retreats in Yercaud and Chennai. More than resorts, these are places of warmth, joy, and togetherness. Here, every guest becomes family—sharing laughter, sunsets, and heartfelt moments."
              </p>
              <p style={{ color: 'var(--color-neutral)', fontWeight: '600', marginTop: 'var(--space-4)', fontSize: '1.1rem', textAlign: 'right' }}>
                — Arun Venkatesan, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container section-padding">
          <div className="section-header text-center">
            <p className="subtitle">TESTIMONIALS</p>
            <h2>What Our Guests Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            {[
              { quote: "The three-room quarters were perfect for our family reunion. Spacious, clean, and cozy. The chef’s food was a highlight!", author: "Anita R.", location: "Chennai" },
              { quote: "Our kids loved the play area and pools. We felt safe and relaxed the entire time. Can’t wait to come back!", author: "Rahul M.", location: "Bengaluru" },
              { quote: "The location is unbeatable. Peaceful mornings, beautiful views, and great hospitality. Highly recommended!", author: "Priya S.", location: "Coimbatore" },
              { quote: "Peaceful stay with beautiful hill views, great service, and comfortable rooms. Highly recommended!", author: "Sylver Star", location: "Yercaud" }
            ].map((t, idx) => (
              <div key={idx} className="glass" style={{ padding: 'var(--space-4)', borderRadius: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                  "{t.quote}"
                </p>
                <div>
                  <h5 style={{ color: 'var(--color-neutral)', margin: '0 0 2px 0', fontSize: '1rem' }}>{t.author}</h5>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-tertiary)' }}>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
