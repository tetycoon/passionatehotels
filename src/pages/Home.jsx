import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/assets/src_images/yercaud_main.webp')" }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">PASSIONATE HOTELS</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.2' }}>Where Every Stay becomes a<br/>Journey of Escape, Relaxation & Celebration</h1>
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Plan Your Journey
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section container section-padding text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p className="subtitle" style={{ color: 'var(--color-tertiary)' }}>WELCOME TO PASSIONATE HOTELS</p>
        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', color: 'var(--color-neutral)' }}>Escape.. Relax.. Celebrate..</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-6)' }}>
          We’ve created a comfortable and welcoming experience at what many guests consider the best resorts in Yercaud and Yelagiri, where every detail is thoughtfully planned to help you relax and feel truly cared for. From the moment you arrive until the time you leave, our focus is on your comfort, ease, and happiness. As a trusted family resort provider, we ensure a peaceful, safe, and joyful stay for couples, families, and friends—so you can enjoy every moment of your getaway without stress or worry.
        </p>
      </section>

      {/* Destinations Section (The Sanctuaries) */}
      <section className="section container section-padding" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="section-header text-center">
          <p className="subtitle">OUR SANCTUARIES</p>
          <h2>Curated Escapes</h2>
        </div>
        
        <div className="destinations-grid">
          <div className="glass hover-zoom-container" style={{ padding: '0px', borderRadius: '0px' }}>
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <img src="/assets/src_images/yercaud-view-1.jpg" alt="Yercaud Resort" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 'var(--space-5)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-neutral)', marginBottom: 'var(--space-2)' }}>Yercaud: Relax in Serene Beauty</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: 'var(--space-4)', minHeight: '80px' }}>
                As a leading family resort in Yercaud, we offer spacious rooms, scenic views, and a calm environment that makes every stay special. Guests consistently choose us as the best resort in Yercaud for weekend holidays, family vacations, and couple retreats.
              </p>
              <Link to="/family-resort-in-yercaud" className="btn-outline" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                Explore Yercaud
              </Link>
            </div>
          </div>
          
          <div className="glass hover-zoom-container" style={{ padding: '0px', borderRadius: '0px' }}>
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <img src="/assets/src_images/Jalagamparai-Falls.webp" alt="Yelagiri Resort" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 'var(--space-5)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-neutral)', marginBottom: 'var(--space-2)' }}>Yelagiri: Escape to Tranquil Hills</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: 'var(--space-4)', minHeight: '80px' }}>
                A Yelagiri resort is the perfect choice for a refreshing weekend escape from busy city life. Known for its peaceful climate and scenic hills, Yelagiri has become one of the best weekend getaway destinations for families, couples, and friends.
              </p>
              <Link to="/yelagiri" className="btn-outline" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                Explore Yelagiri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Homelike Details section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section-padding">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            <div className="glass" style={{ padding: 'var(--space-5)', borderLeft: '3px solid var(--color-tertiary)', borderRadius: '0px' }}>
              <h3 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-3)' }}>A Resort That Feels Like Home</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                From the moment you arrive, you’ll be greeted with warm hospitality and an inviting atmosphere. Our thoughtfully designed accommodations, paired with modern amenities and natural surroundings, create the perfect setting for relaxation and togetherness.
              </p>
            </div>
            <div className="glass" style={{ padding: 'var(--space-5)', borderLeft: '3px solid var(--color-tertiary)', borderRadius: '0px' }}>
              <h3 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-3)' }}>Perfect for Every Occasion</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
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
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            Experience a peaceful stay in Yercaud surrounded by nature, comfort, and scenic hill views. Golden Paradise is the perfect choice for families and couples looking for relaxation.
          </p>
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
            <div key={idx} className="glass" style={{ padding: 'var(--space-4)', borderRadius: '0px', borderTop: '2px solid var(--color-tertiary)' }}>
              <h4 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-2)' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section (The Art of Living) */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section-padding text-center">
          <div className="section-header">
            <p className="subtitle">THE ART OF LIVING</p>
            <h2>Refined Experiences</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-img-wrapper">
                 <img src="/assets/src_images/campfire2.webp" alt="Leisure" />
              </div>
              <h4>🔥 Campfire Activity</h4>
              <p>Relax with cozy campfire evenings filled with warmth, laughter, and memorable moments.</p>
            </div>
            <div className="feature-item">
              <div className="feature-img-wrapper">
                 <img src="/assets/src_images/restaurant.webp" alt="Dining" />
              </div>
              <h4>🍽️ Multi-Cuisine Dining</h4>
              <p>Enjoy a variety of South Indian, North Indian, and continental dishes for all tastes.</p>
            </div>
            <div className="feature-item">
              <div className="feature-img-wrapper">
                 <img src="/assets/src_images/Midvalley_1.webp" alt="Events" />
              </div>
              <h4>🎯 Indoor Games & Leisure</h4>
              <p>Fun indoor games and free Wi-Fi for all age groups, perfect for relaxed leisure time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Yercaud & Yelagiri Sightseeing */}
      <section className="section container section-padding">
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">BESPOKE ACTIVITIES</p>
          <h2 style={{ color: 'var(--color-neutral)' }}>Explore Yercaud & Yelagiri</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            Step beyond our beautiful properties and explore exciting experiences designed to help you relax and discover new places.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
          <div>
            <h3 style={{ color: 'var(--color-tertiary)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>Yercaud Exploration</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: "⛵ Yercaud Lake Boating", desc: "Rests quietly among rolling green hills, where gentle waters mirror the sky and drifting clouds." },
                { title: "🌊 Kiliyur Falls Hikes", desc: "Pours gracefully through lush green forests, its rushing waters echoing with the rhythm of nature." },
                { title: "⛰️ Shevaroy Hills Mist", desc: "Rises in emerald grace, cool winds humming through misty skies and cloud-kissed plantations." },
                { title: "🌅 Pagoda Point Sunrises", desc: "Greets the day with golden sunrises that slowly awaken the valleys below with spiritual calm." }
              ].map((item, idx) => (
                <li key={idx} style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--color-neutral)' }}>{item.title}:</strong> <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-tertiary)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>Yelagiri Exploration</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: "🥾 Yelagiri Hills Trekking", desc: "Escape the ordinary and experience trekking through Yelagiri’s lush, winding trails with beautiful views." },
                { title: "💧 Jalagamparai Waterfall", desc: "Relax and enjoy the calming beauty of Jalagamparai waterfalls, the perfect place to refresh your senses." },
                { title: "🚣 Boating at Punganoor Lake", desc: "Enjoy calm boating sessions surrounded by family parks, children play areas, and cool breezes." }
              ].map((item, idx) => (
                <li key={idx} style={{ marginBottom: 'var(--space-3)' }}>
                  <strong style={{ color: 'var(--color-neutral)' }}>{item.title}:</strong> <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{item.desc}</span>
                </li>
              ))}
            </ul>
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
            <div className="glass animate-fade-in-up" style={{ padding: 'var(--space-5)', borderRadius: '0px', borderLeft: '4px solid var(--color-tertiary)', fontStyle: 'italic' }}>
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

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container section-padding">
          <div className="section-header text-center">
            <p className="subtitle">TESTIMONIALS</p>
            <h2>What Our Guests Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            {[
              { quote: "The three-room quarters were perfect for our family reunion. Spacious, clean, and cozy. The chef’s food was a highlight!", author: "Anita R.", location: "Chennai" },
              { quote: "Our kids loved the play area and pools. We felt safe and relaxed the entire time. Can’t wait to come back!", author: "Rahul M.", location: "Bengaluru" },
              { quote: "The location is unbeatable. Peaceful mornings, beautiful views, and great hospitality. Highly recommended!", author: "Priya S.", location: "Coimbatore" },
              { quote: "Peaceful stay with beautiful hill views, great service, and comfortable rooms. Highly recommended!", author: "Sylver Star", location: "Yercaud" }
            ].map((t, idx) => (
              <div key={idx} className="glass" style={{ padding: 'var(--space-4)', borderRadius: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                  "{t.quote}"
                </p>
                <div>
                  <h5 style={{ color: 'var(--color-neutral)', margin: '0 0 2px 0', fontSize: '1rem' }}>{t.author}</h5>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-tertiary)' }}>{t.location}</span>
                </div>
              </div>
            ))}
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
            <details key={idx} style={{ borderBottom: '1px solid var(--color-border)', padding: 'var(--space-3) 0' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600', color: 'var(--color-neutral)', outline: 'none', padding: 'var(--space-2) 0', listStylePosition: 'inside' }}>
                {faq.q}
              </summary>
              <p style={{ margin: 'var(--space-2) 0 0 0', lineHeight: '1.7', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
