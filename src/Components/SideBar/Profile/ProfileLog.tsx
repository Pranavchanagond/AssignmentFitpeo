import React from "react";
import pic from "./pic.jpg";
import { SlArrowDown } from "react-icons/sl";

export default function ProfileLog() {
  return (
    <>
      <div className="flex justify-start items-center gap-2 hover:bg-[#2c2c69] p-2 rounded-md ">
        <div>
          <img src={pic} alt="" className="w-[40px] rounded-full" />
        </div>
        <div className="text-xs w-[150px] flex justify-between  items-center ">
          <div className="flex flex-col ">
            <h6>Name</h6>
            <p>Project Manager</p>
          </div>
          <div className="w-7 text-sm pl-3">
            <SlArrowDown />
          </div>
        </div>
      </div>
    </>
  );
}
