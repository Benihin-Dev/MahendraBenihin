import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function GridForBG({ data }) {
  return (
    <div className=" w-full grid grid-cols-1 gap-4 md:gap-0  md:grid-cols-2 xl:grid-cols-4   px-5 sm:px-7  mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className={` ${index === 3 ? "" : " border-r border-[#2b2929]"} ${
            index >= 2 ? " mt-4 md:mt-0" : ""
          } text-[#f0f0f0] w-full p-5 group relative animated-border   `}
        >
          <img
            src={item.img}
            className=" size-[60px] object-contain"
            alt="icon"
          />
          <p className=" text-3xl mt-8 font-medium">{item.title}</p>
          <p className=" mt-8">{item.desc}</p>
          <div className=" flex w-full items-center justify-end">
            <div className=" mt-8">
              <GoArrowRight className=" hover:rotate-0 -rotate-45 size-8 text-[#2b2929] group-hover:text-[#bb9d7b] duration-300" />
            </div>
          </div>
          <div className=" absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-50 group-hover:scale-100 duration-500 scale-90 -z-10">
            <img
              src={item.bgImg}
              alt="bgImg"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
