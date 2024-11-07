import React, { useState, useEffect } from "react";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Set a timer to change the loading state after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clear the timer if the component unmounts before the 3 seconds are up
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`${
        !loading && "fadeOut"
      } w-screen z-[60] fixed top-0 left-0 h-screen bg-black flex items-center justify-center `}
    >
      <div className=" relative size-28">
        <div className="size-28 rounded-full border-[4px] relative rotatingAmination border-[#bb9b7d] flex items-center justify-center">
          <div className="absolute bottom-[-25%] left-[15%] size-[70%] bg-[#000000]"></div>
          <div className="size-20 rounded-full border-[4px] relative rotatingAminationReverse rotate-90 border-[#bb9b7d00] flex items-center justify-center">
            <div className="absolute bottom-[-6%] left-[15%] w-[70%] h-[20%] bg-[#00000000]"></div>
            <div className="size-10 rounded-full border-[4px] relative rotatingAmination border-[#bb9b7d]">
              <div className="absolute bottom-[-20%] left-[15%] w-[70%] h-[40%] bg-[#000000]"></div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full absolute top-0 left-0 rounded-full border-[4px] rotatingAminationReverse rotate-90 border-[#00000000] flex items-center justify-center">
          <div className=" w-full relative h-full flex items-center justify-center ">
            <div className=" size-20 flex items-center justify-center border-[#bb9b7d] border-4 rounded-full relative ">
              <div className="absolute bottom-[-6%] left-[15%] w-[70%] h-[20%] bg-[#000000]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
