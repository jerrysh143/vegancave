import React from "react";
import SliderContent from "./SliderImage.tsx";
import Slider from "react-slick";
import Slide1 from "../../images/AboutSlide1.jpg";
import Slide2 from "../../images/AboutSlide2.jpg";
import Slide3 from "../../images/AboutSlide3.jpg";

const SlideImage = [
  { Image: Slide1 }
];
const SlideImage2 = [
    { Image: Slide2 },
  ];
  const SlideImage3 = [
    { Image: Slide3 },
  ];
  const SlideImage4 = [
    { Image: Slide1 },
  ];
  const SlideImage5 = [
    { Image: Slide3 },
  ];

export default function SliderABout() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="">
          {SlideImage.map((e) => (
            <SliderContent Image={e.Image} />
          ))}
        </div>
        <div className="">
          {SlideImage2.map((e) => (
            <SliderContent Image={e.Image} />
          ))}
        </div>
        <div className="">
          {SlideImage3.map((e) => (
            <SliderContent Image={e.Image} />
          ))}
        </div>
        <div className="">
          {SlideImage4.map((e) => (
            <SliderContent Image={e.Image} />
          ))}
        </div>
        <div className="">
          {SlideImage5.map((e) => (
            <SliderContent Image={e.Image} />
          ))}
        </div>
      </Slider>
    </>
  );
}
