import React, { Component } from "react";

export default class BurgerBarBtn extends Component {
  render() {
    return (
      <ul className=" cursor-pointer xl:hidden pl-2">
        <li className=" pb-[5px]  group-hover:-translate-x-1  duration-300 border-b-2 border-[#f0f0f0] w-5"></li>
        <li className=" pb-[5px]  border-b-2 border-[#f0f0f0] w-5"></li>
        <li className=" pb-[5px]  group-hover:-translate-x-1 duration-300 border-b-2 border-[#f0f0f0] w-5"></li>
      </ul>
    );
  }
}
