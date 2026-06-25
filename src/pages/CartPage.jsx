import { products } from '../components/Sections';

function CartPage() {
  const p = products[0];
  
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
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', color: 'var(--dark)' }}>Your Cart</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              <img src={p.img} alt={p.name} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 5px 0' }}>{p.name}</h3>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Qty: 1</div>
              </div>
              <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>{p.price}</div>
            </div>
          </div>

          <div style={{ background: 'var(--yellow)', borderRadius: '24px', padding: '30px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: '700' }}>{p.price}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Shipping</span>
              <span style={{ fontWeight: '700' }}>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '15px', fontSize: '1.2rem', fontWeight: '800' }}>
              <span>Total</span>
              <span>{p.price}</span>
            </div>
            <a href="#/checkout" className="product-card__btn-buy" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', textDecoration: 'none', textAlign: 'center', background: 'var(--dark)', color: '#fff' }}>Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
