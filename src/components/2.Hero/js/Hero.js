import React, { useState } from "react";
import SliderForHero from "./SliderForHero";

export default function Hero() {
  const dataForHeroSlider = [
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/business-man-s-hand-with-watch.jpg",
      title: "Precision Movement",
      desc: "The movement, or the mechanism that powers the watch, is a critical feature. Luxury watches often boast mechanical movements that are hand-assembled and meticulously calibrated.",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/narek-hakobyan.jpg",
      title: "Exceptional Craftsman",
      desc: "Use of high-quality materials such as sapphire crystal for the watch face precious metals and fine leather or metal alloys for straps. The attention to detail in the watch's construction and finishing is also a critical aspect.",
    },
    {
      img: "https://centrio.brickthemes.com/wp-content/uploads/2023/11/a-man-in-sunglasses-smoking-a-cigar.jpg",
      title: "Heritage and Exclusivity",
      desc: "The brand's history and reputation can play a significant role in defining a watch as luxury. Limited edition models or those with a historical significance often add to this allure.",
    },
  ];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  return (
    <div className=" w-full  p-3 sm:p-6 md:p-8 lg:p-10 bg-black  aspect-video">
      <div
        onClick={() => {
          console.log(currentBannerIndex);
        }}
        className=" relative w-full h-full rounded-3xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {dataForHeroSlider.map((data, index) => (
            <img
              src={data.img}
              key={index}
              alt=""
              className={` absolute top-0 left-0 h-full object-center object-cover zoomInOut w-full ${
                currentBannerIndex === index ? "fadein" : "fade"
              } `}
            />
          ))}
        </div>
        <div className=" absolute top-0 flex items-end justify-start sm:pb-20 bg-transparent  w-full h-full left-0  ">
          <div className=" w-full">
            {dataForHeroSlider.map((data, index) => (
              <p
                key={index}
                className={`${
                  currentBannerIndex === index ? "block" : "hidden"
                } text-3xl md:text-5xl  sm:pb-5    font-bold  font-josefin text-white mx-auto w-10/12 md:w-8/12 lg:w-7/12  `}
              >
                {data.title}
              </p>
            ))}
            <p className="sm:pb-20 invisible font-jost text-white mx-auto w-10/12 md:w-8/12 lg:w-7/12 text-sm sm:text-base">
              Use of high-quality materials such as sapphire crystal for the
              watch face precious metals and fine leather or metal alloys for
              straps. The attention to detail in the watch's construction and
              finishing is also a critical aspect.
            </p>
          </div>
        </div>
        <div className=" absolute top-0 flex items-end justify-start sm:pb-20  w-full h-full left-0  ">
          <div className=" w-full">
            <SliderForHero
              data={dataForHeroSlider}
              setCurrentBannerIndex={setCurrentBannerIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
