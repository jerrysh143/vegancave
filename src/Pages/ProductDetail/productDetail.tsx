/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

// interface QuantityCounterProps {
//   initialQuantity: number;
// }

const productDetail = () => {
  const [Review, setReview] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [quantity, setQuantity] = useState(props.initialQuantity);

  // const increment = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrement = () => {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  return (
    <>
      <div className="pt-30px 768:pt-70px pb-40px">
        <div className="px-15px w-full max-w-full focus:outline-none 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap flex-col-reverse 567:flex-row">
            <div className="w-full 567:w-6/12 1200:w-[calc(100%_-_571px)] xl:w-[calc(100%_-_671px)] pr-25px xl:pr-[75px] border-b-[1px] border-[#121110]/30">
              <h2 className="text-20 leading-[30px] 768:text-[32px] 992:text-[42px] 1200:text-[52px] 768:leading-[42px] 992:leading-[52px] 1200:leading-[65px] text-[#121110] pb-15px 1200:pb-25px">
                Green Spirulina Smoothie Bowl
              </h2>
              <p className="flex flex-wrap pb-10px 1200:pb-20px">
                <ul className="flex flex-wrap items-center">
                  <li className="mr-5px">
                    
                  </li>
                  <li className="mr-5px">
                    
                  </li>
                  <li className="mr-5px">
                    
                  </li>
                  <li className="mr-5px">
                    
                  </li>
                  <li className="mr-15px">
                    
                  </li>
                </ul>
                <span className="text-18 768:text-20 leading-20 768:leading-[35px]">(3 reviews)</span>
              </p>
              <p className="text-16 leading-16 768:text-18 992:text-[20px] 768:leading-28 992:leading-[35px] pb-10px 1200:pb-20px">
                <strong className="pr-5px">Category :</strong>Breakfast
              </p>
              <p className="text-18 992:text-[20px] leading-28 992:leading-[35px] pb-10px 1200:pb-20px">
                <strong className="pr-5px">Food Type :</strong>Snack, Fast Food
              </p>
              <span className="text-[25px] 992:text-[31px] leading-[40px] pb-10px 1200:pb-20px block">
                $1.85
              </span>
              <p className="text-16 768:text-18 992:text-[20px] leading-28 992:leading-[38px]">
                Steamed hot dog bun, grilled frank, mustard, homemade coney
                Islaland hot dong with pure sauce. It’s very delicious and tasty
                to eat for anybody. Let’s grab the food and enjoy!
              </p>
              <div className="flex gap-20px pt-35px pb-20px 1200:pb-30px">
                <div className="quantity border-[1px] border-[#55504C] border-opacity-20 inline-flex items-center justify-center px-10px 768:px-15px w-[90px] 768:w-[131px] h-40px 768:h-[47px] rounded-35px">
                  <button className="minus" aria-label="Decrease">
                    <img src="{Minus}" alt="" />
                  </button>
                  <input
                    type="number"
                    className="text-center appearance-none m-0 text-18 768:text-20 p-0 leading-[36px]"
                    value="1"
                    min="1"
                    max="10"
                  />
                  <button className="plus" aria-label="Increase">
                    <img src="{Plus}" alt="" />
                  </button>
                </div>
                <div className="">
                  <a
                    className="px-15px 768:px-30px text-14 768:text-16 py-10px h-40px 768:h-[47px] btn--border btn-read btn--animated rounded-35px"
                    href="#!"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full 768:h-full 567:w-6/12 768:w-6/12 1200:w-[571px] xl:w-[671px] pl-0 768:pl-50px 1200:pl-[75px]">
              <div className="h-[300px] 768:h-full text-left">
                <img
                  className="w-full 768:w-full h-[273px] 768:h-full object-cover m-0 992:ml-auto 992:mr-0 rounded-none 768:rounded-[35px]"
                  src="{ProductDetailImage}"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pt-50px">
              <div className="pb-[12px]">
                <input
                  type="checkbox"
                  id="pickup"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px 992:before:w-20px 992:before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <label
                  htmlFor="pickup"
                  className="pl-30px font-medium text-18 992:text-20 leading-20 text-[#121110]"
                >
                  Store Pickup
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="delivery"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <label
                  htmlFor="delivery"
                  className="pl-30px font-medium text-18 992:text-20 leading-20 text-[#121110]"
                >
                  Delivery
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap pt-50px pb-30px 768:pb-70px border-b-[1px] border-[#121110]/30">
            <div className="w-full pb-30px">
              <h2 className="text-[31px] font-bold">Select Payment Method</h2>
            </div>
            <div className="w-full flex flex-wrap gap-y-20px flex-col">
              <label
                htmlFor="checkCOD"
                className="rounded-20px px-25px py-15px w-full 768:w-[350px] 992:w-[544px] border-[1px] border-[#A4A4A4]"
              >
                <input
                  id="checkCOD"
                  type="checkbox"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <span className="pl-30px text-16 567:text-18 992:text-20 leading-20 text-[#121110]">
                  Cash on Delivery
                </span>
              </label>
              <label
                htmlFor="checkCC"
                className="rounded-20px px-25px py-15px w-full 768:w-[350px] 992:w-[544px] border-[1px] border-[#A4A4A4]"
              >
                <input
                  id="checkCC"
                  type="checkbox"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <span className="pl-30px text-16 567:text-18 992:text-20 leading-20 text-[#121110]">
                  Credit Card / Debit Card
                </span>
              </label>
              <label
                htmlFor="checkUPI"
                className="rounded-20px px-25px py-15px w-full 768:w-[350px] 992:w-[544px] border-[1px] border-[#A4A4A4]"
              >
                <input
                  id="checkUPI"
                  type="checkbox"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <span className="pl-30px text-16 567:text-18 992:text-20 leading-20 text-[#121110]">
                  Paytm / GPay / PhonePay
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-wrap pt-50px pb-50px 768:pb-70px max-w-[740px] border-b-[1px] border-[#121110]/30">
            <h2 className="text-[31px] font-bold">Description</h2>
            <p className="text-16 768:text-18 992:text-20 leading-[25px] 992:leading-[35px] pb-10px 768:pb-20px 992:pb-30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, nostrud ipsum consectetur sed do.
            </p>
            <ul className="pl-30px pb-10px 768:pb-20px 992:pb-30px">
              <li className="text-16 768:text-18 992:text-20 leading-[25px] 992:leading-[35px] list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="text-16 768:text-18 992:text-20 leading-[25px] 992:leading-[35px] list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="text-16 768:text-18 992:text-20 leading-[25px] 992:leading-[35px] list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
            </ul>
            <p className="text-16 768:text-18 992:text-20 leading-[25px] 992:leading-[35px]">
              <strong className="pr-5px">Note:</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, nostrud ipsum consectetur sed do.
            </p>
          </div>
          <div className="flex flex-wrap py-20px 992:py-40px">
            <h2 className="text-[30px] leading-[30px] font-bold pb-20px 768:pb-30px">Reviews</h2>
            <div className="w-full">
              <div className="flex flex-wrap items-center">
                <span>5.0</span>
                <ul className="flex items-center pl-10px gap-5px">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
                <p className="w-full text-18 pb-20px 768:pb-40px">Based on 3 reviews</p>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full border-b-[1px] border-[#121110]/30">
            <div
              className={`${
                Review
                  ? "translate-x-0 transition-all duration-300 opacity-100 h-full"
                  : "h-0 -translate-x-full transition-all duration-300 opacity-0"
              } flex-wrap w-full`}
            >
              <div className="w-full">
                <h4 className="text-20 leading-[37px] font-medium pb-10px">
                  How would you rate this?
                </h4>
                <ul className="flex items-center gap-5px">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
              <form className="pt-40px w-full">
                <div className="w-full max-w-full pb-40px">
                  <label className="text-[22px] pb-10px block">
                    Add a headline
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-50px h-50px py-20px px-20px"
                  />
                </div>
                <div className="w-full pb-40px">
                  <label className="text-[22px] pb-10px block">
                    Write your review
                  </label>
                  <textarea className="resize-none border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-30px h-[240px] pt-10px pb-20px px-30px text-20"></textarea>
                </div>
                <div className="w-full flex flex-wrap pb-40px">
                  <div className="w-6/12 pr-20px">
                    <label className="text-[22px] pb-10px block">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-50px h-50px py-20px px-20px"
                    />
                  </div>
                  <div className="w-6/12 pl-20px">
                    <label className="text-[22px] pb-10px block">
                      Your email
                    </label>
                    <input
                      type="text"
                      className="border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-50px h-50px py-20px px-20px"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-end gap-20px w-full pb-50px">
                  
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="flex flex-col 768:flex-row gap-10px 768:gap-25px py-40px border-b-[1px] border-[#121110]/30">
              <div className="w-80px h-80px">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="{AuthorReviewImage}"
                  alt=""
                />
              </div>
              <div className="w-full 768:w-[calc(100%_-_80px)]">
                <div className="text-[20px] 768:text-24 leading-[30px] 768:leading-40 font-medium">
                  David Warner
                </div>
                <div className="text-18 leading-26 pb-25px">
                  -<span> Jan 18, 2023</span>
                </div>
                <ul className="flex items-center gap-5px pb-10px">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
                <p className="font-medium text-20 leading-36 pb-10px text-[#121110]">
                  Wonderful taste
                </p>
                <p className="text-18 768:text-20 leading-[25px] 768:leading-36 text-[#55504C]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
            <div className="flex flex-col 768:flex-row gap-10px 768:gap-25px py-40px border-b-[1px] border-[#121110]/30">
              <div className="w-80px h-80px">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="{AuthorReviewImage}"
                  alt=""
                />
              </div>
              <div className="w-full 768:w-[calc(100%_-_80px)]">
                <div className="text-[20px] 768:text-24 leading-[30px] 768:leading-40 font-medium">
                  David Warner
                </div>
                <div className="text-18 leading-26 pb-25px">
                  -<span> Jan 18, 2023</span>
                </div>
                <ul className="flex items-center gap-5px pb-10px">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
                <p className="font-medium text-18 768:text-20 leading-36 pb-10px text-[#121110]">
                  Wonderful taste
                </p>
                <p className="text-18 768:text-20 leading-[25px] 768:leading-36 text-[#55504C]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
            <div className="flex flex-col 768:flex-row gap-10px 768:gap-25px py-40px border-b-[1px] border-[#121110]/30">
              <div className="w-80px h-80px">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="{AuthorReviewImage}"
                  alt=""
                />
              </div>
              <div className="w-full 768:w-[calc(100%_-_80px)]">
                <div className="text-20 768:text-24 leading-[30px] 768:leading-40 font-medium">
                  David Warner
                </div>
                <div className="text-18 leading-26 pb-25px">
                  -<span> Jan 18, 2023</span>
                </div>
                <ul className="flex items-center gap-5px pb-10px">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
                <p className="font-medium text-18 768:text-20 leading-36 pb-10px text-[#121110]">
                  Wonderful taste
                </p>
                <p className="text-18 768:text-20 leading-[25px] 768:leading-36 text-[#55504C]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-40px">
        <div className="px-15px w-full max-w-full focus:outline-none 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap items-center justify-center bg-primaryColor bg-opacity-[0.08] rounded-20px py-[36px]">
            <div className="w-full 768:w-4/12 py-[36px] px-15px text-center 768:pl-60px border-primaryColor border-r-[1px]">
              <div className="flex flex-col 768:flex-row items-center gap-0 justify-center 768:justify-start 768:gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  
                </div>
                <div className="text-center 768:text-left">
                  <div className="text-[25px] 768:text-32 leading-[120%] pb-10px">Phone</div>
                  <a className="text-18 768:text-[20px] leading-[28px]" href="#!">
                    +91-843-672-431
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full 768:w-4/12 flex py-[36px] justify-center 768:justify-start pl-0 768:pl-60px border-primaryColor border-r-[1px]">
              <div className="flex flex-col 768:flex-row items-center gap-0 768:gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  
                </div>
                <div className="text-center 768:text-left">
                  <div className="text-[25px] 768:text-32 leading-[120%] pb-10px">Office</div>
                  <p className="text-18 768:text-[20px] leading-[28px] max-w-[213px]">
                    1686, Geraldine Lane, New York, NY 10013
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full 768:w-4/12 flex py-[36px] justify-center pl-0 768:pl-60px">
              <div className="flex flex-col 768:flex-row items-center justify-center gap-0 768:gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  
                </div>
                <div className="text-center 768:text-left">
                  <div className="text-[25px] 768:text-32 leading-[120%]">Email</div>
                  <a className="text-18 768:text-[20px] leading-[28px]" href="#!">
                    contact@vegancave.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productDetail;
