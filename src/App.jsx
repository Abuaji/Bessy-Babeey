import './index.css';
import { Topbar, Navbar } from './components/Header';
import HeroBanner from './components/HeroBanner';
import { ShopNowDivider, ProductsSection, TopProducts, CategoryGrid } from './components/Sections';
import { SeasonalSale, Testimonials, Footer, Partners } from './components/Banners';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <HeroBanner />
        <AboutUs />
        <CategoryGrid />
       
        <ShopNowDivider />
        <ProductsSection />
        <SeasonalSale />
         <TopProducts />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export default App;
