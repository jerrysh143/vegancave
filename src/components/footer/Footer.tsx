/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../images/logo_vegan_cave.png";
import FacebookIcon from "../../images/Icons/facebookIcon";
import TwitterIcon from "../../images/Icons/twiterIcon";
import LinkedinIcon from "../../images/Icons/linkedinIcon";
import InstagramIcon from "../../images/Icons/instagramIcon";

const Footer = () => {
  return (
      <div className="bg-[rgba(43,182,114,0.07)]">
        <div className="max-w-[1530px] mx-auto py-30px xl:pt-50px xl:pb-[88px]">
          <div className="flex flex-wrap">
            <div className="w-full 2xl:w-3/12 px-15px flex flex-col items-center 2xl:items-start">
              <a href="#!" className="inline-block">
                <img src={Logo} alt="" />
              </a>
              <p className="mt-[23px] text-13 md:text-18 leading-normal text-black font-medium max-w-[500px] 2xl:max-w-full text-center 2xl:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                liber o viverra dapibus odio sit malesuada in quis. Arcu
                tristique elementum viverra integer id.
              </p>
              <ul className="flex flex-wrap items-center pt-15px pb-20px">
                <li>
                  <a
                    className="w-[42px] h-[42px] mx-[9px] ml-0 flex items-center justify-center rounded-full bg-[#AAE2C7]"
                    href="#!"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="w-[42px] h-[42px] mx-[9px]  flex items-center justify-center rounded-full bg-[#AAE2C7]"
                    href="#!"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="w-[42px] h-[42px] mx-[9px]  flex items-center justify-center rounded-full bg-[#AAE2C7]"
                    href="#!"
                  >
                    <LinkedinIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="w-[42px] h-[42px] mx-[9px] mr-0 flex items-center justify-center rounded-full bg-[#AAE2C7]"
                    href="#!"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-4/12 lg:w-4/12 2xl:w-3/12 flex justify-start flex-col pb-3 px-15px lg:pl-[70px] 2xl:pl-[90px] items-center md:items-start">
              <div className="text-16 md:text-18 lg:text-26 leading-normal text-black font-bold pb-[8px] md:pb-[38px] lg:pb-[68px]">
                Opening Restaurant
              </div>
              <ul className="flex flex-col items-center md:items-start w-full">
                <li className="text-13 lg:text-18 leading-normal font-medium text-black">
                  Sat-Wet: 09:00am-10:00PM
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black">
                  Thursday: 09:00am-11:00PM
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black">
                  Friday: 09:00am-8:00PM
                </li>
              </ul>
            </div>
            <div className="pb-3 w-full md:w-4/12 lg:w-4/12 2xl:w-3/12 lg:pl-[70px] xl:pl-[105px] px-15px text-center md:text-left">
              <div className="text-16 md:text-18 lg:text-26 leading-normal text-black font-bold pb-[8px] md:pb-[38px] lg:pb-[68px]">
                User Link
              </div>
              <ul className="flex flex-col items-center md:items-start w-full">
                <li className="text-13 lg:text-18 leading-normal font-medium text-black hover:text-primaryColor duration-300">
                  <a href="#!">About Us</a>
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black hover:text-primaryColor duration-300">
                  <a href="#!">Contact Us</a>
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black hover:text-primaryColor duration-300">
                  <a href="#!">Order Delivery</a>
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black hover:text-primaryColor duration-300">
                  <a href="#!">Payment & Tex</a>
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black hover:text-primaryColor duration-300">
                  <a href="#!">Terms of Services</a>
                </li>
              </ul>
            </div>
            <div className="pb-3 w-full md:w-4/12 2xl:w-3/12 px-15px flex flex-col justify-center md:justify-start">
              <div className="text-16 md:text-18 lg:text-26 leading-normal text-center md:text-left text-black font-bold pb-[8px] md:pb-[38px] lg:pb-[68px]">
                Contact Us
              </div>
              <ul className="flex flex-col items-center md:items-start w-full">
                <li className="text-13 lg:text-18 leading-normal font-medium text-black">
                  1234 Country Club Ave
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black">
                  NC 123456, London, UK
                </li>
                <li className="text-13 lg:text-18 leading-normal font-medium text-black hover:text-primaryColor duration-300">
                  <a href="#!">+0123 456 7891</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
