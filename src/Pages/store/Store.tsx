import React from "react";
import Button from "../../components/Buttons/buttonHome";
import BannerImage from "../../images/storeImageBanner.jpg";
import ProductsWrap from "../../components/ProductsWrap/ProductsWrap";
import ButtonArrow from "../../components/Buttons/buttonArrow";

const Store = () => {
  return (
    <>
      <div className="py-30px md:py-70px">
        <div className="w-full max-w-full 1600:w-[1530px] mx-auto px-15px">
          <div className="flex flex-wrap flex-col-reverse md:flex-row items-center -mx-15px clear-both">
            <div className="w-full md:w-6/12 px-15px">
              <h1 className="text-[50px] leading-[50px] lg:text-[90px] lg:leading-[90px] xl:text-[120px] xl:leading-[140px] font-bold pb-20px">
                Want the best deals?
              </h1>
              <p className="text-20 md:text-26 pb-20px">
                Tavern is simply the better choice when it comes to freshly
                made, convenient and affordable food.
              </p>
              <div className="">
                <Button
                  Title="Scroll Down"
                  className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[200px] h-[47px] sm:h-[66px] xl:h-[76px] text-16 md:text-32 sm:text-18 xl:text-20 leading-normal font-bold rounded-15px"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-15px pb-30px md:pb-0px">
              <img
                className="mx-auto w-full h-[350px] object-cover rounded-none md:rounded-[24px] shadow-lg"
                src={BannerImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-70px">
        <div className="w-full max-w-full 1600:w-[1530px] mx-auto px-15px">
          <div className="flex flex-wrap flex-col items-center -mx-15px clear-both pb-30px md:pb-50px lg:pb-100px">
            <div className="w-full px-15px">
              <h2 className="text-42 leading-42 font-bold pb-[56px]">
                Find the delicious foods for you
              </h2>
              <ul className="flex flex-nowrap pb-20px md:flex-wrap justify-start md:justify-center gap-10px lg:gap-x-25px md:gap-y-25px overflow-x-auto overflow-y-hidden">
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Breakfast
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Lunch
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Dinner
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Bar & Launge
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Smoothie
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Pizzas
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    South Indian
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Italian
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Mexican
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Thai
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    href="#!"
                  >
                    Continental
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center -mx-15px clear-both">
            <ProductsWrap />
            <div className="w-full flex justify-center pt-20px">
              <ButtonArrow className="text-center" Title="Load More" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
