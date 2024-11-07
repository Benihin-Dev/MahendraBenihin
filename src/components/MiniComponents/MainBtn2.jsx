import React from "react";

export default function MainBtn2({ text }) {
  return (
    <div className=" mt-4 h-fit py-[9px] px-8 text-sm uppercase font-medium cursor-pointer btnParent2 relative overflow-hid den rounded-sm border border-[#bb9d7b]  hover:text-[#ffffff] duration-300 w-fit ">
      <p className=" invisible"> {text}</p>
      <div className="slope-rectangle1 w-[70%] h-[110%] border border-[#bb9d7b]   bg-[#bb9d7b] absolute    top-0 btnChild12"></div>
      <div className="slope-rectangle w-[70%] h-[110%] border border-[#bb9d7b] bg-[#bb9d7b]  absolute  top-0  btnChild22  "></div>
      <div className=" absolute w-full h-full top-0 left-0 text-center py-2">
        {text}
      </div>
    </div>
  );
}
