import React from "react";

export default function HomeLinks() {
  const data = [
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-pages-1a.jpg",
      title: "Casual Outfits",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-pages-2a.jpg",
      title: "Luxury Fashion",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-pages-3a.jpg",
      title: "Branded Clothes",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-pages-4a.jpg",
      title: "T-shirt Wear",
    },
    {
      img: "https://wdtkoka.wpengine.com/wp-content/uploads/2024/02/home-pages-5a.jpg",
      title: "Denim Brands",
    },
  ];
  return (
    <div className=" w-[95%] px-4 lg:px-0 mx-auto grid-cols-1 lg:grid-cols-5 grid gap-7 lg:gap-3 bg-white">
      <p className=" font-medium text-lg lg:hidden mb-3 py-2 border-y text-[#b05d5d] cursor-default">
        HOME
      </p>
      {data.map((item, index) => (
        <div
          className=" w-full group pb-5 p-3 shadow-md border border-gray-100 shadow-gray-300"
          key={index}
        >
          <div className=" w-full overflow-hidden">
            <img
              src={item.img}
              className=" duration-300 group-hover:scale-110 w-full object-cover"
              alt=""
            />
          </div>

          <div className=" w-full flex items-center justify-center">
            <div className=" relative mt-5 leading-4 text-sm w-fit group-hover:text-[#b05d5d] duration-200  text-center">
              {item.title}
              <div
                className=" absolute top-[100%]  left-0 w-[1%] group-hover:w-full duration-500 border-b
               border-[#b05d5d] "
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
