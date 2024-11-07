import React from "react";

export default function BgComponentWithoutBg({ bgImg }) {
  return (
    <div className=" absolute top-0 left-0 w-full h-full -z-10">
      <div className=" w-full h-full relative bg-[#000000be]">
        <div className="grid w-[83%] sm:w-[85%] mx-auto grid-cols-2 border-x h-full border-[#2b2929]">
          <div className=" h-full border-r border-[#2b2929]"></div>
          <div className=" h-full grid grid-cols-3 border-[#2b2929]"></div>
          <div className=" absolute -z-10 h-full w-full top-0 left-0 ">
            <img
              src={bgImg}
              className=" w-full h-full object-cover"
              alt="bgImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
