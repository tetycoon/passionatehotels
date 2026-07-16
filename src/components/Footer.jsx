import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
            <img src="/assets/src_images/Logo.png" alt="Passionate Hotels" style={{ height: '55px', width: '55px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
            <span className="logo-text" style={{ fontSize: '1.4rem', fontWeight: '500', whiteSpace: 'nowrap' }}>Passionate Hotels</span>
          </div>
          <p>Where Every Stay becomes a Journey of Escape, Relaxation, and Celebration.</p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Mail size={20} /></a>
            <a href="#"><Phone size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/family-resort-in-yercaud">Yercaud</Link></li>
            <li><Link to="/yelagiri">Yelagiri</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Passionate Hotels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
