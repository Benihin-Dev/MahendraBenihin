import React, { useState } from "react";
import bgImg from "../research/bg.png";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { PiSmileySadFill } from "react-icons/pi";
import { GrFormCheckmark } from "react-icons/gr";
import { PiExclamationMarkBold } from "react-icons/pi";

export default function Project() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const [resultType, setResultType] = useState(false);
  const resultData = [
    {
      icon: <GrFormCheckmark className=" size-24 text-white" />,
      title: "Safe Website Detected!",
      subTitle:
        "This website is safe and secure. Feel confident browsing and interacting with the content",
      colour: "#22c55e",
    },
    {
      icon: <PiExclamationMarkBold className=" size-24 text-white" />,
      title: "Phishing Risk Alert",
      subTitle:
        "This website has some issues that need attention. Proceed with caution and verify its content before interacting",
      colour: "#ef4444",
    },
    {
      icon: <PiSmileySadFill className=" size-24 text-white" />,
      title: "Unable to Determine Safety",
      subTitle:
        "The website could not be found. Please check the URL and try again",
      colour: "#a0a0a0",
    },
  ];
  return (
    <div className=" w-full relative  h-screen font-poppins bg-[#f7f7f7]">
      <div className="  w-full bg-[#e9e6e6] pb-2">
        <div className="  px-5 sm:px-0  w-full sm:w-11/12 md:w-10/12 mx-auto flex items-center justify-between pt-4 ">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAyCAYAAAB7/riLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTAxLTIzVDIwOjQ0OjIzKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0yM1QyMToxOTozMyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMS0yM1QyMToxOTozMyswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDA5NjZEQzhCQTA3MTFFRTlBM0JDRDhCODA4NUU5MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDA5NjZEQzlCQTA3MTFFRTlBM0JDRDhCODA4NUU5MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDk2NkRDNkJBMDcxMUVFOUEzQkNEOEI4MDg1RTkxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMDk2NkRDN0JBMDcxMUVFOUEzQkNEOEI4MDg1RTkxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsMp3+AAAAOpSURBVHja7JyNbdswEIXlIguoI8gjKCPIIygj2CPYI1gjWCNYI0QjRCPEK3CElGqPxcPhaP3GNdD3AUQdmSaPx8cjeS68+fr6Ssj/zQ+6gFAEhCIgFAGhCAghv9n4wjsitwNCCCGEEEIIIYQQQv6wmVJ5u92m/p9c/uw+Pz+df2ZVLUIdXxw8z+S9VP6++dKqOrqNmxRNLu3g+5kUi1g7GmyjneCeHGwOY29H9DXWH4FUPhNs7Ou2fi5uc0XwMrF+b8C7vK58ORl1jr6c5fVOBpXK86NR30k7tRJA6OckfWk+YKJ28rqEvmNCeJMJilEa9g9N5EUJYKi/VPrYR9qspDjDt0cQDS7QygvhNEcEk9LGorYwIUffcW445AiTExx4gedOvZfK+/uVo1wLBSPFB0SzpYRFUaiV3EF/70Z/Vxiv9keY7GtkcaVqfA7m4/LtIgCVho7PhqHByAOs6hJC5FZWWF9e77S1lB2ULdiTrCi4PYTlGsb2Cv2lKgKWIJpG+WMLAkK/pWoRvUY+szcW5voi6M8BEA3Q0AKcW8HqwzB5UCGug20gjYTUtahVxFqDEibmYPTXqXqJigo65N9k+9ORAc8NFW4vaj6SOT6c9S2i7xgn+Qx7XHBIFRl0FwnbVt21Sb+hzfzOuMJK13XH+COs8sYQbWfMR7PEhy8LHHCSfUvve9XA6fZRFEboTmac+h8lwr1Rp5tha/owEfTq8/tPK87OIZxVT3L9fY8879TW8CyUhnBPjxDs0v9UUhlGPzO1hFn3hLY14r+H+3CRCHw00AeYZkaoylTOIBm4x09JhPXlJ7Sbf5MA0js5BDz0DQm0GhGlrBzBlH5WjwRj7+uJcUq+d3B0A58pJuzvDlZXvnI+ooV2szt2OpicIX+UkS3s3um/eHYRYHQ4G3ffPRjfGVe6XJJJGTjpPPGQVxu3mbGn/8IomTG2Kwg6UzY3EX9c1KTv1S2rhjHeoM7ffIyPAtofzdQJ2iydYW8EZsxi7Z0TO2WskzutCqUfAxNWq/s5pqw3xgq7wtkldoA9jkhcYap6KAPpJKHjJvZxUFsD2h+9scn1/Z9FAjdwnTxEQlUjGTC9om/y3Nojb9DmlIjUgijXGutObHFGndoQQDhQvw3kCWrD/th3GX07b3MEsFYkmHOIymfc161vDZ+N8A2km3C4neuPv9/UStaQEEIIIYQQQgghhBBCVoA/V0P4czWEkH474A9cE24HhCIgFAGhCEjPLwEGABVaF0c2mPfaAAAAAElFTkSuQmCC"
            alt=""
            className=" h-12 object-contain"
          />
          <HiOutlineBars3CenterLeft className=" text-black duration-300 hover:text-[#23084e] size-7 md:hidden" />
          <ul className=" hidden md:flex items-center  justify-end gap-10">
            <li className=" text-gray-500 hover:text-[#23084e] duration-300 cursor-pointer">
              Home
            </li>
            <li className=" text-gray-500 hover:text-[#23084e] duration-300 cursor-pointer">
              About
            </li>
            <li className=" text-gray-500 hover:text-[#23084e] duration-300 cursor-pointer">
              API
            </li>
            <li className=" text-gray-500 hover:text-[#23084e] duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className=" px-5 sm:px-0  w-full sm:w-11/12 md:w-10/12 mx-auto">
        <div className=" pt-16 sm:pt-10">
          <p className=" text-2xl text-gray-600 font-montserrat font-semibold">
            SecureLink
          </p>
          <p className=" text-sm ">
            AI-Driven Protection Against Phishing Attacks
          </p>
        </div>
        <div className=" mt-8 md:mt-4 overflow-hidden   rounded-xl relative flex items-center justify-center ">
          <div className=" py-12 lg:py-28 w-full space-y-5 md:space-y-8">
            <h1 className=" w-full text-center text-gray-50 ">
              URL of the Web
            </h1>
            <div className=" w-full flex items-center justify-center">
              <input
                type="text"
                className=" w-11/12 md:w-8/12  px-5 outline-none border py-2 rounded-md "
                placeholder="Enter a URL to check if the website is safe or potentially harmful"
                autoFocus
              />
            </div>
            <div className=" w-full flex items-center justify-center">
              <button className="px-4 md:px-20  py-2 rounded-md duration-300 shadow-md  bg-[#f9b114] hover:bg-[#0c8ce9] ">
                Verify Website
              </button>{" "}
            </div>
          </div>
          <img
            src={bgImg}
            className="absolute -top-[5%] -left-[0%] w-[110%] h-[110%] object-cover"
            alt=""
          />
          <div className=" absolute top-0 left-0 w-full h-full py-12 lg:py-28 space-y-5 md:space-y-8">
            <h1 className=" w-full text-center text-gray-50 ">
              URL of the Web
            </h1>
            <div className=" w-full flex items-center justify-center">
              <input
                type="text"
                className=" w-11/12 md:w-8/12  px-5 outline-none border py-2 rounded-md "
                placeholder="Enter a URL to check if the website is safe or potentially harmful"
                autoFocus
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      if (url > -1 && url <= 2) {
                        setResultType(url);
                      }
                    }, 500);
                  }
                }}
              />
            </div>
            <div className=" w-full flex items-center justify-center">
              <button
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    if (url > -1 && url <= 2) {
                      setResultType(url);
                    }
                  }, 500);
                }}
                className=" px-4 md:px-20 py-2 rounded-md duration-300 shadow-md  bg-[#f9b114] hover:bg-[#0c8ce9] "
              >
                Verify Website
              </button>{" "}
            </div>
          </div>
          {loading && (
            <div className=" absolute top-0  left-0 w-full h-full bg-[#ffffff75]  ">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="https://i.gifer.com/ZKZg.gif"
                  className="  h-[35%] aspect-square object-contain"
                  alt=""
                />
                <p
                  onClick={() => {
                    setLoading(false);
                  }}
                  className=" text-black size-fit absolute top-2 cursor-pointer hover:text-red-400 duration-300 right-5 rotate-45 text-3xl"
                >
                  +
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {resultType && (
        <div
          className={`   w-full h-full bg-[#0000007d]  transition-all duration-200 top-0 left-0 absolute `}
        >
          <div className=" w-full h-full relative  flex items-center justify-center">
            <p
              onClick={() => {
                setResultType(false);
              }}
              className=" text-white size-fit absolute top-2 cursor-pointer hover:text-red-400 duration-300 right-5 rotate-45 font-[200] text-5xl"
            >
              +
            </p>
            <div className=" relative w-[92%] sm:w-9/12 md:w-7/12 bg-white  py-20 lg:pt-32 pb-20 mx-auto flex items-end justify-center">
              <div className="  cursor-default">
                <p
                  style={{
                    color: `${resultType && resultData[resultType].colour}`,
                  }}
                  className=" w-full pb-5 text-center font-bold text-4xl"
                >
                  {resultType && resultData[resultType].title}
                </p>
                <p className=" text-gray-500 text-xs text-center w-11/12 mx-auto md:w-9/12 lg:w-7/12">
                  {resultType && resultData[resultType].subTitle}
                </p>
                <div className=" flex mt-5 items-center justify-center">
                  <button
                    onClick={() => {
                      setResultType(false);
                    }}
                    style={{
                      backgroundColor: `${
                        resultType && resultData[resultType].colour
                      }`,
                    }}
                    className=" text-white hover:border-gray-600 border duration-200 rounded-md py-2 px-8"
                  >
                    Done
                  </button>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: `${
                    resultType && resultData[resultType].colour
                  }`,
                }}
                className=" size-32 rounded-full  cursor-default absolute top-0 -translate-y-1/2 flex items-center justify-center"
              >
                {resultType && resultData[resultType].icon}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
