import React from "react";

export default function Card(props) {
  return (
    <div className="inline-flex items-center gap-3 bg-white p-5 rounded-xl ">
      <div
        className={`${props.bgColor} w-[80px] h-[80px]  rounded-full flex justify-center items-center`}
      >
        <span className={`${props.picColor} text-5xl`}>{props.icon}</span>
      </div>
      <div className="text-gray-500">
        <h6>{props.name}</h6>
        <span className="text-black text-xl font-semibold">
          ${props.amount}k
        </span>
        <p
          className={`${
            (props.arrow, props.arrowColor)
          } flex items-center gap-1`}
        >
          {props.arrow}
          <span className={`${props.arrowColor} flex items-center`}>
            {props.percent}%
          </span>
          <span className="text-gray-500">this month</span>
        </p>
      </div>
    </div>
  );
}
