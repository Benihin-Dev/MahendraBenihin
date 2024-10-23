import React from "react";

export default function CustomBtn2({ text }) {
  return (
    <div className=" relative group  w-fit px-1">
      <p className=" py-2 uppercase  font-medium cursor-pointer  tracking-widest text-sm group-hover:text-[#b56868] duration-300 ">
        {text}
      </p>
      <p className=" w-full  absolute top-[80%] duration-200 right-0  border-t border-black group-hover:border-[#b56868] group-hover:w-0"></p>
      <p className=" w-0  absolute top-[80%] duration-300 delay-100 left-0 border-t border-black group-hover:border-[#b56868] group-hover:w-full"></p>
    </div>
  );
}
