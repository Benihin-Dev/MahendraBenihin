import React from "react";
import { FaInstagram } from "react-icons/fa6";

export default function TempletForBlog({ data }) {
  return (
    <div className=" w-full  relative group cursor-pointer overflow-hidden">
      <img
        src={data.img}
        alt="blogImg"
        className="w-full object-cover group-hover:scale-110 duration-300"
      />
      <div className=" absolute top-0 left-0 w-full h-full   bg-[#000000bc]  opacity-0 group-hover:opacity-100 duration-500">
        <div className="w-full h-full flex flex-col justify-between p-6 scale-y-[0.8] group-hover:scale-y-100 duration-500 ">
          <p className="w-full text-center">{data.text}</p>
          <div className="w-full flex items-center justify-center">
            <FaInstagram className="size-9" />
          </div>
          <p className="w-full text-center">{data.date}</p>
        </div>
      </div>
    </div>
  );
}
