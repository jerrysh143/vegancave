import React from "react";
interface ClassPropsIcon {
  className?: string;
}
const leftArrowIcon = (props: ClassPropsIcon) => {
  return (
    <div className={props.className}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.58325 8H14.4166"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 1.58325L14.4167 7.99992L8 14.4166"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default leftArrowIcon;
