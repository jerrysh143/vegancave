/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import AboutBanner from "../../images/aboutBanner.jpg";
import StoryImage from "../../images/ourStoryImage.jpg";
import Team from "../../components/teamsection/Team";
import PlayIcon from "../../images/Icons/PlayIcon.svg";
import ProcessImage from "../../images/ProcessImage.jpg";

const About = () => {
  // const [Play, setAutoPlay] = useState(false);
  return (
    <>
      <div className="py-30px sm:py-40px lg:py-70px xl:pt-[116px] xl:pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full 992:w-6/12 px-15px">
              <div className="w-full">
                <img
                  src={AboutBanner}
                  alt=""
                  className="w-full h-[400px] sm:h-[500px] 992:h-[885px] object-cover rounded-10px md:rounded-35px"
                />
              </div>
            </div>
            <div className="w-full 992:w-6/12 px-15px">
              <div className="">
                <div className="text-[20px] sm:text-[30px] xl:text-[40px] 2xl:text-56 leading-56 truncate font-bold text-primaryColor pt-10px pb-5px sm:pb-20px lg:pb-30px">
                  Welcome to Vegancave...
                </div>
                <p className="text-16 md:text-20 xl:text-24 font-medium leading-normal pb-20px text-paraColor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-16 md:text-20 xl:text-24 font-medium leading-normal text-paraColor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut.
                </p>
              </div>
              <div className="w-full h-full -mx-15px">
                <div className="pt-[160px]">
                  {/* <Sliderabout /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-30px pb-0 sm:py-40px lg:py-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px flex-col-reverse 992:flex-row">
            <div className="w-full 992:w-6/12 xl:w-5/12 px-15px">
              <div className="">
                <div className="text-[20px] sm:text-[30px] xl:text-[40px] 2xl:text-56 leading-56 truncate font-bold text-primaryColor pt-10px pb-5px sm:pb-20px lg:pb-30px">
                  Our Story
                </div>
                <p className="text-16 md:text-20 xl:text-24 font-medium leading-normal pb-20px text-paraColor">
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
            <div className="w-full 992:w-6/12 xl:w-7/12 px-15px">
              <div>
                <img
                  className="w-full h-[400px] sm:h-[400px] 992:h-full object-cover rounded-10px md:rounded-35px"
                  src={StoryImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 pb-30px sm:py-40px lg:py-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full text-center px-15px">
              <div className="text-[20px] sm:text-[30px] xl:text-[40px] 2xl:text-56 leading-56 text-primaryColor font-bold pt-10px pb-5px sm:pb-20px lg:pb-100px">
                Our Team
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px">
            <Team />
          </div>
        </div>
      </div>
      <div className="relative w-screen h-[800px] overflow-hidden">
        <div className="">
          <div className="">
            <video
              className="videoembed h-[800px] w-screen"
              autoPlay
              muted
              loop
            >
              <source src="https://netdemo.uk/bbb/bbb.mp4" type="video/mp4" />
              <source src="https://netdemo.uk/bbb/bbb.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
        <div className="w-full h-full text-center absolute top-0 left-0 before:content-[''] before:w-full before:h-full before:bg-[rgba(43,182,114,0.5)] before:absolute before:top-0 before:left-0">
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <div className="text-48 leading-[48px] lg:text-108 lg:leading-normal text-white font-medium">
              It looks delicious
            </div>
            <p className="text-16 md:text-20 xl:text-24 leading-24 text-white pb-80px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="w-100px h-100px lg:w-[134px] lg:h-[134px] border-2 border-white rounded-full bg-black/50 flex items-center justify-center cursor-pointer">
              <img src={PlayIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-30px sm:py-40px lg:py-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full px-15px text-center">
              <div className="text-[20px] sm:text-[30px] xl:text-[40px] 2xl:text-56 leading-56 text-primaryColor font-bold pt-10px pb-5px sm:pb-20px lg:pb-100px">
                Sophisticated process
              </div>
              <p className="text-16 md:text-20 xl:text-24 leading-32 font-medium text-paraColor pb-20px">
                We take pride in offering a sophisticated dining experience that
                combines exceptional cuisine with a warm and inviting ambiance.
                Our journey began with a passion for veganism and a vision to
                create a haven where plant-based gastronomy takes center stage.
              </p>
              <p className="text-16 md:text-20 xl:text-24 leading-32 font-medium text-paraColor pb-50px">
                At the heart of our restaurant is our commitment to showcasing
                the artistry and innovation of vegan cuisine. Our talented team
                of chefs has meticulously crafted a menu that harmonizes
                flavors, textures, and ingredients to deliver unforgettable
                dining experiences. We believe that vegan food should be a
                celebration of abundance, creativity, and sustainability. That's
                why we carefully source the finest organic and locally grown
                produce, and seek out plant-based alternatives that showcase the
                incredible diversity of vegan ingredients. From vibrant salads
                bursting with seasonal flavors to sumptuous plant-based entrees
                that rival their non-vegan counterparts, every dish is a
                testament to our dedication to providing exceptional vegan
                dining.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full 992:w-6/12 px-15px">
              <img
                className="mx-auto lg:m-0 rounded-20px"
                src={ProcessImage}
                alt=""
              />
            </div>
            <div className="w-full 992:w-6/12 px-15px">
              <div className="text-16 md:text-20 xl:text-24 leading-32 font-medium text-paraColor pt-15px lg  :pt-0">
                Whether you are a dedicated vegan, an adventurous food lover, or
                simply seeking a remarkable dining experience, VeganCave
                Restaurant invites you to savor the richness of plant-based
                flavors in an environment that celebrates compassion and
                culinary excellence. Join us on a journey of taste, where
                indulgence meets conscious dining, and discover the magic of
                vegan cuisine in all its sophistication.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
