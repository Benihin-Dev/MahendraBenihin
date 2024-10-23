import React from "react";
import brandImg1 from "../img/b1.png";
import brandImg2 from "../img/b2.png";
import brandImg3 from "../img/b3.png";
import brandImg4 from "../img/b4.png";
import brandImg5 from "../img/b5.png";
import brandImg6 from "../img/b6.png";
import brandImg7 from "../img/b7.png";
import SliderForBrand from "./SliderForBrand";

export default function Brands() {
  const data = [
    brandImg1,
    brandImg4,
    brandImg2,
    brandImg5,
    brandImg3,
    brandImg6,
    brandImg7,
  ];
  return (
    <div className=" w-full relative py-10 ">
      <div className=" w-full   border-y">
        <SliderForBrand data={data} />
      </div>
    </div>
  );
}
