// React
import { useEffect, useState } from "react";
// Utils
import Title from "./utils/Title";
import Items from "./utils/Items";

const Products = ({ products: { title, items } }) => {


  const handleTotop = () => {
    window.scrollTo(0, 0)
  }

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {

    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 600);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop]);

  return (
    <div className="nike-container">
      <Title title={title} />
      <div className="grid items-center justify-items-center gap-7 lg:gap-6 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {items?.map((item, i) => (
          <Items key={i} {...item} />
        ))}
      </div>
      {
        scrolling && (
          <div className="hidden lgm:block fixed right-4 bottom-4 opacity-[0.7]" onClick={handleTotop}>
            <div className="w-[45px] h-[45px] rounded-[50%] bg-slate-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Products;
