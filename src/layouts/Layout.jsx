import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';

const Layout = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top and trigger animations observer on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      // 1. Scroll animations IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      });

      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => observer.observe(el));

      // 2. 3D Tilt Hover listeners
      const tiltCards = document.querySelectorAll('.tilt-3d');
      
      const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        // Calculate tilt angles based on mouse position (max 15 degrees)
        const angleX = (yc - y) / 15;
        const angleY = (x - xc) / 15;
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-8px)`;
      };

      const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      };

      tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        observer.disconnect();
        tiltCards.forEach(card => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      
      <main style={{ flex: 1 }}>
        {children}
      </main>

      <Footer />
      
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
      />
    </div>
  );
};

export default Layout;
