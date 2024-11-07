import React from "react";
import MainBtn2 from "../MiniComponents/MainBtn2";

export default function TempletForRB({ data }) {
  return (
    <div className=" w-full relative group overflow-hidden cursor-grab">
      <img
        src={data.img}
        alt=""
        className=" w-full object-cover sm:scale-[1.2] scale-[1.5] duration-500 group-hover:translate-x-10"
      />
      <img src={data.img} alt="" className=" invisible w-full object-cover mb-5" />
      <div className=" cursor-default absolute top-[35%] right-0 h-fit p-5 sm:px-8 w-[80%] group-hover:w-full duration-500 group-hover:bg-[#23201e] group-hover:text-[#ffffff] bg-white text-black ">
        <p className=" uppercase tracking-widest text-sm group-hover:text-[#bb9d7b] duration-300">
          {data.date}
        </p>
        <p className="  text-2xl mt-5 cursor-pointer hover:text-[#bb9d7b] duration-300">
          {data.desc}
        </p>
        <div className=" pt-3 ">
          <MainBtn2 text={"Read more"} />
        </div>
      </div>
    </div>
  );
}
