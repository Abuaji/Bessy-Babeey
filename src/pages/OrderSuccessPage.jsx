

function OrderSuccessPage() {
  return (
    <div className="container" style={{ padding: '120px 20px', minHeight: '80vh', textAlign: 'center' }}>
      <div style={{ 
        width: '100px', height: '100px', background: 'var(--teal)', color: '#fff', borderRadius: '50%', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px',
        fontSize: '40px'
      }}>
        ✓
      </div>
      <h1 style={{ fontSize: '3.5rem', color: 'var(--dark)', marginBottom: '20px' }}>Order Confirmed!</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6' }}>
        Thank you for your purchase. We have received your order and will begin processing it shortly. You will receive an email confirmation soon.
      </p>
      <a href="#/shop" className="product-card__btn-buy" style={{ padding: '16px 40px', fontSize: '1.1rem', textDecoration: 'none' }}>
        Continue Shopping
      </a>
    </div>
  );
}

export default OrderSuccessPage;
