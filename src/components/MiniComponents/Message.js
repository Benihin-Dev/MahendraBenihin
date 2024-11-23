import React from "react";

export default function Message({ message }) {
  return (
    <div className="w-full flex gap-2 items-start ">
      <p className="text-gray-300 leading-2">_</p>
      <p className="w-full gray-300 leading-4 message">{message}</p>
    </div>
  );
}
