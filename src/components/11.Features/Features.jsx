import React from "react";
import deliveryTruckImg from "./img/delivery-truck.png";
import servideImg from "./img/24-hours.png";
import packageImg from "./img/arrow.png";
import cartImg from "./img/lockout.png";
import BgComponentWithLine2 from "../MiniComponents/BgComponentWithLine2";

export default function Features() {
  const data = [
    {
      icon: deliveryTruckImg,
      title: "Shipping",
      desc: "Free Shipping World wide",
    },
    { icon: servideImg, title: "Hassle Free", desc: "24*7 Customer Support" },
    { icon: packageImg, title: "30 Days", desc: "Free & Easy Returns" },
    { icon: cartImg, title: "Secured", desc: "Quick Check Out Process" },
  ];
  return (
    <div className=" w-full relative py-10 sm:py-12 md:py-16 lg:py-20">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className=" w-full   px-10  cursor-default ">
            <div className=" w-full p-5  bg-black flex items-center text-[#f0f0f0]  gap-6 lg:gap-4 relative  ">
              <div className=" w-16 lg:w-20">
                <img
                  src={item.icon}
                  className=" w-full object-contain"
                  alt=""
                />
              </div>
              <div>
                <p className=" uppercase text-sm">{item.title}</p>
                <p className=" text-xl font-medium mt-2">{item.desc}</p>
              </div>

              {index === 3 ? (
                <>
                  <div
                    className={` lg:block hidden absolute w-8 border-b border-[#f0f0f0] top-[50%] -left-[56px]  `}
                  ></div>
                  <div
                    className={`lg:block hidden absolute w-8 border-b border-[#f0f0f0] top-[50%] -right-[56px]  `}
                  ></div>
                </>
              ) : (
                <div
                  className={`lg:block hidden absolute w-8 border-b border-[#f0f0f0] top-[50%] -left-[56px]  `}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <BgComponentWithLine2 />
    </div>
  );
}
