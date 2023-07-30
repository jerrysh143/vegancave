import React, { ReactElement } from "react";
import LoginBackground from "../../images/login_background.jpg";

interface Props {
  children: ReactElement[] | ReactElement;
}

const Overlay = (props:Props) => {
  return (
    <div className="h-[calc(100dvh_-_133px)]">
      <div className="absolute right-0 top-0 z-0 h-full">
        <img className="h-full" src={LoginBackground} alt="" />
      </div>
      <div className="1600:w-[1530px] mx-auto px-15px h-full">
        <div className="flex flex-wrap -mx-15px items-center h-full">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
