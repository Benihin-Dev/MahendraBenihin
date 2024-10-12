import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { PiUser } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({ scrollPosition, setShowSearchComponent }) {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(1);
  const [selectedLinkIndex2, setSelectedLinkIndex2] = useState(1);
  const navLinks = [
    { title: "home", links: ["Home 1", "Home 2"] },
    { title: "about", links: [" "] },
    {
      title: "blog",
      links: ["Blog List", "Blog Grid 1", "Blog Grid 2", "Blog Details"],
    },
    { title: "contact", links: [" "] },
    {
      title: "shop",
      links: [
        "Shop Grid 1",
        "Shop Grid 2",
        "Shop Grid 3",
        "Shop Grid 4",
        "Shop list",
        "Product Details 1",
        "Product Details 2",
        "Product Details 3",
      ],
    },
    {
      title: "pages",
      links: [
        "wishlist",
        "cart",
        "checkout",
        "order track",
        "404",
        "coming soon",
        "login",
        "register",
      ],
    },
  ];
  return (
    <div className=" w-full py-5 bg-[#f4f1f1] relative border-b flex items-center justify-between  px-5">
      <div
        onClick={() => {
          setShowNavLinks(!showNavLinks);
        }}
        className=" hidden md:block"
      >
        <HamburgerMenu />
      </div>
      <p className="  text-4xl cursor-default ">voguify</p>
      <div className=" md:flex hidden text-[#2b2d2e] items-center gap-3 ">
        <HiOutlineMagnifyingGlass
          onClick={() => {
            setShowSearchComponent(true);
          }}
          className=" size-8 cursor-pointer"
        />
        <HiOutlineShoppingCart className=" size-8 cursor-pointer" />
        <PiUser className=" size-8 cursor-pointer" />
      </div>
      <div
        onClick={() => {
          setShowNavLinks(!showNavLinks);
        }}
        className=" md:hidden"
      >
        <HamburgerMenu />
      </div>
      <div
        className={` w-full absolute top-[100%] z-30 left-0 ${
          showNavLinks ? "fullH  py-10 h-screen" : "zeroH "
        }  bg-[#f4f1f1] overflow-hidden md:flex items-center gap-8 `}
      >
        <div className=" w-full hidden md:flex md:w-1/3 my-10 px-5">
          <div className=" mx-auto w-11/12 p-10 border border-gray-700">
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/header-image.png"
              alt=""
              className=" w-full shadow-2xl"
            />
          </div>
        </div>
        <div className=" w-full md:w-2/3 py-5 px-5 md:px-10 flex ">
          <div className=" w-fit text-[#817f7e] space-y-6">
            {navLinks.map((navLink, index) => (
              <div
                onMouseOver={() => {
                  setSelectedLinkIndex(index);
                  setSelectedLinkIndex2(index);
                }}
                onMouseLeave={() => {
                  setSelectedLinkIndex(1);
                }}
                key={index}
                className=" hover:text-[#282525] text-3xl sm:text-4xl  w-fit cursor-pointer flex gap-1 items-center group"
              >
                <p>{navLink.title}</p>
                {navLink.links[0] === " " ? (
                  ""
                ) : (
                  <RxArrowTopRight className=" rotate-45 -translate-y-1 duration-300 group-hover:rotate-0" />
                )}
              </div>
            ))}
          </div>

          <div
            onMouseOver={() => {
              setSelectedLinkIndex(selectedLinkIndex2);
            }}
            onMouseLeave={() => {
              setSelectedLinkIndex(1);
            }}
            className={`${
              navLinks[selectedLinkIndex].links[0] === " "
                ? "text-[#00000000]"
                : " "
            } w-full text-[#817f7e]  space-y-1  font-poppins ml-10 `}
          >
            {navLinks[selectedLinkIndex].links.map((link, i) => (
              <p
                key={i}
                className=" capitalize cursor-pointer hover:text-[#282525] duration-300"
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
