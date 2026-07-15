import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '500px', backgroundColor: 'var(--color-bg-base)' }}>
        <div className="container hero-content">
          <p className="subtitle">INQUIRY & CONCIERGE</p>
          <h1>Reach Out to Serenity</h1>
          <p style={{ color: 'var(--color-neutral)', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
            Allow our concierge team to craft your perfect escape. We are at your service.
          </p>
        </div>
      </div>

      <section className="section container section-padding contact-grid">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-tertiary)' }}>Send an Inquiry</h3>
          <form className="concierge-form" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully!'); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label>Select Destination</label>
              <select required>
                <option value="">Choose a sanctuary</option>
                <option value="yercaud">Yercaud</option>
                <option value="yelagiri">Yelagiri</option>
                <option value="chennai">Chennai OMR</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we assist you?" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Locations */}
        <div className="contact-locations">
          
          <div className="location-card">
            <div className="location-info">
              <h4>Yercaud</h4>
              <p>Golden Paradise Resort<br/>Yercaud, Tamil Nadu 636601</p>
              <p className="contact-detail">Phone: +91 98765 43210</p>
            </div>
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.748184499645!2d78.19694465!3d11.77701835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfae6a64bbdfd%3A0xc3f10137d6e87fcd!2sYercaud%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Yercaud Map">
              </iframe>
            </div>
          </div>

          <div className="location-card">
            <div className="location-info">
              <h4>Yelagiri</h4>
              <p>Tranquil Hills Resort<br/>Yelagiri, Tamil Nadu 635853</p>
              <p className="contact-detail">Phone: +91 98765 43211</p>
            </div>
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31139.757049432657!2d78.61864575!3d12.57659615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac54a1a5b67d51%3A0x8670d859f77f989f!2sYelagiri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Yelagiri Map">
              </iframe>
            </div>
          </div>

          <div className="location-card">
            <div className="location-info">
              <h4>Chennai OMR</h4>
              <p>Lynwood Villa<br/>OMR, Chennai, Tamil Nadu 600119</p>
              <p className="contact-detail">Phone: +91 98765 43212</p>
            </div>
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124409.80587289564!2d80.12519175!3d12.98637775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1e4c7676c5%3A0x19dfa4a2a875a6c3!2sOld%20Mahabalipuram%20Rd%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Chennai Map">
              </iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
