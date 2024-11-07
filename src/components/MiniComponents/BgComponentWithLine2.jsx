import React from "react";

export default function BgComponentWithLine2() {
  return (
    <div className=" absolute top-0 left-0 w-full h-full  bg-black -z-10">
      <div className="    grid w-[83%] sm:w-[85%] mx-auto grid-cols-2  border-x h-full border-[#2b2929a9]">
        <div className=" h-full md:border-r grid grid-cols-3 border-[#2b2929a9]"></div>
        <div className=" h-full grid grid-cols-3 border-[#2b2929a9]"></div>
      </div>
    </div>
  );
}
