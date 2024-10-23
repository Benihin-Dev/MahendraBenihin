import React from "react";
import ShopNowBtn from "../../../MiniComponents/js/ShopNowBtn";

export default function Banner2({ info }) {
  return (
    <div className=" mx-auto  w-11/12 flex items-center justify-start   ">
      <div className=" py-48  overflow-hidden w-full sm:w-2/3 md:w-1/2">
        <div className=" slideFromRight1">
          <p className=" text-sm text-gray-400 md:text-[#5a5a5a] w-full text-start    font-medium tracking-widest">
            {info.miniText}
          </p>
          <p className=" text-start   w-full   text-[#000000]  my-4 font-semibold text-4xl">
            {info.title}
          </p>
          <p className="  text-gray-400 md:text-[#5a5a5a] w-full text-start  ">{info.desc}</p>
        </div>
        <div className=" overflow-hidden w-full my-4 flex items-center md:justify-start">
          <ShopNowBtn />
        </div>
      </div>
    </div>
  );
}
