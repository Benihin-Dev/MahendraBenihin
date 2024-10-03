import React from "react";
import MainBtn from "../../ButtonComponents/js/MainBtn";

export default function RecentArticle() {
  const secondArticleData = [
    {
      title: "Behind Seams: The Fashion",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/articles/article-1.png",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur!",
    },
    {
      title: "Must-Have Fashion Accessories",
      img: "https://uiparadox.co.uk/templates/voguify/assets/media/articles/article-2.png",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur!",
    },
  ];
  return (
    <div className=" w-full py-16 px-2 sm:px-4 bg-[#f4f1f1] ">
      <div className=" w-full sm:flex items-center justify-between gap-5">
        <p className="text-4xl md:text-6xl pb-4 sm:pb-0">recent articles</p>
        <MainBtn text={"View All"} />
      </div>
      <div className=" mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Array(2)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className={` ${
                index === 1 ? "hidden lg:block" : ""
              } w-full cursor-pointer border group hover:shadow-2xl duration-300 shadow-md`}
            >
              <div className=" overflow-hidden w-full">
                <img
                  src="https://uiparadox.co.uk/templates/voguify/assets/media/articles/article-3.png"
                  alt=""
                  className=" w-full object-cover group-hover:scale-125 duration-1000"
                />
              </div>
              <div className=" p-4">
                <div className="text-[18px]  text-[#817f7e] mt-5 font-urbanist w-full flex items-center gap-4">
                  <p>By @Admin</p>
                  <p>12, MARCH 2024</p>
                </div>
                <p className=" leading-7 mt-5 text-gray-600 group-hover:text-[#4f7942] duration-300 text-[30px] font-urbanist">
                  The Ultimate Guide to Wardrobe Essentials You Cant Miss
                </p>
                <p className=" leading-6 text-[#817f7e] text-[18px] font-urbanist mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  repudiandae quidem nemo reiciendis fuga placeat? Iusto debitis
                  incidunt error sit. Necessitatibus aut iste quos adipisci
                  asperiores minima id, doloribus praesentium.
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className=" mt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {secondArticleData.map((item, index) => (
          <div
            key={index}
            className={`w-full grid grid-cols-1 md:grid-cols-2  cursor-pointer border group hover:shadow-2xl duration-300 shadow-md`}
          >
            <div className=" overflow-hidden w-full">
              <img
                src={item.img}
                alt=""
                className=" w-full h-full object-cover group-hover:scale-125 duration-1000"
              />
            </div>
            <div className=" bg-white p-5 flex-col items-center justify-center">
              <div className="text-[18px]  text-[#817f7e] mt-5 font-urbanist w-full flex items-center gap-4">
                <p>By @Admin</p>
                <p>12, MARCH 2024</p>
              </div>
              <p className="   leading-9 mt-5 text-gray-600 group-hover:text-[#4f7942] duration-300 text-[30px] lg:text-[35px]  font-urbanist">
                {item.title}
              </p>
              <p className=" leading-6 text-[#817f7e] text-[18px] font-urbanist mt-4">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
