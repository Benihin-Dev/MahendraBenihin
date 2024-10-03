import React from "react";

export default function CollectionFinalSection() {
  return (
    <div className={`w-full h-screen bg-transparent  `}>
      <div className=" sm:flex bg-[#f4f1f1] w-full h-full">
        <div className="sm:w-3/5 w-full h-2/5 sm:h-full flex flex-col justify-around items-baseline   text-[#282525] lg:text-5xl md:text-4xl text-3xl pt-2 sm:py-10 px-5 ">
          <div className="w-full firstDiv  duration-500 flex items-center">
            <p className="font-romansStyle">
              mens clothes
              <span className="text-base text-gray-400 font-medium pl-3">
                (20)
              </span>
            </p>
          </div>
          <div className="w-full flex items-center  ">
            <p className="font-romansStyle">
              women collection
              <span className="text-base text-gray-400 font-medium pl-3">
                (20)
              </span>
            </p>
          </div>
          <div className="w-full flex items-center  ">
            <p className="font-romansStyle">
              kids pant shirt
              <span className="text-base text-gray-400 font-medium pl-3">
                (40)
              </span>
            </p>
          </div>
          <div className="w-full flex items-center  ">
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
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/cetagorie/image-1.png"
                  alt=""
                  className="h-full z-20 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
