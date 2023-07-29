import React from "react";

interface BProps {
  Title?: string;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const Button = (props: BProps) => {
  return (
    <>
      <button type={props.type} className={props.className}>
        {props.Title}
      </button>
    </>
  );
};

export default Button;
