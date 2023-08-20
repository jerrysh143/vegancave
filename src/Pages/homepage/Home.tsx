import React from "react";
import Button from "../../components/Buttons/buttonHome";
import ArrowIcon from "../../images/Icons/leftArrowIcon";
import BurgerImage from "../../images/burger_sandwich.png";
import ComboImage from "../../images/Combo-Junk-Food.png";
import PizzaImage from "../../images/pizza-png.png";
import CakeImage from "../../images/cakepng.png";
import poularItem from "../../images/poularItem1.jpg";
import poularItem1 from "../../images/poularItem2.jpg";
import poularItem2 from "../../images/poularItem3.jpg";
import poularItem3 from "../../images/poularItem4.jpg";
import poularItem4 from "../../images/poularItem5.jpg";
import poularItem5 from "../../images/poularItem6.jpg";
import OrderImage from "../../images/orderImage1.jpg";
import OrderImage1 from "../../images/orderImage2.jpg";
import OrderImage2 from "../../images/orderImage3.jpg";
import OrderImage3 from "../../images/orderImage4.jpg";
import AbstractImage from "../../images/Icons/abstractImage";
import TimeIcon from "../../images/Icons/timeIcon";
import LocationIcon from "../../images/Icons/locationIcon";
import ContactIcon from "../../images/Icons/contactIcon";
import StarIcon from "../../images/Icons/starIcon";
import ButtonArrow from "../../components/Buttons/buttonArrow";
import DeliveryIcon from "../../images/deliveryIcon.png";
import QualityIcon from "../../images/qualityIcon.png";
import HealthyIcon from "../../images/healthyIcon.png";
import LaptopImage from "../../images/laptopImage.png";
import FoodPrepareImage from "../../images/foodPrepareImage.png";
import DeliverImage from "../../images/deliverImage.png";
import ConnectRight from "../../images/connectRight.png";
import ConnectLeft from "../../images/connectLeft.png";
import SliderTestimonial from "../../components/Testimonials/sliderTestimonial";
import FoodComboImage from "../../images/foodComboImage.png";
import BurgerCTAImage from "../../images/burgerCtaImage.png";

const Home = () => {
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
                  />
                </div>
                <div>
                  <Button
                    className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[248px] h-[57px] sm:h-[66px] xl:h-[86px] text-18 sm:text-[22px] xl:text-26 leading-normal font-bold rounded-15px"
                    Title="Contact Us"
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
                    <div className="text-20 lg:text-26 leading-normal font-bold text-center pt-20px pb-10px">
                      Burger
                    </div>
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
                    <div className="text-center text-20 lg:text-26 leading-normal font-bold pb-10px pt-20px">
                      Pizza
                    </div>
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
                    <div className="text-center text-20 lg:text-26 leading-normal font-bold pb-10px pt-20px">
                      Food Combo
                    </div>
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
                    <div className="text-center text-20 lg:text-26 leading-normal font-bold pb-10px pt-0px">
                      Cake
                    </div>
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
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center text-36 leading-unset font-bold mb-30px md:mb-[58px]">
              Most Popular Items
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full md:w-6/12 xl:w-4/12 px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full !bg-transparent">
                  <img
                    src={poularItem}
                    alt=""
                    className="shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] w-full object-cover rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-15px md:px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-18 md:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-3/12 text-right">
                    <div className="flex items-center justify-end pb-25px">
                      <div className="pr-10px">
                        <StarIcon />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 xl:w-4/12 px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem1}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[15px] md:px-[32px] pb-[21px] bg-white flex flex-wrap shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-18 md:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-3/12 text-right">
                    <div className="flex items-center justify-end pb-25px">
                      <div className="pr-10px">
                        <StarIcon />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 xl:w-4/12 px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem2}
                    alt=""
                    className="w-full object-cover  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[15px] md:px-[32px] pb-[21px] bg-white flex flex-wrap  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-18 md:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-3/12 text-right">
                    <div className="flex items-center justify-end pb-25px">
                      <div className="pr-10px">
                        <StarIcon />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 xl:w-4/12 px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem3}
                    alt=""
                    className="w-full object-cover  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[15px] md:px-[32px] pb-[21px] bg-white flex flex-wrap  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-18 md:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-3/12 text-right">
                    <div className="flex items-center justify-end pb-25px">
                      <div className="pr-10px">
                        <StarIcon />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 xl:w-4/12 px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem4}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[15px] md:px-[32px] pb-[21px] bg-white flex flex-wrap shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-18 md:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-3/12 text-right">
                    <div className="flex items-center justify-end pb-25px">
                      <div className="pr-10px">
                        <StarIcon />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 xl:w-4/12 px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem5}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[15px] md:px-[32px] pb-[21px] bg-white flex flex-wrap shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-18 md:text-26 leading-normal font-bold pb-[7px]">
                      Green Spirulina Smoothie Bowl
                    </div>
                    <Button
                      Title="Add To Cart"
                      className="btn--border btn-read btn--animated text-13 leading-normal w-[139px] h-[44px] rounded-[35px] font-bold"
                    />
                  </div>
                  <div className="w-3/12 text-right">
                    <div className="flex items-center justify-end pb-25px">
                      <div className="pr-10px">
                        <StarIcon />
                      </div>
                      <div className="text-13 leading-normal">4.9</div>
                    </div>
                    <div className="text-18 leading-normal font-medium">
                      $15.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ButtonArrow
              Title="See More Product"
              className="flex bg-primaryColor"
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
                <div className="z-10 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
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
                <div className="z-10 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
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
                <div className="z-10 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
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
                <div className="z-10 text-center bg-imageGrad w-full h-auto rounded-20px lg:rounded-35px">
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
                <div className="mb-30px md:mb-45px">
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
