import React from "react";
import CustomBtn1 from "../../MiniComponents/js/CustomBtn1";

export default function TitleSection() {
  return (
    <div className=" ">
      <p className="  mx-auto  uppercase tracking-widest text-[#5a5a5a] cursor-default w-full  text-center text-sm font-medium">
        Vital CATEGORIES
      </p>
      <p className=" w-11/12  md:w-8/12 cursor-default text-center mx-auto font-medium leading-10 text-4xl py-5">
        Worldwide Fashion Collection
      </p>
      <div className=" w-20 border-b-2 mt-3 border-black mx-auto"></div>
      <CustomBtn1 text={" Explore All"} />
    </div>
  );
}
