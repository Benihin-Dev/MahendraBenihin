import React from "react";
import quoImg from "../img/quotation.png";
import { HiStar } from "react-icons/hi2";

export default function SliderTemplet({ item }) {
  return (
    <div className=" w-full flex items-center">
      <div className=" w-full">
        <img
          src={item.img}
          alt=""
          className=" w-full sm:w-1/3 object-cover  mx-auto pb-4"
        />
        <div className="  font-urbanist leading-4  relative  text-gray-500">
          <div className="  invisible ">
            <div className=" flex gap-[2px]  pb-2 items-center justify-center">
              {Array.from({ length: 5 }, (_, index) =>
                index < item.rate ? (
                  <HiStar key={index} className="text-[#4f7942] size-5" />
                ) : (
                  <HiStar key={index} className="text-gray-300 size-5" />
                )
              )}
            </div>
            <p className=" w-full text-center text-[#282525] text-3xl">
              {item.name}
            </p>
            <p className=" w-full text-center text-[#282525]   text-xl">
              {item.role}
            </p>
            <p className=" w-full sm:w-11/12 mx-auto text-center mt-4 leading-4 md:text-lg">
              {item.comment}
            </p>
          </div>
          <div className="  absolute  z-10 top-0 left-0 w-full h-full flex items-center justify-center">
            <img src={quoImg} className=" h-[90%] object-contain" alt="" />
          </div>
          <div className=" absolute top-0 z-20 left-0 w-full h-full  ">
            <div className=" flex gap-[2px]  pb-2 items-center justify-center">
              {Array.from({ length: 5 }, (_, index) =>
                index < item.rate ? (
                  <HiStar key={index} className="text-[#4f7942] size-5" />
                ) : (
                  <HiStar key={index} className="text-gray-300 size-5" />
                )
              )}
            </div>
            <p className=" w-full text-center text-[#282525] text-3xl">
              {item.name}
            </p>
            <p className=" w-full text-center text-[#282525]   text-xl">
              {item.role}
            </p>
            <p className=" w-full sm:w-11/12 mx-auto text-center mt-4 leading-4 md:text-lg">
              {item.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
