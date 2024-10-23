import React from "react";

export default function CloseBtn() {
  return (
    <div className="group closeBtn rotate-45">
      <div className=" w-6 border-t-2 lin border-black translate-y-[20px] group-hover:translate-y-[18px] group-hover:translate-x-[6px] group-hover:-rotate-45 duration-300 translate-x-[5px]"></div>
      <div className=" w-6 group-hover:hidden border-t-2 border-black translate-y-[18px] rotate-90 translate-x-[5px]"></div>
      <div className=" rot size-9 border rounded-full -rotate-45  -translate-y-[2px] border-black"></div>
    </div>
  );
}
