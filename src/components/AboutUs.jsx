import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      {/* Decorative floating Globe (top-left) */}
      <div className="about-us__globe">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow behind globe */}
          <circle cx="62" cy="62" r="50" fill="#000000" fillOpacity="0.06" />
          {/* Blue ocean */}
          <circle cx="60" cy="60" r="50" fill="#4ea5eb" />
          {/* Green landmasses (Continents) */}
          <path d="M60 10C83.5 10 100.5 25 102 45C103.5 65 91 80 82 85C73 90 68 107 55 109C42 111 25 101.5 18 90C11 78.5 10 59 10 50C10 27.9 32.4 10 60 10Z" fill="#69db7c" />
          {/* Extra continent shapes for cartoon details */}
          <path d="M22 35C24.5 32 30 33 33 39C36 45 32 50 28 48C24 46 19.5 38 22 35Z" fill="#51cf66" />
          {/* North/South America vibe */}
          <path d="M38 72C42 70 47 72 49 76C51 80 43.5 88.5 37 87C30.5 85.5 34 74 38 72Z" fill="#51cf66" />
          <path d="M78 28C84 25 87 32 85 36C83 40 76 38 74 34C72 30 72 31 78 28Z" fill="#51cf66" />
          {/* Cartoon white atmosphere highlight */}
          <path d="M20 25C30 15 45 12 60 12C61.1 12 61.1 10 60 10C44 10 28 13 17 23C15.8 24.1 18.8 26.2 20 25Z" fill="white" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Decorative rotating Galaxy (bottom-right) */}
      <div className="about-us__galaxy">
        <svg width="180" height="150" viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spiral Galaxy Swirl */}
          <path d="M90 20C130 20 165 40 165 75C165 110 120 130 90 130C60 130 15 110 15 75C15 40 50 20 90 20Z" fill="#3b5bdb" fillOpacity="0.08" />
          <path d="M90 35C120 35 145 50 145 75C145 100 110 115 90 115C70 115 35 100 35 75C35 50 60 35 90 35Z" fill="#4c6ef5" fillOpacity="0.12" />
          {/* Galaxy central star */}
          <g filter="drop-shadow(0px 4px 10px rgba(23, 195, 206, 0.4))">
            <path d="M90 45 L95 70 L120 75 L95 80 L90 105 L85 80 L60 75 L85 70 Z" fill="#22b8cf" />
            <path d="M90 55 L93 72 L110 75 L93 78 L90 95 L87 78 L70 75 L87 72 Z" fill="#3bc9db" />
            <circle cx="90" cy="75" r="4" fill="white" />
          </g>
          {/* Outer stars and sparkles */}
          <circle cx="50" cy="45" r="3" fill="#ffde03" />
          <circle cx="130" cy="105" r="2.5" fill="#ffde03" />
          <circle cx="140" cy="45" r="2" fill="white" />
          <circle cx="40" cy="100" r="1.5" fill="white" />
          {/* Space dust curves */}
          <path d="M25 65 C40 45 70 40 100 48" stroke="#15aabf" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 8" />
          <path d="M80 105 C110 110 140 100 155 85" stroke="#22b8cf" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 6" />
        </svg>
      </div>

      <div className="container">
        <div className="about-us__inner">
          
          {/* Left Side: Video */}
          <div className="about-us__video-container">
            <div className="about-us__video-wrapper">
              <video
                className="about-us__video"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                {/* User's local file source (first choice) */}
                <source src="/hero.mp4" type="video/mp4" />
                <source src="/about_video.mp4" type="video/mp4" />
                <source src="/video.mp4" type="video/mp4" />
                {/* Fallback premium online stock video of children playing so it works out of the box */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-children-playing-with-toys-on-the-floor-41619-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Soft decorative background glow */}
            <div className="about-us__video-glow" />
          </div>

          {/* Right Side: Text Content */}
          <div className="about-us__content">
            <span className="about-us__subtitle">Study, Play and Explore</span>
            <h2 className="about-us__title">
              A Magical Place To<br />
              <span>Share, Learn, & Grow</span>
            </h2>
            <div className="about-us__text-block">
              <p>
                At Children Store, we believe that childhood is a beautiful journey of curiosity, discovery, and joy. Our mission is to provide premium quality products that enrich this magical phase of life. 
              </p>
              <p>
                From ergonomic study tables that inspire learning, to battery-operated jeeps built for outdoor adventures, every item in our catalog is hand-picked for durability, safety, and child-friendly design.
              </p>
            </div>
            <a href="#featured" className="about-us__btn">
              Read More
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
