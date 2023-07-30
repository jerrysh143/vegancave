import React from "react";
import Button from "../../components/Buttons/buttonHome";
import NutritionBannerImage from "../../images/nutrition_Image.png";
import SectionHealthyImage1 from "../../images/SectionHealthyImage1.jpg"
import SectionHealthyImage2 from "../../images/SectionHealthyImage2.jpg"
import SectionHealthyImage3 from "../../images/SectionHealthyImage3.jpg"

const Nutritionist = () => {
  return (
    <>
      <div className="pt-[150px] mb-[375px] bg-[rgba(43,182,114,0.07)] relative">
        <div className="absolute -bottom-[432px] w-full">
          <svg
            className="w-full h-full text-[rgba(43,182,114,0.07)]"
            viewBox="0 0 1443 328"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1753 180.5C1164.5-26.5 150 375 .5 150.5V0H1443v200.5z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center">
            <div className="w-5/12 px-15px">
              <div className="block text-75 leading-95 pb-25px">
                <div className="font-semibold text-primaryColor w-full">
                  Healthy Living{" "}
                </div>
                <div className="">Made Easy</div>
              </div>
              <p className="text-24 leading-32 pb-40px">
                Order your diet and healthy food & have it your own space with
                loved ones.
              </p>
              <div>
                <Button
                  Title="Order Now"
                  className="btn--border btn-read btn--animated text-26 leading-normal w-[248px] h-[70px] rounded-[35px] font-bold"
                />
              </div>
            </div>
            <div className="w-7/12 px-15px">
              <img src={NutritionBannerImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40px pb-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center">
            <div className="w-6/12 px-15px">
              <div className="relative w-full">
                <div className="text-40 leading-40 z-10 font-medium text-center w-full">
                  Why healthy
                </div>
                <div className="text-[150px] text-[#F5F5F5] font-bold -z-1 absolute -top-100px left-0">
                  VEGANCAVE
                </div>
              </div>
              <div>
                <ul className="pl-[198px] pt-[130px] flex flex-col">
                  <li className="markers text-20 leading-[27px] relative mb-50px">
                    Improved physical health
                  </li>
                  <li className="markers text-20 leading-[27px] relative mb-50px">
                    Better mental health
                  </li>
                  <li className="markers text-20 leading-[27px] relative mb-50px">
                    Increased longevity
                  </li>
                  <li className="markers text-20 leading-[27px] relative mb-50px">
                    Weight management
                  </li>
                  <li className="markers text-20 leading-[27px] relative mb-50px">
                    Improved self-confidence
                  </li>
                  <li className="markers text-20 leading-[27px] relative mb-50px">
                    Reduced stress
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-6/12 px-15px">
              <div className="w-full">
                <div className="w-full flex flex-wrap items-end mb-25px">
                  <div className="w-6/12">
                    <img className="w-full mt-[203px] pr-25px rounded-20px" src={SectionHealthyImage1} alt="" />
                  </div>
                  <div className="w-6/12">
                    <img className="w-full rounded-20px" src={SectionHealthyImage2} alt="" />
                  </div>
                </div>
                <div className="w-full">
                  <img className="w-full rounded-20px" src={SectionHealthyImage3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-70px">
        <div className="px-15px w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center w-full">
            <div className="bg-primaryColor px-15px pt-28px pb-[68px] w-full flex flex-col justify-center">
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nutritionist;
