import React from "react";

export default function Message({ message }) {
  const robotExecutionLogs = [
    "High Voltage",
    "High Current",
    "Vibration X High",
    "Vibration Y High",
    "Vibration Z High",
    "High Temperature",
    "No Power-Supply to Robot",
    "Emergency Stopped",
    "Anomaly Sensor Reading Detected",
    "Premptive Collision Detection Activated",
    "Power Supply Falut",
  ];

  const consoleTextColors = [
    { type: "Info", color: "#6CA0DC" },
    { type: "Error", color: "#FF6B6B" },
    { type: "Task", color: "#59E3E3" },
    { type: "Success", color: "#66E66E" },
    { type: "Warning", color: "#FFD700" },
  ];
  return (
    <div className="w-full flex  mt-4 gap-2 items-start ">
      <p className="text-gray-300 pt-1 leading-2">-</p>
      <p className={` px-2 pt-1 w-max  leading-5 message `}>
        <span className="   text-gray-300">{message.split(": ")[0]} : </span>
        <span
          className=" px-2 border border-transparent rounded-sm"
          style={{
            color: `${
              parseInt(message.split(": ")[1], 10) === 10
                ? "#fff"
                : parseInt(message.split(": ")[1], 10) === 6
                ? "#fff"
                : parseInt(message.split(": ")[1], 10) >= 5
                ? "#FFD700"
                : "#FF6B6B"
            }`,
            backgroundColor: `${
              parseInt(message.split(": ")[1], 10) === 10
                ? "red"
                : parseInt(message.split(": ")[1], 10) === 6
                ? "#FF6B6B"
                : ""
            }`,
          }}
        >
          {robotExecutionLogs[parseInt(message.split(": ")[1], 10)] || ""}
        </span>
      </p>
    </div>
  );
}
