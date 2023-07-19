import React from "react";
import Button from "../../components/Buttons/buttonHome.tsx";
import ArrowIcon from "../../images/Icons/leftArrowIcon.tsx";
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
import AbstractImage from "../../images/Icons/abstractImage.tsx";
import TimeIcon from "../../images/Icons/timeIcon.tsx";
import LocationIcon from "../../images/Icons/locationIcon.tsx";
import ContactIcon from "../../images/Icons/contactIcon.tsx";
import StarIcon from "../../images/Icons/starIcon.tsx";
import ButtonArrow from "../../components/Buttons/buttonArrow.tsx";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center">
            <div className="w-5/12 px-15px">
              <div className="text-95 leading-[105px] font-bold pb-[48px]">
                The Fastest Delivery In
                <span className="text-primaryColor">Your City</span>
              </div>
              <p className="text-18 leading-normal pb-55px relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo, sed proin amet a vestibulum enim volutpat lacus.
                Volutpat arcu sit sed tortor etiam volutpat ipsum.
                <div className="absolute -top-[228px] -right-[50%]">
                  <AbstractImage className="h-1/2" />
                </div>
              </p>
              <div className="flex">
                <div className="mr-[73px]">
                  <Button
                    className="btn--border btn-read btn--animated w-[248px] h-[86px] text-26 leading-normal font-bold rounded-15px"
                    Title="Order Now"
                  />
                </div>
                <div>
                  <Button
                    className="btn--border btn-read btn--animated w-[248px] h-[86px] text-26 leading-normal font-bold rounded-15px"
                    Title="Contact Us"
                  />
                </div>
              </div>
            </div>
            <div className="w-7/12 relative px-15px">
              <div className="bg-bannerGrad w-[445px] h-[837px] ml-auto mr-0 rounded-xl"></div>
              <div className="w-full absolute top-[138px] right-40px flex flex-wrap justify-end">
                <div className="flex flex-wrap flex-col items-end mr-20px">
                  <div className="w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)] mb-[115px]">
                    <img
                      src={BurgerImage}
                      alt=""
                      className="mx-auto -mt-80px"
                    />
                    <div className="text-26 leading-normal font-bold text-center pt-20px pb-10px">
                      Burger
                    </div>
                    <p className="text-18 leading-normal font-medium text-center pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-18 leading-normal text-center font-semibold">
                      <span className="text-rateColor">$</span>5.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full ml-[69px] mt-[15px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                  <div className="w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)]">
                    <img src={PizzaImage} alt="" className="mx-auto -mt-65px" />
                    <div className="text-center text-26 leading-normal font-bold pb-10px pt-20px">
                      Pizza
                    </div>
                    <p className="text-center text-18 leading-normal font-medium pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-18 leading-normal text-center font-semibold">
                      <span className="text-rateColor">$</span>9.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full ml-[69px] mt-[25px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                </div>
                <div className="flex flex-wrap flex-col items-end mr-20px">
                  <div className="w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)] mb-[115px]">
                    <img src={ComboImage} alt="" className="mx-auto -mt-65px" />
                    <div className="text-center text-26 leading-normal font-bold pb-10px pt-20px">
                      Food Combo
                    </div>
                    <p className="text-center text-18 leading-normal font-medium pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-center text-18 leading-normal font-semibold">
                      <span className="text-rateColor">$</span>6.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full ml-[69px] mt-[6px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                  <div className="w-[258px] h-[275px] rounded-30px bg-white shadow-[0px_0px_31px_0_rgba(0,0,0,0.05)]">
                    <img src={CakeImage} alt="" className="mx-auto -mt-65px" />
                    <div className="text-center text-26 leading-normal font-bold pb-10px pt-0px">
                      Cake
                    </div>
                    <p className="text-center text-18 leading-normal font-medium pb-10px">
                      Mushroom Sauce
                    </p>
                    <div className="text-center text-18 leading-normal font-semibold">
                      <span className="text-rateColor">$</span>5.15
                    </div>
                    <ArrowIcon className="w-[42px] h-[42px] bg-black flex items-center justify-center rounded-full ml-[69px] mt-[22px] transition-all duration-200 hover:-rotate-90 hover:duration-200 hover:transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[105px] pb-[75px]">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px w-full h-[200px] py-[28px] rounded-50px bg-white shadow-[0px_0px_50px_0px_rgba(0,0,0,0.05)]">
            <div className="w-4/12 px-15px border-r-[1px] border-borderColor flex flex-col justify-center items-center">
              <div className="bg-primaryColor w-[42px] h-[42px] flex items-center justify-center rounded-full mb-[12px]">
                <TimeIcon />
              </div>
              <div className="text-18 leading-normal font-semibold pb-[6px]">
                Today 10:00am - 10:00pm
              </div>
              <p className="text-13 leading-normal">Working time</p>
            </div>
            <div className="w-4/12 px-15px border-r-[1px] border-borderColor flex flex-col justify-center items-center">
              <div className="bg-primaryColor w-[42px] h-[42px] flex items-center justify-center rounded-full mb-[12px]">
                <LocationIcon />
              </div>
              <div className="text-18 leading-normal font-semibold">
                Washington, D.C., DC,USA
              </div>
              <p className="text-13 leading-normal pb-[6px]">Our Location</p>
            </div>
            <div className="w-4/12 px-15px flex flex-col justify-center items-center">
              <div className="bg-primaryColor w-[42px] h-[42px] flex items-center justify-center rounded-full mb-[12px]">
                <ContactIcon />
              </div>
              <div className="text-18 leading-normal font-semibold pb-[6px]">
                +0123 456 7891
              </div>
              <p className="text-13 leading-normal">Phone Number</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[75px] pb-[40px]">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center text-36 leading-normal font-bold mb-[58px]">
              Most Popular Items
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px">
            <div className="w-[485px] px-15px mr-35px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full !bg-transparent">
                  <img
                    src={poularItem}
                    alt=""
                    className="shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] w-full object-cover rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[32px] pb-[21px] flex flex-wrap bg-white shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-26 leading-normal font-bold pb-[7px]">
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
            <div className="w-[485px] px-15px mr-35px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem1}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[32px] pb-[21px] bg-white flex flex-wrap shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-26 leading-normal font-bold pb-[7px]">
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
            <div className="w-[485px] px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem2}
                    alt=""
                    className="w-full object-cover  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[32px] pb-[21px] bg-white flex flex-wrap  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-26 leading-normal font-bold pb-[7px]">
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
            <div className="w-[485px] px-15px mr-35px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem3}
                    alt=""
                    className="w-full object-cover  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[32px] pb-[21px] bg-white flex flex-wrap  shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-26 leading-normal font-bold pb-[7px]">
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
            <div className="w-[485px] px-15px mr-35px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem4}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[32px] pb-[21px] bg-white flex flex-wrap shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-26 leading-normal font-bold pb-[7px]">
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
            <div className="w-[485px] px-15px mb-[58px]">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={poularItem5}
                    alt=""
                    className="w-full object-cover shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-tl-[35px] rounded-tr-[35px]"
                  />
                </div>
                <div className="pt-[16px] px-[32px] pb-[21px] bg-white flex flex-wrap shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] rounded-bl-[35px] rounded-br-[35px]">
                  <div className="flex flex-wrap w-9/12">
                    <div className="text-26 leading-normal font-bold pb-[7px]">
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
      <div className="">
        <div className="1600:w-[1530px] mx-auto px-15px"></div>
      </div>
    </>
  );
};

export default Home;
