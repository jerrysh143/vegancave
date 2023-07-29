import React from "react";
import MailIcon from "../../images/Icons/mailIcon";
import Button from "../../components/Buttons/buttonOrder";
import LoginOverlay from "./LoginOverlay";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../";

const Login = () => {
  return (
    <LoginOverlay>
      <div className="w-4/12">
        <div className="text-28 leading-normal pb-40px font-bold font-opensans">
          Login
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
        <div>
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            Password
          </p>
          <input
            type="password"
            placeholder="*******"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
          />
        </div>
        <div className="text-14 leading-normal font-opensans text-right pt-6px pb-50px">
          Forget password?
        </div>
        <div>
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
      </div>
      <div className="w-8/12"></div>
    </LoginOverlay>
  );
};

export default Login;
