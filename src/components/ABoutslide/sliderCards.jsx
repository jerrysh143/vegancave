import React from "react";
import Slider from "react-slick";
import SliderContent from "./SliderImage.jsx";

export default function SliderABout() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="w-4/12 px-15px">
        <SliderContent ImagePath="AboutSlide1.jpg" />
      </div>
      <div className="w-4/12 px-15px">
        <SliderContent ImagePath="AboutSlide2.jpg" />
      </div>
      <div className="w-4/12 px-15px">
        <SliderContent ImagePath="AboutSlide3.jpg" />
      </div>
      <div className="w-4/12 px-15px">
        <SliderContent ImagePath="AboutSlide1.jpg" />
      </div>
    </Slider>
  );
}
