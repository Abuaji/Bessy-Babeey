import HeroBanner from './HeroBanner';
import { ShopNowDivider, ProductsSection, TopProducts, CategoryGrid } from './Sections';
import { SeasonalSale, Testimonials, Partners } from './Banners';
import AboutUs from './AboutUs';

const Home = () => {
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
};

export default Home;
