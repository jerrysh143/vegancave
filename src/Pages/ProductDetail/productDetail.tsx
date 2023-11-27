/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import ProductDetailImage from "../../images/ProductImage.jpg";
import StarIcon from "../../images/Icons/starIcon";
import Minus from "../../images/minus.png";
import Plus from "../../images/plus.png";
import Button from "../../components/Buttons/buttonHome";
import AuthorReviewImage from "../../images/authorreviewimage.jpg";
import PhoneIcon from "../../images/Icons/phone.svg";
import LocationIcon from "../../images/Icons/location.svg";
import EmailIcon from "../../images/Icons/email.svg";
import { useNavigate, useParams } from "react-router-dom";
import { createReview, getProduct, getReviews } from "../../services/auth";
import { Product } from "../../components/ProductsWrap/ProductsWrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";
import { RootState } from "../../Types/otherTypes";
import { ROUTE_NAME } from "../typesRoute";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TOAST_TYPE, notify } from "../../utils/utils";

// interface QuantityCounterProps {
//   initialQuantity: number;
// }

const productDetail = () => {
  const [Review, setReview] = useState(false);
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<any>([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const fetchProductAndReviews = async () => {
    const response = await getProduct(id);
    if (response.status) {
      setProduct(response.data[0]);
    }
    const reviewResponse = await getReviews(id);
    if (reviewResponse.status) {
      setReviews(reviewResponse.data);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevState) => (prevState > 1 ? prevState - 1 : prevState));
  };

  const addToCartHandler = () => {
    dispatch(addProduct({ product, quantity }));
  };

  useEffect(() => {
    fetchProductAndReviews();

    window.scrollTo(0, 0);
  }, []);

  // REVIEW
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    review: Yup.string().required(),
    user_name: Yup.string().required(),
    user_email: Yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      review: "",
      user_name: "",
      user_email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response: any = await createReview({ ...values, product: id });
      if (response.status) {
        setReviews((prevState: any) => [...prevState, response.data]);
      } else {
        notify(TOAST_TYPE.ERROR, "Please try again");
      }
      setReview(!Review);
      formik.resetForm();
    },
  });

  return (
    <>
      <div className="pt-70px pb-40px">
        <div className="px-15px w-full max-w-full focus:outline-none 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap flex-col-reverse 992:flex-row">
            <div className="w-full 992:w-6/12 1200:w-[calc(100%_-_571px)] xl:w-[calc(100%_-_671px)] pr-25px xl:pr-[75px] border-b-[1px] border-[#121110]/30">
              <h2 className="text-[32px] 992:text-[42px] 1200:text-[52px] leading-[42px] 992:leading-[52px] 1200:leading-[65px] text-[#121110] pb-15px 1200:pb-25px">
                {product?.title}
              </h2>
              <p className="flex flex-wrap pb-10px 1200:pb-20px">
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
              <p className="text-18 992:text-[20px] leading-28 992:leading-[35px] pb-10px 1200:pb-20px">
                <strong className="pr-5px">Category :</strong>
                {product?.categories}
              </p>
              <p className="text-18 992:text-[20px] leading-28 992:leading-[35px] pb-10px 1200:pb-20px">
                <strong className="pr-5px">Food Type :</strong>Snack, Fast Food
              </p>
              <span className="text-[25px] 992:text-[31px] leading-[40px] pb-10px 1200:pb-20px block">
                ${product?.price}
              </span>
              <p className="text-18 992:text-[20px] leading-28 992:leading-[38px]">
                {product?.description}
              </p>
              <div className="flex gap-20px pt-35px pb-20px 1200:pb-30px">
                <div className="quantity border-[1px] border-[#55504C] border-opacity-20 inline-flex items-center justify-center px-15px w-[131px] h-[47px] rounded-35px">
                  <button
                    className="minus"
                    aria-label="Decrease"
                    onClick={decreaseQuantity}
                  >
                    <img src={Minus} alt="" />
                  </button>
                  <span className="text-center appearance-none m-0 text-20 p-5px pb-0 leading-[36px] px-5">
                    {quantity}
                  </span>
                  <button
                    className="plus"
                    aria-label="Increase"
                    onClick={increaseQuantity}
                  >
                    <img src={Plus} alt="" />
                  </button>
                </div>
                <div className="">
                  <div
                    className="px-30px py-10px h-[47px] btn--border btn-read btn--animated rounded-35px cursor-pointer"
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full 992:h-full 992:w-6/12 1200:w-[571px] xl:w-[671px] pl-0 992:pl-50px 1200:pl-[75px]">
              <div className="h-[300px] 992:h-full text-left">
                <img
                  className="h-[300px] 992:h-full object-cover m-0 992:ml-auto 992:mr-0 rounded-[35px]"
                  src={ProductDetailImage}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <div>
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
          <div className="flex flex-wrap pt-50px pb-70px border-b-[1px] border-[#121110]/30">
            <div className="w-full pb-30px">
              <h2 className="text-[31px] font-bold">Select Payment Method</h2>
            </div>
            <div className="w-full flex flex-wrap gap-y-20px flex-col">
              <label
                htmlFor="checkCOD"
                className="rounded-20px px-25px py-15px w-[350px] 992:w-[544px] border-[1px] border-[#A4A4A4]"
              >
                <input
                  id="checkCOD"
                  type="checkbox"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <span className="pl-30px text-18 992:text-20 leading-20 text-[#121110]">
                  Cash on Delivery
                </span>
              </label>
              <label
                htmlFor="checkCC"
                className="rounded-20px px-25px py-15px w-[350px] 992:w-[544px] border-[1px] border-[#A4A4A4]"
              >
                <input
                  id="checkCC"
                  type="checkbox"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <span className="pl-30px text-18 992:text-20 leading-20 text-[#121110]">
                  Credit Card / Debit Card
                </span>
              </label>
              <label
                htmlFor="checkUPI"
                className="rounded-20px px-25px py-15px w-[350px] 992:w-[544px] border-[1px] border-[#A4A4A4]"
              >
                <input
                  id="checkUPI"
                  type="checkbox"
                  className="w-0 h-0 relative before:content-[''] before:w-20px before:h-20px before:border-[1px] before:border-black before:absolute before:rounded-full before:bg-transparent before:top-[1px] block checked:before:border-primaryColor checked:after:content-[''] checked:after:bg-primaryColor checked:after:w-10px checked:after:h-10px checked:after:absolute checked:after:top-[6px] checked:after:left-[5px] checked:after:rounded-full"
                />
                <span className="pl-30px text-18 992:text-20 leading-20 text-[#121110]">
                  Paytm / GPay / PhonePay
                </span>
              </label>
            </div>
          </div> */}
          <div className="flex flex-wrap pt-50px pb-70px max-w-[740px] border-b-[1px] border-[#121110]/30">
            <h2 className="text-[31px] font-bold">Description</h2>
            <p className="text-18 992:text-20 leading-[25px] 992:leading-[35px] pb-20px 992:pb-30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, nostrud ipsum consectetur sed do.
            </p>
            <ul className="pl-30px pb-20px 992:pb-30px">
              <li className="text-18 992:text-20 leading-[25px] 992:leading-[35px] list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="text-18 992:text-20 leading-[25px] 992:leading-[35px] list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="text-18 992:text-20 leading-[25px] 992:leading-[35px] list-disc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
            </ul>
            <p className="text-18 992:text-20 leading-[25px] 992:leading-[35px]">
              <strong className="pr-5px">Note:</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, nostrud ipsum consectetur sed do.
            </p>
          </div>
          <div className="flex flex-wrap py-20px 992:py-40px">
            <h2 className="text-[31px] font-bold pb-30px">Reviews</h2>
            <div className="w-full">
              <div className="flex flex-wrap items-center">
                <span>5.0</span>
                <ul className="flex items-center pl-10px gap-5px">
                  <li>
                    <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                  </li>
                  <li>
                    <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                  </li>
                  <li>
                    <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                  </li>
                  <li>
                    <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                  </li>
                  <li>
                    <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                  </li>
                </ul>
                <p className="w-full text-18 pb-40px">Based on 3 reviews</p>
                <div>
                  <Button
                    Title="Write A Review"
                    className="px-30px py-[13px] btn--border btn-read btn--animated rounded-35px"
                    onClick={() => {
                      formik.resetForm();
                      setReview(!Review);
                    }}
                  />
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
                    <StarIcon fill="#2BB672" stroke="#2BB672" />
                  </li>
                  <li>
                    <StarIcon fill="#2BB672" stroke="#2BB672" />
                  </li>
                  <li>
                    <StarIcon fill="#2BB672" stroke="#2BB672" />
                  </li>
                  <li>
                    <StarIcon fill="#2BB672" stroke="#2BB672" />
                  </li>
                  email{" "}
                  <li>
                    <StarIcon fill="#2BB672" stroke="#2BB672" />
                  </li>
                </ul>
              </div>
              <form className="pt-40px w-full" onSubmit={formik.handleSubmit}>
                <div className="w-full max-w-full pb-40px">
                  <label className="text-[22px] pb-10px block">
                    Add a headline
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-50px h-50px py-20px px-20px"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <p style={{ color: "red" }}>{formik.errors.title}</p>
                  ) : null}
                </div>
                <div className="w-full pb-40px">
                  <label className="text-[22px] pb-10px block">
                    Write your review
                  </label>
                  <textarea
                    className="resize-none border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-30px h-[240px] pt-10px pb-20px px-30px text-20"
                    onChange={formik.handleChange}
                    value={formik.values.review}
                    name="review"
                  ></textarea>
                  {formik.touched.review && formik.errors.review ? (
                    <p style={{ color: "red" }}>{formik.errors.review}</p>
                  ) : null}
                </div>
                <div className="w-full flex flex-wrap pb-40px">
                  <div className="w-6/12 pr-20px">
                    <label className="text-[22px] pb-10px block">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-50px h-50px py-20px px-20px"
                      onChange={formik.handleChange}
                      value={formik.values.user_name}
                    />
                    {formik.touched.user_name && formik.errors.user_name ? (
                      <p style={{ color: "red" }}>{formik.errors.user_name}</p>
                    ) : null}
                  </div>
                  <div className="w-6/12 pl-20px">
                    <label className="text-[22px] pb-10px block">
                      Your email
                    </label>
                    <input
                      type="text"
                      name="user_email"
                      className="border-[1px] border-[#A4A4A4] w-full max-w-full focus:outline-none rounded-50px h-50px py-20px px-20px"
                      onChange={formik.handleChange}
                      value={formik.values.user_email}
                    />
                    {formik.touched.user_email && formik.errors.user_email ? (
                      <p style={{ color: "red" }}>{formik.errors.user_email}</p>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-wrap justify-end gap-20px w-full pb-50px">
                  <Button
                    type="button"
                    Title="Cancel"
                    className="py-[19px] px-[35px] border-[1px] border-[#222] text-26 leading-26 rounded-[55px] font-bold"
                    onClick={() => {
                      formik.resetForm();
                      setReview(!Review);
                    }}
                  />
                  <Button
                    type="submit"
                    Title="Submit Review"
                    className="py-[19px] px-[20px] text-26 leading-26 btn--border btn-read btn--animated rounded-[55px] font-bold"
                  />
                </div>
              </form>
            </div>
          </div>
          {reviews.map(
            (item: {
              title: string;
              review: string;
              user_name: string;
              rate: number;
              created_at: string;
              id: number;
            }) => (
              <div className="flex flex-wrap w-full" key={item.id}>
                <div className="flex gap-25px py-40px border-b-[1px] border-[#121110]/30">
                  <div className="w-80px h-80px">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src={AuthorReviewImage}
                      alt=""
                    />
                  </div>
                  <div className="w-[calc(100%_-_80px)]">
                    <div className="text-24 leading-40 font-medium">
                      {item.user_name}
                    </div>
                    <div className="text-18 leading-26 pb-25px">
                      <span>{item.created_at}</span>
                    </div>
                    <ul className="flex items-center gap-5px pb-10px">
                      <li>
                        <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                      </li>
                      <li>
                        <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                      </li>
                      <li>
                        <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                      </li>
                      <li>
                        <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                      </li>
                      <li>
                        <StarIcon fill="#FFBF1C" stroke="#FFBF1C" />
                      </li>
                    </ul>
                    <p className="font-medium text-20 leading-36 pb-10px text-[#121110]">
                      {item?.title}
                    </p>
                    <p className="text-20 leading-36 text-[#55504C]">
                      {item?.review}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="pb-40px">
        <div className="px-15px w-full max-w-full focus:outline-none 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap items-center bg-primaryColor bg-opacity-[0.08] rounded-20px py-[36px]">
            <div className="w-4/12 py-[36px] pl-60px border-primaryColor border-r-[1px]">
              <div className="flex items-center gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  <img src={PhoneIcon} alt="" />
                </div>
                <div>
                  <div className="text-32 leading-[120%] pb-10px">Phone</div>
                  <a className="text-[20px] leading-[28px]" href="#!">
                    +91-843-672-431
                  </a>
                </div>
              </div>
            </div>
            <div className="w-4/12 flex py-[36px] pl-60px border-primaryColor border-r-[1px]">
              <div className="flex items-center gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  <img src={LocationIcon} alt="" />
                </div>
                <div>
                  <div className="text-32 leading-[120%] pb-10px">Office</div>
                  <p className="text-[20px] leading-[28px] max-w-[213px]">
                    1686, Geraldine Lane, New York, NY 10013
                  </p>
                </div>
              </div>
            </div>
            <div className="w-4/12 py-[36px] pl-60px">
              <div className="flex items-center gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  <img src={EmailIcon} alt="" />
                </div>
                <div>
                  <div className="text-32 leading-[120%]">Email</div>
                  <a className="text-[20px] leading-[28px]" href="#!">
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
