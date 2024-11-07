import React, { Component } from "react";

export default class FourRoundBtn extends Component {
  render() {
    return (
      <div className="size-6 scale-90 grid grid-cols-2 gap-px cursor-pointer group">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`size-[10px] rounded-full border-[0.6mm] border-[#f0f0f0] group-hover:border-[#bb9d7b] duration-300 ${
              i === 0
                ? "group-hover:translate-y-[0.75rem]"
                : i === 3
                ? "group-hover:-translate-y-[0.75rem]"
                : ""
            }`}
          ></div>
        ))}
      </div>
    );
  }
}
