// Components
import FlexContent from '../components/FlexContent';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import Sales from '../components/Sales';
// Data
import { heroSection, popularSales, products, highlight, sneaker } from "../data/data";

const Home = () => {
    return (
        <div className="flex flex-col gap-16 relative">
          <HeroSection heroSection={heroSection} />
          <Sales sales={popularSales} ifExists />
          <FlexContent details={highlight} ifExists/>
          <Products products={products} />
          <FlexContent details={sneaker} />
        </div>
    );
};

export default Home;