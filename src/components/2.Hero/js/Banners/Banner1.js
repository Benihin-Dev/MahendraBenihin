import React from "react";
import ShopNowBtn from "../../../MiniComponents/js/ShopNowBtn";

export default function Banner1({ info }) {
  return (
    <div className=" mx-auto  w-11/12 flex items-center justify-start md:justify-end ">
      <div className=" py-48 overflow-hidden w-full sm:w-2/3 md:w-1/2">
        <div className=" slideFromLeft">
          <p className=" text-sm text-[#5a5a5a] w-full text-start md:text-end  font-medium tracking-widest">
            {info.miniText}
          </p>
          <p className=" text-start md:text-end end-full   text-[#000000]  my-4 font-semibold text-4xl">
            {info.title}
          </p>
          <p className="  text-[#5a5a5a] w-full text-start md:text-end">
            {info.desc}
          </p>
        </div>
        <div className=" overflow-hidden w-full my-4 flex items-start md:justify-end">
          <ShopNowBtn />
        </div>
      </div>
    </div>
  );
}
