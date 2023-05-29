// Redux
import { useDispatch } from "react-redux";
import {
  setDecrementItemQty,
  setIncrementItemQty,
  setRemoveItemFromCart,
} from "../../redux/CartSlice";
// Icons
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const incrementItemQty = () => {
    dispatch(
      setIncrementItemQty({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const decrementItemQty = () => {
    dispatch(
      setDecrementItemQty({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  return (
    <div className="flex items-center px-2 w-[300px]">

      <div className="flex items-center gap-5">

        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 transition-all duration-75 ease-in-out grid items-center justify-center w-[230px]`}
        >
          <img
            src={img}
            alt={`img/cart-item/${id}`}
            className="w-36 h-auto object-fill lg:w-28"
          />
          <div className="absolute right-1.5 top-1.5 blur-theme-effect bg-white/80 text-black text-xs py-1 px-2 rounded font-bold">
            ${price}
          </div>
        <div className="grid items-center gap-4 w-full lg:w-[140px]">
          <div className="grid items-center leading-none">
            <h2 className="mt-2 font-medium text-lg text-slate-900 lg:text-sm">
              {title}
            </h2>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>
          <div className="flex items-center justify-around w-full">
            <button
              type="button"
              onClick={decrementItemQty}
              className="bg-theme-cart rounded w-7 h-7 flex items-center justify-center active:scale-90"
            >
              <MinusIcon className="w-5 h-5 text-white stroke-[2]" />
            </button>
            <div className="mx-4 bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-7 flex items-center justify-center">
              {cartQuantity}
            </div>
            <button
              type="button"
              onClick={incrementItemQty}
              className="bg-theme-cart rounded w-7 h-7 flex items-center justify-center active:scale-90"
            >
              <PlusIcon className="w-5 h-5 text-white stroke-[2]" />
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className="ml-3 grid items-center gap-4 w-full">
        <div className="grid items-center justify-center">
          <h2 className="text-lg lg:text-base text-slate-900 font-medium">
            ${price * cartQuantity}
          </h2>
        </div>
        <div className="grid items-center justify-center">
          <button
            type="button"
            className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
            onClick={removeItem}
          >
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
