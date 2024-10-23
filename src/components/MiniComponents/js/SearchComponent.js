import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import CloseBtn from "./CloseBtn";

export default function SearchComponent({ setSearchComponentState }) {
  return (
    <div className=" w-full z-50 fixed flex items-center justify-center top-0 left-0  h-screen bg-[#f0f0f0]">
      <div className=" w-10/12 sm:w-7/12 lg:w-5/12 border hover:border-[#d69393] duration-300 border-gray-300 shadow-sm rounded-sm overflow-hidden flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter Keyword"
          className=" px-3 py-5 text-xl w-10/12 outline-none"
        />
        <div className=" w-2/12 bg-white hover:text-[#b05d5d] duration-300 cursor-pointer flex items-center justify-center  py-5 h-full">
          <IoSearchOutline className="  size-7" />
        </div>
      </div>
      <div
        onClick={() => {
          setSearchComponentState(false);
        }}
        className=" fixed top-7 scale-95 right-7"
      >
        <CloseBtn />
      </div>
    </div>
  );
}
