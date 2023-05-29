// Components
import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import Sales from '../components/Sales';
// Data
import { heroSection, popularSales, products } from "../data/data";

const Home = () => {
    return (
        <div className="flex flex-col gap-16 relative">
          <HeroSection heroSection={heroSection} />
          <Sales sales={popularSales} ifExists />
          <Products products={products} ifExists />
        </div>
    );
};

export default Home;