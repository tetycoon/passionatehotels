import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    dates: '',
    guests: '',
    name: '',
    phone: ''
  });

  useEffect(() => {
    if (isOpen) {
      const saved = sessionStorage.getItem('prefilledBooking');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData(prev => ({
            ...prev,
            location: parsed.location || '',
            dates: (parsed.startDate && parsed.endDate) ? `${parsed.startDate} to ${parsed.endDate}` : (parsed.startDate || ''),
            guests: parsed.guests || ''
          }));
          if (parsed.location && parsed.startDate) {
            setStep(3);
          } else if (parsed.location) {
            setStep(2);
          }
        } catch (e) {
          console.error(e);
        }
        sessionStorage.removeItem('prefilledBooking');
      }
    } else {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => setStep(step + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData({
        location: '',
        dates: '',
        guests: '',
        name: '',
        phone: ''
      });
    }, 300);
  };

  return (
    <div className="modal-overlay glass">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <X size={24} />
        </button>

        {step === 1 && (
          <div className="modal-step fade-in">
            <h3>Where would you like to escape to?</h3>
            <div className="options-grid">
              {['Yercaud', 'Yelagiri', 'Not sure yet'].map((loc) => (
                <button 
                  key={loc}
                  className={`option-btn ${formData.location === loc ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData({...formData, location: loc});
                    handleNext();
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="modal-step fade-in">
            <h3>When are you planning to go?</h3>
            <p className="subtitle">Just an estimate is fine.</p>
            <input 
              type="text" 
              placeholder="e.g. Next weekend, or specific dates" 
              className="form-input"
              value={formData.dates}
              onChange={(e) => setFormData({...formData, dates: e.target.value})}
            />
            <button 
              className="btn btn-primary next-btn" 
              onClick={handleNext}
              disabled={!formData.dates}
            >
              Continue <ArrowRight size={18} style={{marginLeft: '8px'}}/>
            </button>
          </div>
        )}

        {step === 3 && (
          <form className="modal-step fade-in" onSubmit={handleSubmit}>
            <h3>Your Details</h3>
            <p className="subtitle">We'll get back to you with the best packages.</p>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="form-input"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Phone Number (WhatsApp)" 
              className="form-input"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <button type="submit" className="btn btn-primary submit-btn">
              Get My Quote
            </button>
          </form>
        )}

        {step === 4 && (
          <div className="modal-step success fade-in text-center">
            <CheckCircle size={64} color="var(--color-accent-gold)" />
            <h3>Request Received!</h3>
            <p>Our team will contact you shortly with a personalized quote for your {formData.location} escape.</p>
            <button className="btn btn-outline" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
        
        {step < 4 && (
          <div className="step-indicator">
            <span className={step >= 1 ? 'active' : ''}></span>
            <span className={step >= 2 ? 'active' : ''}></span>
            <span className={step >= 3 ? 'active' : ''}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
