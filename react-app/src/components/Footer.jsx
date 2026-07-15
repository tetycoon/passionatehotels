import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="logo-text">Passionate<br/>Hotels</h2>
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
            <li><Link to="/chennai">Chennai (OMR)</Link></li>
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
