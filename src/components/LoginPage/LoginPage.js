import React, { useState } from "react";

export default function LoginPage({ loginStatus, setLoginStatus }) {

  return (
    <div
      className={` ${
        loginStatus ? "loginPage" : ""
      } overflow-hidden w-full h-screen fixed top-0 left-0 `}
    >
      <div className=" bg-[#00000089] w-full h-full relative">
        <div className=" w-full h-full  relative flex items-center justify-center ">
          <div className={` bg-[#00000071] p-6 rounded-md w-fit `}>
            <input
              type="text"
              placeholder="_name"
              autoFocus
              className=" mb-5 border-gray-600 text-base focus:border-gray-400 hover:border-gray-400 duration-300    w-[80vw]  sm:w-80 text-white font-thin tracking-wider pt-2 pb-[2px] outline-none bg-transparent border rounded-md px-3"
            />
            <br />
            <input
              type="password"
              placeholder="_password"
              className=" mb-6 border-gray-600 focus:border-gray-400 hover:border-gray-400 duration-300  w-[80vw] sm:w-80  text-white font-thin tracking-wider pt-2 pb-[2px] outline-none bg-transparent border rounded-md px-3"
            />
            <br />
            <button
              onClick={() => {
                setLoginStatus(true);
              }}
              className="text-white font-medium  py-2 duration-300  shadow-white hover:shadow-md bg-[#2d259e] rounded-md  w-[80vw]  sm:w-80"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
