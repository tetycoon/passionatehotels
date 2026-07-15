import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DestinationTemplate = ({ title, subtitle, image, description }) => {
  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '600px' }}>
        <div className="hero-bg" style={{ backgroundImage: `url(${image})`, filter: 'brightness(0.7) grayscale(0.2)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">{subtitle}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <section className="section container section-padding text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="subtitle">THE EXPERIENCE</p>
        <h2 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-4)' }}>Sanctuary of Serenity</h2>
        <p style={{ fontSize: '1rem', lineHeight: '2', color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
        <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()} style={{ marginTop: 'var(--space-6)' }}>
          Reserve Your Stay
        </button>
      </section>
    </div>
  );
};

export const Yercaud = () => {
  return (
    <div className="page-wrapper yercaud-page">
      <Helmet>
        <title>Best Family Resort in Yercaud Near Bus Stand – 2026</title>
        <meta name="description" content="Looking for the best family resort in Yercaud near bus stand? Discover peaceful stays, top amenities, & why Golden Paradise is the perfect choice for families." />
        <link rel="canonical" href="https://passionatehotels.in/family-resort-in-yercaud/" />
        <meta property="og:title" content="Best Family Resort in Yercaud Near Bus Stand – 2026" />
        <meta property="og:description" content="Looking for the best family resort in Yercaud near bus stand? Discover peaceful stays, top amenities, & why Golden Paradise is the perfect choice for families." />
      </Helmet>

      {/* Hero Section */}
      <div className="hero animate-fade-in" style={{ minHeight: '80vh', position: 'relative' }}>
        <div className="hero-bg" style={{ backgroundImage: 'url(/assets/src_images/unnamed.webp)', filter: 'brightness(0.5)' }}></div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.4), #121212)' }}></div>
        <div className="container hero-content text-center animate-fade-in-up">
          <p className="hero-subtitle" style={{ letterSpacing: '0.3em', color: 'var(--color-tertiary)' }}>GOLDEN PARADISE HOTEL</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-neutral)' }}>Sanctuary in Yercaud</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-4)', color: 'var(--color-neutral)', opacity: 0.9 }}>
            Experience the comfort of the finest family resort, nested between scenic hills and minutes from the bus stand.
          </p>
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Plan Your Stay
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">THE SANCTUARIES</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>Comfortable Yercaud Stays for Families</h2>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-4)' }}>
          Golden Paradise Hotel is a peaceful and welcoming family resort in Yercaud, thoughtfully designed for families, couples, and friends seeking a relaxing hill-station getaway. Located as a convenient resort near the Yercaud bus stand, our property offers easy access while maintaining calm, nature-filled surroundings.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-6)' }}>
          We’ve created a comfortable and welcoming experience where every detail is carefully planned to help you relax and feel cared for. As a trusted family resort, Golden Paradise Hotel focuses on comfort, safety, and peaceful living so guests of all ages can enjoy their stay without stress or worry.
        </p>
      </section>

      {/* Living Spaces Gallery Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <p className="subtitle">AUTHENTIC EXPERIENCES</p>
            <h2 style={{ color: 'var(--color-tertiary)' }}>The Living Spaces</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
              A visual glimpse into our curated rooms, dining area, and cozy outdoor sanctuaries.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-4)', padding: 'var(--space-2) 0' }}>
            {[
              { img: '/assets/src_images/unnamed.webp', title: 'Resort Exterior', desc: 'Warmly lit welcoming facade at night' },
              { img: '/assets/src_images/campfire2.webp', title: 'Campfire Sanctuary', desc: 'Cozy evening fires under the stars' },
              { img: '/assets/src_images/corridor.webp', title: 'Grand Corridor', desc: 'Spacious and hygienic passages' },
              { img: '/assets/src_images/WhatsApp-Image-2026-01-03-at-12.16.56.webp', title: 'Deluxe Family Rooms', desc: 'Premium bedding & comforting spaces' },
              { img: '/assets/src_images/WhatsApp-Image-2026-01-03-at-12.17.07-2-1.webp', title: 'Scenic Balcony', desc: 'Mist-clad views of Yercaud valley' },
              { img: '/assets/src_images/restaurant.webp', title: 'Fine Dining Area', desc: 'Curated multi-cuisine family dining' }
            ].map((item, idx) => (
              <div key={idx} className="luxury-card hover-zoom-container animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, borderRadius: '0px' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'var(--space-3)' }}>
                  <h4 style={{ margin: '0 0 var(--space-1)', fontSize: '1.2rem', color: 'var(--color-neutral)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <p className="subtitle">COMFORT & UTILITY</p>
            <h2 style={{ color: 'var(--color-tertiary)' }}>Family-Friendly Amenities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-3)' }}>
            {[
              "Spacious and comfortable family rooms",
              "Free secure parking facility",
              "24/7 dedicated front desk assistance",
              "Clean and highly hygienic environment",
              "Hot water facility on-demand",
              "Peaceful garden and sit-out areas",
              "Responsive room service"
            ].map((amenity, idx) => (
              <div key={idx} className="glass" style={{ padding: 'var(--space-3)', borderRadius: '0px', borderLeft: '3px solid var(--color-tertiary)' }}>
                <p style={{ margin: 0, fontWeight: '500', color: 'var(--color-neutral)' }}>{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div className="animate-fade-in-up">
              <p className="subtitle">PRIME LOCATION</p>
              <h3 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-3)' }}>Near Bus Stand & Parks</h3>
              <p style={{ color: 'var(--color-text-secondary)', textAlign: 'justify' }}>
                Golden Paradise Hotel is a well-located resort near the Yercaud bus stand, making travel easy for families, senior citizens, and weekend visitors. Our resort is uniquely positioned in the middle of Peeku Park and Sky Park, allowing guests to enjoy nearby sightseeing spots without long travel. This prime location helps guests explore Yercaud’s attractions comfortably during the day and return to a peaceful, relaxing resort atmosphere in the evening.
              </p>
              <ul style={{ marginTop: 'var(--space-3)', color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Prime location near Yercaud bus stand</li>
                <li>Located between Peeku Park and Sky Park</li>
                <li>Ideal resort for family vacations</li>
                <li>Affordable pricing with quality comfort</li>
              </ul>
            </div>
            <div className="hover-zoom-container animate-fade-in-up" style={{ height: '380px' }}>
              <img src="/assets/src_images/yercaud-view-1.jpg" alt="Yercaud View" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Note Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">A PERSONAL NOTE</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>A Message from the Owner</h2>
        </div>
        <div className="glass animate-fade-in-up" style={{ padding: 'var(--space-6)', borderRadius: '0px', textAlign: 'justify', fontStyle: 'italic', borderLeft: '4px solid var(--color-tertiary)' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            Welcome to Golden Paradise, my peaceful hill retreat in Yercaud. I personally created this resort with one simple intention — to give every guest a safe, comfortable, and genuinely relaxing stay that feels like home. As someone who truly loves Yercaud and its calm beauty, I wanted to build a place where guests could disconnect from stress and reconnect with nature.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
            Surrounded by misty hills, cool weather, and greenery, Golden Paradise is designed to offer peace, privacy, and comfort in every detail. I sincerely look forward to welcoming you personally and hosting you at Golden Paradise — a place built with care, run with heart, and surrounded by Yercaud’s golden charm.
          </p>
          <p style={{ color: 'var(--color-neutral)', fontWeight: '600', marginTop: 'var(--space-6)', textAlign: 'right', fontSize: '1.1rem' }}>
            — Arun., Owner of PassionateHotels
          </p>
        </div>
      </section>
    </div>
  );
};

export const Yelagiri = () => {
  return (
    <div className="page-wrapper yelagiri-page">
      <Helmet>
        <title>Best Peaceful Resort & Hotel in Yelagiri for Families and Couples</title>
        <meta name="description" content="Midvalley Residency | Kurinji Stays - The best family-friendly peaceful resort in Yelagiri for budget travelers & groups seeking weekend getaways." />
        <link rel="canonical" href="https://passionatehotels.in/yelagiri-peaceful-resort/" />
        <meta property="og:title" content="Best Peaceful Resort & Hotel in Yelagiri for Families and Couples" />
        <meta property="og:description" content="Midvalley Residency | Kurinji Stays - The best family-friendly peaceful resort in Yelagiri for budget travelers & groups seeking weekend getaways." />
      </Helmet>

      {/* Hero Section */}
      <div className="hero animate-fade-in" style={{ minHeight: '80vh', position: 'relative' }}>
        <div className="hero-bg" style={{ backgroundImage: 'url(/assets/src_images/Yelagiri-Nature-Park.jpg)', filter: 'brightness(0.5)' }}></div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.4), #121212)' }}></div>
        <div className="container hero-content text-center animate-fade-in-up">
          <p className="hero-subtitle" style={{ letterSpacing: '0.3em', color: 'var(--color-tertiary)' }}>MIDVALLEY RESIDENCY & KURINJI STAYS</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-neutral)' }}>Sanctuary in Yelagiri</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-4)', color: 'var(--color-neutral)', opacity: 0.9 }}>
            Escape to the peaceful hills of Yelagiri. Ideal for families, couples, and weekend outings.
          </p>
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Plan Your Stay
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">THE SANCTUARIES</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>Yelagiri – A Peaceful Escape in Nature</h2>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-4)' }}>
          A Yelagiri resort is the perfect choice for a refreshing weekend escape from busy city life. Known for its peaceful climate, lush winding roads, and scenic green valleys, Yelagiri has become one of the best weekend getaway destinations in Tamil Nadu for families, couples, and groups seeking a calm atmosphere.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-6)' }}>
          Staying at our Yelagiri resorts (Midvalley Residency & Kurinji Stays) is not just about comfortable accommodations — we also help you experience the best of Yelagiri with local insights, tailored activity guides, and friendly support throughout your stay.
        </p>
      </section>

      {/* Living Spaces Gallery Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <p className="subtitle">AUTHENTIC EXPERIENCES</p>
            <h2 style={{ color: 'var(--color-tertiary)' }}>The Living Spaces</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
              Explore our beautiful properties designed for your peaceful hill getaway.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-4)', padding: 'var(--space-2) 0' }}>
            {[
              { img: '/assets/src_images/Midvalley_1.webp', title: 'Midvalley Residency Facade', desc: 'Premium, modern architectures surrounded by hilltops' },
              { img: '/assets/src_images/Kurinji_2.webp', title: 'Kurinji Stays Courtyard', desc: 'Cozy and mist-clad garden sit-outs' },
              { img: '/assets/src_images/Midvalley_3.webp', title: 'Midvalley Deluxe Rooms', desc: 'Comfortable layouts with modern amenities' },
              { img: '/assets/src_images/Kurinji_4.webp', title: 'Kurinji Family Suites', desc: 'Spacious quarters with warm hospitality' }
            ].map((item, idx) => (
              <div key={idx} className="luxury-card hover-zoom-container animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, borderRadius: '0px' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'var(--space-3)' }}>
                  <h4 style={{ margin: '0 0 var(--space-1)', fontSize: '1.2rem', color: 'var(--color-neutral)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <p className="subtitle">EXPERIENCE & SERVICE</p>
            <h2 style={{ color: 'var(--color-tertiary)' }}>What We Offer You</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
            {[
              { title: "🚣 Boating Assistance", desc: "We guide our guests to the famous Punganoor Lake for peaceful boating rides surrounded by lush greenery." },
              { title: "🥾 Trekking & Nature Walks", desc: "We assist adventure lovers with route guidance for hiking up Swamimalai Hill and peaceful forest trails." },
              { title: "🚗 Local Sightseeing Support", desc: "Our travel desk helps you plan seamless trips to waterfalls, telescopes, viewpoints, and temples." },
              { title: "🍽️ Dining & Comfort Amenities", desc: "Enjoy multi-cuisine dining options, complimentary breakfast guidance, free Wi-Fi, and safe parking." }
            ].map((offering, idx) => (
              <div key={idx} className="glass" style={{ padding: 'var(--space-4)', borderRadius: '0px', borderLeft: '3px solid var(--color-tertiary)' }}>
                <h4 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-2)' }}>{offering.title}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>{offering.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div className="animate-fade-in-up">
              <p className="subtitle">LOCAL ATTRACTIONS</p>
              <h3 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-3)' }}>Calm Lakes & Misty Trails</h3>
              <p style={{ color: 'var(--color-text-secondary)', textAlign: 'justify', lineHeight: '1.7' }}>
                Yelagiri offers calm lakes, scenic parks, and gentle hills perfect for a nature escape. Visitors can enjoy boating at Punganoor Lake, relax at the Nature Park, trek up Swamimalai Hill for stunning panoramic views, and explore the Jalagamparai Waterfalls during the monsoon season. Fun spots like Fundera Park, Telescope View Point, and local campfires add charm, making Yelagiri ideal for both leisure and adventure.
              </p>
              <ul style={{ marginTop: 'var(--space-3)', color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Boating at Punganoor Lake</li>
                <li>Trekking up Swamimalai Hill</li>
                <li>Monsoon hikes to Jalagamparai Waterfalls</li>
                <li>Fun family outings at Fundera Park & Nature Park</li>
              </ul>
            </div>
            <div className="hover-zoom-container animate-fade-in-up" style={{ height: '380px' }}>
              <img src="/assets/src_images/Punganur-Lake.jpg" alt="Punganur Lake Yelagiri" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Notes Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">A PERSONAL NOTE</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>Messages from the Properties</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'var(--space-6)' }}>
          <div className="glass" style={{ padding: 'var(--space-5)', borderRadius: '0px', borderLeft: '4px solid var(--color-tertiary)', fontStyle: 'italic' }}>
            <h4 style={{ color: 'var(--color-neutral)', notItalic: true, marginBottom: 'var(--space-2)' }}>Midvalley Residence</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
              "Welcome to Midvalley Residence! We’ve created a simple, peaceful stay in the heart of Yelagiri, where comfort meets nature. With cozy rooms, fresh hill air, and a relaxed atmosphere, we want you to feel at home while exploring the beauty and calm of the valley. Looking forward to hosting you!"
            </p>
          </div>
          <div className="glass" style={{ padding: 'var(--space-5)', borderRadius: '0px', borderLeft: '4px solid var(--color-tertiary)', fontStyle: 'italic' }}>
            <h4 style={{ color: 'var(--color-neutral)', notItalic: true, marginBottom: 'var(--space-2)' }}>Kurinji Stays</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
              "Welcome to Kurinji Stays! I’ve created this peaceful retreat in the cool hills of Yelagiri so you can relax, unwind, and feel at home. With cozy rooms, fresh mountain air, and warm hospitality, we’re here to make your stay comfortable, memorable, and truly refreshing."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Chennai = () => {
  return (
    <div className="page-wrapper chennai-page">
      <Helmet>
        <title>Best Weekend Outing in OMR Chennai – Lynwood Villa Stay</title>
        <meta name="description" content="Lynwood Villa is a top resort near OMR Chennai for families and groups, ideal for quiet stays and small events during your weekend outing." />
        <link rel="canonical" href="https://passionatehotels.in/lynwood-villa-perfect-resort-for-your-weekend-outing/" />
        <meta property="og:title" content="Best Weekend Outing in OMR Chennai – Lynwood Villa Stay" />
        <meta property="og:description" content="Lynwood Villa is a top resort near OMR Chennai for families and groups, ideal for quiet stays and small events during your weekend outing." />
      </Helmet>

      {/* Hero Section */}
      <div className="hero animate-fade-in" style={{ minHeight: '80vh', position: 'relative' }}>
        <div className="hero-bg" style={{ backgroundImage: 'url(/assets/src_images/Muttukadu-Boat-House-East-Coast-Road_.jpg)', filter: 'brightness(0.5)' }}></div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.4), #121212)' }}></div>
        <div className="container hero-content text-center animate-fade-in-up">
          <p className="hero-subtitle" style={{ letterSpacing: '0.3em', color: 'var(--color-tertiary)' }}>LYNWOOD VILLA</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-neutral)' }}>Sanctuary in OMR, Chennai</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-4)', color: 'var(--color-neutral)', opacity: 0.9 }}>
            A premium private villa getaway on OMR, featuring a private swimming pool and expansive green lawns.
          </p>
          <button className="btn-primary" onClick={() => document.querySelector('.header-actions .btn-primary').click()}>
            Plan Your Outing
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">THE SANCTUARIES</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>Celebrate, Connect & Relax at Lynwood Villa</h2>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-4)' }}>
          Lynwood Villa, located along the scenic OMR in Chennai, is an ideal destination for a peaceful weekend stay. We offer a perfect blend of privacy, comfort, and open space, making it a highly requested destination for families, friends, and corporate groups looking for a premium stay experience.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'justify', marginBottom: 'var(--space-6)' }}>
          Whether you want to relax by the pool, host a family get-together, celebrate a birthday, or hold a distraction-free corporate strategy meeting, Lynwood Villa provides a secure, private environment where every detail is taken care of.
        </p>
      </section>

      {/* Living Spaces Gallery Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-elevated)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <p className="subtitle">AUTHENTIC EXPERIENCES</p>
            <h2 style={{ color: 'var(--color-tertiary)' }}>The Villa Spaces</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
              Get a visual preview of our swimming pool, cozy lounges, and premium bedrooms.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-4)', padding: 'var(--space-2) 0' }}>
            {[
              { img: '/assets/src_images/chennai_1.webp', title: 'Private Swimming Pool', desc: 'Exclusive access pool to cool off and play' },
              { img: '/assets/src_images/chennai_3.webp', title: 'Lynwood Villa Facade', desc: 'Premium architecture surrounded by lush green lawns' },
              { img: '/assets/src_images/chennai_5.webp', title: 'Spacious Living Lounges', desc: 'Cozy and wide spaces for gatherings and chats' },
              { img: '/assets/src_images/chennai_7.webp', title: 'Deluxe Bedroom Suites', desc: 'Plush bedding and modern utilities for absolute rest' }
            ].map((item, idx) => (
              <div key={idx} className="luxury-card hover-zoom-container animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, borderRadius: '0px' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'var(--space-3)' }}>
                  <h4 style={{ margin: '0 0 var(--space-1)', fontSize: '1.2rem', color: 'var(--color-neutral)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
            <p className="subtitle">EXPERIENCE & EVENT VENUE</p>
            <h2 style={{ color: 'var(--color-tertiary)' }}>What We Offer You</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
            {[
              { title: "👨‍👩‍👧‍👦 Family Get-Togethers", desc: "Our spacious villa setting is ideal for reunions where families can reconnect and spend quality private time." },
              { title: "🎂 Birthday Celebrations", desc: "Celebrate birthdays in a joyful atmosphere with ample space for decorations, activities, and dining." },
              { title: "🏢 Corporate Team Getaways", desc: "A quiet, distraction-free environment suitable for small corporate meetings, strategy sessions, and team bonding." },
              { title: "🏊 Private Swimming Pool", desc: "Enjoy exclusive, secure access to our clean swimming pool, perfect for families and celebrations." }
            ].map((offering, idx) => (
              <div key={idx} className="glass" style={{ padding: 'var(--space-4)', borderRadius: '0px', borderLeft: '3px solid var(--color-tertiary)' }}>
                <h4 style={{ color: 'var(--color-neutral)', marginTop: 0, marginBottom: 'var(--space-2)' }}>{offering.title}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>{offering.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div className="animate-fade-in-up">
              <p className="subtitle">LOCAL SIGHTSEEING</p>
              <h3 style={{ color: 'var(--color-tertiary)', marginBottom: 'var(--space-3)' }}>Bustling OMR & Historic Coasts</h3>
              <p style={{ color: 'var(--color-text-secondary)', textAlign: 'justify', lineHeight: '1.7' }}>
                OMR in Chennai offers great spots to explore, from exciting theme parks like VGP Universal Kingdom, Snow Kingdom, and MGM Dizzee World, to peaceful visits at the ISKCON Temple. You can relax by the sea at Covelong Beach or Golden Beach, or enjoy quiet nature at Perungudi lakes. A short, scenic drive along the East Coast Road takes you to the UNESCO World Heritage site of Mahabalipuram to explore ancient shore temples.
              </p>
              <ul style={{ marginTop: 'var(--space-3)', color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Palavakkam & Covelong Beaches</li>
                <li>UNESCO Heritage Shore Temples at Mahabalipuram</li>
                <li>VGP Universal Kingdom Theme Park</li>
                <li>ISKCON Temple and local lake trails</li>
              </ul>
            </div>
            <div className="hover-zoom-container animate-fade-in-up" style={{ height: '380px' }}>
              <img src="/assets/src_images/Shore-Temple-in-Mahabalipuram-Tamil-Nadu-e1769072286524.webp" alt="Shore Temple Mahabalipuram" className="hover-zoom-img" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Note Section */}
      <section className="section container section-padding animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
          <p className="subtitle">A PERSONAL NOTE</p>
          <h2 style={{ color: 'var(--color-tertiary)' }}>A Message from the Villa</h2>
        </div>
        <div className="glass animate-fade-in-up" style={{ padding: 'var(--space-6)', borderRadius: '0px', textAlign: 'justify', fontStyle: 'italic', borderLeft: '4px solid var(--color-tertiary)' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            "Welcome to LYNWOOD VILLA, our peaceful getaway tucked close to OMR. We created this place with one goal—to offer a relaxing escape where guests feel at home from the moment they arrive. Surrounded by greenery, our villa features comfortable rooms, open spaces, and a calm atmosphere perfect for families, friends, and travelers."
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
            "Whether you’re here to unwind by the pool, celebrate a special moment, or explore the best of OMR and nearby coastal attractions, we are here to make your stay warm, memorable, and truly effortless. We can’t wait to host you at Lynwood Villa!"
          </p>
          <p style={{ color: 'var(--color-neutral)', fontWeight: '600', marginTop: 'var(--space-6)', textAlign: 'right', fontSize: '1.1rem' }}>
            — Arun, Owner of PassionateHotels
          </p>
        </div>
      </section>
    </div>
  );
};
