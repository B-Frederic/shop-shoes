import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

const CartCount = ({ handleCartToggle, totalQty, handleResetCart }) => {
  return (
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
    <div className='flex items-center gap-3'>
        <div className='grid items-center cursor-pointer' onClick={handleCartToggle}>
            <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
        </div>
        <div className='grid items-center'>
            <h2 className='text-base font-medium text-slate-900'>Votre panier <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>({totalQty} { (totalQty === 0 || totalQty === 1) ? "Item" : "Items"})</span></h2>
        </div>
    </div>
    <div className="flex items-center justify-center my-2">
        <button className="py-1 px-3 bg-red-500 font-bold text-white rounded" onClick={handleResetCart}>Vider</button>
    </div>
  </div>
  );
};

export default CartCount;


