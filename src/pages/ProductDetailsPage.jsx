import { products, topProducts } from '../components/Sections';

function ProductDetailsPage({ id }) {
  const allProducts = [...products, ...topProducts];
  const product = allProducts.find(p => p.id === id) || products[0];

  return (
    <section className="products" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      {/* Decorative Floating Shapes */}
      <span className="deco-shape deco-shape--1" style={{ top: '15%', left: '5%', color: '#ffde03', fontSize: '2rem', animationDelay: '0s' }}>⭐</span>
      <span className="deco-shape deco-shape--2" style={{ top: '65%', left: '8%', color: '#F4607A', fontSize: '2.4rem', animationDelay: '1.2s' }}>🎈</span>
      <span className="deco-shape deco-shape--3" style={{ top: '25%', right: '6%', color: '#17C3CE', fontSize: '1.8rem', animationDelay: '0.6s' }}>✨</span>
      <span className="deco-shape deco-shape--4" style={{ top: '80%', right: '10%', color: '#f5b800', fontSize: '2.2rem', animationDelay: '2s' }}>🌟</span>
      <span className="deco-shape deco-shape--5" style={{ top: '45%', left: '48%', color: '#6C63FF', fontSize: '1.5rem', animationDelay: '3.1s' }}>🍭</span>
      <span className="deco-shape deco-shape--1" style={{ top: '70%', left: '40%', color: '#ffde03', fontSize: '2rem', animationDelay: '0.8s' }}>💛</span>
      <span className="deco-shape deco-shape--3" style={{ top: '20%', right: '40%', color: '#17C3CE', fontSize: '1.8rem', animationDelay: '1.5s' }}>💙</span>

      <div className="container" style={{ position: 'relative', zIndex: '2' }}>
        <a href="#/shop" style={{ display: 'inline-block', marginBottom: '30px', color: 'var(--teal)', fontWeight: '700', textDecoration: 'none' }}>
          ← Back to Shop
        </a>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', display: 'flex', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <img 
              src={product.img} 
              alt={product.name} 
              style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', borderRadius: '16px' }}
            />
          </div>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--dark)' }}>{product.name}</h1>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--teal)', marginBottom: '30px' }}>{product.price || '₹9,999'}</div>
            <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '40px' }}>
              Bring joy and comfort to your little ones with this classic toy. Built for safety, fun and adventure, it's the perfect companion for your child.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#/cart" className="product-card__btn-buy" style={{ padding: '16px 32px', fontSize: '1.1rem', textDecoration: 'none', textAlign: 'center' }}>Add to Cart</a>
              <a href="#/checkout" className="product-card__btn-cart" style={{ padding: '16px 32px', fontSize: '1.1rem', textDecoration: 'none', textAlign: 'center' }}>Buy it Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
