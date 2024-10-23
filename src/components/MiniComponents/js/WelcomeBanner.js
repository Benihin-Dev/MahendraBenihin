import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import CloseBtn from "./CloseBtn";

export default function WelcomeBanner() {
  const [componentState, setComponentState] = useState(true);
  return (
    <>
      {componentState && (
        <div className=" w-full h-screen z-50  flex items-center justify-center bg-[#0000005a] fixed top-0 left-0">
          <div className=" relative shadow-md  sm:w-[80%] lg:w-[78%] xl:w-[75%] overflow-y-auto  customsScrollbar sm:overflow-hidden w-[90%] sm:h-[73%] h-[80%] grid grid-cols-1 sm:grid-cols-2 bg-white">
            <div className=" w-full p-6 flex items-center">
              <div className=" py-4 sm:py-0">
                <p className=" uppercase tracking-widest text-sm text-[#5a5a5a] cursor-default pb-1">
                  Join Today
                </p>
                <p className=" text-4xl font-semibold pb-2">Our Newsletter</p>
                <p className="  text-[#5a5a5a] cursor-default pt-2 pb-3">
                  We're thrilled that you're interested in staying up-to-date
                  with all the latest news
                </p>
                <div className=" w-full flex border hover:border-black duration-500 rounded-xl my-2 overflow-hidden">
                  <input
                    type="text"
                    placeholder="Your mail ID"
                    className=" outline-none py-3 px-4 w-10/12"
                  />
                  <div className=" w-2/12 flex items-center text-gray-600 cursor-pointer hover:text-[#b05d5d] justify-center">
                    <RiMailSendLine className=" h-7 w-10" />
                  </div>
                </div>
                <div className="flex items-start space-x-2 mt-4">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className=" size-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="text-gray-700 text-sm cursor-default"
                  >
                    Your email is safe with us, we don't spam. Privacy Policy
                  </label>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <img
                src="https://wdtkoka.wpengine.com/wp-content/uploads/2023/12/pop-image-1.jpg"
                alt="banner image"
                className=" w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => {
                setComponentState(false);
              }}
              className=" cursor-pointer  absolute scale-90 top-2 right-3"
            >
              <CloseBtn />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
