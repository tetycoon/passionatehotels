import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle, ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import './Home.css';

const Home = () => {
  // Hero Image Slider State
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    '/assets/src_images/yercaud_main.webp',
    '/assets/src_images/campfire2.webp',
    '/assets/src_images/Yelagiri-Nature-Park.jpg'
  ];

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    location: '',
    guests: '1'
  });

  // Testimonials Carousel State
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    { quote: "The three-room quarters were perfect for our family reunion. Spacious, clean, and cozy. The chef’s food was a highlight!", author: "Anita R.", location: "Chennai" },
    { quote: "Our kids loved the play area and pools. We felt safe and relaxed the entire time. Can’t wait to come back!", author: "Rahul M.", location: "Bengaluru" },
    { quote: "The location is unbeatable. Peaceful mornings, beautiful views, and great hospitality. Highly recommended!", author: "Priya S.", location: "Coimbatore" },
    { quote: "Peaceful stay with beautiful hill views, great service, and comfortable rooms. Highly recommended!", author: "Sylver Star", location: "Yercaud" }
  ];

  // Delayed Registration Popup State
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: ''
  });
  const [popupSuccess, setPopupSuccess] = useState(false);

  // Hero image slider rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Testimonials rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Trigger delayed registration popup after 5 seconds
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('popupDismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle Quick Booking Form Check
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Prefill data for EnquiryModal
    sessionStorage.setItem('prefilledBooking', JSON.stringify({
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      location: bookingData.location,
      guests: bookingData.guests
    }));
    // Programmatically open EnquiryModal by clicking the header action button
    const btn = document.querySelector('.header-actions .btn-primary');
    if (btn) btn.click();
  };

  // Handle Registration Popup Submit
  const handlePopupSubmit = (e) => {
    e.preventDefault();
    setPopupSuccess(true);
    setTimeout(() => {
      setShowPopup(false);
      sessionStorage.setItem('popupDismissed', 'true');
    }, 2500);
  };

  const handleDismissPopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('popupDismissed', 'true');
  };

  return (
    <div className="page-wrapper home-page-luxury">
      {/* Hero Section with Background Slider */}
      <section className="hero">
        {heroImages.map((img, idx) => (
          <div 
            key={idx}
            className={`hero-bg ${idx === heroIndex ? 'active' : ''}`} 
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">PASSIONATE HOTELS</p>
          <h1 className="hero-title animate-fade-in-up">Where Every Stay becomes a Journey of Escape, Relaxation & Celebration</h1>
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Plan Your Journey
          </button>
        </div>
      </section>

      {/* Inline Booking Check Bar directly below Hero */}
      <div className="booking-bar-wrapper container">
        <form className="booking-bar-form glass" onSubmit={handleBookingSubmit}>
          <div className="booking-bar-field">
            <label><Calendar size={14} /> Check In</label>
            <input 
              type="date" 
              required
              value={bookingData.startDate}
              onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
            />
          </div>
          <div className="booking-bar-field">
            <label><Calendar size={14} /> Check Out</label>
            <input 
              type="date" 
              required
              value={bookingData.endDate}
              onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
            />
          </div>
          <div className="booking-bar-field">
            <label><MapPin size={14} /> Escape To</label>
            <select 
              required
              value={bookingData.location}
              onChange={(e) => setBookingData({...bookingData, location: e.target.value})}
            >
              <option value="">Choose resort...</option>
              <option value="Yercaud">Yercaud (Golden Paradise)</option>
              <option value="Yelagiri">Yelagiri (Midvalley / Kurinji)</option>
              <option value="Not sure yet">Not Sure Yet</option>
            </select>
          </div>
          <div className="booking-bar-field">
            <label><Users size={14} /> Guests</label>
            <select 
              value={bookingData.guests}
              onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
          <button type="submit" className="btn-primary booking-bar-btn">
            Check Availability
          </button>
        </form>
      </div>

      {/* Welcome Section */}
      <section className="section container section-padding text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="subtitle">WELCOME TO PASSIONATE HOTELS</p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-neutral)' }}>Escape.. Relax.. Celebrate..</h2>
        <div style={{ width: '60px', height: '1px', background: 'var(--color-tertiary)', margin: 'var(--space-3) auto var(--space-4)' }}></div>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.9', color: 'var(--color-text-secondary)', textAlign: 'justify' }}>
          We’ve created a comfortable and welcoming experience at what many guests consider the best resorts in Yercaud and Yelagiri, where every detail is thoughtfully planned to help you relax and feel truly cared for. From the moment you arrive until the time you leave, our focus is on your comfort, ease, and happiness. As a trusted family resort provider, we ensure a peaceful, safe, and joyful stay for couples, families, and friends—so you can enjoy every moment of your getaway without stress or worry.
        </p>
      </section>

      {/* Overhauled Resort Showcase Cards Section */}
      <section className="section container section-padding" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="section-header text-center">
          <p className="subtitle">OUR SANCTUARIES</p>
          <h2>Curated Escapes</h2>
        </div>
        
        <div className="destinations-showcase-grid">
          {/* Yercaud Card */}
          <div className="luxury-escapes-card glass animate-fade-in-up">
            <div className="escapes-img-frame">
              <img src="/assets/src_images/yercaud-view-1.jpg" alt="Yercaud Resort" />
              <div className="escapes-gold-corner"></div>
            </div>
            <div className="escapes-info-block">
              <span className="escapes-tag">HILL STATION ESCAPE</span>
              <h3>Yercaud: Relax in Serene Beauty</h3>
              <p className="escapes-desc">
                As a leading family resort in Yercaud, we offer spacious rooms, scenic views, and a calm environment that makes every stay special. Guests consistently choose us as the best resort in Yercaud for weekend holidays, family vacations, and couple retreats.
              </p>
              <ul className="escapes-benefits-list">
                <li>✨ Located near Yercaud Bus Stand</li>
                <li>🌳 Placed between Peeku Park & Sky Park</li>
                <li>🔥 Campfires & Cozy Sit-outs</li>
              </ul>
              <Link to="/family-resort-in-yercaud" className="btn-primary escapes-cta">
                Explore Yercaud <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>

          {/* Yelagiri Card */}
          <div className="luxury-escapes-card glass animate-fade-in-up" style={{ flexDirection: 'row-reverse' }}>
            <div className="escapes-img-frame">
              <img src="/assets/src_images/Jalagamparai-Falls.webp" alt="Yelagiri Resort" />
              <div className="escapes-gold-corner" style={{ left: '0px', right: 'auto', borderRight: 'none', borderLeft: '1px solid var(--color-tertiary)', borderBottom: 'none', borderTop: '1px solid var(--color-tertiary)' }}></div>
            </div>
            <div className="escapes-info-block">
              <span className="escapes-tag">TRANQUIL VALLEY ESCAPE</span>
              <h3>Yelagiri: Escape to Tranquil Hills</h3>
              <p className="escapes-desc">
                A Yelagiri resort is the perfect choice for a refreshing weekend escape from busy city life. Known for its peaceful climate and scenic hills, Yelagiri has become one of the best weekend getaway destinations for families, couples, and friends.
              </p>
              <ul className="escapes-benefits-list">
                <li>🌲 Private properties Midvalley & Kurinji</li>
                <li>🚣 Boating support at Punganoor Lake</li>
                <li>🥾 Hiking guidance for Swamimalai trails</li>
              </ul>
              <Link to="/yelagiri" className="btn-primary escapes-cta">
                Explore Yelagiri <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Homelike Details section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section-padding">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            <div className="glass" style={{ padding: 'var(--space-5)', borderTop: '2px solid var(--color-tertiary)', borderRadius: '0px' }}>
              <h3 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-3)' }}>A Resort That Feels Like Home</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
                From the moment you arrive, you’ll be greeted with warm hospitality and an inviting atmosphere. Our thoughtfully designed accommodations, paired with modern amenities and natural surroundings, create the perfect setting for relaxation and togetherness.
              </p>
            </div>
            <div className="glass" style={{ padding: 'var(--space-5)', borderTop: '2px solid var(--color-tertiary)', borderRadius: '0px' }}>
              <h3 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-3)' }}>Perfect for Every Occasion</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
                Be it a weekend escape, a festive celebration, or a group holiday, Passionate Hotels is the destination of choice. Spacious family quarters, curated group packages, and seasonal offers ensure that every guest finds more than just a stay—they find an experience worth repeating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Yercaud / Golden Paradise section */}
      <section className="section container section-padding">
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">EXPERIENCE COMFORT</p>
          <h2 style={{ color: 'var(--color-neutral)' }}>Why Choose Golden Paradise Yercaud</h2>
          <div style={{ width: '50px', height: '1px', background: 'var(--color-tertiary)', margin: 'var(--space-2) auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
          {[
            { title: "🌄 Peaceful Location", desc: "Located in a calm area away from crowds, offering a relaxing hill-station experience." },
            { title: "🏡 Comfortable Rooms", desc: "Spacious, clean, and well-maintained rooms designed for maximum comfort." },
            { title: "🌿 Nature Surroundings", desc: "Enjoy fresh air, misty mornings, and beautiful greenery all around the resort." },
            { title: "👨‍👩‍👧‍👦 Family Friendly", desc: "Perfect for families, couples, and group stays with a safe and peaceful environment." },
            { title: "📍 Prime Location", desc: "Close to Yercaud Lake, viewpoints, and major tourist attractions." },
            { title: "💰 Affordable Stay", desc: "Enjoy a comfortable and budget-friendly stay without compromising quality." }
          ].map((item, idx) => (
            <div key={idx} className="glass why-choose-card" style={{ padding: 'var(--space-4)', borderRadius: '0px', borderLeft: '3px solid var(--color-tertiary)' }}>
              <h4 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-2)' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section-padding text-center">
          <div className="section-header">
            <p className="subtitle">THE ART OF LIVING</p>
            <h2>Refined Experiences</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-item glass" style={{ padding: 'var(--space-4)' }}>
              <div className="feature-img-wrapper">
                 <img src="/assets/src_images/campfire2.webp" alt="Leisure" />
              </div>
              <h4>🔥 Campfire Activity</h4>
              <p>Relax with cozy campfire evenings filled with warmth, laughter, and memorable moments.</p>
            </div>
            <div className="feature-item glass" style={{ padding: 'var(--space-4)' }}>
              <div className="feature-img-wrapper">
                 <img src="/assets/src_images/restaurant.webp" alt="Dining" />
              </div>
              <h4>🍽️ Multi-Cuisine Dining</h4>
              <p>Enjoy a variety of South Indian, North Indian, and continental dishes for all tastes.</p>
            </div>
            <div className="feature-item glass" style={{ padding: 'var(--space-4)' }}>
              <div className="feature-img-wrapper">
                 <img src="/assets/src_images/Midvalley_1.webp" alt="Events" />
              </div>
              <h4>🎯 Indoor Games & Leisure</h4>
              <p>Fun indoor games and free Wi-Fi for all age groups, perfect for relaxed leisure time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sightseeing Showcase: High-end horizontal scroll Flex track */}
      <section className="section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <p className="subtitle">BESPOKE ACTIVITIES</p>
            <h2>Explore Yercaud & Yelagiri</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
              Step beyond our properties and explore beautiful scenic points. Scroll horizontally to browse activities.
            </p>
          </div>

          <div className="sightseeing-horizontal-scroll">
            <div className="scroll-track">
              {[
                { title: "⛵ Yercaud Lake Boating", desc: "Boating rests quietly among rolling green hills, where gentle waters mirror the sky and drifting clouds.", img: "/assets/src_images/yercaud_main.webp", loc: "Yercaud" },
                { title: "🌊 Kiliyur Falls Hikes", desc: "Pours gracefully through lush green forests, its rushing waters echoing with mist and nature's rhythms.", img: "/assets/src_images/yercaud-view-1.jpg", loc: "Yercaud" },
                { title: "⛰️ Shevaroy Hills Mist", desc: "Emerald hill peaks with cool mountain winds humming through misty cloud-kissed tea plantations.", img: "/assets/src_images/cropped-Harvest-Hill.png", loc: "Yercaud" },
                { title: "🌅 Pagoda Point Sunrise", desc: "Golden sunrises awaken the hills, offering a quiet space where the mind finds peace.", img: "/assets/src_images/campfire2.webp", loc: "Yercaud" },
                { title: "🥾 Yelagiri Hills Trek", desc: "Experience trekking through Yelagiri's lush, winding trails with beautiful vistas.", img: "/assets/src_images/Yelagiri-Nature-Park.jpg", loc: "Yelagiri" },
                { title: "💧 Jalagamparai Falls", desc: "Relax and enjoy the calming beauty of flowing seasonal waterfalls surrounded by nature.", img: "/assets/src_images/Jalagamparai-Falls.webp", loc: "Yelagiri" }
              ].map((item, idx) => (
                <div key={idx} className="scroll-card glass">
                  <div className="scroll-card-img-frame">
                    <img src={item.img} alt={item.title} />
                    <span className="scroll-card-badge">{item.loc}</span>
                  </div>
                  <div className="scroll-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Promise Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div className="hover-zoom-container" style={{ height: '400px' }}>
            <img src="/assets/src_images/cropped-Harvest-Hill.png" alt="Arun Venkatesan, Founder" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
          </div>
          <div>
            <p className="subtitle">THE VISION</p>
            <h2 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-4)' }}>Our Founder's Promise</h2>
            <div className="glass" style={{ padding: 'var(--space-5)', borderRadius: '0px', borderLeft: '4px solid var(--color-tertiary)', fontStyle: 'italic' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify' }}>
                "Passionate Hotels was born from my love for the serene beauty of the hills. What began as a dream inspired by Yelagiri has grown into welcoming retreats in Yercaud and Yelagiri. More than resorts, these are places of warmth, joy, and togetherness. Here, every guest becomes family—sharing laughter, sunsets, and heartfelt moments."
              </p>
              <p style={{ color: 'var(--color-neutral)', fontWeight: '600', marginTop: 'var(--space-4)', fontSize: '1.1rem', textAlign: 'right' }}>
                — Arun Venkatesan, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section-padding">
          <div className="section-header text-center">
            <p className="subtitle">TESTIMONIALS</p>
            <h2>What Our Guests Say</h2>
          </div>
          
          <div className="testimonials-carousel-wrapper">
            <div className="testimonials-carousel-card glass">
              <div className="testimonial-quote-symbol">“</div>
              <p className="testimonial-quote-text">
                {testimonials[testimonialIndex].quote}
              </p>
              <div className="testimonial-author-block">
                <h5 className="testimonial-author-name">{testimonials[testimonialIndex].author}</h5>
                <span className="testimonial-author-loc">{testimonials[testimonialIndex].location}</span>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === testimonialIndex ? 'active' : ''}`}
                  onClick={() => setTestimonialIndex(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section container section-padding">
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">QUESTIONS & ANSWERS</p>
          <h2 style={{ color: 'var(--color-neutral)' }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            { q: "What makes Passionate Hotels the best family resort in Yercaud?", a: "Our property (Golden Paradise) is widely regarded as the best resort in Yercaud for families because of its peaceful surroundings, spacious rooms, and relaxing hill-station environment. Guests looking for a trusted family resort in Yercaud choose us for comfort and safety." },
            { q: "Are the resorts near the bus stand and tourist spots?", a: "Yes. Golden Paradise is a well-located resort near the Yercaud bus stand, making travel easy for families. It is uniquely positioned between Peeku Park and Sky Park, allowing guests to explore Yercaud's attractions comfortably during the day and return to a peaceful, relaxing resort in the evening." },
            { q: "Is it a good destination for a weekend getaway?", a: "Absolutely. Many guests choose us as the best resort in Yercaud for weekend getaways. Families and couples prefer this family resort in Yercaud for short trips because of its scenic views and peaceful climate." },
            { q: "What kind of rooms and amenities are available?", a: "We provide spacious and comfortable family rooms, free parking, campfire facilities, multi-cuisine dining options, 24/7 front desk assistance, free Wi-Fi, indoor games, and hot water services." },
            { q: "Is it safe for children and senior citizens?", a: "Yes, as a well-maintained family resort in Yercaud, we ensure comfort and safety for children and senior citizens. This is why many families choose us for multi-generation stays." },
            { q: "Are there group and family vacation packages?", a: "Yes. We offer custom group bookings, family packages, and campfire arrangements tailored to reunions, weekend escapes, and celebrations. Simply fill out our Enquiry form to receive customized package options." },
            { q: "Can I request local sightseeing support?", a: "Yes, we provide travel guidance for sightseeing, viewpoints (like Pagoda Point and Shevaroy Hills), waterfalls, and nearby attractions to make your trip smooth and well-planned." },
            { q: "How can I book my stay?", a: "You can book by clicking any of the 'Check Availability' or 'Plan Your Journey' buttons on our website, or by clicking the WhatsApp call button at the top/bottom to connect directly with our reservation team." }
          ].map((faq, idx) => (
            <details key={idx} className="faq-details" style={{ borderBottom: '1px solid var(--color-border)', padding: 'var(--space-3) 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-neutral)', outline: 'none', padding: 'var(--space-2) 0', listStylePosition: 'inside' }}>
                {faq.q}
              </summary>
              <p style={{ margin: 'var(--space-2) 0 0 0', lineHeight: '1.8', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Timed Registration Popup Modal */}
      {showPopup && (
        <div className="popup-overlay glass fade-in">
          <div className="popup-content glass">
            <button className="popup-close-btn" onClick={handleDismissPopup}>
              <X size={20} />
            </button>
            <div className="popup-grid">
              <div className="popup-img-side" style={{ backgroundImage: "url('/assets/src_images/yercaud_main.webp')" }}>
                <div className="popup-img-overlay">
                  <h4>Passionate Hotels</h4>
                  <p>A sanctuary of mist and gold</p>
                </div>
              </div>
              <div className="popup-form-side">
                <h3>Register Now</h3>
                <p className="popup-subtitle">Get the Lowest price on Internet - Room with Breakfast!</p>
                
                {popupSuccess ? (
                  <div className="popup-success-block text-center fade-in">
                    <CheckCircle size={48} color="var(--color-tertiary)" style={{ margin: '0 auto var(--space-2)' }} />
                    <h5>Registration Success!</h5>
                    <p>Redirecting your offer details...</p>
                  </div>
                ) : (
                  <form onSubmit={handlePopupSubmit}>
                    <div className="popup-input-group">
                      <label>Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter Name"
                        value={popupData.name}
                        onChange={(e) => setPopupData({...popupData, name: e.target.value})}
                      />
                    </div>
                    <div className="popup-input-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="Enter Email"
                        value={popupData.email}
                        onChange={(e) => setPopupData({...popupData, email: e.target.value})}
                      />
                    </div>
                    <div className="popup-input-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Enter Phone Number"
                        value={popupData.phone}
                        onChange={(e) => setPopupData({...popupData, phone: e.target.value})}
                      />
                    </div>
                    <div className="popup-input-group">
                      <label>Purpose of Visit</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Family Trip, Couple Retreat, Event"
                        value={popupData.purpose}
                        onChange={(e) => setPopupData({...popupData, purpose: e.target.value})}
                      />
                    </div>
                    <button type="submit" className="btn-primary popup-submit-btn">
                      Submit & Unlock Price
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
