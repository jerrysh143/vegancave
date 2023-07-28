import React from "react";
import AboutBanner from "../../images/aboutBanner.jpg";
// import SliderCard from "../../components/Testimonials/SliderCard";
// import SliderABout from "../../components/ABoutslide/SliderImage";
import StoryImage from "../../images/ourStoryImage.jpg"

const About = () => {
  return (
    <>
      <div className="pt-[116px] pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-6/12 px-15px">
              <div className="w-full">
                <img src={AboutBanner} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-6/12 px-15px">
              <div className="">
                <div className="text-56 leading-56 truncate font-bold text-primaryColor pb-30px">
                  Welcome to Vegancave...
                </div>
                <p className="text-24 font-medium leading-normal pb-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-24 font-medium leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut.
                </p>
              </div>
              <div className="w-full flex flex-nowrap -mx-15px">
                <div className="">{/* <SliderABout /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-5/12 px-15px">
              <div className="">
                <div className="text-56 leading-56 truncate font-bold text-primaryColor pb-30px">
                  Our Story
                </div>
                <p className="text-24 font-medium leading-normal pb-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  lorem id penatibus imperdiet. Turpis egestas ultricies purus
                  auctor tincidunt lacus nunc. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Purus lorem id penatibus
                  imperdiet. Turpis egestas ultricies purus auctor tincidunt
                  lacus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Purus lorem id penatibus imperdiet. Turpis egestas
                  ultricies purus auctor tincidunt lacus nunc.
                </p>
              </div>
            </div>
            <div className="w-7/12 px-15px">
              <div>
                <img src={StoryImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
