

function ShopPage() {
  const products = [
    { id: 1, name: 'Teddy Bear', price: '$25.00', img: 'https://images.unsplash.com/photo-1559419131-778235338166?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Toy Train', price: '$40.00', img: 'https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Doll House', price: '$65.00', img: 'https://images.unsplash.com/photo-1601614272101-38e4a9e52c80?q=80&w=600&auto=format&fit=crop' },
    { id: 4, name: 'Building Blocks', price: '$30.00', img: 'https://images.unsplash.com/photo-1587654780288-6a25b29094ce?q=80&w=600&auto=format&fit=crop' },
    { id: 5, name: 'Action Figure', price: '$15.00', img: 'https://images.unsplash.com/photo-1536551829377-2f78ffb36a16?q=80&w=600&auto=format&fit=crop' },
    { id: 6, name: 'Remote Car', price: '$45.00', img: 'https://images.unsplash.com/photo-1594787317079-5ee475d4d31e?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="shop-page container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center', color: 'var(--dark)' }}>All Collection</h1>
      <div className="products__grid">
        {products.map((p) => (
          <a href={`#/product/${p.id}`} key={p.id} className="product-card" style={{ textDecoration: 'none' }}>
            <div className="product-card__image-wrap">
              <img src={p.img} alt={p.name} className="product-card__image" style={{ objectFit: 'cover' }} />
            </div>
            <div className="product-card__body">
              <h3 className="product-card__name">{p.name}</h3>
              <div className="product-card__price">{p.price}</div>
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
