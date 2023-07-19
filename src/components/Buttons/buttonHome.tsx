import React from "react";

interface BProps {
  Title?: string;
  className?:string;
}

const Button = (props: BProps) => {
  return (
    <>
      <button className={`${props.className}`}>
        <span className="block">{props.Title}</span>
      </button>
    </>
  );
};

export default Button;
