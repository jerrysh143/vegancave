import React, { ReactElement } from "react";
import LoginBackground from "../../images/login_background.jpg";

interface Props {
  children: ReactElement[] | ReactElement;
}

const OverlayBack = (props:Props) => {
  return (
    <div className="h-[calc(100dvh_-_133px)] relative overflow-hidden -z-1">
      <div className="absolute right-0 top-0">
        <img src={LoginBackground} alt="" />
      </div>
      <div className="1600:w-[1530px] mx-auto px-15px h-full">
        <div className="flex flex-wrap h-full">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default OverlayBack;