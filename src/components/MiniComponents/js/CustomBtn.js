import React from "react";

export default function CustomBtn({ text }) {
  return (
    <button className=" uppercase text-[13px] hover:text-white hover:bg-black duration-500 tracking-widest text-black bg-white px-10 py-[10px] shadow-md ">
      {text}
    </button>
  );
}
