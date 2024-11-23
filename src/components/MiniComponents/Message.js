import React from "react";

export default function Message({ message }) {
  const robotExecutionLogs = [
    "2024-11-23 10:15:42] Robot Execution System Initialized. Diagnostic checks passed. Ready for task execution.",
    "2024-11-23 10:16:05] Task ID 83729: Navigating to target location (45.7632, -73.5273). Obstacle detection systems active.",
    "[2024-11-23 10:17:12] Task ID 83729: Minor obstruction detected. Recalculating path. Estimated delay: 5 seconds.",
    "[2024-11-23 10:18:25] Task ID 83729 completed. Target location reached. Awaiting further instructions.",
    "2024-11-23 10:20:00] Battery status: 87% remaining. Continuing operations within safe limits.",
    "[2024-11-23 10:21:15] Task ID 83730: Failed to establish connection with the server. Retrying in 10 seconds.",
    "2024-11-23 10:22:40] Task ID 83731: Object retrieval initiated. Target identified: Object 4562.",
    "[2024-11-23 10:23:55] Task ID 83731: Object retrieval completed. Secured object in storage compartment.",
    "2024-11-23 10:25:30] Robot entering standby mode. No active tasks in the queue.",
    "[2024-11-23 10:21:15] Task ID 83730: Failed to establish connection with the server. Retrying in 10 seconds.",
    "2024-11-23 10:26:45] Task ID 83732: Commencing routine maintenance protocol. Inspecting motor functions.",
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
      <p className="text-gray-300 leading-2">-</p>
      <p
        style={{
          color: `${
            message >= 8
              ? "#66E66E"
              : message >= 6
              ? "#FF6B6B"
              : message >= 4
              ? "#59E3E3"
              : message >= 2
              ? "#66E66E"
              : "#FFD700"
          }`,
        }}
        className={` w-full  leading-5 message `}
      >
        {robotExecutionLogs[message] || ""} - {message}
      </p>
    </div>
  );
}
