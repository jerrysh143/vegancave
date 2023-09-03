import React from "react";

interface BProps {
  Title?: string;
  className?: string;
  onClick?: () => void;
}

const Button = (props: BProps) => {
  return (
    <>
      <button className={`${props.className}`} onClick={props.onClick}>
        <span className="block">{props.Title}</span>
      </button>
    </>
  );
};

export default Button;
