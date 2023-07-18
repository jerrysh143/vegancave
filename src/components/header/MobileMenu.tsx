import React from "react";

interface MenuProps {
  className?: string;
}

const MobileMenu = (props: MenuProps) => {
  return (
    <div className={props.className}>
        <ul className="flex flex-col items-center w-screen sm:w-[200px] bg-white shadow-md border-[1px] border-primaryColor/70">
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center border-[1px] border-dashed">Home</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center border-[1px] border-dashed">About</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center border-[1px] border-dashed">Nutritionist</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center border-[1px] border-dashed">Videos</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center border-[1px] border-dashed">About Us</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center border-[1px] border-dashed">Contact Us</li>
        </ul>
    </div>
  );
};

export default MobileMenu;
