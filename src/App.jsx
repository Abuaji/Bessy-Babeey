import { useState, useEffect } from 'react';
import './index.css';
import { Topbar, Navbar } from './components/Header';
import { Footer } from './components/Banners';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0); // Scroll to top on navigation
      setRoute(window.location.hash || '#');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/product/')) {
      const id = route.split('#/product/')[1];
      return <ProductDetailsPage id={id} />;
    }
    switch (route) {
      case '#/shop': return <ShopPage />;
      case '#/cart': return <CartPage />;
      case '#/checkout': return <CheckoutPage />;
      case '#/success': return <OrderSuccessPage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
