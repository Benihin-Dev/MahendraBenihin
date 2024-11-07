import React from "react";

export default function TitleText({ Toptitle, title }) {
  return (
    <>
      <p className="  text-[#f0f0f0] cursor-default text-sm w-full text-center tracking-widest uppercase ">
        {Toptitle}
      </p>
      <p className=" w-full text-[#f0f0f0] cursor-default text-center px-5 text-5xl mt-4 capitalize font-medium">
        {title}
      </p>
    </>
  );
}
