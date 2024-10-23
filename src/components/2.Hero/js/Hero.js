import React, { useState } from "react";
import SliderForHero from "./SliderForHero";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";
import CustomBtn2 from "../../MiniComponents/js/CustomBtn2";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const data = [
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/home-1-slider-image-1.jpg",
      title: "Enchanting Fashion",
      desc: "Est sit amet facilisis magna etiam tempor orci eu lobortis. In tellusinteger feugiat scelerisque varius. Nunc congue nisi vitae suscipit tellus mauris. Diam maecenas sed enim ut.",
      miniText: "NEW YEAR SALE 2024",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/home-1-slider-image-2.jpg",
      title: "Exclusive Collections",
      desc: "Est sit amet facilisis magna etiam tempor orci eu lobortis. In tellusinteger feugiat scelerisque varius. Nunc congue nisi vitae suscipit tellus mauris. Diam maecenas sed enim ut.",
      miniText: "UP TO 50% OFF",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2023/12/home-1-slider-image-1.jpg",
      title: "Novi's Collections",
      desc: "Est sit amet facilisis magna etiam tempor orci eu lobortis. In tellusinteger feugiat scelerisque varius. Nunc congue nisi vitae suscipit tellus mauris. Diam maecenas sed enim ut.",
      miniText: "DAILY WEAR UP TO 20%",
    },
  ];
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div className=" w-full h-full mb-20 font-inter  relative">
      <div className=" w-full h-full">
        {currentBannerIndex === 0 ? (
          <Banner1 info={data[0]} />
        ) : currentBannerIndex === 1 ? (
          <Banner2 info={data[1]} />
        ) : (
          <Banner3 info={data[2]} />
        )}
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          ref={firstRef}
          className={`animated-component ${firstInView ? "is-visible" : ""} ${
            currentBannerIndex === index ? "fadein" : "fade"
          } absolute -z-10 top-0 left-0 w-full h-full overflow-hidden `}
        >
          <img
            src={item.img}
            alt=""
            className={` ${
              index === 1 ? " object-right " : "object-left-bottom"
            } w-full h-full duration-200 md:scale-125 object-cover `}
          />
        </div>
      ))}
      <div className=" absolute top-0 bottom-0 left-0 w-full h-full">
        <SliderForHero
          data={data}
          setCurrentBannerIndex={setCurrentBannerIndex}
          info={data[0]}
        />
      </div>
      <div className=" absolute top-[88%] z-30 tracking-[0.25rem] lg:w-1/2 text-xs left-5 text-gray-700 md:text-black md:left-10 flex items-center justify-start gap-1">
        <p className=" cursor-pointer hover:text-[#b56868] duration-300  uppercase">
          Re - Fabric Court
        </p>
        <p className=" cursor-default px-3">|</p>
        <CustomBtn2 text={"show all"} />
      </div>
    </div>
  );
}
