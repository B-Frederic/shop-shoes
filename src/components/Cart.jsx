// React
import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Stripe
import StripeCheckout from "react-stripe-checkout";
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQty, setClearCartItems, setCloseCart, setGetTotals } from "../redux/CartSlice";
// Cart components
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { set } from "lodash";

const Cart = () => {

  const dispatch = useDispatch();
  const cartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQty = useSelector(selectTotalQty);
  const [totalAmt, setTotalAmt] = useState();


  useEffect(() => {
 
    let price = 0;
    cartItems.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    
    setTotalAmt(price);

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

    if(window.confirm(`Voulez-vous vider l'ensemble de votre panier ?`)){

      dispatch(setClearCartItems())
    }
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
            <div className="flex items-center justify-start flex-col gap-y-5 lg:gap-y-4 overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold uppercase">Total</p>
                <p className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                {totalAmount}€
                </p>
              </div>
              <div className="grid items-center gap-2">
                <div className={`flex flex-col items-center justify-center mt-1 mb-2 py-1 bg-theme-cart text-white ${
                  cartState
                    ? "flex"
                    : "hidden"
                }`}>
                  <StripeCheckout
                      className="my-2"
                      norequired
                      stripeKey="pk_test_51N54JHEZFgsxN1Q4dddinn8ng7uUcciSwxQI6ZwNNsLMrbfBK2FF3VFjqrIGVH4NW1MS9ih21fVgKN9b0FiXWcrh00JsSPVfVw"
                      name="ShopShoes"
                      amount={totalAmount * 100}
                      label="Payer"
                      currency="EUR"
                      description={`Montant total à payer ${totalAmount} €`}
                      // Create fake token Stripe
                      token={() => ""}
                      email={"unmailpourtester@test.fr"}
                  />
                  <p className="text-green-600">4242 4242 4242 4242 - 12/34 - 123</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
