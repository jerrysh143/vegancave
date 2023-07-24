import React from "react";

interface MenuProps {
  className?: string;
}

const MobileMenu = (props: MenuProps) => {
  return (
    <div className={props.className}>
        <ul className="flex flex-col items-center w-screen bg-white shadow-md border-[1px] border-primaryColor/70">
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">Home</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">About</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">Nutritionist</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">Videos</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">About Us</li>
          <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">Contact Us</li>
        </ul>
    </div>
  );
};

export default MobileMenu;
