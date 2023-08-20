import React, { useState } from "react";
import Logo from "../../images/logo_vegan_cave.png";
import CartIcon from "../../images/Icons/cartIcon";
import SearchIcon from "../../images/Icons/searchIcon";
import AddUserIcon from "../../images/Icons/addUserIcon";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import BurgerMenu from "../../images/Icons/burgerMenu";
import CloseIcon from "../../images/Icons/closeIcon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../pages/typesRoute";

export default function Header() {
  const [Menu, setMenu] = useState(false);
  const [Search, setSearch] = useState(false);
  // const [selectAria, setSelectAria] = useState(false);

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
            <MobileMenu
              className={`flex absolute top-full left-auto right-auto w-[calc(100vw_-_30%)] h-auto rounded-20px lg:hidden ${
                Menu
                  ? " translate-x-0 opacity-100 duration-150 transition-all"
                  : "translate-x-full opacity-0 duration-150 transition-all"
              }`}
            />
            <div className="max-w-32px px-15px md:px-0">
              <Link to={ROUTE_NAME.STORE}>
                <CartIcon className="w-30px md:w-auto" />
              </Link>
            </div>
            <div className="w-auto max-w-fit xl:max-w-[300px] 2xl:max-w-[393px] h-[65px] md:ml-[15px] lg:ml-[27px] relative flex items-center">
              <div
                className="md:static z-10 lg:absolute top-[19px] left-20px"
                onClick={() => {
                  setSearch(!Search);
                  setMenu(false);
                }}
              >
                {Search ? (
                  <CloseIcon className="w-30px block lg:hidden" />
                ) : (
                  <SearchIcon className="w-30px md:cursor-pointer xl:cursor-auto" />
                )}
              </div>
              <input
                type="search"
                placeholder="Search"
                className={`text-black lg:translate-x-0 md:w-full lg:w-[293px] lg:opacity-100 lg:static md:h-[60px] placeholder:text-black shadow-[0_0_17px_rgba(0,0,0,0.15)] bg-white rounded-10px focus:outline-0 pl-[30px] pr-[30px] lg:pl-[72px] lg:pr-[75px] text-18 font-semibold xl:block ${
                  Search
                    ? "translate-x-0 opacity-100 duration-300 transition-all rounded-0 h-40px shadow-[0px_3px_4px_0px_rgba(0,0,0,0.2)] w-screen absolute xl:static -bottom-[60px] -right-60px"
                    : "absolute -translate-x-70px opacity-0 w-0 h-0 transition-all"
                }`}
              />
              <AddUserIcon className="hidden lg:block absolute top-[19px] right-20px" />
            </div>
            <div
              className={`ml-0 mr-0px md:ml-10px block lg:hidden cursor-pointer z-50 ${
                Menu ? "opened" : ""
              }`}
              onClick={() => {
                setSearch(false);
                setMenu(!Menu);
              }}
            >
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
