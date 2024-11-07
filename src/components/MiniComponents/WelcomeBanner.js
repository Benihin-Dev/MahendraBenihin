import React, { useState } from "react";
import CloseBtn from "./CloseBtn";

export default function WelcomeBanner() {
  const [componentState, setComponentState] = useState(true);
  const [selected, setSelected] = useState(false);
  return (
    <>
      {componentState && (
        <div className=" w-full h-screen z-[55] bg-[#000000bd] fixed top-0 left-0">
          <div className=" w-full h-full flex items-center justify-center   relative">
            <div className=" relative shadow-md  sm:w-[80%] lg:w-[65%] xl:w-[65%] w-[90%] overflow-y-auto h-[80vh] sm:h-max  customsScrollbar sm:overflow-hidden  grid grid-cols-1 sm:grid-cols-2 bg-white">
              <div className=" w-full p-6 flex items-center">
                <div className=" py-4 sm:py-0">
                  <p className=" uppercase tracking-widest text-sm text-[#5a5a5a] cursor-default pb-1">
                    Join Today
                  </p>
                  <p className=" text-4xl lg:text-5xl mt-4 font-semibold pb-2">
                    Our Newsletter
                  </p>
                  <p className="  text-[#5a5a5a] cursor-default pt-2 pb-3">
                    We're thrilled that you're interested in staying up-to-date
                    with all the latest news
                  </p>
                  <div className=" w-full flex border-b hover:border-black duration-500 my-2 overflow-hidden">
                    <input
                      type="text"
                      placeholder="Your mail ID"
                      className=" outline-none py-3 px-4 w-full"
                    />
                  </div>
                  <div className="flex items-start space-x-2 mt-4">
                    <div
                      onClick={() => {
                        setSelected(!selected);
                      }}
                      className=" group cursor-pointer size-5 flex justify-end items-start"
                    >
                      <div
                        className={` ${
                          selected
                            ? "border-t-transparent mt-1 h-2 w-4 border-r-transparent -rotate-45"
                            : "h-4 w-4 "
                        } border border-[#1e1e1e]  `}
                      ></div>
                    </div>
                    <label
                      htmlFor="checkbox1"
                      className="text-gray-700 text-sm cursor-default"
                    >
                      Your email is safe with us, we don't spam. Privacy Policy
                    </label>
                  </div>
                  <div>
                    <button className=" px-8 text-sm rounded-sm py-2 bg-[#bb9b7d] text-white uppercase duration-300 hover:bg-[#23201e] mt-5">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full">
                <img
                  src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/popup-image.jpg"
                  alt="bannerImg"
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              onClick={() => {
                setComponentState(false);
              }}
              className=" cursor-pointer  absolute -top-3 -right-1 sm:top-2 sm:right-3"
            >
              <CloseBtn />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
