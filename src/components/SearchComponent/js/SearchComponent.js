import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchComponent({ toggleSearchComponent }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={toggleSearchComponent}
      className=" w-full h-screen custom-cursor px-5 sm:px-10 relative flex items-center justify-center"
    >
      <div onClick={stopPropagation} className=" w-full ">
        <p className=" w-fit mx-auto cursor-default pb-1 text-center text-5xl md:text-6xl font-romansStyle text-[#282525]">
          search
        </p>
        <div className="    cursor-default  w-full sm:w-8/12   border-[#eae6e4] shadow-sm shadow-white border-8 flex items-center mx-auto">
          <input
            type="text"
            className=" w-10/12 bg-white outline-none py-4 px-5"
            placeholder="Search Here.."
          />
          <div className=" w-2/12   bg-white h-full py-3 cursor-pointer  flex items-center justify-center">
            <HiOutlineMagnifyingGlass className=" size-8 text-gray-600" />
          </div>
        </div>
      </div>
      <p className="   cursor-none text-7xl sm:text-[150px] leading-[100px] absolute bottom-0 left-0 font-romansStyle text-[#bebbba] w-full text-center">
        search
      </p>
    </div>
  );
}
