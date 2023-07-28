import React from "react";
import Slide1 from "../../images/AboutSlide1.jpg";
import Slide2 from "../../images/AboutSlide2.jpg";
import Slide3 from "../../images/AboutSlide3.jpg";

const SlideImage = [
  { Image: Slide1 },
  { Image: Slide2 },
  { Image: Slide3 },
  { Image: Slide1 },
  { Image: Slide3 },
];

const SliderContent = () => {
  return (
    <>
      {SlideImage.map((e) => (
        <img className="w-full h-full" src={e.Image} alt="" />
      ))}
    </>
  );
};

export default SliderContent;
