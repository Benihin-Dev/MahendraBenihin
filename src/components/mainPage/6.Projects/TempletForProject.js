import React from "react";

export default function TempletForProject({ item, i }) {
  return (
    <div className=" w-full relative group">
      <div
        style={{ aspectRatio: "16/8" }}
        className=" w-full border  border-dashed border-gray-600  overflow-hidden  rounded-lg"
      >
        <img
          src={item.img}
          alt={item.img}
          className=" w-full h-full group-hover:scale-105 scale-110   object-cover object-top  cursor-pointer duration-300"
        />
      </div>
      <div className="  pt-5 text-white">
        <p
          className={` ${
            i % 2 === 0
              ? "bg-clip-text bg-gradient-to-t from-[#f56659] to-[#ffffff]"
              : "bg-clip-text bg-gradient-to-t to-[#2f2fb6] from-[#ffffff]"
          } text-2xl font-italiana font-bold text-transparent wrap-by-letter  `}
          style={{
            WebkitBackgroundClip: "text", // Required for clipping text
          }}
        >
          {item.title}
        </p>

        <p className=" text-xs lg:text-sm mt-3 text-gray-300 cursor-default">
          {item.desc}
        </p>
        <div className=" flex items-center justify-end">
          <button
            className="  w-fit px-5 py-1 text-xs mt-3 cursor-pointer  hover:scale-105 duration-200"
            style={{
              background: "linear-gradient(to right, #2f2fb6, #f56659)",
            }}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
