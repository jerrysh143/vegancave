import React from "react";

interface BProps {
  Title?: string;
  className?: string;
  onClick?: () => void;
  type?: any;
}

const Button = (props: BProps) => {
  return (
    <>
      <button
        className={`${props.className}`}
        onClick={props.onClick}
        type={props.type}
      >
        <span className="block">{props.Title}</span>
      </button>
    </>
  );
};

export default Button;
