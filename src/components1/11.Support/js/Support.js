import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Support() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && (
        <div className=" group fixed  pt-5 pb-1 z-30 cursor-default bottom-0 right-3">
          <p className=" px-3 py-2  text-xs  bg-white rounded-md text-black ">
            Hi! What can i do for you?
          </p>
          <div className="  mt-1  size-16 rounded-full overflow-hidden ml-auto bg-blue-500">
            <img
              src="https://cdn.livechat-files.com/api/file/lc/img/9531830/5cf50a694eac88afaddbad4f6410b3f0.jpeg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div
            onClick={() => {
              setIsShow(false);
            }}
            className={`  group-hover:opacity-100 opacity-0 size-4 rounded-full  hover:scale-110 duration-200 overflow-hidden flex items-center justify-center cursor-pointer bg-white absolute top-0 right-0 `}
          >
            <RxCross1 className=" text-black size-3" />
          </div>
        </div>
      )}
    </>
  );
}
