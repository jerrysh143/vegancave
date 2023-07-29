import React from "react";
import SliderContent from "./SliderImage.tsx";
import Slider from "react-slick";

export default function SliderABout() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="">
          <SliderContent />
        </div>
        <div className="">
          <SliderContent />
        </div>
        <div className="">
          <SliderContent />
        </div>
        <div className="">
          <SliderContent />
        </div>
        <div className="">
          <SliderContent />
        </div>
      </Slider>
    </>
  );
}
