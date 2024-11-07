import React, { useState } from "react";
import ImgTempletForHero from "./ImgTempletForHero";
import BgComponentWithLine from "../MiniComponents/BgComponentWithLine";
import SliderForHero from "./SliderForHero";
import { MdArrowRightAlt } from "react-icons/md";

export default function Hero() {
  const heroData = [
    [
      {
        img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-3-a.jpg",
        titleName: "REFRESHING DESIGN",
        item: "Enveloping Coats",
      },
      {
        img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-3-b.jpg",
        titleName: "Fine Fabric ",
        item: " Down Jackets",
      },
    ],
    [
      {
        img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-a.jpg",
        titleName: "Casual Jacket ",
        item: "For Women",
      },
      {
        img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-b.jpg",
        titleName: "FORMAL BLAZERS",
        item: "For Men",
      },
    ],
    [
      {
        img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-2-a.jpg",
        titleName: "EYE CATCHING",
        item: "Cordurey Blazeruu",
      },
      {
        img: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-2-b.jpg",
        titleName: "STYLIZING",
        item: "Cotton Blazer",
      },
    ],
  ];
  const socialMedia = [
    { name: "Linkedin", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "Instagram", link: "#" },
    { name: "Facebook", link: "#" },
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  return (
    <div className=" w-full relative pb-20 md:pb-0 group">
      <div className=" grid md:grid-cols-2 space-y-10 md:space-y-0 ">
        {heroData[currentBannerIndex].map((item, index) => (
          <ImgTempletForHero data={item} index={index} key={index} />
        ))}
      </div>
      <BgComponentWithLine />
      <div className=" absolute top-0 z-10 -left-2 w-max h-full text-white flex flex-col items-center justify-center gap-16">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            className=" cursor-pointer hover:text-[#bb9d7b] duration-500"
            href={item.link}
          >
            <p className=" -rotate-90 "> {item.name}</p>
          </a>
        ))}
      </div>
      <div className=" absolute z-10 top-0 right-2 w-max h-full text-white flex flex-col items-center justify-center gap-5">
        {[...Array(3)].map((_, i) => (
          <p
            key={i}
            onClick={() => {
              setCurrentBannerIndex(i);
            }}
            className={` cursor-pointer  mr-5 ${
              currentBannerIndex === i ? "text-[#bb9d7b]" : "text-white"
            }  hover:text-[#bb9d7b] duration-500`}
          >
            0{i + 1}
          </p>
        ))}
      </div>
      <div className=" w-full h-full absolute top-0 left-0">
        <SliderForHero
          data={heroData}
          currentBannerIndex={currentBannerIndex}
          setCurrentBannerIndex={setCurrentBannerIndex}
        />
      </div>
    </div>
  );
}
