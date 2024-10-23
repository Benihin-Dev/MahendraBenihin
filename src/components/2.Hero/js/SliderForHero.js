import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import Banner1 from "./Banners/Banner1";

export default function SliderForHero({ data, setCurrentBannerIndex, info }) {
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
    <div
      className={` w-full h-full overflow-hidden  relative `}
    >
      {/* <div className=" absolute  -top-[10%] sm:-top-[40%] lg:-top-[80%]  size-10 flex items-center justify-center z-10 -left-2 sm:left-2 rounded-full text-white cursor-pointer   ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handlePrevSlide}>
            <IoIosArrowBack className="size-5 sm:size-10  duration-200 " />
          </div>
        </div>
      </div> */}

      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
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
          <div key={index} className="  my-10  w-full  h-full  ">
            <div className=" invisible">
              <Banner1 info={info} />
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className=" absolute   -top-[10%] sm:-top-[40%] lg:-top-[80%] size-10 flex items-center justify-center z-10 -right-2 sm:right-2 text-white cursor-pointer  ">
        <div className=" cursor-pointer">
          <div className="  duration-200 " onClick={handleNextSlide}>
            <IoIosArrowBack className="size-5 sm:size-10 rotate-180  duration-200 " />
          </div>
        </div>
      </div> */}
    </div>
  );
}
