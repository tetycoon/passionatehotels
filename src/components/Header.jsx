import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/assets/src_images/logo.png" alt="Passionate Hotels" className="logo-img" style={{ height: '40px', display: 'block', width: 'auto' }} />
        </Link>

        <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/family-resort-in-yercaud" onClick={() => setMobileMenuOpen(false)}>Yercaud</Link>
          <Link to="/yelagiri" onClick={() => setMobileMenuOpen(false)}>Yelagiri</Link>
          <Link to="/chennai" onClick={() => setMobileMenuOpen(false)}>Chennai</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="header-actions">
          <button className="btn-primary" onClick={onOpenEnquiry}>
            Check Availability
          </button>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
