import React from "react";

export default function PageLinks() {
  const links = [
    "About Page",
    "FAQ",
    "Login Page",
    "Order Tracking",
    "Team Members",
    "Shipping Information",
    "Our Store Locations",
    "Gallery",
  ];
  return (
    <div className=" w-[95%] px-4 lg:px-0 mx-auto mg:flex items-start gap-3 bg-white">
      <p className=" font-medium text-lg lg:hidden mb-3 py-2 border-y text-[#b05d5d] cursor-default">
        PAGES
      </p>
      <div className=" space-y-3 ">
        {links.map((link, index) => (
          <p key={index} className=" hover:text-[#b05d5d] cursor-pointer">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}
