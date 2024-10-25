import React, { useState, useEffect } from "react";

export default function SlideUpProductBanner() {
  const data = [
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-3-shop-13-1-150x150.jpg",
      from: "Canada",
      purchaseTime: 48,
      productName: "Women Plain Solid T-Shirt",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-3-shop-12-1-150x150.jpg",
      from: "US",
      purchaseTime: 2,
      productName: "Half-Sleeve Printed T-Shirt",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-3-shop-15-1-150x150.jpg",
      from: "UK",
      purchaseTime: 20,
      productName: "Simple A Line Elastic Band Skirt",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-3-shop-14-3-150x150.jpg",
      from: "China",
      purchaseTime: 33,
      productName: "Leather Women’s Clutch Handbag",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [componentState, setComponentState] = useState(true);

  useEffect(() => {
    const slideUpTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Small delay to trigger the initial slide-up

    const bannerTimer = setInterval(() => {
      setIsVisible(false); // Start sliding down
      setTimeout(() => {
        // Change to the next banner after sliding down
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsVisible(true); // Slide up the next banner
      }, 8000); // Wait 10 seconds after sliding down before sliding up the next banner
    }, 7000); // Each banner stays up for 40 seconds, plus the 10-second interval

    return () => {
      clearInterval(bannerTimer);
      clearTimeout(slideUpTimer);
    };
  }, [data.length]);

  return (
    <>
      {componentState && (
        <div
          className={`fixed bottom-5 z-50 shadow-md p-3 left-5 cursor-pointer w-[85vw] sm:w-[350px] border bg-white transition-transform duration-700 ${
            isVisible ? "translate-y-0" : "translate-y-[200%]"
          } `}
        >
          <div className="w-full relative">
            <div className="flex items-center">
              <div className="p-1 w-[30%]">
                <img
                  src={data[activeIndex].img}
                  alt={data[activeIndex].productName}
                  className="w-full object-cover"
                />
              </div>
              <div className="w-[70%] pl-4">
                <p className="text-[#5a5a5a] text-sm">Someone purchased a</p>
                <p className="hover:text-[#b05d5d] duration-300 font-medium text-lg py-1 leading-5">
                  {data[activeIndex].productName}
                </p>
                <p className="text-xs">
                  {data[activeIndex].purchaseTime} minutes ago from{" "}
                  {data[activeIndex].from}
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setComponentState(false);
              }}
              className="absolute -right-3 scale-[0.65] top-0 duration-300 cursor-pointer group"
            >
              <div className="w-5 border bg-black border-black duration-300 group-hover:border-[#b05d5d] group-hover:bg-[#b05d5d] rotate-45"></div>
              <div className="w-7 border-b-2 -rotate-[50deg] duration-300 -translate-x-1 -translate-y-[2px] border-black group-hover:border-[#b05d5d]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
