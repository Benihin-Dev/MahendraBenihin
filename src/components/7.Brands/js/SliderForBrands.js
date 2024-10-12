import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";

export default function SliderForBrands({ data }) {
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
    <div className={` w-full h-full  relative `}>
      {/* <div className=" absolute  top-[0%]  size-10 flex items-center justify-center z-10 -left-5 sm:-left-16  rounded-full text-[#ddac55] cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-6 sm:size-8  duration-200 " />
          </div>
        </div>
      </div> */}

      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        speed={1000}
        arrows={false}
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
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {slides.map((item, index) => (
          <div key={index} className=" w-full h-full  ">
            <div className=" w-full ">
              <img src={item} className="  w-full object-contain" alt="" />
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute   top-[0%]  size-10 flex items-center justify-center z-10 -right-5 sm:-right-16  text-[#ddac55] cursor-pointer  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-6 sm:size-8 rotate-180  duration-200 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
