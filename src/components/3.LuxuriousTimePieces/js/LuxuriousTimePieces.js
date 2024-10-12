import React, { useRef, useState, useEffect } from "react";
import FinalLTP from "./FinalLTP";

export default function LuxuriousTimePieces({ topSectionHeight }) {
  const collectionRef = useRef(null);
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [sizeForWidth, setSizeForWidth] = useState(0);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (collectionRef.current) {
        const elementTop = collectionRef.current.getBoundingClientRect().top;
        if (elementTop <= 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
        const scrollPosition = window.scrollY; // Get current scroll position
        const windowHeight = window.innerHeight; // Get the height of the viewport
        let scrollSize = window.scrollY;
        setSizeForWidth(
          ((((scrollSize - topSectionHeight) / windowHeight) * 100) / 100) *
            window.innerWidth
        );
        setDistanceFromTop(scrollSize - topSectionHeight);
        // console.log((scrollSize / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [topSectionHeight]);

  return (
    <div ref={collectionRef} className=" relative bg-black w-full  text-white ">
      <div className=" w-full h-screen py-10">
        <p className=" font-dosis w-full text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          Luxurious Time Pieces
        </p>
        <p className="  mt-5 font-dosis w-full text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          atque qui, aliquam <br /> ab, id sequi assumenda, veritatis
          praesentium nobis non voluptate
        </p>
        {!isAtTop && (
          <div className="   absolute top-0 -left-[100vw] sm:-left-[30vw] h-screen   w-full ">
            <div className="w-[300%] sm:w-[160%]  h-full mx-auto gap-8 flex items-center justify-center">
              <div className="w-20 h-28 bg-white rounded-md overflow-hidden">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_3.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-28 h-40 bg-white rounded-md overflow-hidden">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_2.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-40 h-60 bg-white rounded-md overflow-hidden">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_1.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="w-52 h-80 bg-white rounded-md overflow-hidden relative">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_13.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-40 h-60 bg-white rounded-md overflow-hidden">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_25.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-28 h-40 bg-white rounded-md overflow-hidden">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_22.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-20 h-28 bg-white rounded-md overflow-hidden">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_16.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`  relative bg-black h-[100vh]  items-center justify-center w-full `}
      >
        <FinalLTP />
        {(distanceFromTop / window.innerHeight) * 100 >= 100 ? (
          ""
        ) : (
          <div className=" w-full h-full absolute bg-black flex items-center justify-center top-0 left-0  ">
            <p
              className={`  w-11/12 font-semibold sm:w-9/12 font-jost text-white z-20 text-lg mx-auto `}
            >
              Businessmen with a taste for adventure and an appetite for
              success, the Omega Speedmaster Professional is the perfect choice.
              This watch has made history as the first timepiece worn on the
              moon during the Apollo missions, solidifying its reputation as a
              true achiever's timepiece.
            </p>
          </div>
        )}
      </div>
      {(distanceFromTop / window.innerHeight) * 100 >= 100 ? (
        ""
      ) : (
        <div
          className={`${
            isAtTop ? " z-10" : "-z-10"
          }    fixed top-0 -left-[100vw] sm:-left-[30vw] h-screen   w-full  `}
        >
          <div className="w-[300%] sm:w-[160%]  h-full    mx-auto gap-8 flex items-center justify-center">
            {(distanceFromTop / window.innerHeight) * 100 >= 98 ? (
              ""
            ) : (
              <>
                <div className="w-20 h-28 bg-white rounded-md overflow-hidden">
                  <img
                    src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_3.jpg"
                    className=" w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-28 h-40 bg-white rounded-md overflow-hidden">
                  <img
                    src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_2.jpg"
                    className=" w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-40 h-60 bg-white rounded-md overflow-hidden">
                  <img
                    src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_1.jpg"
                    className=" w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </>
            )}
            <div
              style={{
                height: `${Math.max(320, distanceFromTop)}px`,
                width: `${Math.max(208, sizeForWidth)}px`,
              }}
              className="w-52 bg-white rounded-md overflow-hidden relative"
            >
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_13.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
              <div
                style={{
                  opacity: `${Math.max(
                    0,
                    Math.min(0.4, distanceFromTop / window.innerHeight)
                  )}`,
                }}
                className=" w-full h-full absolute top-0 left-0 bg-black  "
              ></div>
            </div>
            {(distanceFromTop / window.innerHeight) * 100 >= 98 ? (
              ""
            ) : (
              <>
                <div className="w-40 h-60 bg-white rounded-md overflow-hidden">
                  <img
                    src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_25.jpg"
                    className=" w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-28 h-40 bg-white rounded-md overflow-hidden">
                  <img
                    src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_22.jpg"
                    className=" w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-20 h-28 bg-white rounded-md overflow-hidden">
                  <img
                    src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_16.jpg"
                    className=" w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
