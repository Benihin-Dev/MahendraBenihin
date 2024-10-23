import React from "react";

export default function TopSlidingBanner() {
  return (
    <div className="  w-full overflow-hidden bg-[#ffe8e8]  text-[#b05d5d] py-2 px-2 flex items-center ">
      <div className="marquee-content flex ">
        {Array(8)
          .fill()
          .map((item, index) => (
            <span key={index} className="marquee-text">
              Clearance Sale Event: Up to 50% Off Select Items!
            </span>
          ))}
      </div>
    </div>
  );
}
