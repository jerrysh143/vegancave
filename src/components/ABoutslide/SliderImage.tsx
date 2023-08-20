import React from "react";

interface ImageContentProps {
  Image?: string;
}

const SliderContent = (props: ImageContentProps) => {
  return (
    <>
      <img className="w-full h-full rounded-lg" src={props.Image} alt="" />
    </>
  );
};

export default SliderContent;
