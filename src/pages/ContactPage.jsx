import React from 'react';

function ContactPage() {
  return (
    <section className="products" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', textAlign: 'center' }}>
      {/* Decorative SVGs */}
      <div className="products__bg-shape products__bg-shape--left">
        <span style={{ fontSize: '40px' }}>📞</span>
      </div>
      <div className="products__bg-shape products__bg-shape--right">
        <span style={{ fontSize: '40px' }}>✉️</span>
      </div>
      
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', color: 'var(--dark)', marginBottom: '20px' }}>Contact Us</h1>
        <p style={{ color: 'var(--gray-600)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          Have a question about an order or need help picking the perfect toy? We're here to help!
        </p>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '8px' }}>Your Name</label>
            <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #eaeaea', background: '#f9f9fb', outline: 'none', fontSize: '1rem' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '8px' }}>Your Email</label>
            <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #eaeaea', background: '#f9f9fb', outline: 'none', fontSize: '1rem' }} />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '8px' }}>Message</label>
            <textarea placeholder="How can we help you today?" rows="5" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #eaeaea', background: '#f9f9fb', outline: 'none', fontSize: '1rem', resize: 'vertical' }}></textarea>
          </div>
          <button style={{ width: '100%', background: 'var(--teal)', color: '#fff', padding: '16px', borderRadius: '100px', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
