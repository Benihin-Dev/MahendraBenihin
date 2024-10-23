import React from "react";
import ShopNowBtn from "../../../MiniComponents/js/ShopNowBtn";

export default function Banner3({ info }) {
  return (
    <div className=" mx-auto  w-11/12 flex items-center justify-start md:justify-center ">
      <div className=" py-48  overflow-hidden w-full sm:w-2/3 md:w-1/2">
        <div className=" slideFromBottom">
          <p className=" text-sm text-[#5a5a5a] w-full text-start md:text-center  font-medium tracking-widest">
            {info.miniText}
          </p>
          <p className=" text-start md:text-center w-full   text-[#000000]  my-4 font-semibold text-4xl">
            {info.title}
          </p>
          <p className="  text-[#5a5a5a] w-full text-start md:text-center">
            {info.desc}
          </p>
        </div>
        <div className=" overflow-hidden w-full my-4 flex items-center md:justify-center">
          <ShopNowBtn />
        </div>
      </div>
    </div>
  );
}
