import React from "react";
import LoginOverlay from "./LoginOverlay.tsx";
import Button from "../../components/Buttons/buttonOrder.tsx";

const ResetPassword = () => {
  return (
    <LoginOverlay>
      <div className="w-4/12">
        <div className="text-28 leading-normal font-bold font-opensans pb-15px text-center">Reset password</div>
        <div className="text-[#424242] text-18 leading-normal font-opensans pb-30px text-center">Create your Password and Explore.</div>
        <div className="pb-40px">
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            New Password
          </p>
          <input
            type="password"
            placeholder="*******"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
          />
        </div>
        <div className="pb-30px">
          <p className="text-18 leading-6 font-normal font-opensans pb-5px">
            Confirm Password
          </p>
          <input
            type="password"
            placeholder="*******"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
          />
        </div>
        <div>
            <Button className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-opensans" Title="Create password" />
        </div>
      </div>
      <div className="w-8/12"></div>
    </LoginOverlay>
  );
};

export default ResetPassword;
