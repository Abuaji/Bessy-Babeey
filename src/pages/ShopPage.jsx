import { useState, useEffect } from 'react';
import { products, topProducts } from '../components/Sections';
import { ProductCard } from '../components/ProductCard';

function ShopPage() {
  const allProducts = [...products, ...topProducts];
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(allProducts.map(p => p.category).filter(Boolean))];

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if(hash.includes('q=')) {
        setSearch(decodeURIComponent(hash.split('q=')[1]).toLowerCase());
      } else {
        setSearch('');
      }
    };
    handleHash(); // Run on mount
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = search ? (
      p.name.toLowerCase().includes(search) || 
      (p.category && p.category.toLowerCase().includes(search)) ||
      (p.label && p.label.toLowerCase().includes(search))
    ) : true;
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        <h1 style={{ fontSize: '3rem', marginBottom: '10px', textAlign: 'center', color: 'var(--dark)' }}>
          {search ? `Search Results for "${search}"` : 'All Collection'}
        </h1>
        {search && <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--gray-600)' }}>Found {filteredProducts.length} product(s)</p>}
        
        {!search && (
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '50px',
                  border: `2px solid ${selectedCategory === cat ? 'var(--teal)' : 'var(--gray-200)'}`,
                  background: selectedCategory === cat ? 'var(--teal)' : 'transparent',
                  color: selectedCategory === cat ? 'white' : 'var(--gray-600)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
        
        {filteredProducts.length > 0 ? (
          <div className="products__grid">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--gray-600)' }}>No products found matching your search.</h3>
            <a href="#/shop" className="product-card__btn-buy" style={{ display: 'inline-block', marginTop: '20px', padding: '16px 32px', textDecoration: 'none' }}>Clear Search</a>
          </div>
        )}
      </div>
    </section>
  );
}

export default ShopPage;
