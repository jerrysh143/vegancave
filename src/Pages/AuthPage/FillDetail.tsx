import React from "react";
import OverlayBack from "../AuthPage/OverlayBack";
import { Form, Link } from "react-router-dom";
import { ROUTE_NAME } from "../typesRoute";
import Button from "../../components/Buttons/buttonHome";
import ProfileIcon from "../../images/Icons/profileIcon";

const FillDetail = () => {
  document.body.classList.toggle("getQuotePage");
  return (
    <>
      <OverlayBack>
        <Form className="w-4/12  px-15px">
          <div className="text-28 leading-normal pb-40px font-bold font-opensans">
            Fill up your details
          </div>
          <div className="relative pb-40px">
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
                <input className="mr-10px relative w-0 h-0 pl-35px block before:w-20px before:h-20px before:rounded-full before:content-[''] before:absolute before:border-[1px] before:top-[1.5px] checked:before:border-transparent checked:before:bg-primaryColor" name="tab" type="radio" id="html" />
                <label className="pl-35px">Male</label>
              </div>
              <div>
                <input className="mr-10px" name="tab" type="radio" id="html" />
                <label>Female</label>
              </div>
            </div>
          </div>
          <div className="">
            <Button
              className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-montserratbg-primaryColor font-montserrat"
              Title="Login"
            />
          </div>
          <div className="text-18 font-normal font-opensans text-[#616161] flex justify-center pt-40px">
            Don’t have an account?
            <Link to={ROUTE_NAME.SIGNUP}>
              <div className="text-primaryColor font-bold pl-10px cursor-pointer">
                Sign up
              </div>
            </Link>
          </div>
        </Form>
        <div className="w-8/12"></div>
      </OverlayBack>
    </>
  );
};

export default FillDetail;
