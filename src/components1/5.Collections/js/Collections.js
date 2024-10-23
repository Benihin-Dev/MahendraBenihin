import React, { useRef, useState, useEffect } from "react";

export default function Collections({ secondSectionHeight, topSectionHeight }) {
  const collectionRef = useRef(null);
  const topSecRef = useRef(null);
  const bottomSecRef = useRef(null);
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [isAtTop, setIsAtTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (collectionRef.current) {
        // Check if the top border of the element touches the viewport's top
        if (topSecRef.current.getBoundingClientRect().top <= 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }

        if (bottomSecRef.current.getBoundingClientRect().top <= 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        const scrollPosition = window.scrollY; // Get current scroll position
        const windowHeight = window.innerHeight; // Get the height of the viewport
        let scrollSize = window.scrollY;
        setDistanceFromTop(
          (scrollSize / windowHeight) * 100 -
            secondSectionHeight -
            (topSectionHeight / windowHeight) * 100
        );
        // console.log((scrollSize / windowHeight) * 100 - secondSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [secondSectionHeight, topSectionHeight]);

  return (
    <div ref={collectionRef} className=" w-full relative overflow-hidden">
      <div ref={topSecRef}>
        {!isAtTop ? (
          <div className={` w-full   h-screen `}>
            <div className="w-full duration-500 bg-black grid  grid-cols-3 grid-rows-4 gap-[5px] relative h-full">
              {/* First Row */}
              <div className="w-full   rounded-xl overflow-hidden row-span-2  col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_6.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full  rounded-xl overflow-hidden row-span-1 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_5.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full   rounded-xl overflow-hidden row-span-2 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_2.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Second Row */}
              <div className="w-full rounded-xl overflow-hidden row-span-2 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_3.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              {/* Third Row */}
              <div className="w-full   rounded-xl overflow-hidden row-span-1 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_1.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full  rounded-xl overflow-hidden row-span-2 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_28.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Fourth Row */}
              <div className="w-full   rounded-xl overflow-hidden row-span-1 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_27.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full rounded-xl overflow-hidden row-span-1 col-span-1">
                <img
                  src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_26.jpg"
                  className=" w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div className=" h-screen w-full bg-transparent"></div>
        )}
      </div>
      <div ref={bottomSecRef} className=" w-full overflow-hidden h-screen">
        <div
          style={{
            scale: `4`,
          }}
          className="w-full duration-500 bg-black grid  grid-cols-3 grid-rows-4 gap-[5px] relative h-full"
        >
          {/* First Row */}
          <div className="w-full   rounded-xl overflow-hidden row-span-2  col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_6.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full  rounded-xl overflow-hidden row-span-1 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_5.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full   rounded-xl overflow-hidden row-span-2 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_2.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Second Row */}
          <div className="w-full rounded-xl overflow-hidden row-span-2 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_3.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          {/* Third Row */}
          <div className="w-full   rounded-xl overflow-hidden row-span-1 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_1.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full  rounded-xl overflow-hidden row-span-2 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_28.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Fourth Row */}
          <div className="w-full   rounded-xl overflow-hidden row-span-1 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_27.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden row-span-1 col-span-1">
            <img
              src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_26.jpg"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {isAtTop && (
        <div
          className={` ${
            isScrolled ? "-z-10" : "z-10"
          }  fixed  w-full top-0 left-0 h-screen `}
        >
          <div
            style={{
              scale: `${Math.min(Math.max(1, 1 + distanceFromTop / 33), 4)}`,
            }}
            className="w-full duration-500 bg-black grid  grid-cols-3 grid-rows-4 gap-[5px] relative h-full"
          >
            {/* First Row */}
            <div className="w-full   rounded-xl overflow-hidden row-span-2  col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_6.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full  rounded-xl overflow-hidden row-span-1 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_5.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full   rounded-xl overflow-hidden row-span-2 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_2.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* Second Row */}
            <div className="w-full rounded-xl overflow-hidden row-span-2 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_3.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            {/* Third Row */}
            <div className="w-full   rounded-xl overflow-hidden row-span-1 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_1.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full  rounded-xl overflow-hidden row-span-2 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_28.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* Fourth Row */}
            <div className="w-full   rounded-xl overflow-hidden row-span-1 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_27.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full rounded-xl overflow-hidden row-span-1 col-span-1">
              <img
                src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/product_26.jpg"
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
