// Icons
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
// Redux
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../redux/CartSlice";
// Toastify
import { ToastContainer, toast } from "react-toastify";


const Items = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = { id, title, text, img, color, shadow, price };

    dispatch(setAddItemToCart(item));

    toast.success(`${title} a été ajouté au panier`)
  };

  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full`}
    >
      <div className="grid items-center justify-items-center">
        <h3 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h3>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>

        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
            <p className="text-black text-md font-semibold">{price} €</p>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <p className="md:text-sm font-normal text-slate-100">{rating}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex bg-white/90 blur-effect-theme button-theme py-0.5 px-2 shadow shadow-sky-200"
            onClick={() => addToCart()}
          >
            <ShoppingBagIcon className="mr-2 icon-style text-slate-900" />
            {btn}
          </button>
        </div>
      </div>
      <div className="mt-2">
        <img
          src={img}
          alt={`chaussure ${title}`}
          className="h-36 w-64 transition-theme hover:rotate-12 cursor-pointer"
        />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Items;
