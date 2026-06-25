import React from 'react';

function BlogsPage() {
  return (
    <section className="products" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', textAlign: 'center' }}>
      {/* Decorative SVGs */}
      <div className="products__bg-shape products__bg-shape--left">
        <span style={{ fontSize: '40px' }}>🎈</span>
      </div>
      <div className="products__bg-shape products__bg-shape--right">
        <span style={{ fontSize: '40px' }}>✨</span>
      </div>
      
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', color: 'var(--dark)', marginBottom: '20px' }}>Our Blogs</h1>
        <p style={{ color: 'var(--gray-600)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          Welcome to the Bessy Babeey blog! Read our latest articles on parenting, fun toy recommendations, and play ideas for kids of all ages.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <div style={{ width: '100%', height: '200px', background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                {item === 1 ? '🧸' : item === 2 ? '🚗' : '📚'}
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ color: 'var(--teal)', fontSize: '0.9rem', fontWeight: 600 }}>Dec 12, 2026</span>
                <h3 style={{ fontSize: '1.5rem', margin: '10px 0', color: 'var(--dark)' }}>The Benefits of Learning Through Play</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '1rem', marginBottom: '20px' }}>
                  Discover why interactive toys are the best way to develop early childhood motor skills.
                </p>
                <a href="#/blogs" style={{ color: 'var(--teal)', fontWeight: 'bold', textDecoration: 'none' }}>Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsPage;
