import React from "react";
import Slide1 from "../../images/AboutSlide1.jpg";
import Slide2 from "../../images/AboutSlide2.jpg";
import Slide3 from "../../images/AboutSlide3.jpg";

interface CardsProps {
  ImagePath?: string;
}

const SlideImage = [{ Image: Slide1 }, { Image: Slide2 }, { Image: Slide3 }, { Image: Slide1 }];

const SliderContent = (props: CardsProps) => {
  return (
    <div className="">
      {SlideImage.map((e) => (
          <img className="w-full h-full" src={e.Image} alt="" />
      ))}
    </div>
  );
};

export default SliderContent;
