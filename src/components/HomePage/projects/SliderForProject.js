import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowRightAlt } from "react-icons/md";
import TempletForProject from "./TempletForProject";

export default function SliderForProject({ data }) {
  const slides = data.map((item) => item);
  const sliderRef = useRef(null);

  //next btn function
  const handleNextSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickNext();
  };

  //previous btn function
  const handlePrevSlide = (event) => {
    event.stopPropagation();
    sliderRef.current.slickPrev();
  };

  // Test by applying styles directly
  const dotStyles = {
    width: "35px",
    height: "3px",
    borderRadius: "5%",
    backgroundColor: "#a0a0a0",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#000000",
  };

  return (
    <div className={` w-full px-1 sm:px-0   h-full  relative `}>
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        arrows={false}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        dotsClass="slick-dots custom-dots  md:rotate-90 top-[85%] md:left-[110px] lg:left-[210px] md:top-[-20%] "
        customPaging={(i) => (
          <div
            className=" flex items-center justify-center gap-10"
            style={
              i === sliderRef.current?.innerSlider?.state.currentSlide
                ? activeDotStyles
                : dotStyles
            }
          ></div>
        )}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {slides.map((item, i) => (
          <div key={i} className=" w-full px-3 sm:px-5 md:px-10  h-full   ">
            <TempletForProject item={item} i={i} />
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute  w-full bottom-5 md:bottom-[46%] flex items-center justify-center  gap-4 left-0 text-white  ">
        <div className=" cursor-pointer hover:border-[#bb9d7b]  hover:text-[#bb9d7b]  duration-200 bg-[#000000] rounded-full p-[2px]  border-white border ">
          <div className=" duration-200 relative " onClick={handlePrevSlide}>
            <MdArrowRightAlt className=" size-10 rotate-180  duration-200 " />
            <div className=" absolute size-2 top-[22px] left-2 bg-black"></div>
          </div>
        </div>
        <div className=" cursor-pointer  hover:border-[#bb9d7b]  hover:text-[#bb9d7b]  duration-200 bg-[#000000] rounded-full p-[2px]  border-white border ">
          <div
            className=" duration-200 rotate-180 relative "
            onClick={handleNextSlide}
          >
            <MdArrowRightAlt className="size-10 rotate-180  duration-200 " />
            <div className=" absolute size-2 top-[10px] left-2 bg-black"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
