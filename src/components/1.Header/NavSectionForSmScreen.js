import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function NavSectionForSmScreen({
  headerLink,
  stateForSmNavSection,
  setStateForSmNavSection,
}) {
  const [subNavSection, setSubNavSection] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  return (
    <div className=" z-40 fixed xl:hidden h-full w-full -top-1  left-0 bg-[#0000004f]">
      <div className=" relative h-full w-full">
        <div
          onClick={() => {
            setStateForSmNavSection(false);
          }}
          className="w-1/3 sm:w-3/4 absolute left-0 top-0 h-full bg-transparent"
        ></div>
        <div className=" translate-x-[100%] cursor-default slideFromRight absolute top-0   py-5 right-0 w-2/3 sm:w-1/4 h-full bg-[#bb9d7b]  ">
          <div
            onClick={() => {
              setStateForSmNavSection(false);
            }}
            className=" group rotate-45 absolute top-8 scale-90 right-5"
          >
            <div className=" w-5 border border-white group-hover:rotate-180 duration-500"></div>
            <div className=" w-5 border rotate-90 -translate-y-[2px] group-hover:-rotate-90 duration-500 border-white"></div>
          </div>
          <div className=" w-full mt-12  h-screen bg-[#bb9d7b] ">
            {headerLink.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (index === 2 || index === 3 || index === 6) {
                  } else {
                    setSubNavSection(true);
                    setActiveSection(index);
                  }
                }}
                className="px-5 text-white cursor-pointer group py-[10px] w-full flex items-center justify-between border-t border-[#c1a483]  "
              >
                <p className="  capitalize  group-hover:text-[#000000]  duration-500">
                  {item.title}
                </p>
                {item.link && (
                  <div className=" flex items-center justify-end group-hover:translate-x-2 duration-200">
                    <div className=" w-[14px] translate-y-[0.5px] translate-x-[10px] border-t-2 group-hover:border-[#000000] duration-500 border-transparent"></div>
                    <MdOutlineArrowForwardIos className=" size-[17px] group-hover:text-[#000000] duration-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {stateForSmNavSection && (
          <div
            className={` ${
              subNavSection ? "slideLeft" : "slideRight"
            }   absolute top-0  py-5 right-0 w-2/3 sm:w-1/4 h-screen bg-[#bb9d7b] `}
          >
            <div className=" w-full h-full overflow-y-scroll customsScrollbar relative">
              <div className=" px-4 py-[10px] border-y border-[#c9ab89]  text-white capitalize cursor-default mt-12">
                {headerLink[activeSection].title}
              </div>
              <div className=" ">
                {headerLink[activeSection].link.map((link, i) => (
                  <p
                    key={i}
                    className={` ${
                      i === 0 ? "text-black" : "text-white"
                    } pl-7 pr-1 py-[10px] border-b border-[#c2a37f]   capitalize cursor-pointer hover:text-black duration-500 `}
                  >
                    {link}
                  </p>
                ))}
              </div>
              <div
                onClick={() => {
                  setSubNavSection(false);
                }}
                className=" bg-[#bb9d7b]   cursor-pointer absolute top-2 left-1 flex items-center justify-end group hover:-translate-x-2 duration-200"
              >
                <div className=" w-[14px] translate-x-[20px] border-t-2 -translate-y-[1px] group-hover:border-[#ffffff] duration-300 border-transparent"></div>
                <MdOutlineArrowForwardIos className=" text-white rotate-180 size-[17px] duration-300" />
              </div>
              <div
                onClick={() => {
                  setStateForSmNavSection(false);
                }}
                className=" cursor-pointer group rotate-45 absolute top-3 scale-90 right-5"
              >
                <div className=" w-5 border border-white group-hover:border-[#ffffff]   group-hover:rotate-180 duration-1000"></div>
                <div className=" w-5 border rotate-90 -translate-y-[2px] group-hover:-rotate-90 duration-1000 border-white group-hover:border-[#ffffff] "></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
