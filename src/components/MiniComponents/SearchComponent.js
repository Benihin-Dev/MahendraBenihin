import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import CloseBtn from "./CloseBtn";

export default function SearchComponent({ setSearchComponent }) {
  return (
    <div className=" w-full z-50 fixed flex items-center justify-center top-0 left-0  h-screen bg-[#000000]">
      <div className=" bg-black w-10/12 sm:w-7/12 lg:w-5/12 border-b hover:border-[#d69393] duration-300 border-[#2b2929] shadow-sm rounded-sm overflow-hidden flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter Keyword"
          className=" px-3 py-5 text-2xl w-10/12 bg-black outline-none"
        />
        <div className=" w-2/12 bg-[#000000] hover:text-[#b05d5d] duration-300 cursor-pointer flex items-center justify-center  py-5 h-full">
          <IoSearchOutline className=" text-white size-8" />
        </div>
      </div>
      <div
        onClick={() => {
          setSearchComponent(false);
        }}
        className=" fixed top-7 scale-95 right-7"
      >
        <CloseBtn />
      </div>
    </div>
  );
}
