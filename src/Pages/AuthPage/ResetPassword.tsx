import React from "react";
import Button from "../../components/Buttons/buttonOrder";
import OverlayBack from "./OverlayBack";

const ResetPassword = () => {
  document.body.classList.toggle("resetPassPage");
  return (
    <OverlayBack>
      <div className="m-auto text-center 992:text-left w-full 567:w-8/12 992:w-7/12 1200:w-4/12 bg-white/70 py-20px px-15px shadow-lg 992:shadow-none">
        <div className="text-28 leading-normal font-bold font-opensans pb-15px text-center">Reset password</div>
        <div className="text-[#424242] text-18 leading-normal font-opensans pb-30px text-center">Create your Password and Explore.</div>
        <div className="pb-40px text-left">
          <label className="text-left w-full block text-18 leading-6 font-normal font-opensans pb-5px">
            New Password
          </label>
          <input
            type="password"
            placeholder="*******"
            className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
          />
        </div>
        <div className="pb-30px text-left">
          <p className="text-left w-full block text-18 leading-6 font-normal font-opensans pb-5px">
            Confirm Password
          </p>
          <input
            type="password"
            placeholder="*******"
            className="flex items-center leading-[45px] pl-15px pr-[31px] text-14 w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
          />
        </div>
        <div>
            <Button className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-opensans" Title="Create password" />
        </div>
      </div>
      <div className="w-8/12 px-15px"></div>
    </OverlayBack>
  );
};

export default ResetPassword;
