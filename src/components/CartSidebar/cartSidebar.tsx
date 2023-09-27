import React from "react";
import CartIcon from "../../images/Icons/cartIcon.svg";
import Close from "../../images/Icons/close.svg";
import SidebarProduct from "../SidebarProduct/sideBarProduct";

interface CartProps {
  Title?: string;
  className?: string;
}

const CartSidebar = (pros: CartProps) => {
  return (
    <div
      className={`fixed top-0 right-0 flex justify-end z-6 ${pros.className}`}
    >
      <div className="h-screen overflow-scroll bg-white shadow-[-66px_1px_70px_0px_rgba(0,0,0,0.4)]">
        <div className="flex flex-wrap justify-between border-b-[1px] border-solid border-black py-15px">
          <div className="w-6/12 pl-15px flex flex-wrap items-center gap-10px">
            <img className="w-20px h-20px" src={CartIcon} alt="" />
            <div className="uppercase text-18">Cart</div>
          </div>
          <div className="w-6/12 flex items-center justify-end pr-15px">
            <img className="w-20px h-20px" src={Close} alt="" />
          </div>
        </div>
        <div className="w-full 567:w-[450px] h-full mb-[155px] py-15px">
          <SidebarProduct />
          <SidebarProduct />
          <SidebarProduct />
          <SidebarProduct />
          <SidebarProduct />
          <div className="absolute bottom-0 w-full bg-white">
            <div className="w-full overflow-hidden flex items-center flex-wrap px-15px justify-between py-10px border-y-[1px] border-solid border-black/30">
              <div className="text-20 567:text-36 font-bold">Total</div>
              <div className="text-16 567:text-32 font-bold">$150.00</div>
            </div>
            <div className="flex justify-between px-15px py-10px">
              <button className="py-10px px-20px text-[12px] 567:text-18 bg-[#ffc269] rounded-full text-black font-bold">Continue Shopping</button>
              <button className="py-10px px-20px text-[12px] 567:text-18 bg-primaryColor rounded-full text-black/70 font-bold">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
