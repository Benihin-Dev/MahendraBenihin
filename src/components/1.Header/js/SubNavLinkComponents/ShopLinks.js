import React from "react";
import LinkListTemplet from "./miniComponents/LinkListTemplet";
import ProductTemplet from "./miniComponents/ProductTemplet";

export default function ShopLinks() {
  const data = {
    links: [
      {
        title: "Shop Listing",
        subLinks: [
          "With Left Sidebar",
          "With Right Sidebar",
          "Without Sidebar",
        ],
      },
      {
        title: "Shop Listing Styles",
        subLinks: ["Style - 1", "Style - 2", "Style - 3"],
      },
      {
        title: "Shop List",
        subLinks: ["My Cart", "My Wishlist", "Checkout"],
      },
      {
        title: "Shop Listing Styles",
        subLinks: ["Style - 4", "Style - 5", "Style - 6"],
      },
    ],
    productList: [
      {
        img: [
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-two-shop-5-1.jpg",
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-two-shop-5-2.jpg",
        ],
        title: "Rompers Belted Jumpsuit",
        price: "$16.70 – $17.65",
      },
      {
        img: [
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-two-shop-7-1.jpg",
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-two-shop-7-2.jpg",
        ],
        title: "Lightweight Unisex Spa Robe",
        price: "$16.45 – $17.80",
      },
      {
        img: [
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-two-shop-11-1.jpg",
          "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-two-shop-11-2.jpg",
        ],
        title: "Crepe Flared Western",
        price: "$22.35 – $23.10",
      },
    ],
  };
  return (
    <div className=" w-[95%] px-4 lg:px-0 mx-auto lg:flex items-start gap-3 bg-white">
      <p className=" font-medium text-lg lg:hidden mb-3 py-2 border-y text-[#b05d5d] cursor-default">
        SHOP
      </p>
      <div className=" w-full lg:w-2/5 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-5">
        {data.links.map((item, index) => (
          <LinkListTemplet item={item} key={index} index={index} />
        ))}
      </div>
      <div className=" w-full mt-10 lg:mt-0  lg:w-3/5 grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-4">
        {data.productList.map((item, index) => (
          <ProductTemplet item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
