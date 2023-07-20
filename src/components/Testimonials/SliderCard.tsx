import React from "react";
interface TestimonialProps {
  Description?: string;
  ImagePath?: string;
  Author?: string;
  Position?: string;
}

const SliderCard = (props: TestimonialProps) => {
  return (
      <div className="shadow-[0px_0px_50px_0px_rgba(0,0,0,0.10)] px-50px py-[115px] bg-white">
        <div className="flex items-center justify-center pb-45px">
          <div className="mr-15px">
            <img
              className="w-75px h-75px rounded-full"
              src={`"../../images/${props.ImagePath}"`}
              alt=""
            />
          </div>
          <div>
            <div className="text-18 leading-normal font-semibold">
              {props.Author}
            </div>
            <p className="text-13 leading-normal">{props.Position}</p>
          </div>
        </div>
        <p className="text-18 leading-normal font-medium text-center">
          {props.Description}
        </p>
      </div>
  );
};

export default SliderCard;
