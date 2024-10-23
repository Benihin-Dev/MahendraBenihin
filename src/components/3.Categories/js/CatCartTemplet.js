import React from "react";
import CustomBtn from "../../MiniComponents/js/CustomBtn";

export default function CatCartTemplet({ data }) {
  return (
    <>
      <img
        src={data.img}
        alt=""
        className={` ${
          data.btnText === "women top"
            ? " w-10/12 group-hover:w-11/12"
            : "w-9/12 group-hover:w-10/12"
        }  cursor-pointer  object-contain  duration-300 `}
      />
      <div className=" -z-10 absolute bottom-0  left-0 w-full group-hover:h-[90%] duration-300 h-full bg-[#f0f0f0]"></div>
      <div className=" w-full absolute bottom-5 left-0 flex items-center justify-center px-5">
        <CustomBtn text={data.btnText} />
      </div>
    </>
  );
}
