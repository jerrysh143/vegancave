import React, { useEffect, useRef } from "react";
import OverlayBack from "../AuthPage/OverlayBack";
import { Form } from "react-router-dom";
import Button from "../../components/Buttons/buttonHome";
import ProfileIcon from "../../images/Icons/profileIcon";

const FillDetail = () => {
  document.body.classList.toggle("getFillPage");
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((state) => state + 1);
  };
  return (
    <>
      <OverlayBack>
        <Form className="w-full 767:w-8/12 992:w-6/12 1200:w-4/12 px-15px">
          <div className="text-28 leading-normal pb-40px font-bold font-opensans text-center">
            Fill up your details
          </div>
          <div className="relative pb-20px 767:pb-30px 992:pb-40px">
            <label className="text-18 leading-6 font-normal font-opensans pb-5px">
              Full Name
            </label>
            <input
              type="text"
              name="ABC"
              placeholder="ABC"
              className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
            />
            <div className="absolute top-[42px] right-15px">
              <ProfileIcon />
            </div>
          </div>
          <div className="pb-30px">
            <label className="text-18 leading-6 font-normal font-opensans pb-5px">
              Date of Birth
            </label>
            <input
              type="text"
              name="Date Of Birth"
              placeholder="Enter your date of birth here"
              className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
            />
          </div>
          <div className="pb-30px">
            <div className="text-18 leading-6 font-normal font-opensans pb-15px">
              Gender
            </div>
            <div className="flex flex-wrap items-center">
              <div className="mr-50px">
                <input
                  className="mr-10px relative w-0 h-0 pl-35px block before:w-20px before:h-20px before:rounded-full before:content-[''] before:absolute before:border-[1px] before:top-[1.5px] checked:before:border-transparent after:content-[''] after:w-14px after:h-14px after:absolute after:top-[5px] after:left-[3px] after:bg-[#E0E0E0] after:rounded-full checked:before:border-black checked:after:bg-primaryColor"
                  name="tab"
                  type="radio"
                  id="html"
                />
                <label className="pl-35px">Male</label>
              </div>
              <div>
                <input
                  className="mr-10px relative w-0 h-0 pl-35px block before:w-20px before:h-20px before:rounded-full before:content-[''] before:absolute before:border-[1px] before:top-[1.5px] checked:before:border-transparent after:content-[''] after:w-14px after:h-14px after:absolute after:top-[5px] after:left-[3px] after:bg-[#E0E0E0] after:rounded-full checked:before:border-black checked:after:bg-primaryColor"
                  name="tab"
                  type="radio"
                  id="html"
                />
                <label className="pl-35px">Female</label>
              </div>
            </div>
          </div>
          <div className="pb-30px">
            <label className="text-18 leading-6 font-normal font-opensans pb-5px">
              Your Goal
            </label>
            <input
              type="text"
              name="Weight"
              placeholder="Enter your Current weight in kgs"
              className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
            />
          </div>
          <div className="pb-30px">
            <label className="text-18 leading-6 font-normal font-opensans pb-5px">
              Your Goal
            </label>
            <input
              type="text"
              name="Weight"
              placeholder="Enter your desired weight in kgs"
              className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
            />
          </div>
          <div className="pb-30px">
            <label className="text-18 leading-6 font-normal font-opensans pb-5px">
              Height
            </label>
            <input
              type="text"
              name="Weight"
              placeholder="Enter your current height in cms"
              className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
            />
          </div>
          <div className="">
            <Button
              className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-montserratbg-primaryColor font-montserrat"
              Title="Submit Details"
            />
          </div>
        </Form>
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 ${count ? "block":"hidden"}`} onClick={handleClick}>
          <div className="rounded-md bg-white border-2 border-primaryColor max-w-[600px] h-[600px] flex items-center flex-col justify-center p-30px shadow-lg">
            <h2 className="text-primaryColor text-36 font-bold pb-15px">
              Well done!
            </h2>
            <p className="text-24 text-center">
              Your form Submitted Successfully Our team will get Back to you.
            </p>
          </div>
        </div>
        <div className="w-8/12"></div>
      </OverlayBack>
    </>
  );
};

export default FillDetail;
