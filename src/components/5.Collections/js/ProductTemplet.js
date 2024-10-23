import React from "react";

export default function ProductTemplet({ data }) {
  return (
    <div className=" pb-1 group">
      <div className="  bg-[#f0f0f0] w-full relative  overflow-hidden cursor-pointer">
        <img
          src={data.img[0]}
          alt=""
          className=" w-full object-cover absolute top-0 left-0 h-full group-hover:opacity-0"
        />
        <img
          src={data.img[1]}
          alt=""
          className=" w-full object-cover opacity-0 group-hover:opacity-100"
        />
        <div className=" absolute w-full h-full top-0 left-0 flex items-end pb-5 justify-center">
          <p className=" translate-y-[200%] group-hover:translate-y-0 group-hover:opacity-100  opacity-0 px-8 tracking-widest py-3 font-medium bg-black hover:bg-[#b05d5d] duration-500 cursor-pointer leading-4 uppercase text-sm text-center text-white">
            {data.itemOption}
          </p>
        </div>
      </div>
      <p className=" py-3 tracking-wide  text-lg font-medium leading-5">
        {data.name}
      </p>
      {data.discountPrice ? (
        <p className=" pb-3 tracking-wide font-medium leading-5">
          <span className=" font-normal text-sm line-through text-gray-600 pr-1">
            {data.price}
          </span>{" "}
          {data.discountPrice}.
        </p>
      ) : (
        <p className=" pb-3 tracking-wide  text-lg font-normal leading-5">
          {data.price}
        </p>
      )}
    </div>
  );
}
