import { useState, useEffect } from 'react';
import { products, topProducts } from '../components/Sections';
import { ProductCard } from '../components/ProductCard';

function ShopPage() {
  const allProducts = [...products, ...topProducts];
  const [search, setSearch] = useState('');
  
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(26000);
  const [selectedBatteryType, setSelectedBatteryType] = useState([]);

  // Extract unique options from products
  const availableCategories = ['Electric Jeeps', 'Best Sellers', 'Premium Collection', 'Police Collection', 'Study Table', 'High Chair', 'Stroller', 'Teddy', 'Toy', 'Accessories'];
  const availableAgeGroups = ['2-6 Years', '2-8 Years'];
  const availableBatteryTypes = ['12V Rechargeable'];

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if(hash.includes('q=')) {
        setSearch(decodeURIComponent(hash.split('q=')[1]).toLowerCase());
      } else {
        setSearch('');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleArrayItem = (array, setArray, item) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = search ? (
      p.name.toLowerCase().includes(search) || 
      (p.category && p.category.toLowerCase().includes(search)) ||
      (p.label && p.label.toLowerCase().includes(search))
    ) : true;

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matchesAgeGroup = selectedAgeGroups.length === 0 || (p.ageGroup && selectedAgeGroups.includes(p.ageGroup));
    
    // Price parsing: Remove ₹ and commas
    const numericPrice = p.price ? parseInt(p.price.replace('₹', '').replace(/,/g, '')) : 0;
    const matchesPrice = numericPrice <= maxPrice;

    const matchesColor = selectedColors.length === 0 || (p.colors && p.colors.some(c => selectedColors.includes(c)));
    const matchesBattery = selectedBatteryType.length === 0 || (p.batteryType && selectedBatteryType.includes(p.batteryType));

    return matchesSearch && matchesCategory && matchesAgeGroup && matchesPrice && matchesColor && matchesBattery;
  });

  return (
    <section className="products" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--dark)' }}>
              {search ? `Search Results for "${search}"` : 'Adventure Ride-On Catalog'}
            </h1>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem' }}>
              Explore our collection of parent-controlled electric jeeps and vehicles.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-600)' }}>Sort By:</span>
            <select style={{ padding: '10px 20px', borderRadius: '50px', border: '1px solid #e2e8f0', background: '#fff', outline: 'none', fontWeight: '600', color: 'var(--dark)' }}>
              <option>Featured Favorites</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          {/* Sidebar */}
          <aside className="shop-sidebar">
            <div className="filter-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px', marginBottom: '25px' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Filters
            </div>

            {/* Category */}
            <div className="filter-section">
              <div className="filter-title">Category</div>
              {availableCategories.slice(0, 4).map(cat => (
                <label key={cat} className="filter-checkbox">
                  <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleArrayItem(selectedCategories, setSelectedCategories, cat)} />
                  {cat}
                </label>
              ))}
            </div>

            {/* Age Group */}
            <div className="filter-section">
              <div className="filter-title">Age Group</div>
              <div className="filter-pills">
                {availableAgeGroups.map(age => (
                  <button key={age} className={`filter-pill ${selectedAgeGroups.includes(age) ? 'active' : ''}`} onClick={() => toggleArrayItem(selectedAgeGroups, setSelectedAgeGroups, age)}>
                    {age}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="filter-section">
              <div className="filter-title">Color</div>
              <div className="filter-colors">
                {['#dc2626', '#1e3a8a', '#f8fafc', '#0f172a'].map(color => (
                  <button 
                    key={color} 
                    className={`filter-color ${selectedColors.includes(color) ? 'active' : ''}`} 
                    style={{ backgroundColor: color, borderColor: selectedColors.includes(color) ? '#3b82f6' : (color === '#f8fafc' ? '#e2e8f0' : 'transparent'), borderStyle: 'solid', borderWidth: '2px' }}
                    onClick={() => toggleArrayItem(selectedColors, setSelectedColors, color)}
                  />
                ))}
              </div>
            </div>

            {/* Max Price */}
            <div className="filter-section">
              <div className="filter-title">Max Price</div>
              <input 
                type="range" 
                min="500" 
                max="26000" 
                step="500" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#3b82f6', marginBottom: '10px' }}
              />
              <div className="price-range-labels">
                <span>₹500</span>
                <span>₹{maxPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Battery Type */}
            <div className="filter-section">
              <div className="filter-title">Battery Type</div>
              {availableBatteryTypes.map(bat => (
                <label key={bat} className="filter-checkbox">
                  <input type="checkbox" checked={selectedBatteryType.includes(bat)} onChange={() => toggleArrayItem(selectedBatteryType, setSelectedBatteryType, bat)} />
                  {bat}
                </label>
              ))}
            </div>
            
            <button 
              onClick={() => {
                setSelectedCategories([]);
                setSelectedAgeGroups([]);
                setSelectedColors([]);
                setMaxPrice(26000);
                setSelectedBatteryType([]);
              }}
              style={{ width: '100%', padding: '12px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '12px', fontWeight: '700', cursor: 'pointer', marginTop: '10px' }}
            >
              Clear All Filters
            </button>
          </aside>

          {/* Product Grid */}
          <div className="shop-main">
            {filteredProducts.length > 0 ? (
              <div className="products__grid">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 0', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--gray-600)' }}>No products found matching your filters.</h3>
                <button onClick={() => {
                  setSearch('');
                  setSelectedCategories([]);
                  setSelectedAgeGroups([]);
                  setSelectedColors([]);
                  setMaxPrice(26000);
                  setSelectedBatteryType([]);
                  window.location.hash = '#/shop';
                }} className="product-card__btn-buy" style={{ display: 'inline-block', marginTop: '20px', padding: '16px 32px' }}>Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
