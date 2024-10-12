import React, { useState } from "react";
import { SlPlane } from "react-icons/sl";
import { SlGlobeAlt } from "react-icons/sl";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null); // Store the index of the open FAQ

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If the same question is clicked, close it
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  const [fAQandAnswers] = useState([
    {
      question: "What is the warranty period and coverage for your watches?",
      answer:
        "Customers often inquire about the warranty to understand the duration and what it covers, such as mechanical failures or craftsmanship issues. They might also ask about the process for repairs or servicing under warranty.",
    },
    {
      question:
        "Can you explain the maintenance requirements for these watches?",
      answer:
        "Prospective buyers usually want to know how to properly care for and maintain their luxury watch to ensure its longevity and optimal performance. This question might include queries about regular servicing, cleaning, and handling.",
    },
    {
      question: "Do you offer customization or personalization options?",
      answer:
        "Customers interested in luxury watches often seek customization options like engraving, choice of strap materials, or even bespoke design elements to make their timepiece unique.",
    },
    {
      question: "What is your return or exchange policy?",
      answer:
        "Understanding the store’s policy on returns or exchanges is crucial for customers, especially when making a high-value purchase. They might ask about the conditions under which a return or exchange is possible and the timeframe for doing so.",
    },
  ]);

  return (
    <div className="w-full relative bg-[#000000a8] text-white ">
      <div className="w-full py-32 sm:py-40 px-5 sm:px-0 sm:w-11/12 md:w-10/12 gap-5 lg:gap-10 mx-auto sm:flex items-center justify-center">
        <div className="sm:w-1/2 w-full space-y-12">
          <div>
            <div className="w-full flex items-center justify-center">
              <SlPlane className=" size-12 sm:size-[60px]" />
            </div>
            <p className="mt-3 text-2xl w-full text-center font-jost">
              Free Shipping
            </p>
          </div>
          <div>
            <div className="w-full flex items-center justify-center">
              <SlGlobeAlt
                style={{ transform: "scaleX(-1)" }}
                className="size-12 sm:size-[60px]"
              />
            </div>
            <p className="mt-3 text-2xl w-full text-center font-jost">
              Global Warranty
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full mt-10 sm:mt-0">
          <p className="w-full text-center text-3xl text-white font-dosis font-semibold">
            F.A.Q
          </p>
          <div className="w-full space-y-2 mt-6 sm:mt-10">
            {fAQandAnswers.map((item, index) => (
              <div key={index}>
                <div
                  className="cursor-pointer text-sm w-full flex items-center justify-between gap-3 px-3 py-2 bg-[#0000007c]"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-jost">{item.question}</p>
                  {activeIndex === index ? (
                    <LuMinus className="size-4 cursor-pointer hover:text-[#ddac55] duration-300" />
                  ) : (
                    <LuPlus className="size-4 cursor-pointer hover:text-[#ddac55] duration-300" />
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-3 pr-2 py-2 text-sm  text-justify">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="https://centrio.brickthemes.com/wp-content/uploads/2023/11/beautiful-luxury-macro-view-of-man-watch-time-con.jpg"
        alt=""
        className=" w-full h-full object-cover absolute top-0 left-0 object-bottom -z-10"
      />
    </div>
  );
}
