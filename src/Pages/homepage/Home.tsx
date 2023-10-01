import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../typesRoute";
import { getProducts } from "../../services/auth";
import { TOAST_TYPE, notify } from "../../utils/utils";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProducts();
      if (response.status) {
        setProducts(response.data);
      } else {
        notify(TOAST_TYPE.ERROR, response.message);
      }
    };

    fetchProduct();
  }, []);
  return (
    <>
      <div className="">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center">
            <div className="w-full md:w-7/12 lg:w-5/12 pb-30px md:pb-0 px-15px">
              <h1 className="text-[40px] leading-[50px] pb-20px pt-30px sm:pt-0 md:text-[65px] lg:text-[75px] xl:text-[85px] 2xl:text-95 md:leading-[75px] xl:leading-[105px] font-bold sm:pb-[48px]">
                The Fastest Delivery In
                <span className="text-primaryColor">Your City</span>
              </h1>
              <p className="text-18 leading-normal pb-30px sm:pb-55px relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo, sed proin amet a vestibulum enim volutpat lacus.
                Volutpat arcu sit sed tortor etiam volutpat ipsum.
                <div className="absolute -top-[228px] -right-[50%] hidden 2xl:block">
                  <AbstractImage className="h-1/2" />
                </div>
              </p>
              <div className="flex">
                <div className="mr-10px sm:mr-[30px] xl:mr-[73px]">
                  <Button
                    className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[248px] h-[57px] sm:h-[66px] xl:h-[86px] text-18 sm:text-[22px] xl:text-26 leading-normal font-bold rounded-15px"
                    Title="Order Now"
                    onClick={() => navigate(ROUTE_NAME.STORE)}
                  />
                </div>
                <div>
                  <Button
                    className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[248px] h-[57px] sm:h-[66px] xl:h-[86px] text-18 sm:text-[22px] xl:text-26 leading-normal font-bold rounded-15px"
                    Title="Contact Us"
                    onClick={() => navigate(ROUTE_NAME.CONTACT)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-7/12 relative px-15px overflow-hidden">
              <div className="bg-bannerGrad w-full lg:w-[445px] h-[450px] lg:h-[837px] ml-auto mr-0 rounded-xl"></div>
              <div className="absolute top-0 lg:top-[138px] right-0 justify-center lg:justify-normal lg:right-40px flex flex-wrap h-[502px] scroll overflow-y-scroll m-10px lg:m-auto lg:overflow-visible lg:h-auto">
                <div className="flex flex-wrap flex-row md:flex-col items-end mr-0px lg:mr-20px pt-[123px] pb-0 md:py-[123px] lg:py-0">
                  <div className="w-[calc(100%_-_30px)] 500:w-[235px] lg:w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)] mx-auto mr-auto 500:mr-10px md:mr-0 mb-[115px]">
                    <img
                      src={BurgerImage}
                      alt=""
                      className="mx-auto -mt-80px"
                    />
                    <h6 className="text-20 lg:text-26 leading-normal font-bold text-center pt-20px pb-10px">
                      Burger
                    </h6>
                    <p className="text-18 leading-normal font-medium text-center pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-18 leading-normal text-center font-semibold">
                      <span className="text-rateColor">$</span>5.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full mx-auto mt-25px md:ml-[69px] md:mt-[15px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                  <div className="w-[calc(100%_-_30px)] 500:w-[235px] lg:w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)] mx-auto mr-auto 500:mr-10px md:mr-0 mb-[30px]">
                    <img src={PizzaImage} alt="" className="mx-auto -mt-65px" />
                    <h6 className="text-center text-20 lg:text-26 leading-normal font-bold pb-10px pt-20px">
                      Pizza
                    </h6>
                    <p className="text-center text-18 leading-normal font-medium pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-18 leading-normal text-center font-semibold">
                      <span className="text-rateColor">$</span>9.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full mx-auto mt-[34px] md:ml-[69px] md:mt-[25px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                </div>
                <div className="flex flex-wrap flex-row md:flex-col items-end lg:mr-20px  md:pb-[123px] pt-90px sm:pt-0 lg:pb-0 m-0 justify-center md:justify-normal">
                  <div className="w-[calc(100%_-_30px)] 500:w-[235px] lg:w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)] mx-auto mr-auto 500:mr-10px md:mr-0 mb-[115px]">
                    <img src={ComboImage} alt="" className="mx-auto -mt-65px" />
                    <h6 className="text-center text-20 lg:text-26 leading-normal font-bold pb-10px pt-20px">
                      Food Combo
                    </h6>
                    <p className="text-center text-18 leading-normal font-medium pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-center text-18 leading-normal font-semibold">
                      <span className="text-rateColor">$</span>6.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full mx-auto mt-25px md:ml-[69px] md:mt-[6px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                  <div className="w-[calc(100%_-_30px)] 500:w-[235px] lg:w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)] mx-auto mr-auto 500:mr-10px md:mr-0 mb-[80px]">
                    <img src={CakeImage} alt="" className="mx-auto -mt-65px" />
                    <h6 className="text-center text-20 lg:text-26 leading-normal font-bold pb-10px pt-0px">
                      Cake
                    </h6>
                    <p className="text-center text-18 leading-normal font-medium pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-center text-18 leading-normal font-semibold">
                      <span className="text-rateColor">$</span>5.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full mx-auto mt-25px md:ml-[69px] md:mt-[22px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-30px md:pt-[105px] md:pb-70px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap mx-0 w-full h-full md:h-[200px] py-[28px] rounded-50px bg-white shadow-[0px_0px_50px_0px_rgba(0,0,0,0.05)]">
            <div className="w-full sm:w-4/12 px-15px border-0 md:border-r-[1px] border-borderColor flex flex-col justify-center items-center">
              <div className="bg-primaryColor w-[42px] h-[42px] flex items-center justify-center rounded-full mb-[12px]">
                <TimeIcon />
              </div>
              <div className="text-16 md:text-18 leading-normal font-semibold pb-[6px] text-center">
                Today 10:00am - 10:00pm
              </div>
              <p className="text-13 leading-normal">Working time</p>
            </div>
            <div className="w-full sm:w-4/12 px-15px border-0 md:border-r-[1px] border-borderColor flex flex-col justify-center items-center">
              <div className="bg-primaryColor w-[42px] h-[42px] flex items-center justify-center rounded-full mb-[12px]">
                <LocationIcon />
              </div>
              <div className="text-16 md:text-18 leading-normal font-semibold text-center">
                Washington, D.C., USA
              </div>
              <p className="text-13 leading-normal pb-[6px]">Our Location</p>
            </div>
            <div className="w-full sm:w-4/12 px-15px flex flex-col justify-center items-center">
              <div className="bg-primaryColor w-[42px] h-[42px] flex items-center justify-center rounded-full mb-[12px]">
                <ContactIcon />
              </div>
              <div className="text-16 md:text-18 leading-normal font-semibold pb-[6px] text-center">
                +0123 456 7891
              </div>
              <p className="text-13 leading-normal">Phone Number</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-30px md:pt-30px md:pb-40px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrapx">
            <h2 className="w-full px-15px text-center text-26 md:text-48 leading-unset font-bold mb-30px md:mb-[58px]">
              Most Popular Items
            </h2>
          </div>
          <div className="flex-wrap flex">
            <Link
              to={ROUTE_NAME.PRODUCTDETAIL}
              className="w-full 480:w-6/12 md:w-4/12 px-0 567:px-10px md:px-15px mb-15px md:mb-[58px]"
            >
              <div className="flex flex-col">
                <div className="w-full !bg-transparent">
                  <img
                    src={poularItem}
                    alt=""
                    className="shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] w-full object-cover rounded-tl-[10px] rounded-tr-[10px] 767:rounded-tl-[20px] 767:rounded-tr-[20px] 992:rounded-tl-[25px] 992:rounded-tr-[25px] 1200:rounded-tl-[35px] 1200:rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[10px] rounded-br-[10px] 767:rounded-bl-[20px] 767:rounded-br-[20px] 992:rounded-bl-[25px] 992:rounded-br-[25px] 1200:rounded-bl-[35px] 1200:rounded-br-[35px]">
                  <div className="flex flex-wrap w-7/12 567:w-9/12">
                    <div className="text-[12px] 567:text-16 767:text-20 1200:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-5/12 567:w-3/12 text-right">
                    <div className="flex items-center justify-end pb-10px 567:pb-25px">
                      <div className="pr-10px">
                        <StarIcon fill="#2BB672" stroke="#2BB672" />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-16 567:text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={ROUTE_NAME.PRODUCTDETAIL}
              className="w-full 480:w-6/12 md:w-4/12 px-0 567:px-10px md:px-15px mb-15px md:mb-[58px]"
            >
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem1}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[10px] rounded-tr-[10px] 767:rounded-tl-[20px] 767:rounded-tr-[20px] 992:rounded-tl-[25px] 992:rounded-tr-[25px] 1200:rounded-tl-[35px] 1200:rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[10px] rounded-br-[10px] 767:rounded-bl-[20px] 767:rounded-br-[20px] 992:rounded-bl-[25px] 992:rounded-br-[25px] 1200:rounded-bl-[35px] 1200:rounded-br-[35px]">
                  <div className="flex flex-wrap w-7/12 567:w-9/12">
                    <div className="text-[12px] 567:text-16 767:text-20 1200:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-5/12 567:w-3/12 text-right">
                    <div className="flex items-center justify-end pb-10px 567:pb-25px">
                      <div className="pr-10px">
                        <StarIcon fill="#2BB672" stroke="#2BB672" />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-16 567:text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={ROUTE_NAME.PRODUCTDETAIL}
              className="w-full 480:w-6/12 md:w-4/12 px-0 567:px-10px md:px-15px mb-15px md:mb-[58px]"
            >
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem2}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[10px] rounded-tr-[10px] 767:rounded-tl-[20px] 767:rounded-tr-[20px] 992:rounded-tl-[25px] 992:rounded-tr-[25px] 1200:rounded-tl-[35px] 1200:rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[10px] rounded-br-[10px] 767:rounded-bl-[20px] 767:rounded-br-[20px] 992:rounded-bl-[25px] 992:rounded-br-[25px] 1200:rounded-bl-[35px] 1200:rounded-br-[35px]">
                  <div className="flex flex-wrap w-7/12 567:w-9/12">
                    <div className="text-[12px] 567:text-16 767:text-20 1200:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-5/12 567:w-3/12 text-right">
                    <div className="flex items-center justify-end pb-10px 567:pb-25px">
                      <div className="pr-10px">
                        <StarIcon fill="#2BB672" stroke="#2BB672" />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-16 567:text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={ROUTE_NAME.PRODUCTDETAIL}
              className="w-full 480:w-6/12 md:w-4/12 px-0 567:px-10px md:px-15px mb-15px md:mb-[58px]"
            >
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem3}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[10px] rounded-tr-[10px] 767:rounded-tl-[20px] 767:rounded-tr-[20px] 992:rounded-tl-[25px] 992:rounded-tr-[25px] 1200:rounded-tl-[35px] 1200:rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[10px] rounded-br-[10px] 767:rounded-bl-[20px] 767:rounded-br-[20px] 992:rounded-bl-[25px] 992:rounded-br-[25px] 1200:rounded-bl-[35px] 1200:rounded-br-[35px]">
                  <div className="flex flex-wrap w-7/12 567:w-9/12">
                    <div className="text-[12px] 567:text-16 767:text-20 1200:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-5/12 567:w-3/12 text-right">
                    <div className="flex items-center justify-end pb-10px 567:pb-25px">
                      <div className="pr-10px">
                        <StarIcon fill="#2BB672" stroke="#2BB672" />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-16 567:text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={ROUTE_NAME.PRODUCTDETAIL}
              className="w-full 480:w-6/12 md:w-4/12 px-0 567:px-10px md:px-15px mb-15px md:mb-[58px]"
            >
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem4}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[10px] rounded-tr-[10px] 767:rounded-tl-[20px] 767:rounded-tr-[20px] 992:rounded-tl-[25px] 992:rounded-tr-[25px] 1200:rounded-tl-[35px] 1200:rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[10px] rounded-br-[10px] 767:rounded-bl-[20px] 767:rounded-br-[20px] 992:rounded-bl-[25px] 992:rounded-br-[25px] 1200:rounded-bl-[35px] 1200:rounded-br-[35px]">
                  <div className="flex flex-wrap w-7/12 567:w-9/12">
                    <div className="text-[12px] 567:text-16 767:text-20 1200:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-5/12 567:w-3/12 text-right">
                    <div className="flex items-center justify-end pb-10px 567:pb-25px">
                      <div className="pr-10px">
                        <StarIcon fill="#2BB672" stroke="#2BB672" />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-16 567:text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link 
              to={ROUTE_NAME.PRODUCTDETAIL}
              className="w-full 480:w-6/12 md:w-4/12 px-0 567:px-10px md:px-15px mb-15px md:mb-[58px]"
            >
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem5}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[10px] rounded-tr-[10px] 767:rounded-tl-[20px] 767:rounded-tr-[20px] 992:rounded-tl-[25px] 992:rounded-tr-[25px] 1200:rounded-tl-[35px] 1200:rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[10px] rounded-br-[10px] 767:rounded-bl-[20px] 767:rounded-br-[20px] 992:rounded-bl-[25px] 992:rounded-br-[25px] 1200:rounded-bl-[35px] 1200:rounded-br-[35px]">
                  <div className="flex flex-wrap w-7/12 567:w-9/12">
                    <div className="text-[12px] 567:text-16 767:text-20 1200:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-5/12 567:w-3/12 text-right">
                    <div className="flex items-center justify-end pb-10px 567:pb-25px">
                      <div className="pr-10px">
                        <StarIcon fill="#2BB672" stroke="#2BB672" />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-16 567:text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <ButtonArrow
              Title="See More Product"
              className="flex bg-primaryColor"
              onClick={() => navigate(ROUTE_NAME.STORE)}
            />
          </div>
        </div>
      </div>
      <div className="pt-30px pb-0 md:pt-40px md:pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center">
              <div className="text-20 md:text-26 leading-normal pb-[7px] font-medium text-primaryColor">
                Our Menu
              </div>
              <div className="text-26 md:text-48 leading-normal font-bold pb-[48px]">
                Popular Recipes
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full md:w-6/12 lg:w-3/12 px-15px h-[400px] md:h-[680px] mb-20px lg:mb-0">
              <div className="relative w-full h-full flex flex-col justify-between items-center">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={OrderImage}
                    alt=""
                    className="w-full h-full object-cover flex rounded-20px lg:rounded-35px"
                  />
                </div>
                <div className="relative z-10 w-70px h-40px md:w-100px bg-primaryColor rounded-full flex items-center justify-center text-white ml-auto top-20px mr-20px">
                  $ 30.00
                </div>
                <div className="z-1 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
                  <div className="text-36 leading-normal font-bold text-white pb-[11px]">
                    Mutligrain Idli
                  </div>
                  <p className="text-18 leading-normal font-medium text-white pb-45px max-w-[230px] mx-auto">
                    Flour, Milk, Seeds, Sugar, Salt, Dry Yeast
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-15px h-[400px] md:h-[680px] mb-20px lg:mb-0">
              <div className="relative w-full h-full flex flex-col justify-between items-center">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={OrderImage1}
                    alt=""
                    className="w-full h-full object-cover flex rounded-20px lg:rounded-35px"
                  />
                </div>
                <div className="relative z-10 w-70px h-40px md:w-100px bg-primaryColor rounded-full flex items-center justify-center text-white ml-auto top-20px mr-20px">
                  $ 30.00
                </div>
                <div className="z-1 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
                  <div className="text-36 leading-normal font-bold text-white pb-[11px]">
                    Sprouts Salad
                  </div>
                  <p className="text-18 leading-normal font-medium text-white pb-45px max-w-[230px] mx-auto">
                    Seeds, Grams and Beans
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-15px h-[400px] md:h-[680px] mb-20px lg:mb-0">
              <div className="relative w-full h-full flex flex-col justify-between items-center">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={OrderImage2}
                    alt=""
                    className="w-full h-full object-cover flex rounded-20px lg:rounded-35px"
                  />
                </div>
                <div className="relative z-10 w-70px h-40px md:w-100px bg-primaryColor rounded-full flex items-center justify-center text-white ml-auto top-20px mr-20px">
                  $ 30.00
                </div>
                <div className="z-1 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
                  <div className="text-36 leading-normal font-bold text-white pb-[11px] px-15px">
                    Overnight Soaked Salad
                  </div>
                  <p className="text-18 leading-normal font-medium text-white pb-45px max-w-[230px] mx-auto">
                    Seeds, Grams and Beans
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-15px h-[400px] md:h-[680px] mb-20px lg:mb-0">
              <div className="relative w-full h-full flex flex-col justify-between items-center">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={OrderImage3}
                    alt=""
                    className="w-full h-full object-cover flex rounded-20px lg:rounded-35px"
                  />
                </div>
                <div className="relative z-10 w-70px h-40px md:w-100px bg-primaryColor rounded-full flex items-center justify-center text-white ml-auto top-20px mr-20px">
                  $ 30.00
                </div>
                <div className="z-1 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
                  <div className="text-36 leading-normal font-bold text-white pb-[11px]">
                    Ragi Toast
                  </div>
                  <p className="text-18 leading-normal font-medium text-white pb-45px max-w-[230px] mx-auto">
                    Oats, Milk, Chain Seeds, Vegan Yogurt, Sweetner, Toopings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-30px md:pt-40px md:pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center">
              <div className="text-26 leading-normal font-medium pb-[7px] text-primaryColor">
                Services
              </div>
              <div className="text-26 md:text-48 leading-normal font-bold pb-30px md:pb-[48px]">
                Why Choose Our Favorite Food
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-15px">
            <div className="w-full mb-30px lg:mb-0 md:w-6/12 lg:w-4/12 h-full px-15px flex items-center">
              <div className="border-[1px] border-[#B6B6B6] bg-white w-full h-full rounded-35px p-30px md:py-100px md:px-40px hover:border-0 hover:shadow-[0_20px_80px_0_rgba(0,0,0,0.15)] duration-300 transition-all hover:duration-300 hover:transition-shadow">
                <div className="w-100px h-100px flex items-center justify-center bg-[#AAE2C7] rounded-full mx-auto mb-40px">
                  <img src={QualityIcon} alt="" />
                </div>
                <div className="text-26 leading-normal font-bold pb-40px text-center">
                  Qualityfull Food
                </div>
                <p className="text-18 leading-normal font-medium text-center">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasur and prasising pain was bron.
                </p>
              </div>
            </div>
            <div className="w-full mb-30px lg:mb-0 md:w-6/12 lg:w-4/12 h-full px-15px flex items-center">
              <div className="border-[1px] border-[#B6B6B6] bg-white w-full h-full rounded-35px p-30px md:py-100px md:px-40px duration-300 transition-all hover:border-0 hover:shadow-[0_20px_80px_0_rgba(0,0,0,0.15)] hover:duration-300 hover:transition-shadow">
                <div className="w-100px h-100px flex items-center justify-center bg-[#AAE2C7] rounded-full mx-auto mb-40px">
                  <img src={HealthyIcon} alt="" />
                </div>
                <div className="text-26 leading-normal font-bold pb-40px text-center">
                  Qualityfull Food
                </div>
                <p className="text-18 leading-normal font-medium text-center">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasur and prasising pain was bron.
                </p>
              </div>
            </div>
            <div className="w-full mb-30px lg:mb-0 md:w-6/12 lg:w-4/12 h-full px-15px flex items-center">
              <div className="border-[1px] border-[#B6B6B6] bg-white w-full h-full rounded-35px p-30px md:py-100px md:px-40px duration-300 transition-all hover:border-0 hover:shadow-[0_20px_80px_0_rgba(0,0,0,0.15)] hover:duration-300 hover:transition-shadow">
                <div className="w-100px h-100px flex items-center justify-center bg-[#AAE2C7] rounded-full mx-auto mb-40px">
                  <img src={DeliveryIcon} alt="" />
                </div>
                <div className="text-26 leading-normal font-bold pb-40px text-center">
                  Qualityfull Food
                </div>
                <p className="text-18 leading-normal font-medium text-center">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasur and prasising pain was bron.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 pb-30px md:pt-40px md:pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center">
              <div className="text-26 leading-normal font-medium pb-[7px] text-primaryColor">
                How to work
              </div>
              <div className="text-26 md:text-48 leading-normal font-bold pb-[48px]">
                Food Us An Important Part Of A Balanced Diet
              </div>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center lg:justify-normal -mx-15px">
            <div className="w-full sm:w-6/12 md:w-4/12 px-15px relative">
              <div className="">
                <div className="mb-30px md:mb-45px flex justify-center md:justify-start">
                  <img src={LaptopImage} alt="" />
                </div>
                <div className="text-26 leading-normal font-bold pb-25px text-center md:text-left">
                  CHOOSE
                </div>
                <p className="text-18 leading-normal font-medium text-center md:text-left">
                  Do you want to lose weight, exercise, adhere to a therapeutic
                  diet? Our dietitian will help you with choosing the right
                  program!
                  <span className="absolute top-10px hidden 2xl:block -right-[31%] scale-[0.95] -rotate-1">
                    <img src={ConnectRight} alt="" />
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 px-15px flex md:block flex-col\-reverse">
              <div className="flex flex-wrap flex-col-reverse md:block">
                <div>
                  <div className="text-26 leading-normal font-bold pb-25px text-center lg:text-right xl:text-center">
                    PREPARE FOOD
                  </div>
                  <p className="text-18 leading-normal font-medium text-center md:text-left">
                    Do you want to lose weight, exercise, adhere to a
                    therapeutic diet? Our dietitian will help you with choosing
                    the right program!
                  </p>
                </div>
                <div className="mt-30px md:m-45px">
                  <img className="mx-auto" src={FoodPrepareImage} alt="" />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 px-15px relative">
              <div className="text-right">
                <div className="mb-30px md:mb-45px">
                  <img
                    className="mx-auto md:ml-auto md:mr-0"
                    src={DeliverImage}
                    alt=""
                  />
                </div>
                <div className="text-26 leading-normal font-bold pb-25px text-center md:text-right">
                  DELIVER
                </div>
                <p className="text-18 leading-normal font-medium text-center md:text-right">
                  <span className="absolute hidden 2xl:block top-10px -left-[31%] scale-[0.95] rotate-1">
                    <img src={ConnectLeft} alt="" />
                  </span>
                  Do you want to lose weight, exercise, adhere to a therapeutic
                  diet? Our dietitian will help you with choosing the right
                  program!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40px pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center">
              <div className="text-26 leading-normal font-medium pb-[7px] text-primaryColor">
                Testimonials
              </div>
              <div className="text-26 md:text-48 leading-normal font-bold pb-[48px]">
                Our Happy Client Says
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full lg:w-6/12 px-15px h-auto xl:h-[445px]">
              <SliderTestimonial />
            </div>
            <div className="w-full lg:w-6/12 px-15px flex items-center">
              <img src={FoodComboImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40px pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="w-ful">
            <div className="bg-black items-center pb-20px md:pb-0 h-full md:h-[370px] rounded-50px flex flex-wrap">
              <div className="w-full md:w-6/12 relative h-full">
                <div className="static flex items-center h-full xl:h-fit xl:absolute xl:-top-45px xl:left-50px">
                  <img
                    src={BurgerCTAImage}
                    alt=""
                    className="w-full h-[280px] md:h-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 px-15px lg:px-0">
                <div className="pr-0px lg:pr-100px">
                  <div className="text-white text-center md:text-left text-[30px] lg:text-36 leading-normal font- bold pb-10px lg:pb-15px">
                    Explore Our Nutrition Foods
                  </div>
                  <p className="text-white text-center md:text-left text-16px lg:text-18 leading-normal pb-15px">
                    Lorem ipsum dolor sit amet, consectetur adipidrscing elit.
                    Purus mauris sem sed urna venenatis vivamus. Egestas in
                    velit nulla viverra turpis id ac. Amet faucibus tempus.
                  </p>
                  <div className="flex items-center justify-center md:block">
                    <Button
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                      Title="Explore Now"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
