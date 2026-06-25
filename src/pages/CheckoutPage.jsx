

function CheckoutPage() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', color: 'var(--dark)' }}>Checkout</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Shipping Details</h3>
            <form style={{ display: 'grid', gap: '20px' }}>
              <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }} />
              <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }} />
              <input type="text" placeholder="Shipping Address" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }} />
              
              <h3 style={{ fontSize: '1.5rem', marginTop: '20px', marginBottom: '10px' }}>Payment Method</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', border: '2px solid var(--teal)', borderRadius: '12px', flex: 1, cursor: 'pointer' }}>
                  <input type="radio" name="payment" defaultChecked /> Credit Card
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', border: '1px solid #ddd', borderRadius: '12px', flex: 1, cursor: 'pointer' }}>
                  <input type="radio" name="payment" /> PayPal
                </label>
              </div>
              
              <input type="text" placeholder="Card Number" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem', marginTop: '10px' }} />
            </form>
          </div>

          <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', height: 'fit-content', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Order Total</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '1.5rem', fontWeight: '800', color: 'var(--teal)' }}>
              <span>Total</span>
              <span>₹14,999</span>
            </div>
            <a href="#/success" className="product-card__btn-buy" style={{ width: '100%', padding: '18px', fontSize: '1.2rem', textDecoration: 'none', textAlign: 'center', background: 'var(--teal)', color: '#fff' }}>Place Order</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
