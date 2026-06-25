import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function ProductCard({ product: p }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    if (isQuickViewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isQuickViewOpen]);

  // Fallback colors if none exist in the product object
  const colors = p.colors || ['#94a3b8', '#e2e8f0', '#f87171']; 
  const randomReviews = Math.floor(Math.random() * 50) + 12;
  const rating = p.stars || 4.9;

  return (
    <>
      <div className="product-card" id={p.id}>
        <div className="product-card__image-wrap">
          <a href={`#/product/${p.id}`} className="product-card__image-inner" style={{display: 'block'}}>
            <img src={p.img} alt={p.name} className="product-card__image"
              onError={e => { e.target.style.display='none'; }}
              style={{ filter: selectedColor > 0 ? `hue-rotate(${selectedColor * 60}deg)` : 'none', transition: 'filter 0.3s' }}
            />
          </a>
          <div className="product-card__badge-stack">
            {p.badge && <span className="product-card__badge">{p.badge}</span>}
          </div>
          {p.discount && <span className="product-card__discount-badge">{p.discount}</span>}
          <button className="product-card__wishlist" aria-label="Add to wishlist" onClick={(e) => { e.preventDefault(); e.currentTarget.classList.toggle('active'); }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <div className="product-card__body">
          <div className="product-card__category">{p.category?.toUpperCase() || 'PREMIUM COLLECTION'}</div>
          
          <a href={`#/product/${p.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <h3 className="product-card__name">{p.name}</h3>
          </a>
          
          <div className="product-card__stars-text">
            <span style={{color: 'var(--yellow)'}}>⭐</span> {rating} <span style={{color: 'var(--gray-500)', fontSize: '0.9em'}}>({randomReviews} reviews)</span>
          </div>

          <div className="product-card__specs">
            {p.specs?.map(spec => (
              <span key={spec} className="product-card__spec-pill">{spec}</span>
            ))}
          </div>

          <div className="product-card__price-row" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="product-card__price-container">
              <span className="product-card__price">{p.price}</span>
              <span className="product-card__old-price">{p.old}</span>
            </div>
          </div>

          <div className="product-card__colors">
            {colors.map((c, i) => (
              <button 
                key={i} 
                className={`product-card__color-swatch ${selectedColor === i ? 'active' : ''}`}
                style={{ backgroundColor: c }}
                onClick={(e) => { e.preventDefault(); setSelectedColor(i); }}
                aria-label="Select color"
              />
            ))}
          </div>

          <div className="product-card__actions">
            <button className="product-card__btn-cart" onClick={(e) => { e.preventDefault(); setIsQuickViewOpen(true); }}>
              Quick View
            </button>
            <button className="product-card__btn-buy" onClick={(e) => e.preventDefault()}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {isQuickViewOpen && createPortal(
        <div className="quickview-modal-overlay" onClick={() => setIsQuickViewOpen(false)}>
          <div className="quickview-modal-content" onClick={e => e.stopPropagation()}>
            <button className="quickview-modal-close" onClick={() => setIsQuickViewOpen(false)}>✕</button>
            <div className="quickview-modal-grid">
              <img src={p.img} alt={p.name} style={{width: '100%', borderRadius: '12px', filter: selectedColor > 0 ? `hue-rotate(${selectedColor * 60}deg)` : 'none', transition: 'filter 0.3s'}} />
              <div className="quickview-modal-info">
                <div className="product-card__category">{p.category?.toUpperCase() || 'PREMIUM'}</div>
                <h2 style={{fontSize: '24px', margin: '10px 0', color: 'var(--dark)'}}>{p.name}</h2>
                <div className="product-card__stars-text" style={{margin: '10px 0'}}>
                  <span style={{color: 'var(--yellow)'}}>⭐</span> {rating} <span style={{color: 'var(--gray-500)'}}>({randomReviews} reviews)</span>
                </div>
                <div className="product-card__price-container" style={{margin: '15px 0'}}>
                  <span className="product-card__price" style={{fontSize: '28px'}}>{p.price}</span>
                  <span className="product-card__old-price">{p.old}</span>
                </div>
                <div className="product-card__colors">
                  {colors.map((c, i) => (
                    <button 
                      key={i} 
                      className={`product-card__color-swatch ${selectedColor === i ? 'active' : ''}`}
                      style={{ backgroundColor: c, width: '24px', height: '24px' }}
                      onClick={(e) => { e.preventDefault(); setSelectedColor(i); }}
                      aria-label="Select color"
                    />
                  ))}
                </div>
                <p style={{marginTop: '15px', color: 'var(--gray-600)', lineHeight: '1.6'}}>{p.specs?.join(' • ')}</p>
                <div style={{marginTop: '25px', display: 'flex', gap: '15px'}}>
                  <button className="product-card__btn-buy" style={{flex: 1, padding: '15px', fontSize: '16px'}}>Buy Now</button>
                  <button className="product-card__btn-cart" style={{flex: 1, padding: '15px', fontSize: '16px'}} onClick={() => { setIsQuickViewOpen(false); window.location.hash = `#/product/${p.id}`; }}>View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      , document.body)}
    </>
  );
}
