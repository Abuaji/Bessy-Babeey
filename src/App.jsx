import { useState, useEffect } from 'react';
import './index.css';
import { Topbar, Navbar } from './components/Header';
import { Footer } from './components/Banners';
import { MobileBottomNav } from './components/MobileBottomNav';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

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
      const id = route.split('#/product/')[1].split('?')[0];
      return <ProductDetailsPage id={id} />;
    }
    if (route.startsWith('#/shop')) return <ShopPage />;
    if (route.startsWith('#/cart')) return <CartPage />;
    if (route.startsWith('#/checkout')) return <CheckoutPage />;
    if (route.startsWith('#/success')) return <OrderSuccessPage />;
    if (route.startsWith('#/blogs')) return <BlogsPage />;
    if (route.startsWith('#/contact')) return <ContactPage />;
    return <HomePage />;
  };

  return (
    <>
      <Topbar />
      <Navbar />
      {renderPage()}
      <Footer />
      <MobileBottomNav />
    </>
  );
}

export default App;
