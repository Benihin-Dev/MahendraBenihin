import React from "react";

export default function FinalSection() {
  return (
    <div className=" ">
      <div
        className={`   sm:flex  bg-[#f4f1f1] gap-5 w-full px-5 sm:px-10 text-black   p-5  sm:pt-16 h-screen  `}
      >
        <div className=" w-full  sm:h-full h-1/2 flex items-center justify-center sm:pb-10 sm:w-1/2">
          <div>
            <p
              className={`   sm:text-5xl text-4xl lg:text-8xl font-romansStyle `}
            >
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
              className={` w-full h-full rotate-[-6deg] border duration-300 bg-white shadow-xl shadow-gray-300 flex items-center justify-center  border-gray-400 `}
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
            <div className=" absolute rotate-[5deg]  shadow-xl shadow-gray-300 top-1 left-0 w-full h-full border bg-white   p-4 flex items-center justify-center border-gray-400">
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
            <div className=" absolute rotate-[-3deg] shadow-xl shadow-gray-300 top-1 left-4 w-full h-full border bg-white   p-4 flex items-center justify-center border-gray-400">
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

            <div className=" absolute rotate-[2deg]  shadow-xl shadow-gray-300 top-1 -left-2 w-full h-full border bg-white   p-4 flex items-center justify-center border-gray-400">
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
    </div>
  );
}
