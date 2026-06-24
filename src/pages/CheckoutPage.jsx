

function CheckoutPage() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px', color: 'var(--dark)' }}>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
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

        <div style={{ background: '#f9fafb', borderRadius: '24px', padding: '30px', height: 'fit-content', border: '1px solid #eee' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Order Total</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '1.5rem', fontWeight: '800', color: 'var(--teal)' }}>
            <span>Total</span>
            <span>$25.00</span>
          </div>
          <a href="#/success" className="product-card__btn-buy" style={{ width: '100%', padding: '18px', fontSize: '1.2rem', textDecoration: 'none', textAlign: 'center', background: 'var(--teal)', color: '#fff' }}>Place Order</a>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
