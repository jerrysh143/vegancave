/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Button from "../../components/Buttons/buttonHome";
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  FormikValues,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { createContact } from "../../services/auth";
import { TOAST_TYPE, notify } from "../../utils/utils";

const initialValues = {
  email: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  description: Yup.string().required(),
});

const Contact = () => {
  document.body.classList.toggle("contactPage");
  return (
    <div className="pt-70px pb-45px">
      <div className="max-w-[1530px] px-15px mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 pr-0 md:pr-15px flex 480:block flex-col items-center 480:items-start">
            <div
              id="background-video"
              style={{
                background:
                  "url(https://cdn.pixabay.com/photo/2018/07/20/22/43/adler-3551609_960_720.jpg) top center no-repeat",
                backgroundSize: "cover",
              }}
            >
              <iframe
                width="756"
                height="393"
                src="https://www.youtube.com/embed/UBCQmEHctCw"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <a className="play-btn" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                >
                  <path
                    d="M45.9994 84.3332C67.1703 84.3332 84.3327 67.1708 84.3327 45.9998C84.3327 24.8289 67.1703 7.6665 45.9994 7.6665C24.8284 7.6665 7.66602 24.8289 7.66602 45.9998C7.66602 67.1708 24.8284 84.3332 45.9994 84.3332Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.334 30.6665L61.334 45.9998L38.334 61.3332V30.6665Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-6/12 pl-0px sm:pl-15px pt-30px 767:pt-0 flex 480:block flex-col items-center 480:items-start">
            <div className="">
              <h2 className="text-[25px] lg:text-32 leading-[120%] text-primaryColor font-bold pb-20px lg:pb-[44px]">
                Everyone should have access to nutritious food
              </h2>
              <p className="text-18 lg:text-24 leading-30px lg:leading-[30px] pb-20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
              <p className="text-18 lg:text-24 leading-30px lg:leading-[30px] pb-20px lg:pb-[44px]">
                Aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Button
                className="btn--border btn-read btn--animated text-13 leading-normal px-[29px] h-[44px] rounded-[35px] font-bold"
                Title="Follow Us On Social media"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-30px md:mt-0">
          <div className="w-full md:w-6/12 pr-0 480:pr-15px">
            <div className="flex flex-wrap mb-40px">
              <div className="w-full 480:w-6/12 pr-15px mb-15px md:mb-0 flex 480:block flex-col items-center 480:items-start">
                <div className="w-[48px] h-[48px] bg-primaryColor rounded-full flex justify-center items-center mb-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.21 8.82003L14 2.78003C13.474 2.27988 12.7759 2.00098 12.05 2.00098C11.3241 2.00098 10.626 2.27988 10.1 2.78003L3.89 8.78003C3.61408 9.02089 3.39216 9.31733 3.23879 9.64993C3.08541 9.98253 3.00404 10.3438 3 10.71V19.29C3.01054 20.0176 3.30904 20.7114 3.83012 21.2194C4.35119 21.7273 5.05235 22.008 5.78 22H18.22C18.9476 22.008 19.6488 21.7273 20.1699 21.2194C20.691 20.7114 20.9895 20.0176 21 19.29V10.71C20.9992 10.3585 20.929 10.0106 20.7935 9.68625C20.6579 9.36191 20.4596 9.06754 20.21 8.82003ZM11.44 4.22003C11.593 4.08019 11.7927 4.00264 12 4.00264C12.2073 4.00264 12.407 4.08019 12.56 4.22003L18 9.50003L12.53 14.78C12.377 14.9199 12.1773 14.9974 11.97 14.9974C11.7627 14.9974 11.563 14.9199 11.41 14.78L6 9.50003L11.44 4.22003ZM19 19.29C18.9871 19.4863 18.8987 19.67 18.7532 19.8024C18.6078 19.9348 18.4166 20.0056 18.22 20H5.78C5.58338 20.0056 5.39225 19.9348 5.24678 19.8024C5.10132 19.67 5.01286 19.4863 5 19.29V11.35L9.05 15.25L7.39 16.85C7.20375 17.0374 7.09921 17.2908 7.09921 17.555C7.09921 17.8192 7.20375 18.0727 7.39 18.26C7.48295 18.3575 7.59463 18.4352 7.71836 18.4885C7.84208 18.5418 7.9753 18.5695 8.11 18.57C8.36747 18.569 8.61462 18.4687 8.8 18.29L10.57 16.59C11.0096 16.8587 11.5148 17.0008 12.03 17.0008C12.5452 17.0008 13.0504 16.8587 13.49 16.59L15.26 18.29C15.4454 18.4687 15.6925 18.569 15.95 18.57C16.0847 18.5695 16.2179 18.5418 16.3416 18.4885C16.4654 18.4352 16.5771 18.3575 16.67 18.26C16.8563 18.0727 16.9608 17.8192 16.9608 17.555C16.9608 17.2908 16.8563 17.0374 16.67 16.85L15 15.25L19 11.35V19.29Z"
                      fill="#F0FDF4"
                    />
                  </svg>
                </div>
                <div className="text-[25px] 1200:text-32 leading-[120%] text-[#18191F] pb-[16px]">
                  Email
                </div>
                <a
                  className="text-18 992:text-[22px] leading-[130%] text-[#525560]"
                  href="#!"
                >
                  contact@flex.co
                </a>
              </div>
              <div className="w-full 480:w-6/12 pr-15px flex 480:block flex-col items-center 480:items-start">
                <div className="w-[48px] h-[48px] bg-primaryColor rounded-full flex justify-center items-center mb-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M19.7769 13C19.5569 13 19.3269 12.93 19.1069 12.88C18.6617 12.7805 18.224 12.6501 17.7969 12.49C17.333 12.3212 16.823 12.33 16.3652 12.5146C15.9073 12.6992 15.534 13.0466 15.3169 13.49L15.0969 13.95C14.1257 13.3992 13.2285 12.7271 12.4269 11.95C11.6497 11.1484 10.9777 10.2512 10.4269 9.28L10.8869 9.07C11.3302 8.85292 11.6777 8.47953 11.8623 8.02169C12.0469 7.56385 12.0556 7.05391 11.8869 6.59C11.7281 6.15903 11.5978 5.71808 11.4969 5.27C11.4469 5.05 11.4069 4.82 11.3769 4.6C11.2554 3.89562 10.8865 3.25774 10.3365 2.80124C9.78649 2.34474 9.09157 2.09961 8.37687 2.11H5.36687C4.94412 2.10945 4.52602 2.19825 4.13999 2.37058C3.75396 2.54292 3.40871 2.7949 3.12687 3.11C2.83919 3.43365 2.62499 3.81575 2.49897 4.23004C2.37296 4.64432 2.33813 5.08098 2.39687 5.51C2.94046 9.67214 4.84208 13.5387 7.80687 16.51C10.7782 19.4748 14.6447 21.3764 18.8069 21.92C18.9367 21.9299 19.0671 21.9299 19.1969 21.92C19.9343 21.9211 20.6463 21.6505 21.1969 21.16C21.512 20.8782 21.764 20.5329 21.9363 20.1469C22.1086 19.7609 22.1974 19.3428 22.1969 18.92V15.92C22.1915 15.229 21.9477 14.5611 21.5068 14.0291C21.0659 13.4971 20.4548 13.1336 19.7769 13ZM20.2669 19C20.2665 19.1395 20.237 19.2775 20.1802 19.4049C20.1233 19.5324 20.0405 19.6465 19.9369 19.74C19.8273 19.8399 19.6968 19.9141 19.555 19.9573C19.4132 20.0006 19.2635 20.0117 19.1169 19.99C15.3851 19.5026 11.9171 17.802 9.24687 15.15C6.57434 12.4775 4.8589 8.99737 4.36687 5.25C4.34515 5.10333 4.35631 4.95367 4.39955 4.81185C4.44278 4.67003 4.51702 4.5396 4.61687 4.43C4.71149 4.32515 4.82725 4.24154 4.95652 4.18466C5.08579 4.12778 5.22564 4.09892 5.36687 4.1H8.36687C8.59803 4.09435 8.82401 4.16898 9.00634 4.3112C9.18866 4.45341 9.31607 4.65442 9.36687 4.88C9.36687 5.15 9.45687 5.43 9.51687 5.7C9.63245 6.22386 9.78619 6.73857 9.97687 7.24L8.57687 7.9C8.33624 8.01046 8.14923 8.21185 8.05687 8.46C7.95685 8.70346 7.95685 8.97654 8.05687 9.22C9.49607 12.3028 11.9741 14.7808 15.0569 16.22C15.3003 16.32 15.5734 16.32 15.8169 16.22C16.065 16.1276 16.2664 15.9406 16.3769 15.7L17.0069 14.3C17.5228 14.4881 18.0506 14.6418 18.5869 14.76C18.8469 14.82 19.1269 14.87 19.3969 14.91C19.6225 14.9608 19.8235 15.0882 19.9657 15.2705C20.1079 15.4529 20.1825 15.6788 20.1769 15.91L20.2669 19ZM14.3669 2C14.1369 2 13.8969 2 13.6669 2C13.4017 2.02254 13.1563 2.14952 12.9847 2.353C12.8131 2.55647 12.7293 2.81978 12.7519 3.085C12.7744 3.35022 12.9014 3.59562 13.1049 3.76721C13.3083 3.93881 13.5717 4.02254 13.8369 4H14.3669C15.9582 4 17.4843 4.63214 18.6095 5.75736C19.7347 6.88258 20.3669 8.4087 20.3669 10C20.3669 10.18 20.3669 10.35 20.3669 10.53C20.3447 10.7938 20.428 11.0556 20.5986 11.2581C20.7692 11.4606 21.0131 11.5871 21.2769 11.61H21.3569C21.6072 11.611 21.8488 11.5181 22.034 11.3496C22.2191 11.1811 22.3343 10.9493 22.3569 10.7C22.3569 10.47 22.3569 10.23 22.3569 10C22.3569 7.88 21.5154 5.84668 20.0173 4.34668C18.5191 2.84667 16.4869 2.00265 14.3669 2ZM16.3669 10C16.3669 10.2652 16.4722 10.5196 16.6598 10.7071C16.8473 10.8946 17.1017 11 17.3669 11C17.6321 11 17.8864 10.8946 18.074 10.7071C18.2615 10.5196 18.3669 10.2652 18.3669 10C18.3669 8.93913 17.9454 7.92172 17.1953 7.17157C16.4452 6.42143 15.4277 6 14.3669 6C14.1017 6 13.8473 6.10536 13.6598 6.29289C13.4722 6.48043 13.3669 6.73478 13.3669 7C13.3669 7.26522 13.4722 7.51957 13.6598 7.70711C13.8473 7.89464 14.1017 8 14.3669 8C14.8973 8 15.406 8.21071 15.7811 8.58579C16.1562 8.96086 16.3669 9.46957 16.3669 10Z"
                      fill="#F0FDF4"
                    />
                  </svg>
                </div>
                <div className="text-[25px] 1200:text-32 leading-[120%] text-[#18191F] pb-[16px]">
                  Phone
                </div>
                <a
                  className="text-18 992:text-[22px] leading-[130%] text-[#525560]"
                  href="#!"
                >
                  +7-843-672-431
                </a>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full 480:w-6/12 480:pr-15px mb-15px md:mb-0 flex 480:block flex-col items-center 480:items-start">
                <div className="w-[48px] h-[48px] bg-primaryColor rounded-full flex justify-center items-center mb-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.0009 4.47991C16.4096 2.88861 14.2513 1.99463 12.0009 1.99463C9.75047 1.99463 7.59221 2.88861 6.00091 4.47991C4.40961 6.07121 3.51563 8.22947 3.51563 10.4799C3.51562 12.7303 4.40961 14.8886 6.00091 16.4799L11.2709 21.7599C11.3639 21.8536 11.4745 21.928 11.5963 21.9788C11.7182 22.0296 11.8489 22.0557 11.9809 22.0557C12.1129 22.0557 12.2436 22.0296 12.3655 21.9788C12.4873 21.928 12.5979 21.8536 12.6909 21.7599L18.0009 16.4299C19.5856 14.8452 20.4758 12.696 20.4758 10.4549C20.4758 8.21386 19.5856 6.06459 18.0009 4.47991ZM16.5709 14.9999L12.0009 19.5899L7.43091 14.9999C6.52805 14.0962 5.91338 12.9452 5.6646 11.6922C5.41582 10.4392 5.54409 9.14066 6.03321 7.96059C6.52233 6.78052 7.35032 5.77196 8.41254 5.06239C9.47475 4.35281 10.7235 3.97409 12.0009 3.97409C13.2783 3.97409 14.5271 4.35281 15.5893 5.06239C16.6515 5.77196 17.4795 6.78052 17.9686 7.96059C18.4577 9.14066 18.586 10.4392 18.3372 11.6922C18.0884 12.9452 17.4738 14.0962 16.5709 14.9999ZM9.00091 7.40991C8.19362 8.21968 7.7403 9.31648 7.7403 10.4599C7.7403 11.6033 8.19362 12.7001 9.00091 13.5099C9.60067 14.1107 10.3645 14.521 11.1966 14.6893C12.0286 14.8576 12.8919 14.7765 13.678 14.4561C14.4641 14.1356 15.1381 13.5902 15.6154 12.8882C16.0927 12.1861 16.352 11.3588 16.3609 10.5099C16.3654 9.94311 16.2562 9.38117 16.0398 8.8573C15.8234 8.33343 15.5041 7.85827 15.1009 7.45991C14.7046 7.05449 14.232 6.73145 13.7103 6.50938C13.1887 6.2873 12.6282 6.17059 12.0613 6.16594C11.4944 6.16129 10.9321 6.26881 10.4069 6.4823C9.88165 6.69579 9.40383 7.01104 9.00091 7.40991ZM13.6909 12.0899C13.3119 12.4747 12.8111 12.7158 12.274 12.7722C11.7369 12.8285 11.197 12.6966 10.7464 12.3988C10.2959 12.1011 9.9627 11.6562 9.80391 11.14C9.64512 10.6238 9.67056 10.0685 9.87586 9.56907C10.0812 9.06958 10.4536 8.65693 10.9295 8.40165C11.4054 8.14637 11.9552 8.06432 12.4848 8.16953C13.0145 8.27474 13.4912 8.56067 13.8334 8.97844C14.1756 9.39621 14.3621 9.91988 14.3609 10.4599C14.3464 11.0772 14.0874 11.6634 13.6409 12.0899H13.6909Z"
                      fill="#F0FDF4"
                    />
                  </svg>
                </div>
                <div className="text-[25px] 1200:text-32 leading-[120%] text-[#18191F] pb-[16px]">
                  Office
                </div>
                <p className="text-[22px] leading-[150%] text-[#525560] max-w-[250px] text-center 480:text-left">
                  1686, Geraldine Lane New York, NY 10013
                </p>
              </div>
              <div className="w-full 480:w-6/12 pr-15px mb-15px md:mb-0 flex 480:block flex-col items-center 480:items-start">
                <div className="w-[48px] h-[48px] bg-primaryColor rounded-full flex justify-center items-center mb-15px md:mb-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M21.3672 2H3.36719C3.10197 2 2.84762 2.10536 2.66008 2.29289C2.47254 2.48043 2.36719 2.73478 2.36719 3V21C2.36719 21.2652 2.47254 21.5196 2.66008 21.7071C2.84762 21.8946 3.10197 22 3.36719 22H21.3672C21.6324 22 21.8868 21.8946 22.0743 21.7071C22.2618 21.5196 22.3672 21.2652 22.3672 21V3C22.3672 2.73478 22.2618 2.48043 22.0743 2.29289C21.8868 2.10536 21.6324 2 21.3672 2ZM8.36719 20H4.36719V16H8.36719V20ZM8.36719 14H4.36719V10H8.36719V14ZM8.36719 8H4.36719V4H8.36719V8ZM14.3672 20H10.3672V16H14.3672V20ZM14.3672 14H10.3672V10H14.3672V14ZM14.3672 8H10.3672V4H14.3672V8ZM20.3672 20H16.3672V16H20.3672V20ZM20.3672 14H16.3672V10H20.3672V14ZM20.3672 8H16.3672V4H20.3672V8Z"
                      fill="#F0FDF4"
                    />
                  </svg>
                </div>
                <div className="text-[25px] 1200:text-32 leading-[120%] text-[#18191F] pb-[16px]">
                  Socials
                </div>
                <ul className="flex flex-wrap items-center">
                  <li className="mr-15px 768:mr-5px 1200:mr-[38px]">
                    <a
                      className="w-35px h-35px bg-primaryColor flex justify-center items-center rounded-md"
                      href="#!"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.0024 20.7275V12.7662H16.7257L17.1343 9.66268H14.0024V7.6815C14.0024 6.78323 14.2556 6.17107 15.5704 6.17107L17.2445 6.1704V3.39446C16.955 3.35756 15.9612 3.27295 14.8045 3.27295C12.3891 3.27295 10.7355 4.71903 10.7355 7.37413V9.66268H8.00391V12.7662H10.7355V20.7275H14.0024Z"
                          fill="#FFFFFF"
                        />
                        <mask
                          id="mask0_81_1560"
                          maskUnits="userSpaceOnUse"
                          x="8"
                          y="3"
                          width="10"
                          height="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.0024 20.7275V12.7662H16.7257L17.1343 9.66268H14.0024V7.6815C14.0024 6.78323 14.2556 6.17107 15.5704 6.17107L17.2445 6.1704V3.39446C16.955 3.35756 15.9612 3.27295 14.8045 3.27295C12.3891 3.27295 10.7355 4.71903 10.7355 7.37413V9.66268H8.00391V12.7662H10.7355V20.7275H14.0024Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_81_1560)"></g>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-15px 768:mr-5px 1200:mr-[38px]">
                    <a
                      className="w-35px h-35px bg-primaryColor flex justify-center items-center rounded-md"
                      href="#!"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.186 6.1461C21.5035 6.44856 20.7711 6.65368 20.0016 6.74525C20.7873 6.27474 21.3887 5.52844 21.6738 4.64189C20.9368 5.07762 20.1232 5.39401 19.2564 5.56553C18.5622 4.82501 17.5749 4.36377 16.4797 4.36377C14.3787 4.36377 12.6751 6.06731 12.6751 8.16719C12.6751 8.46501 12.7087 8.75589 12.7737 9.03404C9.61226 8.87525 6.80896 7.36062 4.93275 5.05907C4.60478 5.61998 4.4182 6.27356 4.4182 6.97122C4.4182 8.29119 5.09035 9.45586 6.11017 10.1373C5.48669 10.1164 4.90029 9.94489 4.38693 9.6598V9.70732C4.38693 11.5499 5.69878 13.0877 7.43823 13.4377C7.11953 13.5235 6.78347 13.571 6.43581 13.571C6.19014 13.571 5.95256 13.5467 5.71962 13.5003C6.20402 15.0126 7.60859 16.1124 9.27275 16.1426C7.97132 17.1624 6.33035 17.7685 4.54802 17.7685C4.24093 17.7685 3.93844 17.7499 3.64062 17.7163C5.32447 18.7976 7.32353 19.428 9.47208 19.428C16.4705 19.428 20.296 13.6313 20.296 8.6041L20.2832 8.11159C21.0307 7.57847 21.6773 6.90865 22.186 6.1461Z"
                          fill="#FFFFFF"
                        />
                        <mask
                          id="mask0_81_1561"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="4"
                          width="20"
                          height="16"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.186 6.1461C21.5035 6.44856 20.7711 6.65368 20.0016 6.74525C20.7873 6.27474 21.3887 5.52844 21.6738 4.64189C20.9368 5.07762 20.1232 5.39401 19.2564 5.56553C18.5622 4.82501 17.5749 4.36377 16.4797 4.36377C14.3787 4.36377 12.6751 6.06731 12.6751 8.16719C12.6751 8.46501 12.7087 8.75589 12.7737 9.03404C9.61226 8.87525 6.80896 7.36062 4.93275 5.05907C4.60478 5.61998 4.4182 6.27356 4.4182 6.97122C4.4182 8.29119 5.09035 9.45586 6.11017 10.1373C5.48669 10.1164 4.90029 9.94489 4.38693 9.6598V9.70732C4.38693 11.5499 5.69878 13.0877 7.43823 13.4377C7.11953 13.5235 6.78347 13.571 6.43581 13.571C6.19014 13.571 5.95256 13.5467 5.71962 13.5003C6.20402 15.0126 7.60859 16.1124 9.27275 16.1426C7.97132 17.1624 6.33035 17.7685 4.54802 17.7685C4.24093 17.7685 3.93844 17.7499 3.64062 17.7163C5.32447 18.7976 7.32353 19.428 9.47208 19.428C16.4705 19.428 20.296 13.6313 20.296 8.6041L20.2832 8.11159C21.0307 7.57847 21.6773 6.90865 22.186 6.1461Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_81_1561)"></g>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-15px 768:mr-5px 1200:mr-[38px]">
                    <a
                      className="w-35px h-35px bg-primaryColor flex justify-center items-center rounded-md"
                      href="#!"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.96764 2.18164H16.7661C19.7543 2.18164 22.1853 4.61264 22.1852 7.60057V16.3991C22.1852 19.387 19.7543 21.818 16.7661 21.818H7.96764C4.97971 21.818 2.54883 19.3871 2.54883 16.3991V7.60057C2.54883 4.61264 4.97971 2.18164 7.96764 2.18164ZM16.7663 20.0758C18.7936 20.0758 20.4431 18.4265 20.4431 16.3991H20.443V7.60057C20.443 5.5733 18.7935 3.92387 16.7661 3.92387H7.96764C5.94038 3.92387 4.29106 5.5733 4.29106 7.60057V16.3991C4.29106 18.4265 5.94038 20.0759 7.96764 20.0758H16.7663ZM7.22415 11.9999C7.22415 9.16406 9.53119 6.85697 12.367 6.85697C15.2028 6.85697 17.5099 9.16406 17.5099 11.9999C17.5099 14.8357 15.2028 17.1427 12.367 17.1427C9.53119 17.1427 7.22415 14.8357 7.22415 11.9999ZM8.99499 11.9998C8.99499 13.8591 10.5078 15.3717 12.367 15.3717C14.2263 15.3717 15.739 13.8591 15.739 11.9998C15.739 10.1404 14.2264 8.62772 12.367 8.62772C10.5076 8.62772 8.99499 10.1404 8.99499 11.9998Z"
                          fill="#FFFFFF"
                        />
                        <mask
                          id="mask0_81_1562"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="2"
                          width="21"
                          height="20"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.96764 2.18164H16.7661C19.7543 2.18164 22.1853 4.61264 22.1852 7.60057V16.3991C22.1852 19.387 19.7543 21.818 16.7661 21.818H7.96764C4.97971 21.818 2.54883 19.3871 2.54883 16.3991V7.60057C2.54883 4.61264 4.97971 2.18164 7.96764 2.18164ZM16.7663 20.0758C18.7936 20.0758 20.4431 18.4265 20.4431 16.3991H20.443V7.60057C20.443 5.5733 18.7935 3.92387 16.7661 3.92387H7.96764C5.94038 3.92387 4.29106 5.5733 4.29106 7.60057V16.3991C4.29106 18.4265 5.94038 20.0759 7.96764 20.0758H16.7663ZM7.22415 11.9999C7.22415 9.16406 9.53119 6.85697 12.367 6.85697C15.2028 6.85697 17.5099 9.16406 17.5099 11.9999C17.5099 14.8357 15.2028 17.1427 12.367 17.1427C9.53119 17.1427 7.22415 14.8357 7.22415 11.9999ZM8.99499 11.9998C8.99499 13.8591 10.5078 15.3717 12.367 15.3717C14.2263 15.3717 15.739 13.8591 15.739 11.9998C15.739 10.1404 14.2264 8.62772 12.367 8.62772C10.5076 8.62772 8.99499 10.1404 8.99499 11.9998Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_81_1562)"></g>
                      </svg>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="w-35px h-35px bg-primaryColor flex justify-center items-center rounded-md"
                      href="#!"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="25"
                        height="24"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        className=""
                      >
                        <g>
                          <path
                            d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"
                            fill="#FFFFFF"
                            data-original="#FFFFFF"
                            className=""
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 1200:w-[519px] sm:pl-15px">
            <div className="w-full h-auto bg-white shadow-[0px_12px_48px_-5px_rgba(85,_105,_135,_0.5)] sm:shadow-[0px_12px_48px_-5px_rgba(85,_105,_135,_0.09)] rounded-[10px] sm:rounded-[6px] p-20px sm:p-30px lg:p-40px mt-50px">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  const response = await createContact(values);
                  if (response.status) {
                    notify(
                      TOAST_TYPE.SUCCESS,
                      "Response registered successfully"
                    );
                  } else {
                    notify(TOAST_TYPE.ERROR, "Oops! Please try again");
                  }
                  resetForm();
                }}
              >
                <>
                  <Form className="">
                    <div className="w-full">
                      <label className="text-18 leading-[25px] block pb-5px group-hover:text-white">
                        Email
                      </label>
                      <Field
                        name="email"
                        placeholder="abc@gmail.com"
                        className="w-full mr-20px py-[13px] px-15px placeholder:text-16 placeholder:leading-16 border-[1px] placeholder:text-[#E0E0E0] rounded-30px focus:border-[1px] focus:outline-0 mb-25px"
                        type="email"
                      />
                      <ErrorMessage name="email" className="text-red" />
                    </div>
                    <div>
                      <label className="block group-hover:text-white text-18 leading-[25px] pb-5px">
                        Height
                      </label>
                      <Field
                        name="description"
                        placeholder="Enter your current height in cms"
                        className="h-[204px] w-full resize-none mr-20px px-15px placeholder:text-16 placeholder:leading-16 border-[1px] placeholder:text-[#E0E0E0] rounded-20px focus:border-[1px] focus:outline-0 mb-40px"
                      />
                      <ErrorMessage name="description" />
                    </div>
                    <div className="">
                      <input
                        type="Submit"
                        className="placeholder:text-white cursor-pointer btn--border btn-read btn--animated bg-primaryColor w-full text-white text-16 rounded-35px py-14px px-30px"
                        placeholder="Send"
                      />
                    </div>
                  </Form>
                </>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
