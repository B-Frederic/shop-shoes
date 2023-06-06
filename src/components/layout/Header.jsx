// React
import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQty, setOpenCart } from "../../redux/CartSlice";
// Icons
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
// Picture
import logo from "../../assets/img/logo.png";

const Header = () => {

    const dispatch = useDispatch();
    const [scrollbar, setScrollbar] = useState(false);
    const totalQty = useSelector(selectTotalQty);


    const handleCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }));
    }

    const navScroll = () => {
        if(window.scrollY > 100) {
            setScrollbar(true);
        } else {
            setScrollbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navScroll);

        return () => {
            window.removeEventListener("scroll", navScroll);
        }
    }, [])

  return (
    <div className={`fixed duration-1000 top-0 left-0 right-0 h-[10vh] flex items-center justify-center opacity-100 z-[200] ${scrollbar && "blur-effect-theme"}`}>
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img src={logo} alt="logo/img" className={`w-20 h-auto ${scrollbar && "filter brightness-0"}`} />
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <MagnifyingGlassIcon className={`icon-style w-8 h-8 ${scrollbar && "text-slate-900 transition-all duration-300"}`} />
          </li>
          <li className="grid items-center">
            <HeartIcon className={`icon-style w-8 h-8 ${scrollbar && "text-slate-900 transition-all duration-300"}`} />
          </li>
          <li className="grid items-center">
            <button
              type="button"
              onClick={handleCartToggle}
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagIcon className={`icon-style w-8 h-8 ${scrollbar && "text-slate-900 transition-all duration-300"}`} />
              <div className={`select-none absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${scrollbar ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>
                {totalQty}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
