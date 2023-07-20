import React from "react";
import LoginOverlay from "./LoginOverlay";
import MailIcon from "../../images/Icons/mailIcon";
import Button from "../../components/Buttons/buttonOrder";

const SignUp = () => {
  return (
    <LoginOverlay>
      <div className="w-4/12">
        <div className="text-28 leading-normal pb-40px font-bold font-opensans text-center">Sign up</div>
        <div className="relative pb-40px">
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            Name
          </p>
          <input
            type="text"
            placeholder="ABC"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
          />
          <div className="absolute top-[42px] right-15px">
            <MailIcon />
          </div>
        </div>
        <div className="relative pb-40px">
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            Mobile No.
          </p>
          <input
            type="tel"
            placeholder="999*******"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white "
          />
          <div className="absolute top-[42px] right-15px">
            <MailIcon />
          </div>
        </div>
        <div className="relative pb-40px">
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            Email
          </p>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
          />
          <div className="absolute top-[42px] right-15px">
            <MailIcon />
          </div>
        </div>
        <div className="pb-50px">
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            Password
          </p>
          <input
            type="password"
            placeholder="*******"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
          />
        </div>
        <div className="text-center text-14 pb-5px px-5px">
          By signing up you agree with the 
          <a href="#!" className="text-primaryColor"> Privacy policy </a>and
          <a href="#!" className="text-primaryColor"> Terms </a> of Vegancave
        </div>
        <div>
          <Button
            className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-opensans"
            Title="Get Started"
          />
        </div>
        <div className="text-18 font-normal font-opensans text-[#616161] flex justify-center pt-40px">
          Already have an account?
          <div className="text-primaryColor font-bold pl-10px">Sign in</div>
        </div>
      </div>
      <div className="w-8/12"></div>
    </LoginOverlay>
  );
};

export default SignUp;
