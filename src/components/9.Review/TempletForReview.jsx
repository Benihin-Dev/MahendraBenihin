import React from "react";
import { HiStar } from "react-icons/hi2";

export default function TempletForReview({ data }) {
  return (
    <div className=" w-full relative bg-[#23201e] py-8 px-5 sm:p-10 text-[#f0f0f0] group cursor-grab border border-transparent">
      <div className=" flex  items-center justify-start gap-4 ">
        <img
          src={data.img}
          alt=""
          className=" size-24 object-cover rounded-full overflow-hidden cursor-pointer"
        />
        <div className=" ">
          <p className=" font-medium">{data.name}</p>
          <div className=" flex mt-3">
            {Array.from({ length: 5 }, (_, index) =>
              index < data.rating ? (
                <HiStar key={index} className="text-[#ffc300] size-5" />
              ) : (
                <HiStar key={index} className="text-gray-300 size-5" />
              )
            )}
          </div>
        </div>
      </div>
      <p className=" mt-4 leading-7 ">{data.comment}</p>

      {/* Top-right border animation */}
      <div className="absolute w-0 h-0 border-transparent duration-700 group-hover:w-full group-hover:h-full top-0 right-0 group-hover:border-[#bb9d7b] border-r border-t"></div>

      {/* Bottom-left border animation */}
      <div className="absolute w-0 h-0 border-transparent duration-700 group-hover:w-full group-hover:h-full bottom-0 left-0 group-hover:border-[#bb9d7b] border-l border-b"></div>
    </div>
  );
}
