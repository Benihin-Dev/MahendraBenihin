import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";

export default function SliderForHero({ data, setCurrentBannerIndex }) {
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
      <div className=" absolute  -top-[10%] sm:-top-[40%] lg:-top-[80%]  size-10 flex items-center justify-center z-10 -left-2 sm:left-2 rounded-full text-white cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-5 sm:size-10  duration-200 " />
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
        afterChange={(current) => setCurrentBannerIndex(current)}
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
          <div key={index} className=" w-full h-full ">
            <p className="sm:pb-20 font-jost text-white mx-auto w-10/12 md:w-8/12 lg:w-7/12 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </Slider>

      <div className=" absolute   -top-[10%] sm:-top-[40%] lg:-top-[80%] size-10 flex items-center justify-center z-10 -right-2 sm:right-2 text-white cursor-pointer  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-5 sm:size-10 rotate-180  duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
}
