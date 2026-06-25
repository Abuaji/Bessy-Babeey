import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';

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
    id: 'prod-teddy-2',
    img: '/premium_teddy_2_1782342996914.png',
    name: 'Bessy Babeey Fluffy Brown Teddy',
    category: 'Teddy',
    price: '₹1,499', old: '₹2,199', badge: 'New', stars: 5, discount: '31% OFF',
    specs: ['Soft Fur', 'Red Ribbon', 'Cuddly']
  },
  {
    id: 'prod-teddy-3',
    img: '/premium_teddy_3_1782343007981.png',
    name: 'Bessy Babeey Vintage Knitted Teddy',
    category: 'Teddy',
    price: '₹1,899', old: '₹2,599', badge: 'Handmade', stars: 5, discount: '26% OFF',
    specs: ['Knitted Cotton', 'Vintage Style', 'Collector Item']
  },
  {
    id: 'prod-teddy-4',
    img: '/premium_teddy_4_1782343019265.png',
    name: 'Bessy Babeey Ultra-Soft Polar Bear',
    category: 'Teddy',
    price: '₹1,699', old: '₹2,399', badge: 'Bestseller', stars: 5, discount: '29% OFF',
    specs: ['White Plush', 'Winter Collection', 'Super Soft']
  },
  {
    id: 'prod-acc-2',
    img: '/premium_acc_2_1782343044828.png',
    name: 'Bessy Babeey Silicone Feeding Set',
    category: 'Accessories',
    price: '₹899', old: '₹1,299', badge: 'Trending', stars: 5, discount: '30% OFF',
    specs: ['BPA Free', 'Microwave Safe', 'Easy Clean']
  },
  {
    id: 'prod-acc-3',
    img: '/premium_acc_3_1782343058505.png',
    name: 'Bessy Babeey Wooden Grooming Kit',
    category: 'Accessories',
    price: '₹799', old: '₹1,199', badge: 'Eco-Friendly', stars: 5, discount: '33% OFF',
    specs: ['Soft Bristles', 'Natural Wood', 'Gentle on Scalp']
  },
  {
    id: 'prod-acc-4',
    img: '/premium_acc_4_1782343070191.png',
    name: 'Bessy Babeey Pastel Wood Teethers',
    category: 'Accessories',
    price: '₹599', old: '₹899', badge: 'Sale', stars: 4, discount: '33% OFF',
    specs: ['Food Grade Silicone', 'Soothing', 'Easy Grip']
  },
  {
    id: 'prod-toy-2',
    img: '/premium_toy_2_1782343082364.png',
    name: 'Bessy Babeey Wooden Stacking Train',
    category: 'Toy',
    price: '₹1,199', old: '₹1,599', badge: 'Classic', stars: 5, discount: '25% OFF',
    specs: ['Motor Skills', 'Vibrant Paint', 'Durable Wood']
  },
  {
    id: 'prod-toy-3',
    img: '/premium_toy_3_1782343093916.png',
    name: 'Bessy Babeey Melody Maker Xylophone',
    category: 'Toy',
    price: '₹1,399', old: '₹1,999', badge: 'Musical', stars: 5, discount: '30% OFF',
    specs: ['Perfect Pitch', 'Creative Play', 'Child Safe Mallet']
  },
  {
    id: 'prod-toy-4',
    img: '/premium_toy_4_1782343106776.png',
    name: 'Bessy Babeey Magna-Build Magnetic Tiles',
    category: 'Toy',
    price: '₹2,499', old: '₹3,499', badge: 'Premium', stars: 5, discount: '28% OFF',
    specs: ['120 Pieces', 'Strong Magnets', 'STEM Certified']
  },
  {
    id: 'prod-teddy-premium',
    img: '/premium_teddy_bear_1782342666923.png',
    name: 'Bessy Babeey Premium Soft Plush Teddy Bear',
    category: 'Teddy',
    price: '₹1,299',
    old: '₹1,999',
    badge: 'Premium',
    stars: 5,
    discount: '35% OFF',
    specs: ['Ultra Soft', 'Hypoallergenic', 'Child Safe']
  },
  {
    id: 'prod-baby-acc-premium',
    img: '/premium_baby_accessories_1782342677169.png',
    name: 'Bessy Babeey Luxury Baby Accessories Set',
    category: 'Accessories',
    price: '₹999',
    old: '₹1,499',
    badge: 'Bestseller',
    stars: 5,
    discount: '33% OFF',
    specs: ['100% Organic Cotton', 'BPA Free', 'Soft Touch']
  },
  {
    id: 'prod-kids-toy-premium',
    img: '/premium_kids_toy_1782342688104.png',
    name: 'Bessy Babeey Educational Wooden Blocks Kids Toy',
    category: 'Toy',
    price: '₹1,499',
    old: '₹2,199',
    badge: 'New Arrival',
    stars: 5,
    discount: '31% OFF',
    specs: ['Non-toxic Paint', 'STEM Learning', 'Smooth Edges']
  },
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
  { 
    id: 'prod-study-table', 
    img: '/product_study_table.png', 
    name: 'Bessy Babeey Ergonomic Study Table & Chair Set', 
    category: 'Study Table', 
    price: '₹3,499', 
    old: '₹4,999', 
    badge: 'Bestseller', 
    stars: 4.8,
    discount: '30% OFF',
    specs: ['Height Adjustable', 'Storage Drawer', 'Anti-Slip Base']
  },
  { 
    id: 'prod-high-chair', 
    img: '/product_highchair.png', 
    name: 'Bessy Babeey Premium Foldable High Chair', 
    category: 'High Chair', 
    price: '₹2,999', 
    old: '₹4,299', 
    badge: 'New Arrival', 
    stars: 4.9,
    discount: '30% OFF',
    specs: ['5-Point Harness', 'Easy Fold', 'Washable Cushion']
  },
  { 
    id: 'prod-stroller', 
    img: '/product_stroller.png', 
    name: 'Bessy Babeey Smooth Ride Luxury Stroller', 
    category: 'Stroller', 
    price: '₹5,999', 
    old: '₹8,499', 
    badge: 'Top Rated', 
    stars: 5,
    discount: '29% OFF',
    specs: ['Reversible Handle', 'Shock Absorbers', 'UV Canopy']
  }
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
      {/* Top Products Row */}
      <div className="products__header" style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left' }}>
        <div>
          <div className="badge" style={{ margin: 0 }}>Hand-Picked Collections</div>
          <h2 className="section-title" style={{marginTop:'10px', marginBottom: 0}}>Top Products</h2>
        </div>
        <a href="#/shop" style={{ color: 'var(--teal)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px', fontSize: '14px' }}>
          See All 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      </div>

      <div className="products__grid" style={{ marginBottom: '60px' }}>
        {products.filter(p => ['prod-1', 'prod-teddy-2', 'prod-acc-3', 'prod-toy-2'].includes(p.id)).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* New Arrivals Row */}
      <div className="products__header" style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left' }}>
        <div>
          <div className="badge" style={{ margin: 0 }}>Just Added</div>
          <h2 className="section-title" style={{marginTop:'10px', marginBottom: 0}}>New Arrivals</h2>
        </div>
        <a href="#/shop" style={{ color: 'var(--teal)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px', fontSize: '14px' }}>
          See All 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      </div>

      <div className="products__grid" style={{ marginBottom: '30px' }}>
        {products.filter(p => ['prod-5', 'prod-teddy-4', 'prod-acc-2', 'prod-toy-4'].includes(p.id)).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="#/shop" className="product-card__btn-cart" style={{ display: 'inline-flex', padding: '12px 32px', fontSize: '15px' }}>
          View All Collection
        </a>
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
        <a href="#/shop?q=jeep" className="curated-picks__featured-card" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
          <div className="curated-picks__featured-content">
            <h3 className="curated-picks__featured-label">Top Picks</h3>
            <p className="curated-picks__featured-sub">for New Parents</p>
          </div>
          <div className="curated-picks__featured-img-wrap">
            <img src="/curate-1.jpg" alt="Top Picks for New Parents" className="curated-picks__featured-img" />
          </div>
        </a>

        {/* Right: Asymmetric Grid of 3 Cards using curate-2, curate-3, curate-4 */}
        <div className="curated-picks__sub-grid">
          {/* Card 1: Best for Gifting (curate-2) */}
          <a href="#/shop?q=trike" className="curated-picks__card curated-picks__card--gifting" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
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
          </a>

          {/* Card 2: Most Loved by Parents (curate-3) */}
          <a href="#/shop?q=bike" className="curated-picks__card curated-picks__card--loved" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
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
          </a>

          {/* Card 3: Top Rated (curate-4) */}
          <a href="#/shop?q=study%20table" className="curated-picks__card curated-picks__card--rated" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
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
          </a>
        </div>

      </div>
    </div>
  </section>
);

export { ShopNowDivider, ProductsSection, TopProducts, CategoryGrid, products, topProducts };

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
            href={`#/shop?q=${encodeURIComponent(p.name.replace('\n', ' ').toLowerCase())}`}
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
