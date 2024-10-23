import React from "react";
import { HiStar } from "react-icons/hi2";

export default function TempletForTestimonial({ details }) {
  return (
    <div className=" w-full p-3 cursor-default">
      <div className=" flex">
        {Array.from({ length: 5 }, (_, index) =>
          index < details.rating ? (
            <HiStar key={index} className="text-[#ffc300] size-5" />
          ) : (
            <HiStar key={index} className="text-gray-300 size-5" />
          )
        )}
      </div>
      <p className=" my-4 text-[#5a5a5a]">{details.comment}</p>
      <div className=" w-full pt-2 flex items-center justify-start gap-3">
        <div className="">
          <img
            src={details.img}
            alt=""
            className=" rounded-full overflow-hidden"
          />
        </div>
        <div className="">
          <p className=" font-medium">
            {details.name}, {details.role}
          </p>
          <p>{details.address}</p>
        </div>
      </div>
    </div>
  );
}
