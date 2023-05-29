// Components via index
import {HeroSection, Sales, FlexContent, Products, Stories, Footer, Header, Cart} from '../components';
// Data
import { heroSection, popularSales, products, highlight, sneaker, story } from "../data/data";

const Home = () => {
    return (
      <>
        <Header />
        <Cart />
        <main className="flex flex-col gap-16 relative">
          <HeroSection heroSection={heroSection} />
          <Sales sales={popularSales} ifExists />
          <FlexContent details={highlight} ifExists/>
          <Products products={products} />
          <FlexContent details={sneaker} />
          <Stories story={story} />
        </main>
        <Footer />
      </>
    );
};

export default Home;