import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowRightAlt } from "react-icons/md";

export default function SliderForHero({
  data,
  currentBannerIndex,
  setCurrentBannerIndex,
}) {
  const slides = data.map((item) => item);
  const sliderRef = useRef(null);
  const sliderHeightRef = useRef(null);
  const [heightOfSlider, setHeightOfSlider] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = sliderHeightRef.current?.clientHeight;
      setHeightOfSlider(height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    // Navigate to the slide at `currentBannerIndex` when it changes
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentBannerIndex);
    }
  }, [currentBannerIndex]);

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
    <div
      ref={sliderHeightRef}
      className={` w-full h-full pb-20 overflow-hidde  relative `}
    >
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={false}
        autoplaySpeed={6000}
        speed={500}
        afterChange={(current) => setCurrentBannerIndex(current)}
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
        {slides.map((item, index) => (
          <div key={index} className=" w-full  h-full ">
            <div
              style={{ height: `${heightOfSlider}px` }}
              className={` bg-[#0000ff00] w-full`}
            ></div>
          </div>
        ))}
      </Slider>

      <div className=" absolute  w-full bottom-5 md:bottom-[46%] flex items-center justify-center  gap-4 left-0 text-white  ">
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
      </div>
    </div>
  );
}
