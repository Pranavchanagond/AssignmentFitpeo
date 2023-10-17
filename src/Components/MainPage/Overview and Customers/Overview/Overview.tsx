import React from "react";
import MonthlyBar from "./MonthlyBar";

import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

export default function Overview() {
  return (
    <div className=" bg-white rounded-2xl px-2  lg:px-10 py-4 flex flex-col flex-grow">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="font-semibold text-2xl">Overview</h1>
          <p className="text-gray-400">Monthly Earning</p>
        </div>
        <div>
          <select
            className="text-gray-400 rounded-md"
            name="select"
            id="overview"
          >
            <option value="quarterly" selected>
              Quarterly
            </option>
          </select>
        </div>
      </div>
      <div className="w-full ">
        <BarChart />
      </div>
    </div>
  );
}
