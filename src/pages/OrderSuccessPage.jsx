

function OrderSuccessPage() {
  return (
    <section className="products" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', textAlign: 'center' }}>
      {/* Decorative Floating Shapes */}
      <span className="deco-shape deco-shape--1" style={{ top: '15%', left: '5%', color: '#ffde03', fontSize: '2rem', animationDelay: '0s' }}>⭐</span>
      <span className="deco-shape deco-shape--2" style={{ top: '65%', left: '8%', color: '#F4607A', fontSize: '2.4rem', animationDelay: '1.2s' }}>🎈</span>
      <span className="deco-shape deco-shape--3" style={{ top: '25%', right: '6%', color: '#17C3CE', fontSize: '1.8rem', animationDelay: '0.6s' }}>✨</span>
      <span className="deco-shape deco-shape--4" style={{ top: '80%', right: '10%', color: '#f5b800', fontSize: '2.2rem', animationDelay: '2s' }}>🌟</span>
      <span className="deco-shape deco-shape--5" style={{ top: '45%', left: '48%', color: '#6C63FF', fontSize: '1.5rem', animationDelay: '3.1s' }}>🍭</span>
      <span className="deco-shape deco-shape--1" style={{ top: '70%', left: '40%', color: '#ffde03', fontSize: '2rem', animationDelay: '0.8s' }}>💛</span>
      <span className="deco-shape deco-shape--3" style={{ top: '20%', right: '40%', color: '#17C3CE', fontSize: '1.8rem', animationDelay: '1.5s' }}>💙</span>

      <div className="container" style={{ position: 'relative', zIndex: '2' }}>
        <div style={{ 
          width: '100px', height: '100px', background: 'var(--teal)', color: '#fff', borderRadius: '50%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px',
          fontSize: '40px', boxShadow: '0 10px 30px rgba(23, 195, 206, 0.3)'
        }}>
          ✓
        </div>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--dark)', marginBottom: '20px' }}>Order Confirmed!</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Thank you for your purchase. We have received your order and will begin processing it shortly. You will receive an email confirmation soon.
        </p>
        <a href="#/shop" className="product-card__btn-buy" style={{ padding: '16px 40px', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>
          Continue Shopping
        </a>
      </div>
    </section>
  );
}

export default OrderSuccessPage;
