import React from "react";
import TitleText from "../MiniComponents/TitleText";
import BgComponentWithoutBg from "../MiniComponents/BgComponentWithoutBg";
import ProductTemplet from "./ProductTemplet";
import { useInView } from "react-intersection-observer";

export default function RecentProducts({ productDetails }) {
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className=" w-full  relative">
      <div className="   py-20 px-5 md:px-8">
        <div
          ref={firstRef}
          className={`animated-component ${firstInView ? "is-visible" : ""}`}
        >
          <TitleText
            Toptitle={"Recent Products"}
            title={"Enduringly Stylish Materials"}
          />
        </div>
        <div className=" mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDetails.map((item, index) => (
            <ProductTemplet data={item} key={index} />
          ))}
        </div>
      </div>
      <BgComponentWithoutBg
        bgImg={
          "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/product-bg.jpg"
        }
      />
    </div>
  );
}
