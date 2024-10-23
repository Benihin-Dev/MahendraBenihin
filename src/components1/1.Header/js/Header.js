import React, { useState, useTransition } from "react";
import logoImg from "../../0.HomePage/img/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiMiniBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [headerLinks, setHeaderLinks] = useState([
    { title: "Home", subLinks: false },
    { title: "About", subLinks: false },
    {
      title: "Features",
      subLinks: {
        state: false,
        links: [
          "Accordin",
          "Buttons",
          "Coloums",
          "Contact",
          "Countdown",
          "Gallery",
          "HoneyComs",
          "Ice Box",
          "Pricing Table",
          "Progress Bar",
          "Services",
          "Tab & Tours",
        ],
      },
    },
    { title: "Blog", subLinks: false },
    {
      title: "Store",
      subLinks: {
        state: false,
        links: ["My Account", "Cart", "Checkout"],
      },
    },
    { title: "Contact", subLinks: false },
  ]);

  function ToggleSublinkState(index) {
    if (index === 2 || index === 4) {
      setHeaderLinks((prevHeaderLinks) =>
        prevHeaderLinks.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              subLinks: {
                ...item.subLinks,
                state: !item.subLinks.state,
              },
            };
          }
          return item;
        })
      );
    }
  }
  const [navLinkStateForSmScreen, setNavLinkStateForSmScreen] = useState(false);

  return (
    <div className="relative w-full px-5 sm:px-10    bg-black py-5 flex-col sm:flex-row flex items-center justify-between gap-5 ">
      <div className=" w-9/12 sm:w-1/5   ">
        <img src={logoImg} alt=" " className=" w-full object-contain" />
      </div>
      <div
        onClick={() => {
          setNavLinkStateForSmScreen(!navLinkStateForSmScreen);
        }}
        className=" md:hidden flex items-center justify-center text-white"
      >
        {navLinkStateForSmScreen ? (
          <RxCross1 className=" border size-6" />
        ) : (
          <HiMiniBars4 className=" size-6" />
        )}
      </div>
      <ul className=" hidden md:flex items-center justify-between gap-5 lg:gap-10 font-jost text-[#cecece]  ">
        {headerLinks.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => {
              ToggleSublinkState(index);
            }}
            onMouseLeave={() => {
              ToggleSublinkState(index);
            }}
            className=" relative flex items-center justify-center hover:text-[#ddac55] duration-300 cursor-pointer"
          >
            <p>{link.title}</p>
            {link.subLinks && (
              <>
                <MdKeyboardArrowDown className=" size-4  e" />

                <div
                  className={` ${
                    link.subLinks.state ? "block" : "hidden"
                  } bg-white absolute z-20 top-[110%] w-[250%] -left-3    `}
                >
                  {link.subLinks.links.map((sLink, i) => (
                    <p
                      key={i}
                      className=" px-4 text-black duration-300 hover:text-[#ddac55] border-b py-2"
                    >
                      {sLink}
                    </p>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="  flex items-center justify-end text-white gap-3">
        <IoHomeOutline className=" size-6 hover:text-[#ddac55] duration-300 cursor-pointer" />
        <HiMiniMagnifyingGlass className=" size-6 hover:text-[#ddac55] duration-300 cursor-pointer" />
        <HiOutlineShoppingCart className=" size-6 hover:text-[#ddac55] duration-300 cursor-pointer" />
      </div>
      {navLinkStateForSmScreen && (
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="md:hidden absolute top-[100%] left-0  z-20 w-full"
        >
          <div className=" w-11/12 sm:w-8/12 mx-auto bg-white">
            {headerLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  ToggleSublinkState(index);
                }}
              >
                <div
                  className={` py-3 hover:text-[#ddac55] duration-300 cursor-pointer  flex items-center justify-between px-5  ${
                    link.subLinks.state ? "" : "border-b"
                  }`}
                >
                  <p className=" w-full text-start "> {link.title}</p>
                  {link.subLinks && <MdKeyboardArrowDown />}
                </div>
                {link.subLinks && (
                  <>
                    {link.subLinks.state && (
                      <div className=" w-full  ">
                        {link.subLinks.links.map((sLink, i) => (
                          <p className=" w-full py-2 pl-10 pr-4 border-b">
                            {sLink}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
