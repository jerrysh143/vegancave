import React from "react";

interface ClassPropsIcon {
  className?: string;
}

const SearchIcon = (props: ClassPropsIcon) => {
  return (
    <>
      <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        className={props.className}
      >
        <path
          d="M10.5 21C15.7467 21 20 16.5228 20 11C20 5.47715 15.7467 1 10.5 1C5.25329 1 1 5.47715 1 11C1 16.5228 5.25329 21 10.5 21Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 27L18 19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default SearchIcon;
