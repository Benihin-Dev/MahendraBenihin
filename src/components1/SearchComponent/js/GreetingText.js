import React from "react";

export default function GreetingText() {
  const text = "vougify".split("");

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>ujnm</div>
      <div className="relative flex space-x-2">
        {text.map((letter, index) => (
          <div key={index} className="relative">
            <div
              className={`relative text-9xl border border-black overflow-hidden font-romansStyle  text-black transition-opacity duration-500   `}
            >
              {letter}
              <div className="absolute h-[200%] w-[200%] overflow-hidden  rounded-full     -top-[100%] hover:rotate-90 duration-500  left-[0%]  flex  ">
                <div className=" w-1/2 h-full bg-transparent border-black border"></div>
                <div className=" w-1/2 h-full bg-black  "></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
