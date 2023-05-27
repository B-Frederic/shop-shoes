// Components
import HeroSection from '../components/HeroSection';
// Data
import { heroSection } from "../data/data";

const Home = () => {
    return (
        <div>
          <HeroSection heroSection={heroSection} />
        </div>
    );
};

export default Home;