import React from "react";
import MainBtn from "../MiniComponents/MainBtn";
import { useInView } from "react-intersection-observer";

export default function CoolLook() {
  const data = [
    { count: "49+", title: "TAILORS" },
    { count: "21M", title: "Reviews" },
    { count: "56K", title: "Bookings" },
    { count: "744+", title: "Clients" },
  ];

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: fourthRef, inView: fourthInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: fifthRef, inView: fifthInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className=" w-full relative imgBgForCoolLook text-[#f0f0f0] overflow-hidden ">
      <div className=" w-full lg:flex bg-[#00000082]  pt-5 sm:pt-0">
        <div className=" w-full lg:w-[70%] md:flex ">
          <div className=" w-full md:w-[40%]  ">
            <img
              src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-section-three-left-image-1.jpg"
              alt=""
              className=" w-full h-[400px]   sm:h-full object-cover"
            />
          </div>
          <div className=" w-full md:w-[60%] px-8  py-16 ">
            <div
              ref={firstRef}
              className={`animated-componentfromLeft ${
                firstInView ? "is-visiblefromLeft" : ""
              } `}
            >
              <p className=" w-full uppercase tracking-widest cursor-default">
                Cool Look
              </p>
              <p className=" text-5xl mt-2 font-medium cursor-default">
                We comprehend your style needs and create wonderful clothing
              </p>
            </div>
            <div
              ref={secondRef}
              className={`animated-component  ${
                secondInView ? "is-visible " : ""
              } w-full grid grid-cols-1 sm:grid-cols-2 mt-12 `}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`  py-10 w-full ${
                    index === 2 ? "bg-[#00000052] sm:bg-transparent" : ""
                  } ${index === 1 ? "" : "sm:bg-[#00000052]"} ${
                    index === 1 || index === 3 ? "" : "bg-[#00000052]"
                  }   flex items-center
               justify-center  text-[#bb9d7b] hover:text-[#f0f0f0] duration-300 `}
                >
                  <div>
                    <p className="cursor-default w-full text-center text-6xl">
                      {item.count}
                    </p>
                    <p className=" w-full cursor-pointer text-[#f0f0f0] text-center text-xl uppercase tracking-widest mt-2 hover:text-[#bb9d7b] duration-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[30%] pt-16   ">
          <p
            ref={thirdRef}
            className={`animated-componentfromRight ${
              thirdInView ? "is-componentfromRight" : ""
            } mb-8 cursor-default px-5 lg:px-0 pr-5 `}
          >
            Nulla pellentesque dignissim enim sit amet venenatis urna. Laoreet
            non curabitur gravida arcu ac tortor dignissim convallis aenean. Et
            netus et malesuada fames enim diam.{" "}
          </p>
          <div
            ref={fourthRef}
            className={`animated-componentfromRight ${
              fourthInView ? "is-componentfromRight" : ""
            }  flex gap-6 items-center lg:block px-5 lg:px-0 `}
          >
            <MainBtn text={"shop the sales"} />
            <div className=" mt-10">
              <img
                src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/rating-image-1a.png"
                className=" h-20 object-contain"
                alt="img"
              />
            </div>
          </div>
          <div
            ref={fifthRef}
            className={`animated-componentfromRight ${
              fifthInView ? "is-componentfromRight" : ""
            }  w-full h-full mt-10  pb-5 md:pb-0 `}
          >
            <img
              src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-section-three-right-image-1.jpg"
              alt="girlImg"
              className="  w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
