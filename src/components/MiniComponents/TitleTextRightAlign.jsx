import React from "react";

function TitleTextRightAlign({ Toptitle, title }) {
  return (
    <>
      <p className="  text-[#f0f0f0] cursor-default text-sm w-full text-end   tracking-widest uppercase ">
        {Toptitle}
      </p>
      <p className=" w-full text-[#f0f0f0] cursor-default text-5xl mt-6  text-end capitalize font-medium">
        {title}
      </p>
    </>
  );
}

export default TitleTextRightAlign;
