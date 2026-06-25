import { products } from '../components/Sections';

function CartPage() {
  const hash = window.location.hash;
  const productId = hash.includes('?id=') ? hash.split('?id=')[1] : null;
  const p = products.find(prod => prod.id === productId) || products[0];
  return (
    <section className="products" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      {/* Decorative Floating Shapes */}

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
