import React from "react";
import MainBtn2 from "../../ButtonComponents/js/MainBtn2";

export default function FirstSection() {
  const brandData = [
    {
      imgSrc:
        "https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-1.png",
      text: "Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas erat. Fermentum towmoro.",
    },
    {
      imgSrc:
        "https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-2.png",
      text: "Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas erat. Fermentum towmoro.",
    },
    {
      imgSrc:
        "https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-3.png",
      text: "Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas erat. Fermentum towmoro.",
    },
    {
      imgSrc:
        "https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-4.png",
      text: "Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas erat. Fermentum towmoro.",
    },
    {
      imgSrc:
        "https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-5.png",
      text: "Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas erat. Fermentum towmoro.",
    },
  ];
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full  ">
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/inner-banner-1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full hidden h-full z-10 absolute top-0 left-0 sm:grid grid-cols-5">
        {brandData.map((item, index) => (
          <div
            key={index}
            className="w-full relative h-full border-r border-gray-400 px-2 lg:px-5 flex items-center justify-center"
          >
            <div className="w-full overflow-hidden relative  ">
              <img
                src={item.imgSrc}
                alt=""
                className="object-contain   mx-auto"
              />
              <div className={`${index === 0 ? "" : "hidden"}  `}>
                <p className="cursor-default text-center pt-16 pb-10 text-sm font-medium font-urbanist text-white leading-5">
                  Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                  erat. Fermentum towmoro.
                </p>
                <MainBtn2 text={"Shop Now"} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full sm:hidden h-full z-10 absolute top-0 left-0 ">
        <div className="w-full relative h-full  px-2 lg:px-5 flex items-center justify-center">
          <div className="w-full overflow-hidden relative">
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-1.png"
              alt=""
              className="object-contain mx-auto w-[50vw]"
            />
            <p className="cursor-default text-center pt-16 pb-10 text-lg font-medium font-urbanist text-white leading-5">
              Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
              erat. Fermentum towmoro.
            </p>
            <MainBtn2 className=" " text={"Shop Now"} />
          </div>
        </div>
      </div>
    </div>
  );
}
