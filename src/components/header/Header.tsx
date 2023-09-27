import React, { useEffect, useState } from "react";
import Logo from "../../images/logo_vegan_cave.png";
import SearchIcon from "../../images/Icons/searchIcon";
import MobileMenu from "./MobileMenu";
import BurgerMenu from "../../images/Icons/burgerMenu";
import CloseIcon from "../../images/Icons/closeIcon";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../Pages/typesRoute";
import UserIcon from "../../images/Icons/userIcon";
import CartSidebar from "../CartSidebar/cartSidebar";
import CartIcon from "../../images/Icons/cartIcon.svg";
import Cart from "../../images/Icons/cartIcon";
import Close from "../../images/Icons/close.svg";

const Header = () => {
  const [Menu, setMenu] = useState(false);
  const [Search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const handleClick = () => {
    // Add or remove a class to the body element
    document.body.classList.toggle("active");
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //  componentDidMount() {
  //   document.body.classList.add('active');
  // }

  // componentWillUnmount() {
  //   document.body.classList.remove('active');
  // }

  return (
    <div className="z-1 px-15px slide-in w-full py-10px bg-white/80 duration-300 transition-all group">
      <div className="w-full max-w-full 1600:w-[1530px] mx-auto">
        <div className="flex flex-wrap justify-between items-center z-[999]">
          <div className="w-2/12 md:w-5/12 p-0 md:pr-15px flex justify-start">
            <div
              className={`block cursor-pointer ${
                Menu ? "opened absolute top-30px left-20px z-[999]" : ""
              }`}
              onClick={() => {
                setSearch(false);
                setMenu(!Menu);
                handleClick();
              }}
            >
              <BurgerMenu className="" />
            </div>
            <div
              onClick={() => {
                setMenu((prevState) => !prevState);
                handleClick();
              }}
            >
              <MobileMenu
                className={`flex fixed top-0 m-15px w-[calc(100%-30px)] 500:w-[290px] md:w-[350px] ${
                  Menu
                    ? "z-[99] left-0 translate-x-0 opacity-100 duration-300 transition-all"
                    : "-z-1 -left-[600px] opacity-0 duration-300 transition-all"
                }`}
              />
            </div>
          </div>
          <div className="w-4/12 md:w-2/12 px-15px">
            <div className="w-full max-w-[150px] xl:max-w-[270px] p-0 md:pr-15px">
              <Link to={ROUTE_NAME.HOME}>
                <img
                  className={`w-full ${
                    scrollPosition > 50
                      ? "h-50px object-contain mx-auto"
                      : "h-45px md:h-70px object-contain"
                  }`}
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="w-6/12 md:w-5/12 z-1 px-15px flex items-center justify-end gap-15px">
            <div className="">
              <div className="">
                <div className="rounded-full border-2 border-black">
                  <Link className="cursor-pointer" to={ROUTE_NAME.GETAQUOTE}>
                    <UserIcon class="border-2 rounded-full" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-32px md:px-15px px-0">
              <a
                className="cursor-pointer"
                onClick={() => {
                  setCart(!cart);
                  setSearch(false);
                  setMenu(false);
                  handleClick();
                }}
              >
                <>
                  <Cart className="w-25px" />
                </>
              </a>
              <div>
                <CartSidebar className={` ${cart ? "" : "hidden"} `} />
              </div>
            </div>
            <div
              className={`fixed top-0 m-15px rounded-15px bg-white w-[calc(100vw_-_30px)] md:w-5/12 h-[calc(100dvh_-_30px)] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] ${
                Search
                  ? "z-1 block right-0 opacity-100 duration-150 transition-all"
                  : "-z-1 hidden opacity-0 duration-150 transition-all"
              } `}
            >
              <div className="flex items-center justify-center px-15px py-50px">
                <input
                  type="search"
                  placeholder="Search for..."
                  className="px-15px w-full h-[70px] text-26 border-b-2 border-black/30 focus:border-b-2 focus:border-black/30 focus:outline-0"
                />
              </div>
            </div>
            <div
              className="z-[999]"
              onClick={() => {
                setSearch(!Search);
                setMenu(false);
                handleClick();
              }}
            >
              {Search ? (
                <CloseIcon className="w-30px block fixed top-30px right-30px cursor-pointer" />
              ) : (
                <SearchIcon className="w-30px md:cursor-pointer xl:cursor-auto cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
