import React from "react";

export default function SliderBtn({
  eduDetails,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <div className=" space-y-6 mt-5 sm:mt-20 relative">
      {eduDetails.map((item, index) => (
        <div
          onClick={() => {
            setCurrentIndex(index);
          }}
          key={index}
          className={`  ${
            currentIndex === index
              ? index % 2 === 0
                ? "translate-x-[60px]"
                : "-translate-x-[60px]"
              : "translate-x-[0px]"
          }   group size-10 duration-300 cursor-pointer text-white rounded-md flex items-center justify-center relative `}
        >
          <div
            className={` ${
              currentIndex === index
                ? "bg-[#1f1f1f] border-[#989292] "
                : "hover:bg-[#1f1f1f] bg-[#ff4a3b] border-[#1f1f1f] "
            } border absolute  top-0 left-0 z-10  duration-300  size-10   rounded-md flex items-center justify-center `}
          >
            {index === currentIndex ? (
              <p className=" font-italiana ">#</p>
            ) : (
              `0${index + 1}`
            )}
          </div>
          <div
            className={` ${index % 2 === 0 ? "right-[70%]" : "left-[70%]"} ${
              index === currentIndex ? "fullWidth " : " zeroWidth"
            } h-full overflow-hidden duration-300 text-center rounded-md  border border-[#ff4a3b] whitespace-nowrap flex items-center justify-center absolute top-0 z-0 bg-[#1f1f1f]   `}
          >
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
}
