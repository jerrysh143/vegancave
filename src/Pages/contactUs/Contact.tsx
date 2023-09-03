import React from "react";
import Button from "../../components/Buttons/buttonHome";

const Contact = () => {
  return (
    <div className="pt-25px pb-45px">
      <div className="max-w-[1590px] px-15px mx-auto">
        <div className="flex flex-wrap">
          <div className="w-6/12">
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
          <div className="w-6/12">
            <div className="">
              <h2 className="text-32 leading-[120%] text-primaryColor font-bold pb-[44px]">
                Everyone should have access to nutritious food
              </h2>
              <p className="text-24 leading-[30px] pb-20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
              <p className="text-24 leading-[30px] pb-[44px]">
                Aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Button className="btn--border btn-read btn--animated text-13 leading-normal px-[29px] h-[44px] rounded-[35px] font-bold" Title="Follow Us On Social media" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
