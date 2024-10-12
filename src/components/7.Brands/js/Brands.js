import React from "react";
import SliderForBrands from "./SliderForBrands";

export default function Brands() {
  const brandImgs = [
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo1_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo3_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo4_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo5_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo6_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo7_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo8_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo9_w-300x197.png",
    "https://centrio.brickthemes.com/wp-content/uploads/2023/11/cs-logo10_w-300x197.png",
  ];
  return (
    <div className=" w-full px-5 sm:px-10  bg-black  relative py-10">
      <div className=" w-full ">
        <SliderForBrands data={brandImgs} />
      </div>
    </div>
  );
}
