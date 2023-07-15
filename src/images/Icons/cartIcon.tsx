import React from "react";

interface ClassPropsIcon {
  className?: string;
}

const cartIcon = (props:ClassPropsIcon) => {
  return (
    <>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1.33325L1 7.46659V28.9333C1 29.7466 1.35119 30.5266 1.97631 31.1017C2.60143 31.6768 3.44928 31.9999 4.33333 31.9999H27.6667C28.5507 31.9999 29.3986 31.6768 30.0237 31.1017C30.6488 30.5266 31 29.7466 31 28.9333V7.46659L26 1.33325H6Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 8H31"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.4287 13.3333C22.4287 15.1014 21.7514 16.7971 20.5458 18.0473C19.3402 19.2975 17.7051 19.9999 16.0001 19.9999C14.2951 19.9999 12.66 19.2975 11.4544 18.0473C10.2488 16.7971 9.57153 15.1014 9.57153 13.3333"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default cartIcon;
