import React, { useRef, useEffect, useState } from "react";

export default function Collection({ miniComponentHeight }) {
  const collectionRef = useRef(null);
  const [distanceFromTop, setDistanceFromTop] = useState(100); // Start 100% below for the first div
  const [distanceFromSecondTop, setDistanceFromSecondTop] = useState(100); // Start 100% below for the second div
  const [distanceFromThirdTop, setDistanceFromThirdTop] = useState(100); // Start 100% below for the third div

  useEffect(() => {
    const handleScroll = () => {
      if (collectionRef.current) {
        const scrollPosition = window.scrollY; // Get current scroll position
        const windowHeight = window.innerHeight; // Get the height of the viewport
        let scrollSize =
          (window.scrollY / windowHeight) * 100 - miniComponentHeight;

        // First div animation (scrolling through the first screen)
        const firstDivPosition = Math.max(0, 100 - scrollSize);
        setDistanceFromTop(firstDivPosition);

        // Second div animation (scrolling through the second screen)
        if (scrollPosition >= windowHeight) {
          const secondDivScroll = scrollPosition - windowHeight;
          const secondDivPosition = Math.max(0, 200 - scrollSize);
          setDistanceFromSecondTop(secondDivPosition);
        }

        // Third div animation (scrolling through the third screen)
        if (scrollPosition >= windowHeight * 2) {
          const thirdDivScroll = scrollPosition - windowHeight * 2;
          const thirdDivPosition = Math.max(0, 300 - scrollSize);
          setDistanceFromThirdTop(thirdDivPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [miniComponentHeight]);

  return (
    <div
      className={`w-full h-screen bg-transparent  fixed top-0 left-0 -z-10 ${
        distanceFromThirdTop === 0 ? " hidden " : " block"
      } `}
    >
      <div className=" sm:flex bg-[#f4f1f1] w-full h-full">
        <div className="sm:w-3/5 w-full h-2/5 sm:h-full flex flex-col justify-around items-baseline   text-[#282525] lg:text-5xl md:text-4xl text-3xl pt-2 sm:py-10 px-5 ">
          {/* First div animation */}
          <div className="w-full firstDiv duration-500 flex items-center">
            <p className="font-romansStyle">
              mens clothes
              <span className="text-base text-gray-400 font-medium pl-3">
                (20)
              </span>
            </p>
          </div>
          {/* Second div animation */}
          <div
            style={{
              transform: `translateY(${distanceFromTop}vh)`,
              transition: "transform 0.5s ease-out",
            }}
            className="w-full flex items-center"
          >
            <p className="font-romansStyle">
              women collection
              <span className="text-base text-gray-400 font-medium pl-3">
                (20)
              </span>
            </p>
          </div>
          {/* Third div animation */}
          <div
            style={{
              transform: `translateY(${distanceFromSecondTop}vh)`,
              transition: "transform 0.5s ease-out",
            }}
            className="w-full flex items-center"
          >
            <p className="font-romansStyle">
              kids pant shirt
              <span className="text-base text-gray-400 font-medium pl-3">
                (40)
              </span>
            </p>
          </div>
          {/* Fourth div animation */}
          <div
            style={{
              transform: `translateY(${distanceFromThirdTop}vh)`,
              transition: "transform 0.5s ease-out",
            }}
            className="w-full flex items-center"
          >
            <p className="font-romansStyle">
              accessories
              <span className="text-base text-gray-400 font-medium pl-3">
                (20)
              </span>
            </p>
          </div>
        </div>
        <div className="sm:w-2/5 w-full h-3/5 sm:h-full relative">
          <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full bg-[#f4f1f1]">
            <div className="border-black border sm:my-2 w-9/12 sm:w-10/12 h-[94%] sm:h-full p-5">
              <div className="shadow-lg shadow-gray-400 w-full h-full overflow-hidden relative">
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
                  alt=""
                  className="h-full z-20 w-full object-cover"
                />
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image.png"
                  className=" absolute bottom-0 left-0 w-full object-cover"
                  style={{
                    height: `${100 - distanceFromTop}%`,
                    transition: "transform 0.5s ease-out",
                  }}
                  alt=""
                />
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-2.png"
                  className={` ${
                    distanceFromTop <= 0 ? "" : "-z-10"
                  }  absolute bottom-0 left-0 w-full object-cover `}
                  style={{
                    height: `${100 - distanceFromSecondTop}%`,
                    transition: "transform 0.5s ease-out",
                  }}
                  alt=""
                />
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-1.png"
                  className={` ${
                    distanceFromSecondTop <= 0 ? "" : "-z-10"
                  }  absolute bottom-0 left-0 w-full object-cover `}
                  style={{
                    height: `${100 - distanceFromThirdTop}%`,
                    transition: "transform 0.5s ease-out",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={collectionRef} className="w-full">
        <div className="w-full h-screen   "></div>
        <div className="w-full h-screen  "></div>
        <div className="w-full h-screen  "></div>
        <div className="w-full h-screen  "></div>
      </div>
    </div>
  );
}
