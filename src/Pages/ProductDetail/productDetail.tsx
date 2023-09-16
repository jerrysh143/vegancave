import React, { useState } from "react";
import ProductDetailImage from "../../images/ProductImage.jpg";
import StarIcon from "../../images/Icons/starIcon";
import Minus from "../../images/minus.png";
import Plus from "../../images/plus.png";

interface QuantityCounterProps {
  initialQuantity: number;
}

const productDetail = (props: QuantityCounterProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [quantity, setQuantity] = useState(props.initialQuantity);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="">
      <div className="px-15px w-full max-w-full 1600:w-[1530px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-[calc(100%_-_671px)] pr-[75px]">
            <h2 className="text-[52px] leading-[65px] text-[#121110] pb-25px">
              Green Spirulina Smoothie Bowl
            </h2>
            <p className="flex flex-wrap pb-20px">
              <ul className="flex flex-wrap items-center">
                <li className="mr-5px">
                  <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                </li>
                <li className="mr-5px">
                  <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                </li>
                <li className="mr-5px">
                  <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                </li>
                <li className="mr-5px">
                  <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                </li>
                <li className="mr-15px">
                  <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                </li>
              </ul>
              <span className="text-20 leading-[35px]">(3 reviews)</span>
            </p>
            <p className="text-20 leading-[35px] pb-20px">
              <strong className="pr-5px">Category :</strong>Breakfast
            </p>
            <p className="text-20 leading-[35px] pb-20px">
              <strong className="pr-5px">Food Type :</strong>Snack, Fast Food
            </p>
            <span className="text-[31px] leading-[40px] pb-20px block">
              $1.85
            </span>
            <p className="text-[20px] leading-[38px]">
              Steamed hot dog bun, grilled frank, mustard, homemade coney
              Islaland hot dong with pure sauce. It’s very delicious and tasty
              to eat for anybody. Let’s grab the food and enjoy!
            </p>
            <div>
              <div className="quantity border-[1px] border-[#55504C] inline-flex items-center justify-center px-15px w-[131px] h-[47px]">
                <button className="minus" aria-label="Decrease">
                  <img src={Minus} alt="" />
                </button>
                <input
                  type="number"
                  className="text-center appearance-none m-0 text-20 p-5px pb-0 leading-[36px]"
                  value="1"
                  min="1"
                  max="10"
                />
                <button className="plus" aria-label="Increase">
                  <img src={Plus} alt="" />
                </button>
              </div>
              <div className="">
                <a className="btn--border btn-read btn--animated" href="#!">
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="">
              <div>
                <input type="checkbox" className="" />
                <label>Store Pickup</label>
              </div>
              <div>
                <input type="checkbox" className="" />
                <label>Delivery</label>
              </div>
            </div>
            <div>
              <button onClick={decrement}>Decrement</button>
              <span>{quantity}</span>
              <button onClick={increment}>Increment</button>
            </div>
          </div>
          <div className="w-[671px] pl-[75px]">
            <div>
              <img
                className="ml-auto mr-0 rounded-[35px]"
                src={ProductDetailImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetail;
