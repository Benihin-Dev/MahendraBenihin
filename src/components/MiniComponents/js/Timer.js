import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function Timer({ endDate }) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateRemainingTime = () => {
    const difference = endDate - currentTime;
    return difference > 0 ? difference : 0;
  };

  const renderTimer = ({ days, hours, minutes, seconds }) => {
    const daysStr = days > 0 ? `${days} ` : "";
    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    return (
      <div className="timer-container font-inter mt-10 w-11/12 mx-auto grid grid-cols-4 mb-3 gap-5 cursor-default font-semibold  ">
        <div className=" w-full">
          <p className=" px-2 w-full text-3xl text-center">{daysStr}</p>
          <p className=" w-full border-b border-black py-2 mb-2"></p>
          <p className=" p-2 w-full mt-5 uppercase tracking-widest font-medium text-center text-xs">
            Days
          </p>
        </div>
        <div className=" w-full">
          <p className=" px-2 w-full text-3xl text-center">{hoursStr}</p>
          <p className=" w-full border-b border-black py-2 mb-2"></p>
          <p className=" p-2 w-full mt-5 uppercase tracking-widest font-medium text-center text-xs">
            hours
          </p>
        </div>
        <div className=" w-full">
          <p className=" px-2 w-full text-3xl text-center">{minutesStr}</p>
          <p className=" w-full border-b border-black py-2 mb-2"></p>
          <p className=" p-2 w-full mt-5 uppercase tracking-widest font-medium text-center text-xs">
            mins
          </p>
        </div>
        <div className=" w-full">
          <p className=" px-2 w-full text-3xl text-center">{secondsStr}</p>
          <p className=" w-full border-b border-black py-2 mb-2"></p>
          <p className=" p-2 w-full mt-5 uppercase tracking-widest font-medium text-center text-xs">
            secs
          </p>
        </div>
      </div>
    );
  };

  const remainingTime = calculateRemainingTime();

  return (
    <div className=" w-full">
      {remainingTime > 0 ? (
        <Countdown date={endDate} renderer={renderTimer} />
      ) : (
        <p className="timer-expired px-2 rounded bg-white">Offer Expired</p>
      )}
    </div>
  );
}
