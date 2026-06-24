import { products, topProducts } from '../components/Sections';

function ProductDetailsPage({ id }) {
  const allProducts = [...products, ...topProducts];
  const product = allProducts.find(p => p.id === id) || products[0];

  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <a href="#/shop" style={{ display: 'inline-block', marginBottom: '30px', color: 'var(--teal)', fontWeight: '700', textDecoration: 'none' }}>
        ← Back to Shop
      </a>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
        <div style={{ background: '#f5f5f7', borderRadius: '24px', padding: '40px', display: 'flex', justifyContent: 'center' }}>
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
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#/cart" className="product-card__btn-buy" style={{ padding: '16px 32px', fontSize: '1.1rem', textDecoration: 'none', textAlign: 'center' }}>Add to Cart</a>
            <a href="#/checkout" className="product-card__btn-cart" style={{ padding: '16px 32px', fontSize: '1.1rem', textDecoration: 'none', textAlign: 'center' }}>Buy it Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
