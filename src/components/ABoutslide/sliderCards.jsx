import React from "react";
import Slider from "react-slick";
import Slide1 from "../../images/AboutSlide1.jpg";
import Slide2 from "../../images/AboutSlide2.jpg";
import AboutSlide from "../../images/Icons/aboutSlide.tsx";
import SliderContent from "./SliderImage";

const SlideImage = [{ Image: Slide1 }];
const SlideImage2 = [{ Image: Slide2 }];
const SlideImage3 = [{ Image: Slide1 }];
const SlideImage4 = [{ Image: Slide2 }];
const SlideImage5 = [{ Image: Slide1 }];

export default function Sliderabout() {
  var settings = {
    dots: true,
    arrow: false, 
    infinite: true,
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
