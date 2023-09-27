import React from "react";
import StarIcon from "../../images/Icons/starIcon";
import poularItem from "../../images/poularItem1.jpg";
import Minus from "../../images/minus.png";
import Plus from "../../images/plus.png";

const sideBarProduct = () => {
  return (
    <>
      <div className="pt-20px pl-20px pb-30px pr-15px border-b-[1px] border-solid border-black/30 mb-10px">
        <div className="flex gap-20px">
          <div className="w-7/12">
            <div className="text-14 pb-5px">Green Spirulina Smoothie Bowl</div>
            <div className="pb-5px">$15.00</div>
            <div className="flex items-center">
              <div className="pr-10px">
                <StarIcon fill="#2BB672" stroke="#2BB672" />
              </div>
              <div className="text-13 leading-normal">4.9</div>
            </div>
            <a
              className="py-5px pr-30px pl-10px mt-10px inline-block border-[1px] border-solid border-black/30 text-[11px] rounded-10px"
              href="#!"
            >
              More Details
            </a>
          </div>
          <div className="w-5/12 h-[108px] relative">
            <img
              src={poularItem}
              alt=""
              className="w-full 567:w-[165px] h-[108px] shadow-[0_2px_30px_0_rgba(0,0,0,0.10)] object-cover rounded-md"
            />
            <div className="quantity inline-flex items-center justify-center px-10px 768:px-15px w-[100px] h-[35px] bg-white rounded-10px absolute -bottom-[22px] left-[50%] -translate-x-[50%] text-center shadow-md">
              <button className="minus" aria-label="Decrease">
                <img src={Minus} alt="" />
              </button>
              <input
                type="number"
                className="text-center appearance-none m-0 text-18 768:text-20 p-0 leading-[36px] bg-transparent"
                value="1"
                min="1"
                max="10"
              />
              <button className="plus" aria-label="Increase">
                <img src={Plus} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sideBarProduct;
