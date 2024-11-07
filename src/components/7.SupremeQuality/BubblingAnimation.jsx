import React from "react";

export default function BubblingAnimation() {
  return (
    <div className=" w-full h-full flex items-center justify-center relative">
      <div className=" size-5 rounded-full bg-white"></div>
      <div className=" absolute size-16 rounded-full -top-2 bubbleAnimation bg-[#ffffff55] -left-2"></div>
      <div className=" absolute size-6 delay-200 rounded-full top-[11px] left-[11px] bubbleAnimation bg-[#ffffff55] "></div>
    </div>
  );
}
