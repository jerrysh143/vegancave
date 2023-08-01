import React from "react";
import Button from "../../components/Buttons/buttonHome";
import NutritionBannerImage from "../../images/nutrition_Image.png";
import SectionHealthyImage1 from "../../images/SectionHealthyImage1.jpg";
import SectionHealthyImage2 from "../../images/SectionHealthyImage2.jpg";
import SectionHealthyImage3 from "../../images/SectionHealthyImage3.jpg";
import FruitIcon1 from "../../images/Fruiticon1.png";
import FruitIcon2 from "../../images/Fruiticon2.png";
import FruitIcon3 from "../../images/Fruiticon3.png";
import MeetImage from "../../images/MeetImage.jpg";
import MeetCircles from "../../images/MeetCircles.png";
import ButtonArrow from "../../components/Buttons/buttonArrow";
import VeganCaveForImage1 from "../../images/veganCaveForImage1.png";
import VeganCaveForImage2 from "../../images/veganCaveForImage2.png";
import VeganCaveForImage3 from "../../images/veganCaveForImage3.png";
import VeganCaveForImage4 from "../../images/veganCaveForImage4.png";
import VeganCaveForyouBack from "../../images/VeganCaveForyouBackground.png";
import VeganCaveForyouImage from "../../images/VeganCaveForyouImage.png";
import ReviewImage from "../../images/ReviewImage.jpg";

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
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
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
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
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
                    <img
                      className="w-full mt-[203px] pr-25px rounded-20px"
                      src={SectionHealthyImage1}
                      alt=""
                    />
                  </div>
                  <div className="w-6/12">
                    <img
                      className="w-full rounded-20px"
                      src={SectionHealthyImage2}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  <img
                    className="w-full rounded-20px"
                    src={SectionHealthyImage3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-70px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap m-0 items-center w-full">
            <div className="bg-[rgba(43,183,86,0.05)] px-15px pt-[28px] pb-[68px] w-full flex flex-col justify-center rounded-30px">
              <div className="text-40 leading-40 text-center">
                Our Influencers & Partners
              </div>
              <div className="w-full flex justify-center items-center pt-70px">
                <div>
                  <div className="flex flex-wrap items-center mr-[150px]">
                    <img src={FruitIcon1} alt="" />
                    <span className="text-24 leading-24 ml-10px">
                      Parul University
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center mr-[150px]">
                  <img src={FruitIcon2} alt="" />
                  <span className="text-24 leading-24 ml-10px">
                    S&P IT - Agency
                  </span>
                </div>
                <div className="flex flex-wrap items-center mr-[150px]">
                  <img src={FruitIcon3} alt="" />
                  <span className="text-24 leading-24 ml-10px">
                    Test Company
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[150px] pb-70px bg-[rgba(43,183,86,0.05)]">
        <div className="px-15px w-full mx-auto">
          <div className="flex flex-wrap -mx-15px items-center w-full">
            <div className="w-6/12">
              <div className="bg-primaryColor pl-[180px] py-30px pr-20px w-[720px] rounded-tr-20px rounded-br-20px">
                <div className="text-32 leading-32 text-white">
                  Meet the bests
                </div>
                <div className="text-70 leading-70 font-semibold text-white">
                  NUTRITIONIST
                </div>
              </div>
              <p className="pl-[180px] text-18 leading-32 py-50px font-medium">
                Our team of expert nutritionists is here to help you achieve
                your health and wellness goals. Our nutritionists are highly
                trained and qualified professionals with a deep understanding of
                the science behind nutrition and how it can impact your body and
                mind
              </p>
              <ul className="pl-[180px]">
                <li className="relative text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Registered Dietitian with the Academy of Nutrition and
                  Dietetics
                </li>
                <li className="relative text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  5+ years of experience in the field
                </li>
                <li className="relative text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Specialize in weight management, chronic disease prevention,
                  and sports nutrition
                </li>
                <li className="relative text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Skilled in developing recipes and meal plans.
                </li>
                <li className="relative text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Passionate about helping people live healthy, fulfilling lives
                </li>
                <li className="relative text-18 leading-32 font-semibold before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Committed to staying up-to-date with the latest research and
                  trends in nutrition
                </li>
              </ul>
              <div className="pl-[150px] pt-100px">
                <ButtonArrow className="w-[215px] pl-25px" Title="Reach Us" />
              </div>
            </div>
            <div className="w-6/12">
              <div className="ml-[213px] mr-[173px] relative">
                <img
                  className="absolute scale-125 -translate-x-70px -translate-y-10 -rotate-6 -z-1"
                  src={MeetCircles}
                  alt=""
                />
                <img
                  className="w-[878px] ml-auto mr-0 rounded-20px shadow-xl z-10"
                  src={MeetImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-70px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center w-full">
            <div className="w-full px-15px">
              <div className="text-40 leading-40 font-semibold text-center">
                Have a{" "}
                <span className="text-primaryColor font-bold">VeganCave</span>{" "}
                for
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px items-center w-full">
            <div className="w-[1270px] px-15px mx-auto">
              <div className="flex flex-wrap">
                <div className="w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-4/12">
                    <img src={VeganCaveForImage1} alt="" />
                  </div>
                  <div className="w-8/12 pl-10px">
                    <div className="text-20 leading-20 font-bold pb-15px">
                      Find a diet you love
                    </div>
                    <p className="text-16 leading-24 font-medium">
                      Find a nutritious Diet that fits your lifestyle and food
                      preferences. Take charge of your daily habits with one of
                      the many ongoing Diets including Clean Eating and High
                      Protein
                    </p>
                  </div>
                </div>
                <div className="w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-4/12">
                    <img src={VeganCaveForImage2} alt="" />
                  </div>
                  <div className="w-8/12 pl-10px">
                    <div className="text-20 leading-20 font-bold pb-15px">
                      Track your way to success
                    </div>
                    <p className="text-16 leading-24 font-medium">
                      Track your activities and what you eat with the help of
                      our food-, exercise- and water trackers to maintain a
                      balanced everyday life.
                    </p>
                  </div>
                </div>
                <div className="w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-4/12">
                    <img src={VeganCaveForImage3} alt="" />
                  </div>
                  <div className="w-8/12 pl-10px">
                    <div className="text-20 leading-20 font-bold pb-15px">
                      Start a simplified meal plan
                    </div>
                    <p className="text-16 leading-24 font-medium">
                      Follow a 7-21 day Meal Plan and get four pre-planned
                      recipes a day. Depending on your health goals, there are
                      many Meal Plans to choose from including Keto Burn and
                      Vegan for a week.
                    </p>
                  </div>
                </div>
                <div className="w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-4/12">
                    <img src={VeganCaveForImage4} alt="" />
                  </div>
                  <div className="w-8/12 pl-10px">
                    <div className="text-20 leading-20 font-bold pb-15px">
                      Start your own healthy journey
                    </div>
                    <p className="text-16 leading-24 font-medium">
                      To help you reach your goals and customize your health
                      journey you can add your favorite meals, food items,
                      recipes and exercises to your Favorites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[200px] pb-[115px] relative">
        <div className="absolute bottom-0 right-0">
          <img src={VeganCaveForyouBack} alt="" />
        </div>
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap ml-0 mr-auto">
            <div className="w-[1240px] mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="text-40 leading-40 font-semibold">
                    What is a
                    <span className="font-bold text-primaryColor">
                      VeganCave
                    </span>{" "}
                    for you?
                  </div>
                  <div className="flex flex-wrap pt-80px">
                    <div className="w-6/12 px-15px">
                      <img src={VeganCaveForyouImage} alt="" />
                    </div>
                    <div className="w-6/12 px-15px">
                      <ul className="pl-50px">
                        <li className="relative mb-35px text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          Diet tracker
                        </li>
                        <li className="relative mb-35px text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          Best nutrition advice
                        </li>
                        <li className="relative mb-35px text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          Exercise portal
                        </li>
                        <li className="relative mb-35px text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          Meal planner
                        </li>
                        <li className="relative mb-35px text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          Recipes database
                        </li>
                        <li className="relative mb-35px text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          One stop shop for nutritions
                        </li>
                        <li className="relative text-18 leading-18 font-medium before:content-[''] before:absolute before:-top-[3px] before:rounded-full before:-left-50px before:w-25px before:h-25px before:bg-Marker">
                          Community
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-120px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px">
            <div className="w-full">
              <div className="relative w-[463px] h-[108px] inline-flex items-center justify-center pb-40px">
                <span className="absolute text-100 text-normal font-bold text-[#F5F5F5] -z-1">
                  RESULTS
                </span>
                <span className="text-32 leading-32 font-semibold">
                  VeganCave Reviews
                </span>
              </div>
            </div>
          </div>
          <div className="w-[1230px] mx-auto pt-40px">
            <div className="flex flex-wrap -mx-15px bg-white">
              <div className="w-full bg-white shadow-[0px_0px_4px_4px_rgba(0,0,0,0.025)] rounded-20px">
                <div className="flex flex-wrap text-center">
                  <div className="w-8/12 px-90px py-40px">
                    <div className="text-32 leading-40 text-[#32794F] pb-25px font-semibold text-center">
                      10 kgs in 3 weeks
                    </div>
                    <p className="text-20 leading-[27px] font-medium pb-50px">
                      This platform is like the best thing that has happened to
                      my health. I was shocked how my cravings were gone after
                      only a couple of days and not wanting to eat between meals
                      really helped. Losing 6 kg in only 3 weeks is fantastic,
                      but the best part is the health improvement.
                    </p>
                    <div className="text-28 leading-32 font-medium text-center pb-5px">
                      Anshuman Khuranna
                    </div>
                    <div className="text-18 leading-24 text-center">
                      3 week weight loss meal plan
                    </div>
                  </div>
                  <div className="w-4/12">
                    <img className="rounded-tr-20px rounded-br-20px" src={ReviewImage} alt="" />
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

export default Nutritionist;
