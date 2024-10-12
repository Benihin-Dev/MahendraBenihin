import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { HiStar } from "react-icons/hi2";

export default function Templet({ details }) {
  return (
    <div className="w-full">
      <div className="relative p-5 group parentClass bg-[#faf6f5] border border-white">
        <img src={details.img} className="w-full" alt="" />
        <div className="w-full h-full absolute top-0 left-0  overflow-hidden flex items-center justify-center ">
          <div className="flex items-center child justify-center gap-2 transition-transform transform translate-x-[150%] group-hover:translate-x-0 scale-0 group-hover:scale-100 duration-700">
            <div className="hover:text-white text-[#282525] duration-500 transition-transform cursor-pointer flex items-center justify-center hover:bg-[#282525] size-9 bg-white">
              <IoHeartOutline className="size-7" />
            </div>
            <div className="hover:text-white text-[#282525] duration-500 cursor-pointer flex items-center justify-center hover:bg-[#282525] size-9 bg-white">
              <HiOutlineMagnifyingGlass className="size-7" />
            </div>
            <div className="hover:text-white text-[#282525] duration-500 cursor-pointer flex items-center justify-center hover:bg-[#282525] size-9 bg-white">
              <HiOutlineShoppingCart className="size-7" />
            </div>
          </div>
        </div>
        {details.type === "sale" ? (
          <div className=" absolute top-10 left-10 bg-[#4f7942] text-white py-[5px] px-5 font-urbanist">
            SALE
          </div>
        ) : details.type === "new" ? (
          <div className=" absolute top-10 left-10 bg-[#ffa500] text-white py-[5px] px-5 font-urbanist">
            NEW
          </div>
        ) : (
          ""
        )}
      </div>
      <div className=" w-full flex items-center justify-between gap-10">
        <p
          className=" text-xl font-urbanist text-[#282525] mt-5
      "
        >
          {details.name}
        </p>
        <div className=" flex ">
          {Array.from({ length: 5 }, (_, index) =>
            index < details.rate ? (
              <HiStar key={index} className="text-[#4f7942] size-4" />
            ) : (
              <HiStar key={index} className="text-gray-400 size-4" />
            )
          )}
        </div>
      </div>
      {details.type === "sale" ? (
        <p className=" mt-4 text-2xl font-urbanist text-[#282525]">
          ${details.price}
          <span className=" pl-2 text-xl line-through text-[#a4a3a2]">
            {" "}
            {details.price - (details.discount / 100) * details.price}
          </span>{" "}
          <span className=" text-xl  text-[#ec1919]">-{details.discount}%</span>
        </p>
      ) : (
        <p className=" mt-4 text-2xl font-urbanist text-[#282525]">
          ${details.price}
        </p>
      )}
    </div>
  );
}
