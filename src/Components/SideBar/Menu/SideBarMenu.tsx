import React from "react";

import { IoIosArrowForward } from "react-icons/io";
export default function SideBarMenu(props) {
  return (
    <>
      <div className="flex  justify-between  items-center w-[170px] hover:bg-[#2c2c69] p-2 rounded-md ">
        <div className="flex justify-start items-center gap-2">
          <span>{props.icons}</span>
          <h1>{props.name}</h1>
        </div>
        <span>
          <IoIosArrowForward />
        </span>
      </div>
    </>
  );
}
