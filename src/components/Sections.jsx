
const ShopNowDivider = () => (
  <section className="shop-divider">
    <span className="shop-divider__deco">💛</span>
    <span className="shop-divider__deco">💙</span>
    <span className="shop-divider__deco">💗</span>
    <span className="shop-divider__deco">⭐</span>
    <span className="shop-divider__deco">🌟</span>
    <div className="shop-divider__inner">
      <p className="shop-divider__text">Premium quality products for your precious ones</p>
      <a href="#shop" className="shop-divider__btn" id="main-shop-now-btn">
        🛍️ &nbsp; Shop Now
      </a>
    </div>
  </section>
);

const products = [
  { 
    id: 'prod-amg-jeep', 
    img: '/product_featured_1.webp', 
    name: 'Bessy Babeey AMG BenzCruze V8 4x4 Battery Operated Jeep', 
    category: 'Electric Jeeps', 
    price: '₹14,999', 
    old: '₹19,999', 
    badge: 'Featured', 
    stars: 5,
    discount: '25% OFF',
    specs: ['4x4 Drive', '12V Battery', 'Parent Control']
  },
  { 
    id: 'prod-police-jeep', 
    img: '/product_featured_2.webp', 
    name: 'Bessy Babeey PatrolStar G700 Police Edition 4x4 Jeep', 
    category: 'Police Collection', 
    price: '₹16,499', 
    old: '₹21,999', 
    badge: 'New', 
    stars: 5,
    discount: '25% OFF',
    specs: ['Working Siren', 'LED Flashing Lights', 'Megaphone']
  },
  { 
    id: 'prod-titanx-jeep', 
    img: '/product_featured_3.webp', 
    name: 'Bessy Babeey TitanX Armoured 4x4 Kids Jeep', 
    category: 'Premium Collection', 
    price: '₹18,999', 
    old: '₹24,999', 
    badge: 'Premium', 
    stars: 5,
    discount: '24% OFF',
    specs: ['Armoured Styling', 'Leather Seats', 'Dual Batteries']
  },
  { 
    id: 'prod-stormrider-jeep', 
    img: '/product_featured_4.webp', 
    name: 'Bessy Babeey Run StormRider 4x4 Kids Jeep', 
    category: 'Best Sellers', 
    price: '₹13,999', 
    old: '₹17,999', 
    badge: 'Best Seller', 
    stars: 5,
    discount: '22% OFF',
    specs: ['All-Terrain Tires', 'Shock Absorbers', 'MP3 Player']
  },
  { 
    id: 'prod-police-bike', 
    img: '/product_featured_5.jpg', 
    name: 'Bessy Babeey PatrolStar G700 Police Edition Bike', 
    category: 'Police Collection', 
    price: '₹7,499', 
    old: '₹10,999', 
    badge: 'New Bike', 
    stars: 5,
    discount: '31% OFF',
    specs: ['Key Start', 'Training Wheels', 'Hand Accelerator']
  },
  { 
    id: 'prod-bumblebee-trike', 
    img: '/product_featured_6.jpg', 
    name: 'Bessy Babeey Bumblebee Transformers Electric Trike', 
    category: 'Transformers Series', 
    price: '₹6,999', 
    old: '₹9,499', 
    badge: 'Hot 🔥', 
    stars: 5,
    discount: '26% OFF',
    specs: ['Transformers Decals', 'Safe Low-Rider', 'LED Wheel Rings']
  },
];


const ProductsSection = () => (
  <section className="products" id="featured">
    {/* Floating Decorative SVGs in Background */}
    <div className="products__bg-shape products__bg-shape--left">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="250" r="150" fill="var(--teal-light)" fillOpacity="0.4" />
        <circle cx="250" cy="150" r="100" fill="var(--pink-light)" fillOpacity="0.3" />
      </svg>
    </div>
    <div className="products__bg-shape products__bg-shape--right">
      <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100 C150 50, 250 150, 200 250 C150 350, 50 250, 50 100 Z" fill="var(--yellow-light)" fillOpacity="0.5" />
        <circle cx="220" cy="300" r="60" fill="var(--teal-light)" fillOpacity="0.3" />
      </svg>
    </div>

    <div className="container" style={{ position: 'relative', zIndex: '2' }}>
      <div className="products__header">
        <div className="badge">Hand-Picked Collections</div>
        <h2 className="section-title" style={{marginTop:'10px'}}>Featured Products</h2>
        <p className="section-subtitle">Premium quality ride-on toys built for safety, fun and adventure</p>
      </div>

      <div className="products__grid">
        {products.map(p => (
          <div className="product-card" key={p.id} id={p.id}>
            {/* Image & Badge Wrapper */}
            <div className="product-card__image-wrap">
              <div className="product-card__image-inner">
                <img src={p.img} alt={p.name} className="product-card__image"
                  onError={e => { e.target.style.display='none'; }}
                />
              </div>
              <div className="product-card__badge-stack">
                <span className="product-card__badge">{p.badge}</span>
                <span className="product-card__discount-badge">{p.discount}</span>
              </div>
              <button className="product-card__wishlist" aria-label="Add to wishlist">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>

            {/* Card Content Body */}
            <div className="product-card__body">
              <div className="product-card__category">{p.category}</div>
              
              <h3 className="product-card__name">{p.name}</h3>
              
              {/* Star Rating using crisp custom SVGs */}
              <div className="product-card__stars">
                {Array.from({length:5}).map((_,i) => (
                  <svg key={i} className="product-card__star-svg" width="14" height="14" viewBox="0 0 24 24" fill={i < p.stars ? "var(--yellow)" : "none"} stroke="var(--yellow)" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="product-card__reviews-count">(4.9)</span>
              </div>

              {/* Product Specifications / Micro Details */}
              <div className="product-card__specs">
                {p.specs.map(spec => (
                  <span key={spec} className="product-card__spec-pill">{spec}</span>
                ))}
              </div>

              {/* Price Details */}
              <div className="product-card__price-row">
                <div className="product-card__price-container">
                  <span className="product-card__price">{p.price}</span>
                  <span className="product-card__old-price">{p.old}</span>
                </div>
              </div>

              {/* Premium Widescreen Button Actions */}
              <div className="product-card__actions">
                <button className="product-card__btn-cart" aria-label="Add to cart">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  <span>Cart</span>
                </button>
                <button className="product-card__btn-buy" aria-label="Buy now">
                  <span>Buy Now</span>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
// ── Top Products Grid ─────────────────────────────────────────
const topProducts = [
  {
    id: 'study-table',
    tag: 'BEST SELLER',
    label: 'Learn',
    name: 'STUDY\nTABLE',
    bg: '#2c2c35',          // dark blue-gray
    img: '/product_study_table.png',
    gridSpan: 'span-1'
  },
  {
    id: 'highchair',
    tag: 'NEW ARRIVAL',
    label: 'Comfort',
    name: 'HIGH\nCHAIR',
    bg: '#de3b49',          // warm red
    img: '/product_highchair.png',
    gridSpan: 'span-1'
  },
  {
    id: 'jeep',
    tag: 'MOST POPULAR',
    label: 'Adventure',
    name: 'BATTERY\nJEEP',
    bg: '#f5b800',          // yellow
    img: '/product_jeep.png',
    gridSpan: 'span-2'
  },
  {
    id: 'stroller',
    tag: 'TOP RATED',
    label: 'Smooth Ride',
    name: 'STROLLER',
    bg: '#1266c6',          // blue
    img: '/product_stroller.png',
    gridSpan: 'span-2'
  },
  {
    id: 'bike',
    tag: 'HOT DEAL',
    label: 'Play',
    name: 'BIKE',
    bg: '#2b7a3a',          // green
    img: '/product_bike.png',
    gridSpan: 'span-1'
  },
  {
    id: 'rideon',
    tag: 'KIDS LOVE',
    label: 'Fun',
    name: 'RIDE ON',
    bg: '#b81754',          // magenta
    img: '/product_rideon.png',
    gridSpan: 'span-1'
  },
];

const TopProducts = () => (
  <section className="curated-picks" id="top-products">
    {/* Decorative floating elements for children's website theme */}
    <span className="deco-shape deco-shape--1" style={{ top: '12%', left: '4%', color: '#ffde03', fontSize: '1.8rem', animationDelay: '0s' }}>⭐</span>
    <span className="deco-shape deco-shape--2" style={{ top: '55%', left: '3%', color: '#F4607A', fontSize: '2.2rem', animationDelay: '1.5s' }}>🎈</span>
    <span className="deco-shape deco-shape--3" style={{ top: '18%', right: '4%', color: '#17C3CE', fontSize: '1.6rem', animationDelay: '0.8s' }}>✨</span>
    <span className="deco-shape deco-shape--4" style={{ top: '70%', right: '5%', color: '#f5b800', fontSize: '2rem', animationDelay: '2.3s' }}>🌟</span>
    <span className="deco-shape deco-shape--5" style={{ top: '35%', left: '48%', color: '#6C63FF', fontSize: '1.5rem', animationDelay: '3.1s' }}>🍭</span>

    <div className="container">
      <h2 className="curated-picks__title">Curated Just for you</h2>

      <div className="curated-picks__grid">
        {/* Left: Large Feature Card (curate-1) */}
        <div className="curated-picks__featured-card">
          <div className="curated-picks__featured-content">
            <h3 className="curated-picks__featured-label">Top Picks</h3>
            <p className="curated-picks__featured-sub">for New Parents</p>
          </div>
          <div className="curated-picks__featured-img-wrap">
            <img src="/curate-1.jpg" alt="Top Picks for New Parents" className="curated-picks__featured-img" />
          </div>
        </div>

        {/* Right: Asymmetric Grid of 3 Cards using curate-2, curate-3, curate-4 */}
        <div className="curated-picks__sub-grid">
          {/* Card 1: Best for Gifting (curate-2) */}
          <div className="curated-picks__card curated-picks__card--gifting">
            <div className="curated-picks__card-content">
              <h4 className="curated-picks__card-title">Best for Gifting</h4>
            </div>
            <div className="curated-picks__card-img-wrap">
              <img src="/curate.webp" alt="Best for Gifting" className="curated-picks__card-img" />
            </div>
            <span className="curated-picks__arrow curated-picks__arrow--top-right">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </div>

          {/* Card 2: Most Loved by Parents (curate-3) */}
          <div className="curated-picks__card curated-picks__card--loved">
            <div className="curated-picks__card-content">
              <h4 className="curated-picks__card-title">Most Loved by Parents</h4>
            </div>
            <div className="curated-picks__card-img-wrap">
              <img src="/curate-3.jpg" alt="Most Loved by Parents" className="curated-picks__card-img" />
            </div>
            <span className="curated-picks__arrow curated-picks__arrow--top-right">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </div>

          {/* Card 3: Top Rated (curate-4) */}
          <div className="curated-picks__card curated-picks__card--rated">
            <div className="curated-picks__card-content">
              <h4 className="curated-picks__card-title">Top Rated & Loved</h4>
            </div>
            <div className="curated-picks__card-img-wrap">
              <img src="/curate-4.jpg" alt="Top Rated" className="curated-picks__card-img" />
            </div>
            <span className="curated-picks__arrow curated-picks__arrow--bottom-left">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export { ShopNowDivider, ProductsSection, TopProducts, CategoryGrid };

/* ── Category Grid (Study Table, High Chair, Battery Jeep, etc.) ── */
const CategoryGrid = () => (
  <section className="cat-grid" id="categories">
    {/* Background deco */}
    <span className="deco-shape deco-shape--1" style={{ top: '8%', left: '2%', color: '#ffde03', fontSize: '2rem' }}>⭐</span>
    <span className="deco-shape deco-shape--2" style={{ top: '70%', left: '1%', color: '#F4607A', fontSize: '2.4rem', animationDelay: '1.2s' }}>🎈</span>
    <span className="deco-shape deco-shape--3" style={{ top: '15%', right: '2%', color: '#17C3CE', fontSize: '1.8rem', animationDelay: '0.6s' }}>✨</span>
    <span className="deco-shape deco-shape--4" style={{ top: '75%', right: '3%', color: '#f5b800', fontSize: '2.2rem', animationDelay: '2s' }}>🌟</span>

    <div className="container">
      <div className="cat-grid__cards">
        {topProducts.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={`cat-card cat-card--${p.gridSpan}`}
            style={{ '--card-bg': p.bg }}
            id={`cat-card-${p.id}`}
          >
            <div className="cat-card__content">
              <span className="cat-card__tag">{p.tag}</span>
              <span className="cat-card__label">{p.label}</span>
              <h3 className="cat-card__name">{p.name}</h3>
              <div className="cat-card__btn">
                browse <span className="cat-card__btn-arrow">&gt;</span>
              </div>
            </div>
            <div className="cat-card__img-wrap">
              <img src={p.img} alt={p.name} className="cat-card__img" loading="lazy" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
