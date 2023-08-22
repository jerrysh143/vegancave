import React from "react";

interface ImageContentProps {
  Image?: string;
}

const SliderContent = (props: ImageContentProps) => {
  return (
    <>
      <img className="w-full h-full rounded-20px" src={props.Image} alt="" />
    </>
  );
};

export default SliderContent;
