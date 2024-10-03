import React, { useRef, useState, useEffect } from "react";
import MainBtn2 from "../../ButtonComponents/js/MainBtn2";

export default function Brand({ brandComponentHeight, mainComponentHeight }) {
  const brandSectionRef = useRef(null);
  const [distanceFromTop, setDistanceFromTop] = useState(0);

  const divRef = useRef(null); // Create a ref for the div
  const [divHeight, setDivHeight] = useState(0);

  // Function to get the height of the div
  const calculateDivHeight = () => {
    if (divRef.current) {
      const height = divRef.current.getBoundingClientRect().height;
      setDivHeight(height); // Set the actual height to the state
      // console.log(height);
    }
  };

  // Call the function after the component mounts
  useEffect(() => {
    calculateDivHeight(); // Initial calculation
    window.addEventListener("resize", calculateDivHeight); // Recalculate on window resize
    window.addEventListener("scroll", calculateDivHeight); // Recalculate on window resize

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", calculateDivHeight);
      window.removeEventListener("scroll", calculateDivHeight);
    };
  }, []);

  // Calculate the height above the top of the screen when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (brandSectionRef.current) {
        const rect = brandSectionRef.current.getBoundingClientRect();
        // `rect.top` is the distance from the top of the viewport
        // `window.scrollY` is the amount the page has scrolled vertically
        const distance = window.scrollY - rect.top;
        setDistanceFromTop(
          (distance / window.innerHeight) * 50 -
            (mainComponentHeight - brandComponentHeight) / 2
        );
        // console.log(
        //   (distance / window.innerHeight) * 50 -
        //     (mainComponentHeight - brandComponentHeight) / 2
        // );
        // console.log(mainComponentHeight - brandComponentHeight);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainComponentHeight, brandComponentHeight]);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full fixed top-0 left-0">
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/inner-banner-1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        style={{
          opacity: `${Math.min(Math.max(0, distanceFromTop), 100)}%`,
        }}
        className="w-full h-full fixed top-0 left-0"
      >
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/inner-banner-2.png"
          alt=""
          className="w-full h-full object-left-bottom object-cover"
        />
      </div>
      <div
        style={{
          opacity: `${Math.min(Math.max(0, distanceFromTop - 100), 100)}%`,
        }}
        className="w-full h-full fixed top-0 left-0"
      >
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/inner-banner-3.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        style={{
          opacity: `${Math.min(Math.max(0, distanceFromTop - 200), 100)}%`,
        }}
        className="w-full h-full fixed top-0 left-0"
      >
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/inner-banner-4.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        style={{
          opacity: `${Math.min(Math.max(0, distanceFromTop - 300), 100)}%`,
        }}
        className="w-full h-full fixed top-0 left-0"
      >
        <img
          src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/inner-banner-5.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full hidden h-full z-10 fixed top-0 left-0 sm:grid grid-cols-5">
        <div className="w-full relative h-full border-r border-gray-400 px-2 lg:px-5 flex items-center justify-center">
          <div className="w-full overflow-hidden relative  ">
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-1.png"
              alt=""
              className="object-contain mx-auto"
            />
            <p className="cursor-default text-center pt-16 pb-10 text-sm font-medium font-urbanist text-white leading-5">
              Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
              erat. Fermentum towmoro.
            </p>
            <MainBtn2 text={"Shop Now"} />

            <div
              ref={divRef}
              className="w-full -z-10 opacity-0 top-0 absolute py-5  "
            >
              <img
                src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-4.png"
                alt=""
                className="object-contain mx-auto"
              />
              <p className="cursor-default text-center pt-16 pb-10 text-sm font-medium font-urbanist text-white leading-5">
                Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                erat. Fermentum towmoro.
              </p>
              <MainBtn2 text={"Shop Now"} />
            </div>
          </div>
        </div>
        <div className="w-full relative h-full border-r border-gray-400 px-2 lg:px-5 flex items-center justify-center">
          <div
            style={{
              height: `${Math.min(
                Math.max(110, (distanceFromTop / 100) * divHeight),
                divHeight
              )}px`,
            }}
            className="w-full pt-3 overflow-hidden relative  "
          >
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-2.png"
              alt=""
              className="object-contain   mx-auto"
            />
            <p className="cursor-default text-center pt-16 pb-10 text-sm font-medium font-urbanist text-white leading-5">
              Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
              erat. Fermentum towmoro.
            </p>
            <MainBtn2 className=" " text={"Shop Now"} />
          </div>
        </div>
        <div className="w-full relative h-full border-r border-gray-400 px-2 lg:px-5 flex items-center justify-center">
          <div
            style={{
              height: `${Math.min(
                Math.max(110, ((distanceFromTop - 100) / 100) * divHeight),
                divHeight
              )}px`,
            }}
            className="w-full pt-8 overflow-hidden relative  "
          >
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-3.png"
              alt=""
              className="object-contain   mx-auto"
            />
            <p className="cursor-default text-center pt-16 pb-10 text-sm font-medium font-urbanist text-white leading-5">
              Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
              erat. Fermentum towmoro.
            </p>
            <MainBtn2 className=" " text={"Shop Now"} />
          </div>
        </div>
        <div className="w-full relative h-full border-r border-gray-400 px-2 lg:px-5 flex items-center justify-center">
          <div
            style={{
              height: `${Math.min(
                Math.max(110, ((distanceFromTop - 200) / 100) * divHeight),
                divHeight
              )}px`,
            }}
            className="w-full overflow-hidden relative  "
          >
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-4.png"
              alt=""
              className="object-contain   mx-auto"
            />
            <p className="cursor-default text-center px-10 pt-10 pb-10 text-sm font-medium font-urbanist text-white leading-5">
              Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
              erat. Fermentum towmoro.
            </p>
            <MainBtn2 className=" " text={"Shop Now"} />
          </div>
        </div>
        <div className="w-full relative h-full border-r border-gray-400 px-2 lg:px-5 flex items-center justify-center">
          <div
            style={{
              height: `${Math.min(
                Math.max(110, ((distanceFromTop - 300) / 100) * divHeight),
                divHeight
              )}px`,
            }}
            className="w-full pt-4 overflow-hidden relative  "
          >
            <img
              src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-5.png"
              alt=""
              className="object-contain   mx-auto"
            />
            <p className="cursor-default text-center px-10 pt-16 pb-10 text-sm font-medium font-urbanist text-white leading-5">
              Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
              erat. Fermentum towmoro.
            </p>
            <MainBtn2 className=" " text={"Shop Now"} />
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden h-full z-10 fixed top-0 left-0 ">
        {distanceFromTop >= 350 ? (
          <div className="w-full relative h-full   px-2 lg:px-5 flex items-center justify-center">
            <div className="w-full overflow-hidden relative">
              <img
                src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-5.png"
                alt=""
                className="object-contain mx-auto w-[50vw]"
              />
              <p className="cursor-default text-center px-10 pt-16 pb-10 text-lg font-medium font-urbanist text-white leading-5">
                Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                erat. Fermentum towmoro.
              </p>
              <MainBtn2 className=" " text={"Shop Now"} />
            </div>
          </div>
        ) : distanceFromTop >= 250 ? (
          <div className="w-full relative h-full   px-2 lg:px-5 flex items-center justify-center">
            <div className="w-full overflow-hidden relative">
              <img
                src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-4.png"
                alt=""
                className="object-contain mx-auto w-[50vw]"
              />
              <p className="cursor-default text-center px-10 pt-16 pb-10 text-lg font-medium font-urbanist text-white leading-5">
                Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                erat. Fermentum towmoro.
              </p>
              <MainBtn2 className=" " text={"Shop Now"} />
            </div>
          </div>
        ) : distanceFromTop >= 150 ? (
          <div className="w-full relative h-full   px-2 lg:px-5 flex items-center justify-center">
            <div className="w-full overflow-hidden relative">
              <img
                src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-3.png"
                alt=""
                className="object-contain mx-auto w-[50vw]"
              />
              <p className="cursor-default text-center px-10 pt-16 pb-10 text-lg font-medium font-urbanist text-white leading-5">
                Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                erat. Fermentum towmoro.
              </p>
              <MainBtn2 className=" " text={"Shop Now"} />
            </div>
          </div>
        ) : distanceFromTop > 50 ? (
          <div className="w-full relative h-full   px-2 lg:px-5 flex items-center justify-center">
            <div className="w-full overflow-hidden relative">
              <img
                src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-2.png"
                alt=""
                className="object-contain mx-auto w-[50vw]"
              />
              <p className="cursor-default text-center pt-16 pb-10 text-lg font-medium font-urbanist text-white leading-5">
                Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                erat. Fermentum towmoro.
              </p>
              <MainBtn2 className=" " text={"Shop Now"} />
            </div>
          </div>
        ) : (
          <div className="w-full relative h-full   px-2 lg:px-5 flex items-center justify-center">
            <div className="w-full overflow-hidden relative">
              <img
                src="https://uiparadox.co.uk/templates/voguify/assets/media/brand/brand-1.png"
                alt=""
                className="object-contain mx-auto w-[50vw]"
              />
              <p className="cursor-default text-center pt-16 pb-10 text-lg font-medium font-urbanist text-white leading-5">
                Lorem ipsum dolor sit amet consectetur. Urna faucibus egestas
                erat. Fermentum towmoro.
              </p>
              <MainBtn2 className=" " text={"Shop Now"} />
            </div>
          </div>
        )}
      </div>
      {/* This is the brand section where we track the scroll */}
      <div
        className="w-full  brandSection overflow-y-scroll opacity-0"
        ref={brandSectionRef}
      >
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
}
