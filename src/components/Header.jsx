import { useState, useEffect } from 'react';

const Topbar = () => (
  <div className="topbar">
    <div className="container">
      <div className="topbar__inner">
        <div className="topbar__socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="topbar__social-link" aria-label="Facebook">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="topbar__social-link" aria-label="Twitter">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="topbar__social-link" aria-label="Pinterest">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="topbar__social-link" aria-label="Instagram">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://tumblr.com" target="_blank" rel="noreferrer" className="topbar__social-link" aria-label="Tumblr">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 18h-3c-1.65 0-3-1.35-3-3v-5h-2v-2h2v-3h2v3h3v2h-3v5c0 .55.45 1 1 1h3v2z"/></svg>
          </a>
        </div>
        <div className="topbar__right">
          <span className="topbar__phone">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
            123 456 789
          </span>
          <button className="topbar__btn-account">My Account</button>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const leftLinks = [
    { name: 'Home', href: '#' },
    { name: 'Blogs', href: '#/shop' },
    { name: 'Collection', href: '#/shop' },
    { name: 'Kids', href: '#/shop' },
  ];
  const rightLinks = [
    { name: 'Accessories', href: '#/shop' },
    { name: 'Contact', href: '#' },
    { name: 'Teddy', href: '#/shop' },
    { name: 'Toy', href: '#/shop' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        <div className="navbar__inner">
          
          {/* Left Group */}
          <div className="navbar__group navbar__group--left">
            <button className="navbar__action-circle navbar__action-circle--search" aria-label="Search">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            
            {/* Hamburger Menu Icon for Mobile */}
            <button 
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={menuOpen}
            >
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
            </button>

            <ul className="navbar__nav navbar__nav--left">
              {leftLinks.map((link, i) => (
                <li key={link.name}>
                  <a href={link.href} className={i === 0 && link.name === 'Home' ? 'active' : ''}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Centered Logo */}
          <div className="navbar__logo-centered-container">
            <a href="#" className="navbar__logo-centered">
              <img
                src="/logo.png"
                alt="Toy Shop Logo"
                className="navbar__logo-centered-img"
              />
            </a>
          </div>

          {/* Right Group */}
          <div className="navbar__group navbar__group--right">
            <ul className="navbar__nav navbar__nav--right">
              {rightLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#/cart" className="navbar__action-circle navbar__action-circle--cart" aria-label="Shopping cart" style={{ textDecoration: 'none' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="navbar__cart-badge-premium">0</span>
            </a>
          </div>

        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Close button inside the overlay */}
        <button
          className="navbar__mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Navigation Menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Logo in overlay header */}
        <div className="navbar__mobile-logo">
          <img src="/logo.png" alt="Toy Shop Logo" style={{ height: '48px', objectFit: 'contain' }} />
        </div>

        <ul className="navbar__mobile-nav">
          {allLinks.map((link, i) => (
            <li key={link.name} className="navbar__mobile-item">
              <a 
                href={link.href} 
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="navbar__mobile-link-num">0{i + 1}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer of menu overlay */}
        <div className="navbar__mobile-footer">
          <span style={{ fontSize: '13px', color: 'var(--gray-500)', fontWeight: 600 }}>📞 8866888222</span>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export { Topbar, Navbar };
