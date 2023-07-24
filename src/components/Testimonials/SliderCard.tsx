import React from "react";
import UserImage from "../../images/AuthorImage.jpg"

interface TestimonialProps {
  Description?: string;
  ImagePath?: string;
  Author?: string;
  Position?: string;
}

const imgData = [{image: UserImage}]

const SliderCard = (props: TestimonialProps) => {
  return (
    <div className=" p-0 m-15px sm:p-50px md:p-0 md:m-30px">
      {imgData.map(e => 
      <div className="shadow-[0px_0px_50px_0px_rgba(0,0,0,0.10)] p-15px md:px-50px md:py-[100px] bg-white rounded-35px">
        <div className="flex items-center justify-center pb-20px md:pb-45px">
          <div className="mr-15px">
            <img
              className="w-75px h-75px rounded-full"
              src={e.image}
              alt=""
            />
          </div>
          <div>
            <div className="text-14 md:text-18 leading-normal font-semibold">
              {props.Author}
            </div>
            <p className="text-13 leading-normal">{props.Position}</p>
          </div>
        </div>
        <p className="text-14 md:text-18 leading-normal font-medium text-center">
          {props.Description}
        </p>
      </div>
       )}
    </div>
  );
};

export default SliderCard;
