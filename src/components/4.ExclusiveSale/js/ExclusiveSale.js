import React, { useState, useEffect } from "react";
import CustomBtn1 from "../../MiniComponents/js/CustomBtn1";
import Timer from "../../MiniComponents/js/Timer";
import { useInView } from "react-intersection-observer";

export default function ExclusiveSale() {
  const [position, setPosition] = useState(0);
  const endDate = new Date(2024, 10, 22, 18, 1);

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: fourthRef, inView: fourthInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  useEffect(() => {
    // Function to handle mouse movement and update image position
    const handleMouseMove = (e) => {
      const { clientX } = e; // Get the mouse X position
      const screenWidth = window.innerWidth;

      // Calculate position based on mouse X movement, limit the range between -50px to 50px
      const move = (clientX / screenWidth) * 100 - 50;
      setPosition(move);
    };

    // Add event listener to the window object to track mouse movement anywhere on the screen
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className=" w-full relative pb-20 md:grid grid-cols-2 overflow-hidden">
      <div className={` w-full pb-10 bg-[#f0f0f0] `}>
        <div
          ref={firstRef}
          className={`animated-componentfromRight ${
            firstInView ? "is-visiblefromRight" : ""
          } w-full `}
        >
          <img
            src="https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/Koka-Deal-banner-aside-img.png"
            alt=""
            className={` moveOnX w-8/12 ml-auto object-contain object-right `}
          />
        </div>
      </div>
      <div className=" w-full   bg-[#f7f7f7] relative h-full flex items-center justify-center">
        <div className=" py-20 px-3 md:px-0 md:py-0 ">
          <div
            ref={secondRef}
            className={`animated-componentfromLeft ${
              secondInView ? "is-visiblefromLeft" : ""
            } w-full  `}
          >
            <p className=" text-sm text-gray-400 md:text-[#5a5a5a] w-full text-center    font-medium tracking-widest">
              EXCLUSIVE SALES WITH 50% OFF
            </p>
            <p className=" text-center   w-full   text-[#000000]  my-4 font-semibold text-4xl">
              Seasonal Clearance Sale
            </p>
          </div>
          <div
            ref={thirdRef}
            className={`animated-componentfromLeft ${
              thirdInView ? "is-visiblefromLeft" : ""
            }  w-full flex items-center pb-8 justify-center `}
          >
            <Timer endDate={endDate} />
          </div>
          <div
            ref={fourthRef}
            className={`animated-componentfromLeft ${
              fourthInView ? "is-visiblefromLeft" : ""
            }  w-full`}
          >
            <CustomBtn1 text={"shop all"} />
          </div>
        </div>
        <div
          className="absolute -bottom-4 -right-4"
          style={{
            transform: `translateX(${position - 10}px)`, // Move the image based on position
            transition: "transform 0.1s ease-out", // Smooth movement
          }}
        >
          <img
            src="https://wdtkoka.wpengine.com/wp-content/uploads/2024/01/koka-Deal-banner-showcase-image-01.png"
            alt="Moving Banner"
            className=" w-52 md:w-56"
          />
        </div>
      </div>
    </div>
  );
}
