import React from "react";
import Product1 from "../../images/product1.jpg";
import Product2 from "../../images/product2.jpg";
import Product3 from "../../images/product3.jpg";
import Product4 from "../../images/product4.jpg";
import Button from "../Buttons/buttonHome";

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
        <div className="w-4/12 px-15px flex flex-wrap items-center my-25px">
          <div className="flex w-full h-[332px]">
            <img
              className="w-full object-cover rounded-tl-35px rounded-tr-35px"
              src={e.Image}
              alt=""
            />
          </div>
          <div className="bg-white shadow-lg w-full rounded-bl-35px rounded-br-35px p-25px flex flex-wrap justify-between">
            <div className="w-1/2">
              <div className="text-26 pb-20px">{e.Title}</div>
              <div>
                <Button
                  className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[150px] h-[37px] sm:h-[46px] text-20 sm:text-18 xl:text-20 leading-normal font-bold rounded-15px"
                  Title="Add To Cart"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-start items-end flex-col">
              <div className="text-14 pb-25px">4.9</div>
              <div className="text-18 leading-[22px] font-bold">{e.Rate}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsWrap;
