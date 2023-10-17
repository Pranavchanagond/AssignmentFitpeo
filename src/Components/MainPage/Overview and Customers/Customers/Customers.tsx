import React from "react";
import DoughnutChart from "../Overview/DoughnutChart";

export default function Customers() {
  return (
    <div className="bg-[#fbfdff] rounded-2xl p-10 gap-5 flex flex-col justify-start items-start">
      <div className="text-start">
        <h2 className="font-bold">Customers</h2>
        <p className="text-gray-400">Customers that buy products</p>
      </div>
      <div>
        <DoughnutChart />
      </div>
    </div>
  );
}
