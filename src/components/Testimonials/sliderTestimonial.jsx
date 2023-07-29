import React from "react";
import SliderCard from "./SliderCard";
import Slider from "react-slick";

export default function SliderTestimonial() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="">
        <SliderCard
          ImagePath="AuthorImage.jpg"
          Description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus."'
          Author="Willians Jhone"
          Position="CEO & Co-Founder"
        />
      </div>
      <div className="">
        <SliderCard
          ImagePath="AuthorImage.jpg"
          Description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus."'
          Author="1Willians Jhone"
          Position="1CEO & Co-Founder"
        />
      </div>
      <div className="">
        <SliderCard
          ImagePath="AuthorImage.jpg"
          Description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus."'
          Author="2Willians Jhone"
          Position="2CEO & Co-Founder"
        />
      </div>
    </Slider>
  );
}
