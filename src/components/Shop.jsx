import React from 'react';
import { useLocation } from 'react-router-dom';

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || 'accessories';

  const categories = [
    { id: 'cat-1', label: 'Electric Jeeps' },
    { id: 'cat-2', label: 'Best Sellers' },
    { id: 'cat-3', label: 'Premium Collection' },
    { id: 'cat-4', label: 'Police Collection' },
  ];

  return (
    <div className="shop-page container">
      <header className="shop-header">
        <h1 className="shop-title">
          Search Results for <br />
          "{query}"
        </h1>
        <p className="shop-subtitle">
          Explore our collection of parent-controlled electric jeeps and vehicles.
        </p>
      </header>

      <div className="shop-controls">
        <div className="shop-sort">
          <span className="shop-sort-label">Sort By:</span>
          <div className="shop-sort-select">
            Featured Favorites
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      <div className="shop-filters-card">
        <div className="shop-filters-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="12" y1="18" x2="20" y2="18" />
          </svg>
          <h2>Filters</h2>
        </div>
        
        <div className="shop-filter-group">
          <h3 className="shop-filter-group-title">Category</h3>
          <div className="shop-filter-options">
            {categories.map((cat) => (
              <label key={cat.id} className="shop-checkbox-label">
                <input type="checkbox" className="shop-checkbox" />
                <span className="shop-checkbox-custom"></span>
                <span className="shop-checkbox-text">{cat.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      {/* Product Grid would go here */}
      <div className="shop-products-placeholder"></div>
      
    </div>
  );
};

export default Shop;
