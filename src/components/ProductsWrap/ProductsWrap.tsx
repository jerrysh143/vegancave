import React from "react";
import Button from "../Buttons/buttonHome";
import StarIcon from "../../images/Icons/starIcon";

interface ProductItems {
  title?: string;
  price?: number;
}
interface ProductItemSet {
  title?: string;
  product_items: Array<ProductItems>;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  product_itemset: Array<ProductItemSet>;
  categories: Array<number>;
}

const ProductsWrap = (props: { products: Product[] }) => {
  return (
    <>
      {props.products.map((product) => (
        <div
          className="w-full md:w-6/12 lg:w-4/12 px-15px flex flex-wrap items-center my-15px md:my-25px"
          key={product.id}
        >
          <div className="flex w-full h-[187px] md:h-[332px]">
            <img
              className="w-full object-cover rounded-tl-15px rounded-tr-15px md:rounded-tl-35px md:rounded-tr-35px"
              src={product.image}
              alt="Product Image"
            />
          </div>
          <div className="bg-white shadow-lg w-full rounded-bl-15px rounded-br-15px md:rounded-bl-35px md:rounded-br-35px p-25px flex flex-wrap justify-between">
            <div className="w-1/2 md:w-7/12 xl:w-1/2">
              <div className="500:text-14 md:text-[19px] xl:text-26 pb-20px">
<<<<<<< HEAD
                {product.title}
=======
                {e.Title}
>>>>>>> 5d7aa22b5b469a91b402342e1b3088b87f405de6
              </div>
              <div>
                <Button
                  className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[150px] h-[37px] sm:h-[46px] text-16 md:text-18 xl:text-20 leading-normal font-bold rounded-10px md:rounded-15px"
                  Title="Add To Cart"
                />
              </div>
            </div>
            <div className="w-1/2 md:w-5/12 xl:w-1/2 flex justify-start items-end flex-col">
<<<<<<< HEAD
              <div className="text-14 pb-25px">₹ {product.price}</div>
              <div className="text-18 leading-[22px] font-bold">4.5</div>
=======
              <div className="flex flex-wrap">
                <div className="pr-10px">
                  <StarIcon />
                </div>
                <div className="text-14 pb-25px">4.9</div>
              </div>
              <div className="text-18 leading-[22px] font-bold">{e.Rate}</div>
>>>>>>> 5d7aa22b5b469a91b402342e1b3088b87f405de6
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsWrap;
