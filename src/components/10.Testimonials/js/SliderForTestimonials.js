import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import TempletForTestimonial from "./TempletForTestimonial";

export default function SliderForTestimonials({ data }) {
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
      <div className=" absolute  top-20 rounded-full border-black border hover:bg-black hover:text-white duration-300 right-24  size-10 flex items-center justify-center z-10 cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-6 duration-200 " />
          </div>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
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
            <TempletForTestimonial details={item} />
          </div>
        ))}
      </Slider>

      <div className=" absolute  top-20 rounded-full border-black border hover:bg-black hover:text-white duration-300 right-10  size-10 flex items-center justify-center z-10 cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-6 rotate-180 duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
