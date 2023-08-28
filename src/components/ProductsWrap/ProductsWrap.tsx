import React from "react";
import Product1 from "../../images/product1.jpg";
import Product2 from "../../images/product2.jpg";
import Product3 from "../../images/product3.jpg";
import Product4 from "../../images/product4.jpg";
import Button from "../Buttons/buttonHome";
import StarIcon from "../../images/Icons/starIcon";

const DataProduct = [
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$15.00",
    Image: Product1,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$9.00",
    Image: Product2,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.06",
    Image: Product3,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product4,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product1,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product2,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product3,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product4,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product1,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product2,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product3,
  },
  {
    Title: "Green Spirulina Smoothie Bowl",
    Rate: "$11.20",
    Image: Product4,
  },
];

const ProductsWrap = () => {
  return (
    <>
      {DataProduct.map((e) => (
        <div className="w-full md:w-6/12 lg:w-4/12 px-15px flex flex-wrap items-center my-15px md:my-25px">
          <div className="flex w-full h-[187px] md:h-[332px]">
            <img
              className="w-full object-cover rounded-tl-15px rounded-tr-15px md:rounded-tl-35px md:rounded-tr-35px"
              src={e.Image}
              alt=""
            />
          </div>
          <div className="bg-white shadow-lg w-full rounded-bl-15px rounded-br-15px md:rounded-bl-35px md:rounded-br-35px p-25px flex flex-wrap justify-between">
            <div className="w-1/2 md:w-7/12 xl:w-1/2">
              <div className="500:text-14 md:text-[19px] xl:text-26 pb-20px">
                {e.Title}
              </div>
              <div>
                <Button
                  className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[150px] h-[37px] sm:h-[46px] text-16 md:text-18 xl:text-20 leading-normal font-bold rounded-10px md:rounded-15px"
                  Title="Add To Cart"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-5/12 xl:w-1/2 flex justify-start items-end flex-col">
              <div className="flex flex-wrap">
                <div className="pr-10px">
                  <StarIcon />
                </div>
                <div className="text-14 pb-25px">4.9</div>
              </div>
              <div className="text-18 leading-[22px] font-bold">{e.Rate}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsWrap;
