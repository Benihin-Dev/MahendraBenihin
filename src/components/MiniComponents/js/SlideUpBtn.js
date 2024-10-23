import React from "react";
import { Link } from "react-scroll";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function SlideUpBtn() {
  return (
    <Link
      to="top-section"
      smooth={true}
      duration={500}
      spy={true}
      offset={-150}
    >
      <div className=" group fixed top-[92%] sm:top-[90%] slideUp cursor-pointer duration-200 right-10 sm:right-5">
        <div className=" -rotate-90 size-9  bg-[#b56868] flex items-center group-hover:bg-black justify-center duration-300">
          <div className=" w-[14px] translate-x-[10px] translate-y-[0.2mm] border-t-2 group-hover:border-[#ffffff] duration-300 border-transparent"></div>
          <MdOutlineArrowForwardIos className=" -translate-x-2 group-hover:translate-x-0 size-[17px] text-[#ffffff] duration-300" />
        </div>
      </div>
    </Link>
  );
}
