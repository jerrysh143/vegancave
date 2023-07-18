import React from "react";

interface MenuProps {
  className?: string;
}

const DesktopMenu = (props: MenuProps) => {
  return (
    <div className={props.className}>
      <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mr-[10px] 2xl:mr-[13px] lg:pr-0 2xl:pr-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
        Home
      </div>
      <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
        Menu
      </div>
      <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
        Nutritionist
      </div>
      <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
        Videos
      </div>
      <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-[1px] sm:border-none md:my-0 md:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
        About Us
      </div>
      <div className="lg:text-[16px] 2xl:text-18 font-semibold py-2 w-full md:w-auto flex justify-center border-b-0 sm:border-none md:my-0 md:ml-[10px] 2xl:ml-[13px] lg:pl-0 2xl:pl-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
        Contact Us
      </div>
    </div>
  );
};

export default DesktopMenu;
