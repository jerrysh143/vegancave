import React from "react";

interface BProps {
  Title?: string;
}

const Button = (props:BProps) => {
  return (
    <>
     <button className="bg-primaryColor w-[248px] h-[86px] text-26 leading-unset font-bold text-white rounded-15px font-montserrat">{props.Title}</button> 
    </>
  );
};

export default Button;
