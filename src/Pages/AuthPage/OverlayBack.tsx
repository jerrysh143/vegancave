import React, { ReactElement } from "react";
import LoginBackground from "../../images/login_background.jpg";

interface Props {
  children: ReactElement[] | ReactElement;
}

const OverlayBack = (props:Props) => {
  return (
    <div className="relative overflow-hidden h-[100dvh]">
      <div className="h-full absolute right-0 top-0 -z-1">
        <img className="h-full object-cover" src={LoginBackground} alt="" />
      </div>
      <div className="1600:w-[1530px] mx-auto px-15px h-full">
        <div className="flex flex-wrap h-full items-center">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default OverlayBack;
