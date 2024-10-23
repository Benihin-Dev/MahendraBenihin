import React from "react";
import { PiStarFourFill } from "react-icons/pi";

export default function LinkListTemplet({ item, index }) {
  return (
    <div key={index} className=" w-full">
      <p className=" text-lg font-semibold cursor-default">{item.title}</p>
      <div className=" w-10 border-t-2 mt-1 mb-6 border-black"></div>
      {item.subLinks.map((link, i) => (
        <div
          key={i}
          className=" pb-5 flex items-center gap-1 cursor-pointer group"
        >
          <PiStarFourFill className=" text-black size-3" />
          <p className=" group-hover:text-[#b05d5d] duration-300 text-sm">
            {link}
          </p>
        </div>
      ))}
    </div>
  );
}
