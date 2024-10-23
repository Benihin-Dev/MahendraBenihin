import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiUserCircleLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import SearchComponent from "../../MiniComponents/js/SearchComponent";

export default function BottomHeaderSection({
  headerItems,
  setStateForSmNavSection,
}) {
  const [headerMenuSection, setHeaderMenuSection] = useState(false);
  const [pageLinkSection, setPageLinkSection] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(9);
  const [searchComponentState, setSearchComponentState] = useState(false);
  return (
    <div className=" w-full bg-white border-b relative">
      <div className="  w-11/12 mx-auto py-5 flex items-center justify-between gap-10 ">
        <img
          src="https://wdtkoka.wpengine.com/wp-content/themes/koka/assets/images/logo.svg"
          alt=""
        />
        <ul className="items-center gap-6 hidden lg:flex">
          {headerItems.map((item, index) => (
            <li
              onMouseEnter={() => {
                if (item.name === "pages") {
                  setPageLinkSection(true);
                } else {
                  setHeaderMenuSection(true);
                  setActiveItemIndex(index);
                }
              }}
              onMouseLeave={() => {
                if (item.name === "pages") {
                  setPageLinkSection(false);
                } else {
                  setHeaderMenuSection(false);
                }
              }}
              key={index}
              className=" text-xs relative tracking-widest cursor-pointer hover:text-[#b05d5d] duration-200 uppercase flex items-center gap-1"
            >
              <p className=" font-[500]"> {item.name}</p>
              {item.innerItem && <p className="  text-sm ">+</p>}

              {item.name === "pages" ? (
                <div
                  onMouseEnter={() => {
                    setPageLinkSection(true);
                  }}
                  onMouseLeave={() => {
                    setPageLinkSection(false);
                  }}
                  className={`  ${
                    pageLinkSection === false ? "slideDown" : "slideUp"
                  } absolute w-[350%] p-3  border-t  shadow-md bg-white top-[220%] left-0 `}
                >
                  {item.name === "pages" && (
                    <>
                      {item.links.map((link, i) => (
                        <div
                          key={i}
                          className="  pb-5 flex items-start gap-1 cursor-pointer group"
                        >
                          <div className=" w-5 flex items-center justify-center">
                            <PiStarFourFill className=" mt-1 text-gray-800 size-3" />
                          </div>
                          <p className="duration-300 capitalize font-[400] text-black hover:text-[#b05d5d] cursor-pointer">
                            {link}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
        <div className=" flex items-center justify-end gap-3  ">
          <IoSearchOutline
            onClick={() => {
              setSearchComponentState(true);
            }}
            className=" size-6 cursor-pointer hover:text-[#b56868] duration-300 "
          />
          <div className=" relative cartParent">
            <HiOutlineShoppingBag className=" size-6 cursor-pointer hover:text-[#b56868] duration-300 " />
            <div className=" absolute cursor-default cartChild top-[150%] right-0 w-max bg-white p-3 text-gray-500 pr-5 border shadow-md">
              No products in the Cart
            </div>
          </div>
          <PiUserCircleLight className=" size-7 cursor-pointer hover:text-[#b56868] duration-300 " />
          <ul
            onClick={() => {
              setStateForSmNavSection(true);
            }}
            className=" cursor-pointer lg:hidden space-y-2 group pl-2"
          >
            <li className="  group-hover:-translate-x-1 duration-300 border-b border-black w-9"></li>
            <li className="  border-b border-black w-9"></li>
            <li className="  group-hover:-translate-x-1 duration-300 border-b border-black w-9"></li>
          </ul>
        </div>
      </div>
      <div
        onMouseEnter={() => {
          setHeaderMenuSection(true);
        }}
        onMouseLeave={() => {
          setHeaderMenuSection(false);
        }}
        className={` ${
          headerMenuSection === false ||
          activeItemIndex === 4 ||
          activeItemIndex === 5 ||
          activeItemIndex === 6
            ? "slideDown"
            : "slideUp"
        } w-full absolute top-[100%] border-t bg-white shadow-md z-40 border-gray-300  left-0  py-8  `}
      >
        {headerItems.map(
          (item, index) => index === activeItemIndex && <>{item.innerItem}</>
        )}
      </div>
      {searchComponentState && (
        <SearchComponent setSearchComponentState={setSearchComponentState} />
      )}
    </div>
  );
}
