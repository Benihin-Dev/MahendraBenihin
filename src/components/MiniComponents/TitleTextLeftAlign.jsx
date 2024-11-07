import React from "react";

export default function TitleTextLeftAlign({ Toptitle, title }) {
  return (
    <>
      <p className="  text-[#f0f0f0] cursor-default text-sm w-full   tracking-widest uppercase ">
        {Toptitle}
      </p>
      <p className=" w-full text-[#f0f0f0] cursor-default text-5xl mt-6 capitalize font-medium">
        {title}
      </p>
    </>
  );
}
