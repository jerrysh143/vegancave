import React from "react";

interface ClassPropsIcon {
    className?: string;
	Fill?: string;
}

const WaveDevider = (props:ClassPropsIcon) => {
  return (
    <div>
      <svg
        className={props.className}
        viewBox="0 0 1443 328"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1443 200.5C1164.5-26.5 198 578 .5 200.5V0H1443v200.5z"
          fill={props.Fill}
        ></path>
      </svg>
    </div>
  );
};

export default WaveDevider;
