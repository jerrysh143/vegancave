import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../Pages/typesRoute";

interface MenuProps {
  className?: string;
}

const MobileMenu = (props: MenuProps) => {
  return (
    <div className={props.className}>
      <ul
        className="flex flex-col items-center w-full h-[calc(100dvh-30px)] rounded-xl pt-100px bg-white shadow-[
          0_0px_6px_2px_rgb(43_182_114/0.3)] border-[1px] border-primaryColor/70"
      >
        <li className="hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-26 leading-[34px]">
          <Link
            className="w-full h-full block py-10px px-30px text-left"
            to={ROUTE_NAME.HOME}
          >
            Home
          </Link>
        </li>
        <li className="hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-26 leading-[34px]">
          <Link
            className="w-full h-full block py-10px px-30px text-left"
            to={ROUTE_NAME.STORE}
          >
            Menu
          </Link>
        </li>
        <li className="hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-26 leading-[34px]">
          <Link
            className="w-full h-full block py-10px px-30px text-left"
            to={ROUTE_NAME.NUTRITIONIST}
          >
            Nutritionist
          </Link>
        </li>
        <li className="hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-26 leading-[34px]">
          <Link
            className="w-full h-full block py-10px px-30px text-left"
            to={ROUTE_NAME.ABOUT}
          >
            About Us
          </Link>
        </li>
        <li className="hover:bg-primaryColor/30 hover:text-primaryColor font-bold w-full text-center text-26 leading-[34px]">
          <Link
            className="w-full h-full block py-10px px-30px text-left"
            to={ROUTE_NAME.CONTACT}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
