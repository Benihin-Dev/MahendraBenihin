import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // Toggle the open state
  };

  return (
    <div className="hamburger-container" onClick={handleMenuClick}>
      <div
        className={`bar  bg-black   border-black border-[2px]  bar1 ${
          isOpen
            ? "    w-full rotate-45 translate-y-[22px] -translate-x-[10px] "
            : " w-3/5"
        }`}
      ></div>
      <div
        className={` bar  bg-black  border-black border-[2px] bar2 ${
          isOpen ? "   duration-300  -rotate-45  translate-y-3" : ""
        }`}
      ></div>
      <div
        className={`bar  bg-black border-black border-[2px]  bar3  ${
          isOpen ? " duration-500 w-[0%] opacity-0" : " w-3/5"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
