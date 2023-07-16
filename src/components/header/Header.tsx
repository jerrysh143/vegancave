import React from "react";
import Logo from "../../images/logo_vegan_cave.png";
import CartIcon from "../../images/Icons/cartIcon.tsx";
import SearchIcon from "../../images/Icons/searchIcon.tsx";
import AddUserIcon from "../../images/Icons/addUserIcon.tsx";

export default function Header() {
  
  return (
    <div>
      <div className="py-20px px-15px  w-full max-w-full 1600:w-[1530px] mx-auto">
        <div className="flex flex-wrap -mx-15px items-center justify-between">
          <div className="w-[150px] lg:w-[300px] xl:w-2/12 px-15px">
            <a href="#!">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="w-[calc[100%_-_150px]] md:w-[calc[100%_-_300px]] xl:w-10/12 px-15px flex flex-wrap justify-end xl:justify-end items-center">
            <nav className="hidden flex-wrap items-center lg:flex h-full justify-start lg:mr-40px 2xl:mr-90px">
              <div className="lg:text-[16px] 2xl:text-18 font-semibold lg:mr-[10px] 2xl:mr-[13px] lg:pr-0 2xl:pr-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
                Home
              </div>
              <div className="lg:text-[16px] 2xl:text-18 font-semibold lg:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
                Menu
              </div>
              <div className="lg:text-[16px] 2xl:text-18 font-semibold lg:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
                Nutritionist
              </div>
              <div className="lg:text-[16px] 2xl:text-18 font-semibold lg:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
                Videos
              </div>
              <div className="lg:text-[16px] 2xl:text-18 font-semibold lg:mx-[10px] 2xl:mx-[13px] lg:px-0 2xl:px-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
                About Us
              </div>
              <div className="lg:text-[16px] 2xl:text-18 font-semibold lg:ml-[10px] 2xl:ml-[13px] lg:pl-0 2xl:pl-[10.5px] hover:text-primaryColor active:text-primaryColor cursor-pointer duration-300 hover:duration-300">
                Contact Us
              </div>
            </nav>
            <div className="">
              <CartIcon className="w-20px md:w-auto" />
            </div>
            <div className="w-auto lg:w-auto 2xl:w-[393px] h-[65px] ml-[27px] relative flex items-center">
              <SearchIcon className="w-20px md:static xl:absolute top-[19px] left-20px cursor-pointer" />
              <input
                type="search"
                placeholder="Search"
                className="text-black hidden xl:block placeholder:text-black w-full h-full shadow-[0_0_17px_rgba(0,0,0,0.15)] rounded-10px focus:outline-0 pl-[72px] pr-[75px] text-18 font-semibold"
              />
              <AddUserIcon className="hidden xl:block absolute top-[19px] right-20px" />
            </div>
            <div className="ml-10px mr-0px md:mx-30px block lg:hidden">
              Menu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
