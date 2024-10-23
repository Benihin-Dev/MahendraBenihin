import React from "react";

export default function ProductTemplet({ item, index }) {
  return (
    <div key={index} className=" w-full ">
      <div className=" w-[60%] group cursor-default ">
        <div className=" w-full relative overflow-hidden">
          <img src={item.img[1]} alt="" className=" w-full object-cover" />
          <img
            src={item.img[0]}
            alt=""
            className="  absolute  group-hover:opacity-0 top-0 left-0 w-full object-cover"
          />
          <div className=" absolute w-full h-full  top-0 left-0 flex items-center justify-center">
            <div className=" h-full w-5 group-hover:w-full duration-300 bg-transparent group-hover:bg-[#00000050]"></div>
          </div>
          <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <p className=" translate-y-[200%] group-hover:translate-y-0 group-hover:opacity-100  opacity-0 w-full  py-2 font-medium bg-black hover:bg-[#b05d5d] duration-500 cursor-pointer leading-4 uppercase text-sm text-center text-white">
              Select <br /> Options
            </p>
          </div>
        </div>
        <p className=" leading-5 my-4  hover:text-[#b05d5d] duration-200 cursor-pointer text-xl text-black font-medium">
          {item.title}
        </p>
        <p className="  text-black">{item.price}</p>
      </div>
    </div>
  );
}
