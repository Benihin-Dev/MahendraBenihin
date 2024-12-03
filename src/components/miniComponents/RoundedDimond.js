import React from "react";

export default function RoundedDimond() {
  return (
    <div className=" sm:size-24 md:size-28 size-20 bg-[#c2b4b4] relative mx-16">
      <div className=" absolute top-0 left-0 bg-[#1f1f1f] rounded-full h-full w-full translate-y-1/2 translate-x-1/2"></div>
      <div className=" absolute top-0 left-0 bg-[#1f1f1f] rounded-full h-full w-full -translate-y-1/2 -translate-x-1/2"></div>
      <div className=" absolute top-0 left-0 bg-[#1f1f1f] rounded-full h-full w-full -translate-y-1/2 translate-x-1/2"></div>
      <div className=" absolute top-0 left-0 bg-[#1f1f1f] rounded-full h-full w-full translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );
}
