import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import SliderTemplet from "./SliderTemplet";

export default function SliderForTestimonial({ data }) {
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
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    border: "1px solid #66bc89",
    backgroundColor: "#33333300",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#66bc89",
  };

  return (
    <div className={`  relative weeklyOfferSliderParent `}>
      <div
        onClick={handlePrevSlide}
        className=" absolute weeklyOfferSliderChild hidden top-[40%] size-12 shadow-md bg-[#ffffffd0] items-center justify-center z-10 -left-4  rounded-sm text-[#ffa201a3] cursor-pointer  hover:bg-[#ffa101] hover:text-white  "
      >
        <div className=" cursor-pointer">
          <div className="  duration-200 ">
            <IoIosArrowBack className="size-8 sm:size-7   duration-200 " />
          </div>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        dotsClass="slick-dots custom-dots top-[110%] "
        customPaging={(i) => (
          <div
            style={
              i === sliderRef.current?.innerSlider?.state.currentSlide
                ? activeDotStyles
                : dotStyles
            }
          ></div>
        )}
      >
        {slides.map((item, index) => (
          <div key={index} className=" px-3 sm:px-4  ">
            <SliderTemplet item={item} />
          </div>
        ))}
      </Slider>

      <div
        onClick={handleNextSlide}
        className=" absolute weeklyOfferSliderChild hidden top-[40%] size-12 shadow-md bg-[#ffffffd0] items-center justify-center z-10 -right-4  rounded-sm text-[#ffa201a3] cursor-pointer  hover:bg-[#ffa101] hover:text-white  "
      >
        <div className=" cursor-pointer">
          <div className="  duration-200 ">
            <IoIosArrowBack className="size-8 sm:size-7 rotate-180  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
