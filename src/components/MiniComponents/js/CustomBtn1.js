import React from "react";

export default function CustomBtn1({ text }) {
  return (
    <div className=" w-full flex items-center justify-center ">
      <button className=" border px-10 tracking-widest text-sm uppercase py-2 hover:text-white text-black border-black hover:border-[#b05d5d] hover:bg-[#b05d5d] duration-500 font-medium">
        {text}
      </button>
    </div>
  );
}
