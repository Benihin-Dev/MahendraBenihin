import React, { useState, useEffect, useRef } from "react";
import Header from "../../1.Header.js/js/Header";
import MainBtn from "../../ButtonComponents/js/MainBtn";

export default function Hero({
  scrollPosition,
  scrollPositionForImg,
  setShowSearchComponent,
}) {
  const [imgWidth, setImgWidth] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (imgRef.current) {
        setImgWidth(imgRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <div className=" w-full h-screen relative px-2 sm:px-0 bg-[#f4f1f1] overflow-hidden  ">
      <Header
        setShowSearchComponent={setShowSearchComponent}
        scrollPosition={scrollPosition}
      />
      <div className=" w-full mt-auto  h-[85vh] relative">
        <div className="w-full relative h-[90vh] overflow-hidden sm:h-full sm:w-[50vw] md:w-[35vw]  z-0 ml-auto ">
          <img
            ref={imgRef}
            src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/image.png"
            alt=""
            className="   w-full h-full object-cover  object-right-bottom"
          />
          <img
            style={{
              height: `${
                scrollPosition >= 60 ? " 100" : scrollPositionForImg
              }%`,
            }}
            src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/image-2.png"
            alt=""
            className={` absolute bottom-0 left-0 w-full    lg:object-zoom object-cover   object-right  z-10  `}
          />
        </div>

        <div className=" w-full sm:pl-3 absolute bottom-0 left-0 sm:w-4/5 md:w-2/3  pb-5">
          <div className="   h-60 sm:h-36 overflow-hidden">
            <div
              className="transition-transform duration-500"
              style={{
                transform: `translateY(-${scrollPosition}%)`,
              }}
            >
              <p className="text-6xl md:text-7xl">
                Elevate Your Style <br /> with Voguify
              </p>
              <p className="text-6xl md:text-7xl">
                Style Refined <br /> Voguify’s Touch
              </p>
            </div>
          </div>
          <p className=" text-[#817f7e] font-urbanist text-[22px] pb-8">
            Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id
            egestas erat. Fermentum ut elementum odio mollis sed sociis volutpat
            mollis sed sociis volutpat.
          </p>
          <div>
            <MainBtn text={"SHOP NOW"} />
          </div>
        </div>
      </div>
    </div>
  );
}
