import React from 'react';
import { Link } from 'react-router-dom';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  return (
    <div className="page-wrapper">
      <div className="booking-hero">
        <div className="container text-center">
          <h1 style={{ color: 'var(--color-tertiary)' }}>Thank You</h1>
          <p style={{ color: 'var(--color-neutral)', opacity: 0.8, fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Your inquiry has been successfully received by our concierge team. We will be in touch shortly to finalize your reservation.
          </p>
        </div>
      </div>
      
      <section className="section container section-padding">
        <div className="booking-card">
          <div className="booking-header">
            <h3>Reservation Summary</h3>
            <span className="status-badge">Pending Confirmation</span>
          </div>
          
          <div className="booking-details">
            <div className="detail-item">
              <span className="detail-label">Destination</span>
              <span className="detail-value">Awaiting Selection</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Guest Name</span>
              <span className="detail-value">Primary Guest</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Check-in</span>
              <span className="detail-value">TBD</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Check-out</span>
              <span className="detail-value">TBD</span>
            </div>
          </div>
          
          <div className="booking-footer">
            <p>Our team will contact you within 24 hours to coordinate details.</p>
            <Link to="/" className="btn-primary" style={{ marginTop: 'var(--space-3)' }}>Return Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingConfirmation;
