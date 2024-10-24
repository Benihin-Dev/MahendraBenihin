import React from "react";
import CustomBtn2 from "../../MiniComponents/js/CustomBtn2";
import ProductTemplet from "./ProductTemplet";
import { useInView } from "react-intersection-observer";

export default function Collections() {
  const collectionDetails = [
    {
      name: "Womens Summer Tank Tops",
      price: "$12.50 – $16.10",
      discountPrice: false,
      itemOption: "Select Option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-3-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-3-2.jpg",
      ],
    },
    {
      name: "Comfortable Walking Shoes",
      price: "$49.00",
      discountPrice: "$39.00",
      itemOption: "buy amazom",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-2-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-2-2.jpg",
      ],
    },
    {
      name: "Men's Regular Shorts",
      price: "$16.20 – $22.00",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-1-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-1-2.jpg",
      ],
    },
    {
      name: "Black Jean Shorts for Women",
      price: "$17.80",
      discountPrice: "$16.20",
      itemOption: "add to cart",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-7-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-7-2.jpg",
      ],
    },
    {
      name: "Top Handle Shoulder Bags",
      price: "$20.80 – $21.90",
      discountPrice: false,
      itemOption: "selection option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-6-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-6-2.jpg",
      ],
    },
    {
      name: "A Line Elastic Band Skirt",
      price: "$16.20 – $17.85",
      discountPrice: false,
      itemOption: "selection option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-5-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-5-2.jpg",
      ],
    },
    {
      name: "Denim Roll Cuff Shorts",
      price: "$18.50 – $22.25",
      discountPrice: false,
      itemOption: "select Option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-4-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-4-2.jpg",
      ],
    },
    {
      name: "Summer Printed Tank Top",
      price: "$15.10 – $16.55",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-8-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-8-2.jpg",
      ],
    },
    {
      name: "Hand Woven Straw Tote Bag",
      price: "$18.10 – $19.10",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-12-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-12-2.jpg",
      ],
    },
    {
      name: "Pink Square Sunglasses",
      price: "$10.10 – $10.85",
      discountPrice: false,
      itemOption: "select option",
      img: [
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-11-1.jpg",
        "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-11-2.jpg",
      ],
    },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div className=" py-10  w-full relative ">
      <div className=" w-full px-5 sm:px-0 sm:w-11/12 mx-auto">
        <div
          ref={firstRef}
          className={`animated-component ${
            firstInView ? "is-visible" : ""
          } w-full md:flex items-end justify-between `}
        >
          <div>
            <p className=" text-sm text-gray-400 md:text-[#5a5a5a] w-full font-medium tracking-widest">
              POPULAR PRODUCTS OF THE WEEK
            </p>
            <p className="  w-full   text-[#000000]  my-4 font-semibold text-4xl">
              Latest Worthwhile Collections
            </p>
            <p className=" border-b-[3px] border-black w-20 my-5"></p>
          </div>
          <CustomBtn2 text={"view all"} />
        </div>
        <div
          className={`   w-full pt-6 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 `}
        >
          {collectionDetails.map((item, index) => (
            <ProductTemplet data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
