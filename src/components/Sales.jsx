// Utils
import Items from "./utils/Items";
import Title from "./utils/Title";

const Sales = ({ sales: { title, items } }) => {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div className="grid items-center justify-items-center gap-7 lg:gap-5 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {items?.map((item, i) => (
          <Items key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
