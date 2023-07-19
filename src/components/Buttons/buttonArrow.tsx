import React from "react";
import ArrowRightIcon from "../../images/Icons/arrowRightIcon.tsx";

interface ButtonArrowProps {
  className?: string;
  Title?: string;
}

const ButtonArrow = (props: ButtonArrowProps) => {
  return (
    <>
      <button className="btn--border btn-read btn--animated bg-primaryColor flex items-center justify-center relative w-[276px] pr-70px h-[74px] rounded-[37px] text-18 leading-normal font-bold text-white">
        {props.Title}
        <div
          className="w-[58px] h-[58px] bg-white flex items-center justify-center border-1px border-solid rounded-full border-[1px] border-black absolute top-10px
       right-10px"
        >
          <ArrowRightIcon />
        </div>
      </button>
    </>
  );
};

export default ButtonArrow;
