import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

export default function MainBtn2({ text }) {
  return (
    <div className=" mx-auto font-urbanist font-medium w-fit bg-[#f4f1f100] text-white  hover:bg-[#ffffff] duration-200 uppercase hover:text-[#1b1918] cursor-pointer group flex items-center gap-1 border border-white py-3 px-5  ">
      <p className=" text-sm">{text}</p>
      <RxArrowTopRight className=" size-5 rotate-45 -translate-y-[2px] group-hover:-rotate-0 duration-300" />
    </div>
  );
}
