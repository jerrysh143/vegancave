// import React, { useState } from "react";
// import Logo from "../../images/logo_vegan_cave.png";
// import CartIcon from "../../images/Icons/cartIcon";
// import SearchIcon from "../../images/Icons/searchIcon";
// import AddUserIcon from "../../images/Icons/addUserIcon";
// import DesktopMenu from "./DesktopMenu";
// import MobileMenu from "./MobileMenu";
// import BurgerMenu from "../../images/Icons/burgerMenu";
// import CloseIcon from "../../images/Icons/closeIcon";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
// import { ROUTE_NAME } from "../../Pages/typesRoute";

// export default function Header() {
//   const [Menu, setMenu] = useState(false);
//   const [Search, setSearch] = useState(false);
//   // const [selectAria, setSelectAria] = useState(false);
//   const handleClick = () => {

//     // Add or remove a class to the body element
//     document.body.classList.toggle('active');
//   };
//   return (
//     <div className="z-10 relative">
//       <div className="py-20px px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
//         <div className="flex flex-wrap -mx-15px items-center justify-between">
//           <div className="w-full max-w-[150px] xl:max-w-[270px] px-15px">
//             <a href="#!">
//               <img src={Logo} alt="" />
//             </a>
//           </div>
//           <div className="relative w-full max-w-[calc(100%_-_150px)] xl:max-w-[calc(100%_-_270px)] px-15px flex flex-wrap justify-end items-center">
//             <DesktopMenu className="desktop lg:max-w-[calc(100%_-_320px)] xl:max-w-[calc(100%_-_452px)] hidden flex-col md:flex-row flex-wrap items-center lg:flex h-fit md:h-full justify-start mr-15px lg:mr-40px 2xl:mr-0px" />
//             <MobileMenu
//               className={`flex fixed top-0 right-0 m-15px w-[calc(100%-30px)] 500:w-[calc(100%-50%)] md:w-[calc(100%-60%)]  lg:hidden ${
//                 Menu
//                   ? " translate-x-0 opacity-100 duration-150 transition-all"
//                   : "translate-x-full opacity-0 duration-150 transition-all"
//               }`}
//             />
//             <div className="max-w-32px px-15px md:px-0">
//             <Link to={ROUTE_NAME.STORE}><CartIcon className="w-30px md:w-auto" /></Link>
//             </div>
//             <div className="w-auto max-w-fit xl:max-w-[300px] 2xl:max-w-[393px] h-[65px] md:ml-[15px] lg:ml-[27px] relative flex items-center">
//
//               <input
//                 type="search"
//                 placeholder="Search"
//                 className={`text-black lg:translate-x-0 md:w-full lg:w-[293px] lg:opacity-100 lg:static md:h-[60px] placeholder:text-black shadow-[0_0_17px_rgba(0,0,0,0.15)] bg-white rounded-10px focus:outline-0 pl-[30px] pr-[30px] lg:pl-[72px] lg:pr-[75px] text-18 font-semibold xl:block ${
//                   Search
//                     ? "translate-x-0 opacity-100 duration-300 transition-all rounded-0 h-40px shadow-[0px_3px_4px_0px_rgba(0,0,0,0.2)] w-screen absolute xl:static -bottom-[60px] -right-60px"
//                     : "absolute -translate-x-70px opacity-0 w-0 h-0 transition-all"
//                 }`}
//               />
//               <AddUserIcon className="hidden lg:block absolute top-[19px] right-20px" />
//             </div>
//             <div
//               className={`ml-0 mr-0px md:ml-10px block lg:hidden cursor-pointer z-50 ${
//                 Menu ? "opened" : ""
//               }`}
//               onClick={() => {
//                 setSearch(false);
//                 setMenu(!Menu);
//                 handleClick()
//               }}
//             >
//               <BurgerMenu />
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Logo from "../../images/logo_vegan_cave.png";
import CartIcon from "../../images/Icons/cartIcon";
import SearchIcon from "../../images/Icons/searchIcon";
// import AddUserIcon from "../../images/Icons/addUserIcon";
// import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import BurgerMenu from "../../images/Icons/burgerMenu";
import CloseIcon from "../../images/Icons/closeIcon";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../Pages/typesRoute";
import AddUserIcon from "../../images/Icons/addUserIcon";
import UserIcon from "../../images/Icons/userIcon";

const Header = () => {
  const [Menu, setMenu] = useState(false);
  const [Search, setSearch] = useState(false);
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

  return (
    <div
      className={`z-[999] px-15px ${
        scrollPosition > 50
          ? "fixed slide-in w-full py-10px shadow-sm bg-white/80 duration-300 transition-all"
          : "bg-white py-20px duration-300 transition-all"
      }`}
    >
      <div className="w-full max-w-full 1600:w-[1530px] mx-auto">
        <div className="flex flex-wrap -ml-15px -mr-15px justify-between items-center">
          <div className="w-2/12 md:w-5/12 px-15px flex justify-start">
            <div
              className={`block cursor-pointer z-[999] ${
                Menu ? "opened absolute top-30px left-20px" : ""
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
                className={`z-[99] flex fixed top-0 left-0 m-15px w-[calc(100%-30px)] 500:w-[calc(100%-50%)] md:w-[calc(100%-80%)] ${
                  Menu
                    ? "translate-x-0 opacity-100 duration-150 transition-all"
                    : "-translate-x-full opacity-0 duration-150 transition-all"
                }`}
              />
            </div>
          </div>
          <div className="w-6/12 md:w-2/12 px-15px">
            <div className="w-full max-w-[150px] xl:max-w-[270px] px-15px">
              <Link to={ROUTE_NAME.HOME}>
                <img
                  className={`${scrollPosition > 50 ? "h-70px mx-auto" : ""}`}
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="w-4/12 md:w-5/12 px-15px flex items-center justify-end gap-15px">
            <div className="">
              <div className="">
                <div className="rounded-full border-2 border-black">
                  <Link to={ROUTE_NAME.LOGIN}>
                  <UserIcon class="border-2 rounded-full" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-32px md:px-15px px-0">
              <Link to={ROUTE_NAME.STORE}>
                <CartIcon className="w-25px" />
              </Link>
            </div>
            <div className="z-[99] fixed top-0 right-0 m-15px rounded-15px bg-white">
            <div className="flex items-center justify-center px-15px py-50px">
              <input
                type="search"
                placeholder="Search for..."
                className="w-full"
              />
            </div>
            </div>
            <div
              className=""
              onClick={() => {
                setSearch(!Search);
                setMenu(false);
                handleClick();
              }}
            >
              {Search ? (
                <CloseIcon className="w-30px block z-[9999]" />
              ) : (
                <SearchIcon className="w-30px md:cursor-pointer xl:cursor-auto" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
