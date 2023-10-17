import React from "react";
import Overview from "./Overview/Overview";
import Customers from "./Customers/Customers";

export default function () {
  return (
    <div className=" flex flex-wrap gap-4 lg:gap-16 justify-between ">
      <Overview />
      <Customers />
    </div>
  );
}
