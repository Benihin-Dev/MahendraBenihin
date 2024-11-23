import React, { useEffect, useRef } from "react";
import Message from "./Message";

export default function TempletForMessages() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Automatically scroll to the last item on mount and when new items are added
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, []);
  return (
    <div className="overflow-hidden  rounded-md mt-5  bg-[#161c31] text-[#ffffff] font-thin text-sm w-full ">
      <p className=" font-light w-fit  cursor-default text-gray-300    px-6 text-sm mt-2 mb-5  ">
        Execution Log
      </p>
      <div
        ref={containerRef}
        className="customsScrollbar1 pl-6 pb-5 w-full space-y-5 aspect-video overflow-auto"
      >
        {Array(30)
          .fill()
          .map((_, index) => (
            <Message key={index} message={` jlnk.,m - ${index + 1}`} />
          ))}
      </div>
    </div>
  );
}
