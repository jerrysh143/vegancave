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
      <div className="xl:pt-100px py-30px 2xl:pb-0 2xl:pt-[150px] mb-0 md:mb-[170px] bg-[rgba(43,182,114,0.07)] relative">
        <div className="absolute hidden md:block -bottom-[240px] w-full">
          <svg
            className="w-full h-[240px] text-[rgba(43,182,114,0.07)]"
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
          <div className="flex flex-wrap -mx-15px items-center flex-col-reverse md:flex-row">
            <div className="w-full md:w-6/12 lg:w-5/12 px-15px mt-15px md:mt-0">
              <div className="block text-36 md:text-[45px] lg:text-[55px] xl:text-75 leading-[45px] md:leading-[55px] lg:leading-[65px] xl:leading-95 pb-25px">
                <div className="font-semibold text-primaryColor w-full">
                  Healthy Living{" "}
                </div>
                <div className="">Made Easy</div>
              </div>
              <p className="text-18 md:text-24 lg:text-[22px] leading-[22px] md:leading-32 pb-15px md:pb-40px">
                Order your diet and healthy food & have it your own space with
                loved ones.
              </p>
              <div>
                <Button
                  Title="Order Now"
                  className="btn--border btn-read btn--animated text-18 md:text-20 lg:text-26 leading-normal w-[180px] md:w-[200px] xl:w-[248px] h-[60px] xl:h-[60px] rounded-[35px] font-bold"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-7/12 px-15px">
              <img src={NutritionBannerImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40px pb-20px md:pb-70px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap -mx-15px items-center">
            <div className="w-full md:w-6/12 px-15px">
              <div className="relative w-full mb-15px md:mb-70px">
                <div className="text-26 md:text-40 md:leading-40 z-10 font-medium text-center w-full absolute top-[5px] lg:top-[55px] md:left-70px">
                  Why healthy
                </div>
                <div className="text-[45px] leading-[50px] 500:text-[70px] md:text-[85px] lg:text-[120px] 2xl:text-[150px] lg:leading-[150px] text-center w-full text-[#F5F5F5] font-bold -z-1 relative">
                  VEGANCAVE
                </div>
              </div>
              <div>
                <ul className="pl-40px sm:pl-60px md:pl-[100px] lg:pt-50px lg:pl-[198px] pt-0 flex flex-col">
                  <li className="markers text-18 md:text-20 leading-[27px] relative mb-20px md:mb-50px">
                    Improved physical health
                  </li>
                  <li className="markers text-18 md:text-20 leading-[27px] relative mb-20px md:mb-50px">
                    Better mental health
                  </li>
                  <li className="markers text-18 md:text-20 leading-[27px] relative mb-20px md:mb-50px">
                    Increased longevity
                  </li>
                  <li className="markers text-18 md:text-20 leading-[27px] relative mb-20px md:mb-50px">
                    Weight management
                  </li>
                  <li className="markers text-18 md:text-20 leading-[27px] relative mb-20px md:mb-50px">
                    Improved self-confidence
                  </li>
                  <li className="markers text-18 md:text-20 leading-[27px] relative mb-20px md:mb-50px">
                    Reduced stress
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-15px">
              <div className="w-full">
                <div className="w-full flex flex-wrap items-end mb-15px md:mb-25px">
                  <div className="w-6/12">
                    <div className="mr-15px md:mr-25px">
                      <img
                        className="w-full h-[195px] md:h-auto object-cover  mt-0 lg:mt-[250px] rounded-20px"
                        src={SectionHealthyImage1}
                        alt=""
                      />
                    </div>
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
      <div className="py-20px md:py-70px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap m-0 items-center w-full">
            <div className="bg-[rgba(43,183,86,0.05)] px-15px md:pt-[28px] py-20px md:pb-[68px] w-full flex flex-col justify-center rounded-30px">
              <div className="text-26 md:text-40 leading-40 text-center">
                Our Influencers & Partners
              </div>
              <div className="w-full flex justify-center items-center flex-col md:flex-row pt-40px lg:pt-70px">
                <div className="flex flex-wrap items-center md:mr-20px lg:mr-85px 2xl:mr-[150px]">
                  <img src={FruitIcon1} alt="" />
                  <span className="text-20 lg:text-24 leading-24 ml-10px">
                    Parul University
                  </span>
                </div>
                <div className="flex flex-wrap items-center md:mr-20px lg:mr-85px 2xl:mr-[150px]">
                  <img src={FruitIcon2} alt="" />
                  <span className="text-20 lg:text-24 leading-24 ml-10px">
                    S&P IT - Agency
                  </span>
                </div>
                <div className="flex flex-wrap items-center md:mr-20px lg:mr-85px 2xl:mr-[150px]">
                  <img src={FruitIcon3} alt="" />
                  <span className="text-20 lg:text-24 leading-24 ml-10px">
                    Test Company
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-30px md:pt-70px xl:pt-[150px] lg:pt-100px 2xl:pt-[150px] pb-20px md:pb-70px bg-[rgba(43,183,86,0.05)]">
        <div className="px-15px w-full mx-auto clear-both">
          <div className="flex flex-wrap mx-0 lg:-mx-15px items-center w-full flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-6/12">
              <div className="bg-primaryColor -mx-15px px-10px md:pl-[85px] 2xl:pl-[180px] py-15px md:py-30px pr-20px w-fit md:w-[720px] rounded-tr-20px rounded-br-20px">
                <div className="text-[22px] md:text-32 leading-32 text-white">
                  Meet the bests
                </div>
                <div className="text-[34px] md:text-70 leading-70 font-semibold text-white">
                  NUTRITIONIST
                </div>
              </div>
              <p className="md:pl-[85px] 2xl:pl-[180px] text-18 leading-32 py-20px md:py-50px font-medium">
                Our team of expert nutritionists is here to help you achieve
                your health and wellness goals. Our nutritionists are highly
                trained and qualified professionals with a deep understanding of
                the science behind nutrition and how it can impact your body and
                mind
              </p>
              <ul className="pl-30px md:pl-[85px] 2xl:pl-[180px]">
                <li className="relative text-16 md:text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Registered Dietitian with the Academy of Nutrition and
                  Dietetics
                </li>
                <li className="relative text-16 md:text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  5+ years of experience in the field
                </li>
                <li className="relative text-16 md:text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Specialize in weight management, chronic disease prevention,
                  and sports nutrition
                </li>
                <li className="relative text-16 md:text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Skilled in developing recipes and meal plans.
                </li>
                <li className="relative text-16 md:text-18 leading-32 font-semibold mb-20px before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Passionate about helping people live healthy, fulfilling lives
                </li>
                <li className="relative text-16 md:text-18 leading-32 font-semibold before:content-[''] before:w-20px before:h-20px before:border-4 before:border-[#DC2F39] before:absolute before:bottom-1/2 before:translate-y-1/2 before:-left-30px before:rounded-full">
                  Committed to staying up-to-date with the latest research and
                  trends in nutrition
                </li>
              </ul>
              <div className="p-20px md:pl-[85px] 2xl:pl-[150px] md:pt-50px 2xl:pt-100px">
                <ButtonArrow className="w-[215px] pl-25px" Title="Reach Us" />
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="ml-0 lg:ml-[160px] mb-50px lg:mb-0 xl:ml-[110px] 2xl:ml-[213px] 2xl:mr-[173px] relative flex items-center justify-center">
                <img
                  className="hidden lg:block absolute scale-125 -translate-x-70px -translate-y-10 -rotate-6 -z-1"
                  src={MeetCircles}
                  alt=""
                />
                <img
                  className="w-full h-[400px] lg:h-full object-cover lg:w-[878px] md:ml-auto mx-auto rounded-20px shadow-xl z-10"
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
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full px-15px">
              <div className="text-26 lg:text-40 leading-40 font-semibold text-center pb-0 md:pb-50px">
                Have a{" "}
                <span className="text-primaryColor font-bold">VeganCave</span>{" "}
                for
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-15px items-center w-full">
            <div className="w-[1270px] px-15px mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-full lg:w-4/12 flex justify-center lg:block">
                    <img src={VeganCaveForImage1} alt="" />
                  </div>
                  <div className="w-full lg:w-8/12 pl-10px flex flex-col justify-center items-center lg:block">
                    <div className="text-20 leading-20 font-bold pb-15px text-center lg:text-left">
                      Find a diet you love
                    </div>
                    <p className="text-16 leading-24 font-medium text-center lg:text-left">
                      Find a nutritious Diet that fits your lifestyle and food
                      preferences. Take charge of your daily habits with one of
                      the many ongoing Diets including Clean Eating and High
                      Protein
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-full lg:w-4/12 flex justify-center lg:block">
                    <img src={VeganCaveForImage2} alt="" />
                  </div>
                  <div className="w-full lg:w-8/12 pl-10px flex flex-col justify-center items-center lg:block">
                    <div className="text-20 leading-20 font-bold pb-15px text-center lg:text-left">
                      Track your way to success
                    </div>
                    <p className="text-16 leading-24 font-medium text-center lg:text-left">
                      Track your activities and what you eat with the help of
                      our food-, exercise- and water trackers to maintain a
                      balanced everyday life.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-full lg:w-4/12 flex justify-center lg:block">
                    <img src={VeganCaveForImage3} alt="" />
                  </div>
                  <div className="w-full lg:w-8/12 pl-10px flex flex-col justify-center items-center lg:block">
                    <div className="text-20 leading-20 font-bold pb-15px text-center lg:text-left">
                      Start a simplified meal plan
                    </div>
                    <p className="text-16 leading-24 font-medium text-center lg:text-left">
                      Follow a 7-21 day Meal Plan and get four pre-planned
                      recipes a day. Depending on your health goals, there are
                      many Meal Plans to choose from including Keto Burn and
                      Vegan for a week.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-15px flex flex-wrap items-center">
                  <div className="w-full lg:w-4/12 flex justify-center lg:block">
                    <img src={VeganCaveForImage4} alt="" />
                  </div>
                  <div className="w-full lg:w-8/12 pl-10px flex flex-col justify-center items-center lg:block">
                    <div className="text-20 leading-20 font-bold pb-15px text-center lg:text-left">
                      Start your own healthy journey
                    </div>
                    <p className="text-16 leading-24 font-medium text-center lg:text-left">
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
      <div className="pt-50px md:pt-100px xl:pt-[200px] pb-50px lg:pb-[115px] relative">
        <div className="hidden xl:block absolute bottom-0 right-0">
          <img src={VeganCaveForyouBack} alt="" />
        </div>
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap ml-0 mr-auto">
            <div className="w-[1240px] mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="text-26 md:text-40 leading-40 font-semibold">
                    What is a
                    <span className="font-bold text-primaryColor">
                      VeganCave
                    </span>{" "}
                    for you?
                  </div>
                  <div className="flex flex-wrap pt-20px md:pt-80px">
                    <div className="w-full md:w-6/12 px-15px mb-30px md:mb-0 flex  items-center justify-center md:block">
                      <img src={VeganCaveForyouImage} alt="" />
                    </div>
                    <div className="w-full md:w-6/12 px-15px">
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
      <div className="pb-30px md:pb-80px lg:pb-120px">
        <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap clear-both">
            <div className="w-full">
              <div className="relative w-full md:w-[463px] h-full md:h-[108px] inline-flex items-center justify-center pb-15px md:pb-40px">
                <span className="absolute text-[45px] md:text-100 text-normal font-bold text-[#F5F5F5] -z-1">
                  RESULTS
                </span>
                <span className="text-18 md:text-32 leading-32 font-semibold">
                  VeganCave Reviews
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[450px] md:w-[1230px] mx-auto pt-40px clear-both">
              <div className="w-full bg-white shadow-[0px_0px_4px_4px_rgba(0,0,0,0.025)] rounded-20px">
                <div className="flex flex-wrap text-center flex-col-reverse md:flex-row">
                  <div className="w-full md:w-8/12 pl-10px pr-15px lg:px-40px xl:px-90px py-40px">
                    <div className="text-26 md:text-32 leading-40 text-[#32794F] pb-25px font-semibold text-center">
                      10 kgs in 3 weeks
                    </div>
                    <p className="text-16 lg:text-20 leading-[27px] font-medium  pb-20px md:pb-30px lg:pb-50px">
                      This platform is like the best thing that has happened to
                      my health. I was shocked how my cravings were gone after
                      only a couple of days and not wanting to eat between meals
                      really helped. Losing 6 kg in only 3 weeks is fantastic,
                      but the best part is the health improvement.
                    </p>
                    <div className="text-[22px] lg:text-28 leading-32 font-medium text-center pb-5px">
                      Anshuman Khuranna
                    </div>
                    <div className="text-16 lg:text-18 leading-24 text-center">
                      3 week weight loss meal plan
                    </div>
                  </div>
                  <div className="w-full md:w-4/12">
                    <img
                      className="w-full sm:h-[300px] md:h-full object-cover rounded-tl-20px rounded-tr-20px md:rounded-br-20px"
                      src={ReviewImage}
                      alt=""
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

export default Nutritionist;
