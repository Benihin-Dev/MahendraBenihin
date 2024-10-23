import React from "react";
import LinkListTemplet from "./miniComponents/LinkListTemplet";

export default function BlogLinks() {
  const data = {
    links: [
      {
        title: "Blog Listing Layout",
        subLinks: [
          "Blog Left Sidebar",
          "Blog Right Sidebar",
          "Blog Without Sidebar",
        ],
      },
      {
        title: "Blog Single layout",
        subLinks: ["Left Sidebar", "Right Sidebar", "Without Sidebar"],
      },
      {
        title: "Blog Single Formats ",
        subLinks: ["Blog Standard", "Blog Gallery", "Blog Image", "Blog Video"],
      },
      {
        title: "Blog Listing Styles",
        subLinks: ["Blog List", "Blog Grid", "Blog Modern"],
      },
      {
        title: "Blog Single Styles",
        subLinks: ["Blog Simple", "Blog Minimal", "Blog Modern"],
      },
    ],
    postDetails: [
      {
        img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-blog-image-1-2-150x150.jpg",
        date: "9.February.2024",
        title: "How To Get Trendy With Our Latest...",
      },
      {
        img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-blog-image-3-150x150.jpg",
        date: "9.February.2024",
        title: "Explore The Most Recent..",
      },
      {
        img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-blog-image-2-150x150.jpg",
        date: "9.February.2024",
        title: "How To Get Trendy With Our Latest...",
      },
    ],
    img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/Koka-Shop-Mega-Menu-01.jpg",
  };
  return (
    <div className=" w-11/12 mx-auto lg:flex items-start gap-3 bg-white px-4 lg:px-0">
      <div className=" w-full lg:w-[45%] grid grid-cols-1 lg:grid-cols-3 gap-5">
        {data.links.map((item, index) => (
          <LinkListTemplet item={item} key={index} index={index} />
        ))}
      </div>
      <div className=" w-full lg:w-[55%] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-4 mt-10 lg:mt-0">
        <div className=" w-full">
          <p className=" text-lg font-semibold cursor-default">Recent Posts</p>
          <div className=" w-10 border-t-2 mt-1 mb-6 border-black"></div>
          <div className=" w-full space-y-8 lg:space-y-3">
            {data.postDetails.map((item, index) => (
              <div key={index} className=" w-full flex items-start gap-4 ">
                <div className=" w-full lg:w-1/3">
                  <img
                    src={item.img}
                    style={{ aspectRatio: "16/12" }}
                    className="   w-full object-cover"
                    alt=""
                  />
                </div>
                <div className=" w-full lg:w-1/3  ">
                  <p className=" font-medium pb-4 h-1/2 text-sm text-[#b05d5d]  ">
                    {item.date}
                  </p>
                  <p className=" text-lg leading-4 font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full">
          <img src={data.img} className=" w-full  object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}
