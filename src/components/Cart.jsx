// React
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQty, setClearCartItems, setCloseCart, setGetTotals } from "../redux/CartSlice";
// Cart components
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQty);

  useEffect(() => {
    dispatch(setGetTotals())
  },[cartItems, dispatch])

  const handleCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const handleResetCart = () => {
    dispatch(setClearCartItems())
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-full opacity-100 z-[250] ${
        cartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`blur-effect-theme h-full max-w-xl w-full absolute right-0 ${
            cartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
      >
        <CartCount totalQty={totalQty} handleCartToggle={handleCartToggle} handleResetCart={handleResetCart} />
        {cartItems?.length === 0 ? (
          <CartEmpty handleCartToggle={handleCartToggle} />
        ) : (
          <div>
            <div className="flex items-center justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold uppercase">Sous-total</p>
                <p className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                {totalAmount}€
                </p>
              </div>
              <div className="grid items-center gap-2">
                <button
                  type="button"
                  className="mt-4 mb-2 py-1 button-theme bg-theme-cart text-white"
                >
                  Procéder au paiement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
