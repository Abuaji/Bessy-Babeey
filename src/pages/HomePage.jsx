import HeroBanner from '../components/HeroBanner';
import { ShopNowDivider, ProductsSection, TopProducts, CategoryGrid } from '../components/Sections';
import { SeasonalSale, Testimonials, Partners } from '../components/Banners';
import AboutUs from '../components/AboutUs';

function HomePage() {
  return (
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
  );
}

export default HomePage;
