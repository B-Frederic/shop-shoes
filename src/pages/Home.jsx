// Components
import HeroSection from '../components/HeroSection';
import Sales from '../components/Sales';
// Data
import { heroSection, popularSales } from "../data/data";

const Home = () => {
    return (
        <div className="flex flex-col gap-16 relative">
          <HeroSection heroSection={heroSection} />
          <Sales endpoint={popularSales} />
        </div>
    );
};

export default Home;