import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function CloseBtn({ bgColor }) {
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className=" relative size-20 scale-[0.4]   border-2 border-transparent hover:border-white duration-100 rounded-full group "
    >
      <div className=" absolute w-full h-full top-0 left-0 z-10  flex items-center justify-center  ">
        <IoCloseOutline className="size-24 bg-[#22212100] rounded-full group-hover:bg-transparent duration-300 text-white" />
      </div>
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className=" absolute w-3/4 h-3/4 group-hover:h-0 duration-300    bottom-5 left-[50%]"
      ></div>
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className=" absolute w-3/4 h-3/4  group-hover:h-0 duration-300    top-5 delay-[400ms] right-[50%]"
      ></div>
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className=" absolute w-3/4 group-hover:w-0 delay-[100ms] duration-500 h-1/3    top-[135px] left-[12%]"
      ></div>
    </div>
  );
}
