import React, { useRef, useState, useEffect } from "react";
import MainBtn from "../MiniComponents/MainBtn";

export default function ProductTemplet({ data }) {
  const templetHeightRef = useRef(null);
  const [heightOfTemplet, setHeightOfTemplet] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (templetHeightRef.current) {
        const height = templetHeightRef.current.clientHeight;
        setHeightOfTemplet(height);
      }
    };

    // Initial height update with a slight delay
    setTimeout(updateHeight, 10);

    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, [templetHeightRef.current]); // Added ref to dependencies

  return (
    <div
      className="w-full h-fit group relative overflow-hidden border border-transparent"
      style={{ height: `${heightOfTemplet}px` }}
    >
      {/* Top-right border animation */}
      <div className="absolute w-0 h-0 border-transparent duration-500 group-hover:w-full group-hover:h-full top-0 right-0 group-hover:border-[#bb9d7b] border-r border-t"></div>

      {/* Bottom-left border animation */}
      <div className="absolute w-0 h-0 border-transparent duration-500 group-hover:w-full group-hover:h-full bottom-0 left-0 group-hover:border-[#bb9d7b] border-l border-b"></div>

      <div
        ref={templetHeightRef}
        className="w-full h-max absolute top-0 left-0 border border-transparent"
      >
        {/* Product Images */}
        <div className="cursor-pointer relative">
          <img
            src={data.imgs[0]}
            alt="productImg1"
            className="duration-200 group-hover:opacity-0 transition-opacity"
          />
          <img
            src={data.imgs[1]}
            className="shadow-lg absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 scale-[0.9] group-hover:scale-100 transition-all"
            alt="Alternate Product"
          />
        </div>

        {/* Product Details */}
        <div className="my-5 text-[#f0f0f0]">
          <p className="cursor-pointer w-full text-center px-3 font-medium text-lg hover:text-[#bb9d7b] duration-300">
            {data.name}
          </p>
          <p className="cursor-default text-[#848484] text-center w-full px-5 mt-2">
            {data.priceRange}
          </p>
          <div className="w-full my-1 pb-2 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 duration-500 flex items-center justify-center">
            <MainBtn text={"select options"} />
          </div>
        </div>
      </div>
    </div>
  );
}
