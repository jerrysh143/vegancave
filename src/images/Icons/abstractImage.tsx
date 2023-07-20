import React from "react";

interface ClassPropsIcon {
    className?: string;
  }

const AbstractImage = (props:ClassPropsIcon) => {
  return (
    <>
      <svg
        width="310"
        height="270"
        viewBox="0 0 383 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <path
          d="M1 236.818C54.1672 228.932 163.401 197.592 175.002 135.318C189.502 57.4747 37.5 45 61.29 153.634C72.6749 205.621 198 204.5 220.5 173.5C256.5 123.899 255.5 58.9996 336 64.9997"
          stroke="#E4E4E4"
          stroke-width="3"
          stroke-dasharray="12 12"
        />
        <path
          d="M355.743 47.1766C361.692 48.7705 363.684 56.2062 359.33 60.5608L314.561 105.33C310.206 109.684 302.77 107.692 301.176 101.743L284.79 40.588C283.196 34.6394 288.639 29.1961 294.588 30.79L355.743 47.1766Z"
          fill="#E4E4E4"
        />
      </svg>
    </>
  );
};

export default AbstractImage;