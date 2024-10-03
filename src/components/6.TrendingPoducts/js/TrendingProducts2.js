import React from "react";
import MainBtn from "../../ButtonComponents/js/MainBtn";
import SliderForTrendingProducts from "./SliderForTrendingProducts";

export default function TrendingProducts2() {
  const productDetails = [
    {
      name: "Timeless Trellis Lace Dress",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/product/image-2.png",
      rate: 5,
      price: 140.99,
      type: false,
      discount: false,
    },
    {
      name: "Ethereal Elegance Cocktail Dress",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/product/image-3.png",
      rate: 4,
      price: 150.5,
      type: "new",
      discount: false,
    },
    {
      name: "Enchanting Orchid Evening Dress",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/product/product-1a.png",
      rate: 5,
      price: 299.5,
      type: false,
      discount: false,
    },
    {
      name: "Celestial Serenity Gown",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/product/product-2a.png",
      rate: 5,
      price: 58.69,
      type: false,
      discount: false,
    },
    {
      name: "Starlit Soiree Sequin Dress",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/product/product-3a.png",
      rate: 5,
      price: 99.49,
      type: false,
      discount: false,
    },
    {
      name: "Starlit Soiree Sequin Dress",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/product/image.png",
      rate: 3,
      price: 89.99,
      type: "sale",
      discount: "10",
    },
  ];
  return (
    <div className=" w-full py-16 px-2 sm:px-4 bg-[#f4f1f1] ">
      <div className=" w-full sm:flex items-center justify-between gap-5">
        <p className="text-4xl md:text-5xl pb-4 sm:pb-0">Trending Products</p>
        <MainBtn text={"SHOP NOW"} />
      </div>
      <div className=" w-full mt-10  ">
        <SliderForTrendingProducts data={productDetails} />
      </div>
    </div>
  );
}
