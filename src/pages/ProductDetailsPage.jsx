

function ProductDetailsPage({ id }) {

  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <a href="#/shop" style={{ display: 'inline-block', marginBottom: '30px', color: 'var(--teal)', fontWeight: '700', textDecoration: 'none' }}>
        ← Back to Shop
      </a>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
        <div style={{ background: '#f5f5f7', borderRadius: '24px', padding: '40px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1559419131-778235338166?q=80&w=600&auto=format&fit=crop" 
            alt="Product" 
            style={{ width: '100%', maxWidth: '400px', borderRadius: '16px', objectFit: 'cover' }} 
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--teal)', textTransform: 'uppercase', marginBottom: '10px' }}>Toys Collection</div>
          <h1 style={{ fontSize: '3rem', color: 'var(--dark)', lineHeight: '1.1', marginBottom: '20px' }}>Teddy Bear {id}</h1>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#ff3b30', marginBottom: '24px' }}>$25.00</div>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '40px' }}>
            A soft, cuddly teddy bear perfect for kids of all ages. Made with high-quality, hypoallergenic materials. 
            Bring joy and comfort to your little ones with this classic toy.
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
