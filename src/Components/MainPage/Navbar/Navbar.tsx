import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PiHandWavingFill } from "react-icons/pi";

export class Navbar extends Component {
  render() {
    return (
      <div className="  h-14 flex justify-between items-center">
        <h3 className="flex items-center gap-1">
          Hello Shahrukh
          <span className="text-[#e1c19a] text-xl">
            <PiHandWavingFill />
          </span>
          ,
        </h3>

        <div className="flex justify-center items-center text-[#656667] ">
          <div className="bg-white p-2 rounded-l-md">
            <AiOutlineSearch />
          </div>
          <input
            type="search"
            placeholder="Search"
            className="border-0 p-1 rounded-r-md"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
