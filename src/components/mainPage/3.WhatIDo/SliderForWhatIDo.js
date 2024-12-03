import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderForWhatIDo({
  data,
  setCurrentIndex,
  currentIndex,
}) {
  const slides = data.map((item) => item);
  const sliderRef = useRef(null);

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
    <div className={` w-full px-1 sm:px-0  h-full  relative `}>
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        arrows={false}
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={10000}
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
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
            },
          },
        ]}
      >
        {slides.map((item, i) => (
          <div
            key={i}
            className=" w-full px-1  sm:px-1 pb-10 md:pb-32  h-full   "
          >
            <div
              key={i}
              onClick={() => {
                setCurrentIndex(i);
              }}
              className={` cursor-pointer w-full h-[400px]  rounded-sm border-b-4  group overflow-hidden relative ${
                i % 2 === 0
                  ? " translate-y-[50px] border-b-[#151555ab]  md:translate-y-12  "
                  : "  border-b-[#441f1fa4]  "
              } `}
            >
              <div
                className={`${
                  i === currentIndex
                    ? "translate-y-8 sm:translate-y-12"
                    : "group-hover:translate-y-8  sm:group-hover:translate-y-12"
                } h-full w-full    duration-300 relative `}
              >
                <img
                  src={item.img}
                  className={` h-full object-cover w-full object-center  border-[#ffffff] border-2  `}
                  alt=""
                />
                <div
                  className={`${
                    i === currentIndex
                      ? "translate-x-0"
                      : " group-hover:translate-x-0"
                  } -translate-x-[100%] duration-300 w-full h-12  absolute bottom-[100%] left-0 `}
                >
                  <p className=" mt-3 sm:mt-0 text-sm  font-ital iana font-medium bg-clip-text  text-transparent bg-gradient-to-r to-[#1f1f9d] from-[#ff4a3b]">
                    _{item.title}
                  </p>
                </div>
              </div>
              <div
                className={`${
                  i === currentIndex
                    ? "bg-transparent"
                    : "group-hover:bg-transparent"
                } w-full h-full duration-300 bg-[#000000d6] absolute top-0  `}
              >
                <div className=" w-full h-full relative flex items-end justify-end">
                  <p
                    className={` ${
                      i % 2 === 1
                        ? "bg-clip-text bg-gradient-to-b from-[#f56659] to-[#ffffff]"
                        : "bg-clip-text bg-gradient-to-b to-[#2f2fb6] from-[#ffffff]"
                    } text-2xl font-italiana font-bold text-transparent wrap-by-letter mb-5 px-2 rotate-180 `}
                    style={{
                      WebkitBackgroundClip: "text", // Required for clipping text
                      writingMode:
                        " vertical-rl" /* Sets vertical text direction */,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
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
