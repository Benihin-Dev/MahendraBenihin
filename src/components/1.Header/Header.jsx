import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import FourRoundBtn from "./FourRoundBtn";
import BurgerBarBtn from "./BurgerBarBtn";
import NavSectionForSmScreen from "./NavSectionForSmScreen";
import ContactUs from "../MiniComponents/ContactUs";
import BgComponentWithLine from "../MiniComponents/BgComponentWithLine";

export default function Header({ setSearchComponent, bgColor, showNavBar }) {
  const headerLink = [
    {
      title: "home",
      link: [
        "home - blazers store",
        "home - watch store",
        "home - jewellery store",
        "home - sports ware",
      ],
    },
    {
      title: "pages",
      link: [
        "about",
        "FAQ",
        "team",
        "location",
        "login page",
        "privacy policy",
        "order tracking",
        "shipping & orders",
        "404 page",
      ],
    },
    { title: "gift card", link: false },
    { title: "gallery", link: false },
    {
      title: "shop",
      link: ["shop listing", "shop detail", "wishlist", "cart", "checkout"],
    },
    { title: "news", link: ["news listing", "news single"] },
    { title: "contact", link: false },
  ];
  const [activeItemIndex, setActiveItemIndex] = useState(9);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [stateForSmNavSection, setStateForSmNavSection] = useState(false);
  const [stateForContactUs, setStateForContactUs] = useState(false);

  return (
    <div>
      <div className=" w-full relative border-b border-[#2b2929] text-[#f0f0f0]">
        <BgComponentWithLine
          bgColor={bgColor}
          setSelectedItemIndex={setSelectedItemIndex}
        />
        <div className=" w-[88%] sm:w-[95%] mx-auto flex items-center justify-between gap-10 ">
          <div className=" xl:w-2/12 pb-5 pt-3 ">
            <img
              src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg"
              alt="logoImage"
              className=" object-contain"
            />
          </div>
          <ul className="gap-8   py-5 font-light text-sm xl:flex hidden justify-center items-center uppercase">
            {headerLink.map((item, index) => (
              <li
                key={index}
                className={` ${
                  selectedItemIndex === index ? "text-[#bb9d7b]" : ""
                } relative  group hover:text-[#bb9d7b] duration-300  cursor-pointer `}
                onMouseEnter={() => {
                  setActiveItemIndex(index);
                }}
                onMouseLeave={() => {
                  setActiveItemIndex(null);
                }}
              >
                {item.title}
                {item.link && (
                  <div
                    className={` ${
                      activeItemIndex === index ? "slideDown" : "slideUp"
                    }   absolute top-[100%] w-40 cursor-default  z-30 -left-5 h-max `}
                  >
                    <div className=" w-full h-6 bg-transparent"></div>
                    <div className=" w-full py-2 bg-[#bb9d7b]">
                      {item.link.map((lik, i) => (
                        <p
                          key={i}
                          className="px-5 py-2 cursor-pointer hover:text-black hover:border-[#43434355] duration-500 text-sm tracking-wider leading-5 border-b border-[#43434310] text-white"
                        >
                          {lik}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                <div
                  className={` ${
                    selectedItemIndex === index
                      ? " w-full border-[#bb9d7b]"
                      : "border-transparent group-hover:w-[100%] w-[15%] "
                  } absolute top-[100%] border-b  group-hover:border-[#bb9d7b]  duration-500 `}
                ></div>
              </li>
            ))}
          </ul>
          <div className="xl:w-2/12 hidden  xl:flex justify-end gap-6">
            <IoSearchOutline
              onClick={() => {
                setSearchComponent(true);
              }}
              className=" size-6 cursor-pointer hover:text-[#bb9d7b] duration-300 "
            />
            <div className=" relative cartParent group">
              <HiOutlineShoppingBag className=" size-6 cursor-pointer hover:text-[#bb9d7b] duration-300 " />
              <div className=" absolute cursor-default cartChild top-[150%] right-0 w-max bg-black p-3 text-gray-50 pr-5 border border-[#474444] shadow-[#e4d4d4] shadow-sm">
                No products in the Cart
              </div>
              <div className=" absolute group-hover:bg-[#23201e] duration-300 -top-2 -right-2 size-5 rounded-full bg-[#bb9d7b] flex items-center justify-center text-xs">
                0
              </div>
            </div>
            <div
              onClick={() => {
                setStateForContactUs(true);
              }}
            >
              <FourRoundBtn />
            </div>
          </div>
          <div
            onClick={() => {
              setStateForSmNavSection(true);
            }}
            className="group flex cursor-pointer xl:hidden "
          >
            <BurgerBarBtn />
            <p className=" hidden lg:block pt-[2px] pl-2">Menu</p>
          </div>
        </div>
      </div>
      {stateForSmNavSection && (
        <NavSectionForSmScreen
          headerLink={headerLink}
          stateForSmNavSection={stateForSmNavSection}
          setStateForSmNavSection={setStateForSmNavSection}
        />
      )}
      {stateForContactUs && (
        <ContactUs setStateForContactUs={setStateForContactUs} />
      )}
    </div>
  );
}
