import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/uploads/2026/01/Top-10-Beautiful-Places-To-Visit-In-Yercaud-Tour-Plan-To-India-e1767956437965.jpg')" }}></div>
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
          <Link to="/yercaud" className="destination-card">
            <img src="/assets/uploads/2026/01/Top-10-Beautiful-Places-To-Visit-In-Yercaud-Tour-Plan-To-India-e1767956437965.jpg" alt="Yercaud Resort" className="dest-img" />
            <div className="dest-overlay">
              <h3>Yercaud</h3>
              <p>Elevated tranquility.</p>
            </div>
          </Link>
          
          <Link to="/yelagiri" className="destination-card">
            <img src="/assets/uploads/2026/02/Swami-Malai-Hills.jpg" alt="Yelagiri Resort" className="dest-img" />
            <div className="dest-overlay">
              <h3>Yelagiri</h3>
              <p>Untamed adventure.</p>
            </div>
          </Link>
          
          <Link to="/chennai" className="destination-card">
            <img src="/assets/uploads/2026/01/Kovalam-Covelong-Beach-e1773050031455.jpg" alt="Chennai Resort" className="dest-img" />
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
               <img src="/assets/uploads/2026/01/indoor-games-1.jpg" alt="Leisure" />
            </div>
            <h4>Leisure & Recreation</h4>
            <p>Camp fires and bespoke activity guides.</p>
          </div>
          <div className="feature-item">
            <div className="feature-img-wrapper">
               <img src="/assets/uploads/2026/01/Las-Brisas-multi-cuisine-restaurants-in-Rishikesh.jpeg" alt="Dining" />
            </div>
            <h4>Culinary Mastery</h4>
            <p>Multi-cuisine dining under the stars.</p>
          </div>
          <div className="feature-item">
            <div className="feature-img-wrapper">
               <img src="/assets/uploads/2026/01/download-11.jpg" alt="Events" />
            </div>
            <h4>Celebrations</h4>
            <p>Flawless venues for corporate and family gatherings.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
