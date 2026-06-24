

function CartPage() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px', color: 'var(--dark)' }}>Your Cart</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
        <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            <img src="https://images.unsplash.com/photo-1559419131-778235338166?q=80&w=200&auto=format&fit=crop" alt="Teddy" style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.2rem', margin: '0 0 5px 0' }}>Teddy Bear</h3>
              <div style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Qty: 1</div>
            </div>
            <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>$25.00</div>
          </div>
        </div>

        <div style={{ background: 'var(--yellow)', borderRadius: '24px', padding: '30px', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Subtotal</span>
            <span style={{ fontWeight: '700' }}>$25.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Shipping</span>
            <span style={{ fontWeight: '700' }}>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '15px', fontSize: '1.2rem', fontWeight: '800' }}>
            <span>Total</span>
            <span>$25.00</span>
          </div>
          <a href="#/checkout" className="product-card__btn-buy" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', textDecoration: 'none', textAlign: 'center', background: 'var(--dark)' }}>Proceed to Checkout</a>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
