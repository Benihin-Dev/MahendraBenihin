import React from "react";
import LinkListTemplet from "./miniComponents/LinkListTemplet";
import ProductTemplet from "./miniComponents/ProductTemplet";

export default function ProductLinks() {
  const data = {
    links: [
      {
        title: "Shop Single Layouts",
        subLinks: [
          "Left Sidebar",
          "Right Sidebar",
          "Thumbnails Left",
          "Thumbnails Right",
          "Thumbnails Bottom",
          "Gallery Grid",
          "Sticky Info",
          "Gallery Center",
        ],
      },
      {
        title: "Shop Single Styles",
        subLinks: [
          "Tab Style",
          "Toggle Style",
          "Accordion Bottom Summary",
          "Simple Product",
          "Product Variable",
          "Product Group",
          "Product External/Affiliate",
          "Product Review",
        ],
      },
    ],
    productList: [
      {
        img: [
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-9-1.jpg",
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-9-2.jpg",
        ],
        title: "Men's Floppy Hat With Band",
        price: "$8.70 – $9.45",
      },
      {
        img: [
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-8-1.jpg",
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-one-shop-8-2.jpg",
        ],
        title: "Summer Printed Tank Top",
        price: "$15.10 – $16.55",
      },
    ],
  };
  return (
    <div className=" w-[95%] px-4 lg:px-0 mx-auto lg:flex items-start gap-3 bg-white">
      <p className=" font-medium text-lg lg:hidden mb-3 py-2 border-y text-[#b05d5d] cursor-default">
        PRODUCT
      </p>
      <div className=" w-full lg:w-[35%] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-5">
        {data.links.map((item, index) => (
          <LinkListTemplet key={index} item={item} index={index} />
        ))}
      </div>
      <div className=" w-full lg:w-[35%] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0  mt-5 lg:mt-0 ">
        {data.productList.map((item, index) => (
          <ProductTemplet item={item} key={index} index={index} />
        ))}
      </div>
      <div className=" w-full lg:w-[30%] mt-5 lg:mt-0 flex items-start justify-end">
        <img
          src="https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/Koka-Shop-Mega-Menu-02.jpg"
          alt=""
          className=" w-full object-cover"
        />
      </div>
    </div>
  );
}
