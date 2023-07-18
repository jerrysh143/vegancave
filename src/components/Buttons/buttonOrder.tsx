import React from "react";

interface BProps {
  Title?: string;
  className?: string;
}

const Button = (props:BProps) => {
  return (
    <>
     <button className={props.className}>{props.Title}</button> 
    </>
  );
};

export default Button;
