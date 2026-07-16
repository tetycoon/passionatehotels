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

      return () => observer.disconnect();
    }, 100);

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
