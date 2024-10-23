import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function SliderForFU({ data }) {
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
    width: "50px",
    height: "3px",
    borderRadius: "5%",
    backgroundColor: "#a0a0a0",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#000000",
  };

  return (
    <div className={` w-full h-full  `}>
      {/* <div className=" absolute  top-20 rounded-full border-black border hover:bg-black hover:text-white duration-300 right-24  size-10 flex items-center justify-center z-10 cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-6 duration-200 " />
          </div>
        </div>
      </div> */}

      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={false}
        autoplaySpeed={5000}
        speed={500}
        // afterChange={(current) => setCurrentBannerIndex(current)}
        dotsClass="slick-dots custom-dots1  top-[98%]   "
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
            breakpoint: 1015,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
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
          <div key={index} className=" py-5  px-3 w-full  h-full  ">
            <div className=" w-full relative group bg-[#f0f0f0] cursor-pointer">
              <img src={item} alt="" className=" w-full object-cover" />
              <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center ">
                <div className=" w-full scale-50 group-hover:scale-100 duration-[400ms] opacity-0 group-hover:opacity-100 h-full bg-[#f0f0f0ab] flex items-center justify-center">
                  <div className=" rounded-full size-11 border-2 border-black flex items-center justify-center">
                    <IoLogoInstagram className=" text-black size-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute  top-20 rounded-full border-black border hover:bg-black hover:text-white duration-300 right-10  size-10 flex items-center justify-center z-10 cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-6 rotate-180 duration-200 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
