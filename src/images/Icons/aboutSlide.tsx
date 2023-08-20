import React from "react";

interface ClassPropsIcon {
    className?: string;
}
const aboutSlide = (props:ClassPropsIcon) => {
  return (
    <div>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <path
          d="M14.125 8.3125H3.625C2.9075 8.3125 2.3125 7.7175 2.3125 7C2.3125 6.2825 2.9075 5.6875 3.625 5.6875H14.125C14.8425 5.6875 15.4375 6.2825 15.4375 7C15.4375 7.7175 14.8425 8.3125 14.125 8.3125Z"
          fill="currentColor"
        />
        <path
          d="M7.12488 13.5625C6.79238 13.5625 6.45988 13.44 6.19738 13.1775L0.947384 7.92752C0.703293 7.68053 0.566406 7.34727 0.566406 7.00002C0.566406 6.65277 0.703293 6.31951 0.947384 6.07252L6.19738 0.82252C6.70488 0.31502 7.54488 0.31502 8.05238 0.82252C8.55988 1.33002 8.55988 2.17002 8.05238 2.67752L3.72988 7.00002L8.05238 11.3225C8.55988 11.83 8.55988 12.67 8.05238 13.1775C7.78988 13.44 7.45738 13.5625 7.12488 13.5625Z"
          fill="currentcolor"
        />
      </svg>
    </div>
  );
};

export default aboutSlide;
