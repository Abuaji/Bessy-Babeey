import { useState, useEffect } from 'react';

/* ── Count-Up Stat Component ─────────────────────────────────── */
const CountUpStat = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const steps = 50;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div className="hero__stat">
      <div className="hero__stat-value">{count}{suffix}</div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
};

/* ── Hero Banner ─────────────────────────────────────────────── */
const HeroBanner = () => {
  const images = ['/hero_banner.png', '/hero_banner_2.png', '/hero_banner_3.png'];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" id="home">
      {/* Background shapes */}
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      {/* Decorative floating emojis */}

      <div className="hero__inner">
        {/* Content */}
        <div className="hero__content">
          <div className="hero__badge">
            🎉 New Arrivals 2024 &nbsp;|&nbsp; Up to 50% Off
          </div>

          <h1 className="hero__title">
            <em>Joy</em> for Every<br />
            <span>Little One!</span>
          </h1>

          <p className="hero__desc">
            Discover premium baby products — from battery-operated jeeps and bikes to cozy high chairs and smooth strollers. Safe, fun, and built for adventure!
          </p>

          {/* CTA buttons - aligned in a row */}
          <div className="hero__cta">
            <a href="#/shop" className="btn-primary" id="hero-shop-btn">
              Shop Now
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
            <a href="#categories" className="hero__cta-link" id="hero-explore-btn">
              Explore Categories
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>

          {/* Stats with count-up */}
          <div className="hero__stats">
            <CountUpStat target={500} suffix="+" label="Products" />
            <div className="hero__stats-divider" />
            <CountUpStat target={10} suffix="K+" label="Happy Families" />
            <div className="hero__stats-divider" />
            <CountUpStat target={100} suffix="%" label="Safe & Certified" />
          </div>
        </div>

        {/* Image Slider wrapper */}
        <div className="hero__image-wrap">
          <div className="hero__slider">
            {images.map((img, index) => (
              <img
                key={img}
                src={img}
                alt="Happy toddler with battery operated jeep"
                className={`hero__image ${index === currentHeroIndex ? 'active' : ''}`}
                id={index === 0 ? "hero-banner-img" : undefined}
              />
            ))}
          </div>

          {/* Floating cards */}
          <div className="hero__float-card hero__float-card--left">
            <span className="hero__float-icon">🚗</span>
            <div>
              <div style={{fontWeight:800, fontSize:'13px', color:'var(--dark)'}}>Battery Jeeps</div>
              <div style={{fontSize:'11px', color:'var(--gray-500)'}}>From ₹4,999</div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--top">
            <span className="hero__float-icon">⭐</span>
            <div>
              <div style={{fontWeight:800, fontSize:'13px', color:'var(--dark)'}}>4.9 Rating</div>
              <div style={{fontSize:'11px', color:'var(--gray-500)'}}>10K+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
