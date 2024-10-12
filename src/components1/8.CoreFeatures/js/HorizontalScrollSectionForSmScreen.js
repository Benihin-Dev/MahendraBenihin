import React, { useEffect, useRef, useState } from "react";

const HorizontalScrollSectionForSmScreen = ({ mainComponentHeight }) => {
  const sectionRef = useRef(null);
  const [sectionWeith, setSectionWeith] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const section = sectionRef.current;
      const scrollTop = window.scrollY;
      const sectionHeight = window.innerHeight;
      const maxScroll = section.scrollWidth - sectionHeight;

      // Calculate the horizontal scroll position based on the vertical scroll
      const scrollLeft = (scrollTop / sectionHeight) * window.innerWidth;

      if (section) {
        section.style.transform = `translateX(-${scrollLeft}px)`;
        let componentHeight =
          (scrollLeft / window.innerWidth) * 100 - mainComponentHeight;
        // console.log(componentHeight + "%");
        setSectionWeith(componentHeight);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainComponentHeight]);

  const Part1 = () => {
    return (
      <div className="  sm:flex  bg-[#f4f1f1] gap-5 w-full px-5 sm:px-10 text-black   p-5  sm:pt-16 h-screen  ">
        <div className=" w-full  sm:h-full h-1/2 flex items-center justify-center sm:pb-10 sm:w-1/2">
          <div>
            <p className=" sm:text-5xl text-4xl lg:text-8xl font-romansStyle">
              core features
            </p>
            <p className=" font-urbanist text-gray-500 mt-5 text-lg sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id
              egestas erat. Fermentum ut elementum odio mollis sed sociis
              volutpat.
            </p>
          </div>
        </div>
        <div className=" w-full sm:w-1/2 md:p-10 flex items-center justify-center h-1/2 sm:h-full">
          <div
            className={`  aspect-square duration-300 w-full sm:w-[95%] lg:w-[80%]   md:w-[85%] relative `}
          >
            <div
              style={{
                transform: `rotate(${Math.max(sectionWeith / -10, -5)}deg)`,
              }}
              className={` w-full h-full border duration-300 bg-white shadow-xl shadow-gray-300 flex items-center justify-center  border-gray-400 `}
            >
              <div className="  ">
                <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                  <img
                    src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-4.png"
                    alt=""
                    className="object-cover w-1/5 aspect-square"
                  />
                </div>
                <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                  TRENDING <br /> PRODUCT
                </p>
                <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna cum felis
                  faucibus id egestas erat. Fermentum ut.
                </p>
              </div>
            </div>
            {sectionWeith >= 100 ? (
              <div
                style={{
                  transform:
                    sectionWeith > 100
                      ? `rotate(${Math.max(sectionWeith / 100, -5)}deg)`
                      : " ",
                }}
                className=" absolute  shadow-xl shadow-gray-300 -top-1 left-0 w-full h-full border bg-white   p-4 flex items-center justify-center border-gray-400"
              >
                <div className="  ">
                  <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                    <img
                      src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-3.png"
                      alt=""
                      className="object-cover w-1/5 aspect-square"
                    />
                  </div>
                  <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                    ON
                    <br /> DEMAND
                  </p>
                  <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                    Lorem ipsum dolor sit amet consectetur. Urna cum felis
                    faucibus id egestas erat. Fermentum ut.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {sectionWeith >= 200 ? (
              <div
                style={{
                  transform:
                    sectionWeith > 200
                      ? `rotate(${Math.min(sectionWeith / -200, 10)}deg)`
                      : " ",
                }}
                className=" absolute shadow-xl shadow-gray-300 top-1 left-0 w-full h-full border bg-white   p-4 flex items-center justify-center border-gray-400"
              >
                <div className="  ">
                  <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                    <img
                      src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-2.png"
                      alt=""
                      className="object-cover w-1/5 aspect-square"
                    />
                  </div>
                  <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                    ONLINE
                    <br /> SUPPORT
                  </p>
                  <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                    Lorem ipsum dolor sit amet consectetur. Urna cum felis
                    faucibus id egestas erat. Fermentum ut.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {sectionWeith >= 300 ? (
              <div
                style={{
                  transform:
                    sectionWeith > 300
                      ? `rotate(${Math.max(sectionWeith / 100, -10)}deg)`
                      : " ",
                }}
                className=" absolute  rotate-[3deg] shadow-xl shadow-gray-300 top-4 -left-0 w-full h-full border bg-white   p-4 flex items-center justify-center border-gray-400"
              >
                <div className="  ">
                  <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                    <img
                      src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-1.png"
                      alt=""
                      className="object-cover w-1/5 aspect-square"
                    />
                  </div>
                  <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                    ON-TIME
                    <br /> DELIVERY
                  </p>
                  <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                    Lorem ipsum dolor sit amet consectetur. Urna cum felis
                    faucibus id egestas erat. Fermentum ut.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  };

  const Part2 = () => {
    return (
      <div className={`sm:flex gap-5 w-full sm:pt-16 h-screen `}>
        <div className=" w-full    sm:h-full h-1/2 flex items-center justify-center sm:pb-10 sm:w-1/2">
          <div className=" invisible">
            <p className=" sm:text-5xl text-4xl lg:text-8xl font-romansStyle">
              core features
            </p>
            <p className=" font-urbanist text-gray-500 mt-5 text-lg sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id
              egestas erat. Fermentum ut elementum odio mollis sed sociis
              volutpat.
            </p>
          </div>
        </div>
        <div
          className={` ${
            sectionWeith >= 100 ? "invisible" : " "
          }  w-full sm:w-1/2  md:p-10 flex items-center justify-center h-1/2 sm:h-full `}
        >
          <div className=" aspect-square w-full sm:w-[95%] lg:w-[80%] p-4  md:w-[85%] relative">
            <div className="  w-full h-full border bg-white   shadow-xl shadow-gray-300 border-gray-400   flex items-center justify-center">
              <div className="  ">
                <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                  <img
                    src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-3.png"
                    alt=""
                    className="object-cover w-1/5 aspect-square"
                  />
                </div>
                <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                  ON
                  <br /> DEMAND
                </p>
                <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna cum felis
                  faucibus id egestas erat. Fermentum ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Part3 = () => {
    return (
      <div className={`   sm:flex  gap-5 w-full sm:pt-16 h-screen `}>
        <div className=" w-full    sm:h-full h-1/2 flex items-center justify-center sm:pb-10 sm:w-1/2">
          <div className=" invisible">
            <p className=" sm:text-5xl text-4xl lg:text-8xl font-romansStyle">
              core features
            </p>
            <p className=" font-urbanist text-gray-500 mt-5 text-lg sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id
              egestas erat. Fermentum ut elementum odio mollis sed sociis
              volutpat.
            </p>
          </div>
        </div>
        <div
          className={` ${
            sectionWeith >= 200 ? "invisible" : " "
          }  w-full sm:w-1/2 md:p-10 flex items-center justify-center h-1/2 sm:h-full `}
        >
          <div className=" aspect-square w-full sm:w-[95%] lg:w-[80%] p-4  md:w-[85%]  relative">
            <div className="   w-full h-full border bg-white   shadow-xl shadow-gray-300 border-gray-400 p-4 flex items-center justify-center">
              <div className="  ">
                <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                  <img
                    src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-2.png"
                    alt=""
                    className="object-cover w-1/5 aspect-square"
                  />
                </div>
                <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                  ONLINE
                  <br /> SUPPORT
                </p>
                <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna cum felis
                  faucibus id egestas erat. Fermentum ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Part4 = () => {
    return (
      <div className={`  sm:flex  gap-5 w-full sm:pt-16 h-screen   `}>
        <div className=" w-full  sm:h-full h-1/2 flex items-center justify-center sm:pb-10 sm:w-1/2">
          <div className=" invisible">
            <p className=" sm:text-5xl text-4xl lg:text-8xl font-romansStyle">
              core features
            </p>
            <p className=" font-urbanist text-gray-500 mt-5 text-lg sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id
              egestas erat. Fermentum ut elementum odio mollis sed sociis
              volutpat.
            </p>
          </div>
        </div>
        <div
          className={` ${
            sectionWeith >= 300 ? "invisible" : " "
          }  w-full sm:w-1/2 md:p-10 flex items-center justify-center h-1/2 sm:h-full `}
        >
          <div className=" aspect-square w-full sm:w-[95%] lg:w-[80%] p-4  md:w-[85%]   relative">
            <div className="   w-full h-full border bg-white   shadow-xl shadow-gray-300 border-gray-400 p-4 flex items-center justify-center">
              <div className="  ">
                <div className=" w-full  pb-5 sm:pb-3 md:pb-5 flex items-center justify-center">
                  <img
                    src="https://uiparadox.co.uk/templates/voguify/assets/media/vector/vector-1.png"
                    alt=""
                    className="object-cover w-1/5 aspect-square"
                  />
                </div>
                <p className=" font-urbanist pb-5 font-semibold sm:pb-3 md:pb-5 text-4xl px-5 text-center w-full">
                  ON-TIME
                  <br /> DELIVERY
                </p>
                <p className="  sm:text-sm lg:text-lg text-gray-500 w-full text-center">
                  Lorem ipsum dolor sit amet consectetur. Urna cum felis
                  faucibus id egestas erat. Fermentum ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="   w-full  h-screen fixed z-10 top-0 left-0">
        <Part1 />
      </div>
      <div className=" w-full h-screen overflow-y-hidden fixed z-20 top-0 hrSection  ">
        <div
          style={{ width: `${mainComponentHeight + 400}vw` }}
          className=" h-screen absolute top-0 left-0  flex     "
          ref={sectionRef}
        >
          <div className="pt-52 h-screen w-full flex justify-center  "></div>
          <div className="pt-52 h-screen w-full flex justify-center  "></div>
          <div className="pt-52 h-screen w-full flex justify-center  "></div>
          <div className="pt-52 h-screen w-full  flex justify-center"></div>
          <div
            style={{ width: `${mainComponentHeight - 300}%` }}
            className="pt-52 h-screen flex justify-center"
          ></div>
          <Part2 />
          <Part3 />
          <Part4 />
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollSectionForSmScreen;
