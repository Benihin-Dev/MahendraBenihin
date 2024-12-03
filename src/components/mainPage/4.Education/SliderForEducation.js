import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

export default function SliderForEducation({
  data,
  setCurrentIndex,
  currentIndex,
  slidesToShow,
}) {
  const sliderRef = useRef(null);

  // Update the slide when `currentIndex` changes
  useEffect(() => {
    if (sliderRef.current && currentIndex !== undefined) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className="w-full border border-dashed  md:border-l-transparent border-b-transparent md:border-b-[#1f1f1f] border-[#1f1f1f] h-full relative">
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        arrows={false}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={10000}
        speed={500}
        beforeChange={(oldIndex, newIndex) => {
          setCurrentIndex(newIndex); // Update the current index
        }}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesToShow,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToShow,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: slidesToShow,
            },
          },
        ]}
      >
        {data.map((item, i) => (
          <div key={i} className="w-full pb-5 h-full  relative">
            <div className="sm:pr-5 px-4 pt-8 group cursor-default">
              <h2
                style={{ textShadow: "2px 2px 4px rgba(f, f, f, 0.9)" }}
                className="capitalize sm:text-lg text-[#e3dddd] group-hover:text-[#2f80ed] tracking-wide"
              >
                {item.type}
              </h2>
              <h1 className="  text-[#1f1f1f] font-semibold duration-300 tracking-wider font-italiana text-2xl md:text-3xl py-3">
                {item.place}
              </h1>
              <div>
                {item.spec
                  ? item.spec.map((ite, index) => (
                      <h4
                        className="text-xs tracking-widest text-[#272828]"
                        key={index}
                      >
                        {ite}
                      </h4>
                    ))
                  : ""}
              </div>
              <p className="text-[#decece] text-sm sm:text-base leading-6">
                {item.desc}
              </p>
              <div className="cursor-pointer flex items-center justify-end text-[#1f1f1f] group-hover:text-white duration-200 w-full gap-2 text-sm mt-3">
                <HiOutlineArrowTrendingUp className="size-4 duration-200 group-hover:text-[#2f80ed]" />
                <p className="font-extralight group-hover:pl-0 pl-2 duration-200 hover:text-[#2f80ed]">
                  Read More
                </p>
              </div>
            </div>
            <div className=" w-20 md:w-24 h-10 bg-[#1f1f1f] absolute top-5 rounded-s-md right-[1px] -z-10"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
