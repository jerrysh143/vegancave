import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderContent from "./SliderImage.jsx";
import "swiper/css";

export default function SliderABout() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="w-4/12 px-15px">
        <div>
          <SliderContent />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-4/12 px-15px">
        <div>
          <SliderContent />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-4/12 px-15px">
        <div>
          <SliderContent />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-4/12 px-15px">
        <div>
          <SliderContent />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-4/12 px-15px">
        <div>
          <SliderContent />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
