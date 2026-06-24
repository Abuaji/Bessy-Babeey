import { products, topProducts } from '../components/Sections';

function ShopPage() {
  const allProducts = [...products, ...topProducts];

  return (
    <div className="shop-page container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center', color: 'var(--dark)' }}>All Collection</h1>
      <div className="products__grid">
        {allProducts.map((p) => (
          <a href={`#/product/${p.id}`} key={p.id} className="product-card" style={{ textDecoration: 'none' }}>
            <div className="product-card__image-wrap">
              <img src={p.img} alt={p.name} className="product-card__image" style={{ objectFit: 'cover' }} />
            </div>
            <div className="product-card__body">
              <h3 className="product-card__name">{p.name}</h3>
              <div className="product-card__price">{p.price || '₹9,999'}</div>
              <div className="product-card__actions" style={{ gridTemplateColumns: '1fr', marginTop: '10px' }}>
                <button className="product-card__btn-cart">View Details</button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
