import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';

const Layout = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

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
