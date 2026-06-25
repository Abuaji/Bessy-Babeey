import { useState, useEffect } from 'react';

// ── Seasonal Sale Banner ─────────────────────────────────────
export const SeasonalSale = () => {
  const images = ['/sale_banner.png', '/sale_banner_2.png'];
  const [activeSaleIndex, setActiveSaleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSaleIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section style={{padding:'0 0 60px'}}>
      <div className="container">
        <div className="sale-banner">
          {/* Confetti dots */}
          <div className="sale-banner__dots">
            {[
              {w:14,h:14,bg:'#fff',t:'10%',l:'48%',op:0.3},
              {w:10,h:10,bg:'#F4607A',t:'70%',l:'52%',op:0.25},
              {w:18,h:18,bg:'#17C3CE',t:'30%',l:'56%',op:0.2},
              {w:8, h:8, bg:'#1d1d2e',t:'80%',l:'45%',op:0.2},
            ].map((d,i) => (
              <div key={i} className="sale-banner__dot" style={{width:d.w,height:d.h,background:d.bg,top:d.t,left:d.l,opacity:d.op}} />
            ))}
          </div>

          {/* Left – text */}
          <div className="sale-banner__left">
            <div className="sale-banner__label">Limited Time Offer</div>
            <h2 className="sale-banner__title">
              Seasonal Sale –<br />
              Up to <span>50% Off</span>
            </h2>
            <p className="sale-banner__desc">
              Grab the best deals on battery jeeps, strollers, high chairs and more. Sale ends soon — don't miss out!
            </p>
            <a href="#shop" className="sale-banner__cta" id="sale-shop-btn">
              Grab the Deal
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>

          {/* Right – image + circle */}
          <div className="sale-banner__right">
            <div className="sale-banner__slider">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="Happy kids with baby products"
                  className={`sale-banner__image ${index === activeSaleIndex ? 'active' : ''}`}
                  id={index === 0 ? "sale-banner-img" : undefined}
                />
              ))}
            </div>
            <div className="sale-banner__shop-circle" id="sale-circle-btn">
              <span>🛍️</span>
              SHOP<br />NOW
            </div>

            {/* Slide indicators */}
            <div className="sale-banner__indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`sale-banner__indicator ${index === activeSaleIndex ? 'active' : ''}`}
                  onClick={() => setActiveSaleIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ─────────────────────────────────────────────
const testimonials = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Mom of 2',
    text: '"The battery jeep is absolutely amazing! My son refuses to leave it. Top quality and super safe — worth every penny."',
    rating: 5,
    color: '#17C3CE',
    initials: 'PS',
  },
  {
    id: 't2',
    name: 'Rahul Mehta',
    role: 'Father of twins',
    text: '"Ordered the study table and high chair together. Delivery was lightning fast and both products exceeded my expectations!"',
    rating: 5,
    color: '#F4607A',
    initials: 'RM',
  },
  {
    id: 't3',
    name: 'Ananya Patel',
    role: 'New parent',
    text: '"The stroller glides so smoothly. Lightweight, stylish and my baby loves it. Best purchase for our morning walks!"',
    rating: 5,
    color: '#F5C842',
    initials: 'AP',
  },
  {
    id: 't4',
    name: 'Deepak Nair',
    role: 'Dad & blogger',
    text: '"Children Store has the best collection. The ride-on car is my daughter\'s favourite toy. Great customer service too!"',
    rating: 4,
    color: '#6C63FF',
    initials: 'DN',
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);

  // Auto-play testimonial carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section className="testimonials" id="reviews" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative child-friendly floating elements */}

      <div className="container">
        <div className="testimonials__header">
          <div className="badge">Happy Families</div>
          <h2 className="section-title" style={{marginTop:'10px'}}>What Parents Say</h2>
          <p className="section-subtitle">Trusted by 10,000+ families across India</p>
        </div>

        {/* Carousel Frame */}
        <div className="testimonials__carousel-container">
          {/* Left Arrow Button */}
          <button className="testimonials__carousel-arrow testimonials__carousel-arrow--left" onClick={prev} id="testimonials-prev-btn" aria-label="Previous Testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Active Card with Transition */}
          <div className="testimonials__carousel-window">
            {testimonials.map((t, index) => {
              const isActive = index === active;
              return (
                <div
                  key={t.id}
                  className={`testimonial-carousel-card ${isActive ? 'active' : ''}`}
                >
                  {/* Decorative Quote SVGs */}
                  <svg className="testimonial-carousel-card__quote-icon testimonial-carousel-card__quote-icon--left" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 4-3 6-5 6h-.5m11 0c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 4-3 6-5 6h-.5"/>
                  </svg>
                  <svg className="testimonial-carousel-card__quote-icon testimonial-carousel-card__quote-icon--right" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 4-3 6-5 6h-.5m11 0c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 4-3 6-5 6h-.5"/>
                  </svg>

                  {/* Rating Stars */}
                  <div className="testimonial-carousel-card__stars">
                    {Array.from({length:5}).map((_,si) => (
                      <svg key={si} width="18" height="18" viewBox="0 0 24 24" fill={si < t.rating ? "var(--yellow)" : "none"} stroke="var(--yellow)" strokeWidth="2.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="testimonial-carousel-card__text">{t.text}</p>

                  {/* User info */}
                  <div className="testimonial-carousel-card__user">
                    <div
                      className="testimonial-carousel-card__avatar"
                      style={{background: t.color}}
                    >
                      {t.initials}
                    </div>
                    <div className="testimonial-carousel-card__meta">
                      <div className="testimonial-carousel-card__name">{t.name}</div>
                      <div className="testimonial-carousel-card__role">{t.role}</div>
                    </div>
                  </div>

                  {/* Corner Cartoon Sparkle Deco */}
                  <svg className="testimonial-carousel-card__deco-star" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="#ffde03" opacity="0.8" />
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button className="testimonials__carousel-arrow testimonials__carousel-arrow--right" onClick={next} id="testimonials-next-btn" aria-label="Next Testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Carousel Bullets */}
        <div className="testimonials__carousel-bullets">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__carousel-bullet ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i+1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Footer ───────────────────────────────────────────────────
export const Footer = () => (
  <footer className="footer-premium">
    {/* Wavy top border of the newsletter block */}
    <div className="footer-premium__wave-wrap">
      <svg className="footer-premium__wave-svg" viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 25 C 180 5, 360 5, 540 25 C 720 45, 900 45, 1080 25 C 1260 5, 1420 5, 1440 25 L 1440 50 L 0 50 Z" fill="#2b82c9" />
      </svg>
    </div>

    {/* Top Newsletter & Contact Bar */}
    <div className="footer-premium__top-bar">
      <div className="container">
        <div className="footer-premium__top-inner">
          
          {/* Newsletter Box */}
          <div className="footer-premium__newsletter">
            <div className="footer-premium__newsletter-label">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="footer-premium__mail-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Newsletter</span>
            </div>
            <form className="footer-premium__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="footer-premium__input" aria-label="Newsletter email input" />
              <button type="submit" className="footer-premium__subscribe-btn">SUBSCRIBE</button>
            </form>
          </div>

          {/* Thin White Divider */}
          <div className="footer-premium__top-divider" />

          {/* Telephone Box */}
          <div className="footer-premium__phone-box">
            <div className="footer-premium__phone-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="footer-premium__phone-svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </div>
            <div className="footer-premium__phone-content">
              <div className="footer-premium__phone-label">Call Us on!!</div>
              <div className="footer-premium__phone-number">88-66-888-222</div>
              <div className="footer-premium__phone-sub">8AM - 8PM, Seven Days a Week</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Main Links Section */}
    <div className="footer-premium__links-bar">
      <div className="container">
        <div className="footer-premium__grid">
          
          {/* Col 1: About Bessy Babeey */}
          <div className="footer-premium__col">
            <div className="footer-premium__col-title">About Us</div>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '13.5px', lineHeight: '1.7', fontWeight: '500', margin: '0' }}>
              Bessy Babeey is India's leading brand for premium kids' products. From battery-operated ride-on jeeps to ergonomic study tables and cozy strollers, we build everything with the highest safety and quality standards.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-premium__col">
            <div className="footer-premium__col-title">Quick Links</div>
            <ul className="footer-premium__links-list">
              <li><a href="#">Home</a></li>
              <li><a href="#featured">Featured Products</a></li>
              <li><a href="#top-products">Curated Picks</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          {/* Col 3: Follow Us */}
          <div className="footer-premium__col">
            <div className="footer-premium__col-title">Follow Us</div>
            <ul className="footer-premium__social-list">
              <li className="footer-premium__social-item">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-premium__social-link">
                  <span className="footer-premium__social-btn footer-premium__social-btn--fb">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li className="footer-premium__social-item">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-premium__social-link">
                  <span className="footer-premium__social-btn footer-premium__social-btn--tw" style={{ background: '#e1306c' }}>
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li className="footer-premium__social-item">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-premium__social-link">
                  <span className="footer-premium__social-btn footer-premium__social-btn--tw">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="footer-premium__col">
            <div className="footer-premium__col-title">Contact Us</div>
            <div className="footer-premium__contact-info">
              <div className="footer-premium__company">Bessy Babeey Pvt. Ltd.</div>
              <p className="footer-premium__address">
                507-Union Trade Centre, Beside Apple Hospital,<br />
                Udhana Darwaja, Ring Road,<br />
                Surat, India.
              </p>
              <div className="footer-premium__phone-line">
                Phone No:- 8866888222
              </div>
              <div className="footer-premium__email-line">
                <a href="mailto:support@bessybabeey.com">support@bessybabeey.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom Dark Navy Bar */}
    <div className="footer-premium__bottom-bar">
      <div className="container">
        <div className="footer-premium__bottom-inner">
          <div className="footer-premium__bottom-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> | <a href="#reviews">Testimonials</a> | <a href="#about">About Us</a>
          </div>
          <div className="footer-premium__copyright">
            &copy; 2026 Bessy Babeey. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// ── Partners Section ─────────────────────────────────────────
export const Partners = () => {
  const partners = [
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/3840px-Amazon_logo.svg.png' },
    { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flipkart_logo_%282026%29.svg/3840px-Flipkart_logo_%282026%29.svg.png' },
    { name: 'Myntra', logo: 'https://wp.logos-download.com/wp-content/uploads/2016/09/Myntra_logo.png?dl' },
    { name: 'FirstCry', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/FirstCry_logo.svg/1280px-FirstCry_logo.svg.png' },
    { name: 'Zepto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1280px-Zepto_Logo.svg.png' },
    { name: 'Blinkit', logo: 'https://cdn.pnggallery.com/wp-content/uploads/blinkit-logo-02.png' },
    { name: 'Alibaba', logo: 'https://1000logos.net/wp-content/uploads/2018/10/Alibaba-Logo.png' },
  ];

  // Duplicate items twice to ensure the track width is wide enough for large screens
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="partners-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative child-friendly floating elements */}

      <div className="container">
        <h2 className="partners-section__title">We Are Also Available On</h2>
        <div className="partners-section__marquee-wrap">
          <div className="partners-section__marquee-track">
            {marqueeItems.map((p, index) => (
              <div key={`${p.name}-${index}`} className="partners-section__card">
                <img src={p.logo} alt={`${p.name} Logo`} className="partners-section__logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
