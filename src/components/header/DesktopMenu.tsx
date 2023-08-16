import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../Pages/typesRoute";

interface MenuProps {
  className?: string;
}

const DesktopMenu = (props: MenuProps) => {
  return (
    <div className={props.className}>
      <Link to={ROUTE_NAME.HOME}>
        <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mr-[10px] 2xl:mr-[13px] lg:pr-0 2xl:pr-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
          Home
        </div>
      </Link>
      <Link to={ROUTE_NAME.HOME}>
        <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
          Menu
        </div>
      </Link>
      <Link to={ROUTE_NAME.NUTRITIONIST}>
        <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
          Nutritionist
        </div>
      </Link>
      <Link to={ROUTE_NAME.STORE}>
        <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
          Store
        </div>
      </Link>
      <Link to={ROUTE_NAME.ABOUT}>
        <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
          About Us
        </div>
      </Link>
      <Link to={ROUTE_NAME.CONTACT}>
        <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-0 sm:border-none md:my-0 md:ml-[10px] 2xl:ml-[13px] lg:pl-0 2xl:pl-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
          Contact Us
        </div>
      </Link>
    </div>
  );
};

export default DesktopMenu;
