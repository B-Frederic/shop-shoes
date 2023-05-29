// Icons
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
// Picture
import logo from "../../assets/img/logo.png";

const Header = () => {

  return (
    <div className="absolute top-7 left-0 right-0 opacity-100 z-50">
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img src={logo} alt="logo/img" className="w-20 h-auto" />
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <MagnifyingGlassIcon className="icon-style w-8 h-8" />
          </li>
          <li className="grid items-center">
            <HeartIcon className="icon-style w-8 h-8" />
          </li>
          <li className="grid items-center">
            <button
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <ShoppingBagIcon className="icon-style w-8 h-8" />
              <div className="absolute top-5 left-1 shadow w-6 h-6 text-[1rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer bg-slate-100 text-slate-900 shadow-slate-100">
                0
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
