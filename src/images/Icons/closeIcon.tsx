import React from "react";

interface ClassPropsIcon {
    className?: string;
}

const CloseIcon = (props:ClassPropsIcon) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="32"
        height="33"
        x="0"
        y="0"
        viewBox="0 0 32 32"
        className={props.className}
      >
        <g>
          <path
            d="M21 12.46 17.41 16 21 19.54A1 1 0 0 1 21 21a1 1 0 0 1-.71.29 1 1 0 0 1-.7-.29L16 17.41 12.46 21a1 1 0 0 1-.7.29 1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41L14.59 16l-3.54-3.54a1 1 0 0 1 1.41-1.41L16 14.59l3.54-3.54A1 1 0 0 1 21 12.46zm4.9 13.44a14 14 0 1 1 0-19.8 14 14 0 0 1 0 19.8zM24.49 7.51a12 12 0 1 0 0 17 12 12 0 0 0 0-17z"
            data-name="Layer 22"
            fill="#000000"
            data-original="#000000"
            className=""
          ></path>
        </g>
      </svg>
    </>
  );
};

export default CloseIcon;
