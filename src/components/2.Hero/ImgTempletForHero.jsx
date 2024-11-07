import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function ImgTempletForHero({ data, index }) {
  // Create a unique key each time the component mounts
  const animationKey = `heightDecrease-${index}-${Math.random()}`;

  return (
    <div className="w-full relative cursor-grab">
      <img src={data.img} className="w-full object-cover" alt="" />
      <div className=" absolute z-30 gro bottom-[7%] left-0 w-full text-white group-hover:text-[#bfa282] duration-300">
        <p className="uppercase tracking-widest text-sm w-full text-center text-white px-5 font-medium">
          {data.titleName}
        </p>
        <p className=" cursor-pointer duration-300 hover:text-white capitalize mt-0 w-full text-center px-5 text-3xl md:text-[40px] font-semibold">
          {data.item}
        </p>
        <div className="translate-y-4 text-white opacity-0 groChild duration-500 cursor-pointer discoverBtn hover:text-[#bfa282] flex justify-center tracking-widest uppercase text-sm items-center gap-2">
          <p>Discover</p>
          <MdOutlineArrowRightAlt className="discoverArrow size-7" />
        </div>
      </div>
      <div
        key={animationKey}
        className={`${
          index % 2 === 0 ? "bottom-0" : "top-0"
        } absolute left-0 w-full bg-black heightDecrease`}
      ></div>
    </div>
  );
}
