import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md"; 

export default function NavSectionForSmScreen({
  headerItems,
  stateForSmNavSection,
  setStateForSmNavSection,
}) {
  const [subNavSection, setSubNavSection] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  return (
    <div className=" z-40 fixed lg:hidden h-full w-full top-0 left-0 bg-[#0000004f]">
      <div className=" relative h-full w-full">
        <div className=" translate-x-[100%] cursor-pointer slideFromRight absolute top-0   py-5 right-0 w-2/3 sm:w-1/3 h-full bg-white border border-black">
          <div
            onClick={() => {
              setStateForSmNavSection(false);
            }}
            className=" group rotate-45 absolute top-8 scale-90 right-5"
          >
            <div className=" w-5 border border-black group-hover:rotate-180 duration-500"></div>
            <div className=" w-5 border rotate-90 -translate-y-[2px] group-hover:-rotate-90 duration-500 border-black"></div>
          </div>
          <div className=" w-full mt-12 ">
            {headerItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (index === 5 || index === 6) {
                  } else {
                    setSubNavSection(true);
                    setActiveSection(index);
                  }
                }}
                className="px-5 cursor-pointer group py-[10px] w-full flex items-center justify-between border-t "
              >
                <p className=" capitalize group-hover:text-[#b56868]  duration-300">
                  {item.name}
                </p>
                {item.innerItem && (
                  <div className=" flex items-center justify-end group-hover:translate-x-1 duration-200">
                    <div className=" w-[14px] translate-x-[10px] border-t-2 group-hover:border-[#b56868] duration-300 border-transparent"></div>
                    <MdOutlineArrowForwardIos className=" size-[17px] group-hover:text-[#b56868] duration-300" />
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
            } absolute top-0  py-5 right-0 w-2/3 sm:w-1/3 h-full bg-white border border-white `}
          >
            <div className=" w-full h-full overflow-y-scroll customsScrollbar relative">
              <div className=" pt-12">
                {headerItems[activeSection].innerItem}
              </div>
              <div
                onClick={() => {
                  setSubNavSection(false);
                }}
                className="  cursor-pointer absolute top-3 left-1 flex items-center justify-end group hover:-translate-x-1 duration-200"
              >
                <div className=" w-[14px] translate-x-[20px] border-t-2 group-hover:border-[#b56868] duration-300 border-transparent"></div>
                <MdOutlineArrowForwardIos className=" rotate-180 size-[17px] group-hover:text-[#b56868] duration-300" />
              </div>
              <div
                onClick={() => {
                  setStateForSmNavSection(false);
                }}
                className=" cursor-pointer group rotate-45 absolute top-3 scale-90 right-5"
              >
                <div className=" w-5 border border-black group-hover:border-[#b56868]   group-hover:rotate-180 duration-500"></div>
                <div className=" w-5 border rotate-90 -translate-y-[2px] group-hover:-rotate-90 duration-500 border-black group-hover:border-[#b56868] "></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
