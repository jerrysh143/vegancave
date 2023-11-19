import React, { useEffect, useState } from "react";
import Logo from "../../images/logo_vegan_cave.png";
import CartIcon from "../../images/Icons/cartIcon";
import SearchIcon from "../../images/Icons/searchIcon";
// import AddUserIcon from "../../images/Icons/addUserIcon";
// import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import BurgerMenu from "../../images/Icons/burgerMenu";
import CloseIcon from "../../images/Icons/closeIcon";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../../Pages/typesRoute";
import UserIcon from "../../images/Icons/userIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Types/otherTypes";
import { Product } from "../ProductsWrap/ProductsWrap";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/cartSlice";

const Header = () => {
  const [Menu, setMenu] = useState(false);
  const [Search, setSearch] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    // Add or remove a class to the body element
    document.body.classList.toggle("active");
  };

  const { cart, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

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

  const increaseQuantityHandler = (product: Product, quantity: number) => {
    dispatch(increaseQuantity({ product, quantity }));
  };
  const decreaseQuantityHandler = (product: Product, quantity: number) => {
    dispatch(decreaseQuantity({ product, quantity }));
  };
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

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
                  <Link className="cursor-pointer" to={ROUTE_NAME.PROFILE}>
                    <UserIcon class="border-2 rounded-full" />
                  </Link>
                </div>
              </div>
            </div>
            {!Search && (
              <div
                className="max-w-32px md:px-15px px-0 z-[20]"
                onClick={() => {
                  setCartModal(!cartModal);
                  setMenu(false);
                  handleClick();
                }}
              >
                <div className="relative">
                  {cartModal ? (
                    <CloseIcon className="w-30px block fixed top-30px right-30px cursor-pointer" />
                  ) : (
                    <CartIcon className="w-25px cursor-pointer" />
                  )}
                  {!cartModal && totalQuantity > 0 && (
                    <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white w-6 h-6 text-center flex items-center justify-center -mt-2 -mr-2">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </div>
            )}
            <div
              className={`fixed top-0 m-15px rounded-15px bg-white w-[calc(100vw_-_30px)] md:w-5/12 h-[calc(100dvh_-_30px)] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] ${
                cartModal
                  ? "z-1 block right-0 opacity-100 duration-150 transition-all"
                  : "-z-1 hidden opacity-0 duration-150 transition-all"
              } `}
            >
              <div className="w-full p-4">
                <div className="flex justify-between">
                  <div className="w-full max-w-screen-xl">
                    <div className="w-full flex flex-col ">
                      <div className="overflow-x-auto">
                        <div className="p-4">
                          {cart.map(
                            (
                              item: { product: Product; quantity: number },
                              index
                            ) => (
                              <div
                                key={index}
                                className="flex flex-col  bg-white p-4 shadow-lg rounded-lg mb-4"
                              >
                                <div className="w-full ">
                                  <img
                                    src={item.product.image}
                                    alt="Product Image"
                                    className="w-full h-auto"
                                  />
                                </div>
                                <div className="w-full  p-4">
                                  <h2 className="text-2xl font-bold mb-4">
                                    {item.product.title}
                                  </h2>
                                  <div className="flex items-center mb-4">
                                    <p className="mr-4">Quantity:</p>
                                    <button
                                      className="w-8 h-8 mr-2 bg-gray-200 rounded-full"
                                      onClick={() =>
                                        decreaseQuantityHandler(item.product, 1)
                                      }
                                    >
                                      -
                                    </button>
                                    <span className="px-2">
                                      {item.quantity}
                                    </span>
                                    <button
                                      className="w-8 h-8 ml-2 bg-gray-200 rounded-full"
                                      onClick={() =>
                                        increaseQuantityHandler(item.product, 1)
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-full p-4 mt-4 bg-white shadow-lg rounded-lg">
                          <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold mb-2">
                              Total Cart Price: ${totalPrice}
                            </p>
                            <button
                              className={`bg-red-500 text-white py-2 px-4 rounded-md mb-2  w-auto ${
                                totalQuantity > 0
                                  ? "hover:bg-red-700"
                                  : "bg-gray-500 cursor-text"
                              }`}
                              onClick={clearCartHandler}
                            >
                              Clear Cart
                            </button>
                          </div>
                          <button
                            className={`w-full bg-green-300 text-black font-bold py-2 px-4 rounded-md ${
                              totalPrice > 0
                                ? "hover:bg-green-500"
                                : "cursor-text bg-gray-400"
                            }`}
                            onClick={() => {
                              if (totalPrice > 0) {
                                setCartModal(!cartModal);
                                handleClick();
                                navigate(ROUTE_NAME.CHECKOUT);
                              }
                              if (!isLoggedIn) {
                                navigate(ROUTE_NAME.LOGIN);
                              }
                            }}
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            {!cartModal && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
