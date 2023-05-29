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
          <Sales sales={popularSales} />
          <Products products={products} />
        </div>
    );
};

export default Home;