import React, { useState } from "react";
import Logo from "../../images/logo_vegan_cave.png";
import CartIcon from "../../images/Icons/cartIcon";
import SearchIcon from "../../images/Icons/searchIcon";
import AddUserIcon from "../../images/Icons/addUserIcon";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [Menu, setMenu] = useState(false);
  const [Search, setSearch] = useState(false);
  return (
    <div className="z-10 relative">
      <div className="py-20px px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
        <div className="flex flex-wrap -mx-15px items-center justify-between">
          <div className="w-full max-w-[150px] xl:max-w-[270px] px-15px">
            <a href="#!">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="relative w-full max-w-[calc(100%_-_150px)] xl:max-w-[calc(100%_-_270px)] px-15px flex flex-wrap justify-end items-center">
            <DesktopMenu className="desktop lg:max-w-[calc(100%_-_320px)] xl:max-w-[calc(100%_-_452px)] hidden flex-col md:flex-row flex-wrap items-center lg:flex h-fit md:h-full justify-start mr-15px lg:mr-40px 2xl:mr-0px" />
            <MobileMenu className={`flex absolute top-full right-0 translate-y-20px lg:hidden ${Menu ? " translate-x-0 opacity-100 duration-150 transition-all" : "translate-x-full opacity-0 duration-150 transition-all"}`} />
            <div className="max-w-32px px-15px md:px-0">
              <CartIcon className="w-20px md:w-auto" />
            </div>
            <div className="w-auto lg:max-w-fit 2xl:max-w-[393px] h-[65px] md:ml-[15px] lg:ml-[27px] relative flex items-center">
              <div
                className="lg:static xl:absolute top-[19px] left-20px"
                onClick={() => setSearch(!Search)}
              >
                <SearchIcon className="w-20px lg:cursor-pointer xl:cursor-auto" />
              </div>
              <input
                type="search"
                placeholder="Search"
                className={`text-black placeholder:text-black h-full shadow-[0_0_17px_rgba(0,0,0,0.15)] bg-white/30 rounded-10px focus:outline-0 pl-[30px] pr-[30px] xl:pl-[72px] xl:pr-[75px] text-18 font-semibold xl:block ${
                  Search
                    ? "block w-[290px] md:w-[393px] absolute xl:static -bottom-[90px] -right- md:right-0"
                    : "hidden"
                }`}
              />
              <AddUserIcon className="hidden xl:block absolute top-[19px] right-20px" />
            </div>
            <div
              className="ml-10px mr-0px md:mx-30px block lg:hidden cursor-pointer z-50"
              onClick={() => setMenu(!Menu)}
            >
              Menu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
