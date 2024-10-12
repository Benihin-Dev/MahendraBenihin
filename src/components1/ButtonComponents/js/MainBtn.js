import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

export default function MainBtn({ text }) {
  return (
    <div className=" font-urbanist font-medium w-fit bg-[#f4f1f1]  hover:bg-[#1b1918] duration-200 hover:text-white cursor-pointer group flex items-center gap-1 border-2 border-black py-3 px-5 text-[#282525]">
      <p>{text}</p>
      <RxArrowTopRight className=" size-5 rotate-45 -translate-y-[2px] group-hover:-rotate-0 duration-300" />
    </div>
  );
}
