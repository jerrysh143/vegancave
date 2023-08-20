import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../pages/typesRoute";

interface MenuProps {
  className?: string;
}

const MobileMenu = (props: MenuProps) => {
  return (
    <div className={props.className}>
      <ul className="flex flex-col items-center w-screen bg-white shadow-md border-[1px] border-primaryColor/70">
        <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">
          <Link to={ROUTE_NAME.HOME}>Home</Link>
        </li>
        <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">
          <Link to={ROUTE_NAME.HOME}>Menu</Link>
        </li>
        <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">
          <Link to={ROUTE_NAME.NUTRITIONIST}>Nutritionist</Link>
        </li>
        <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">
          <Link to={ROUTE_NAME.ABOUT}>About Us</Link>
        </li>
        <li className="pt-10px pb-10px hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-[25px]">
          <Link to={ROUTE_NAME.CONTACT}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
