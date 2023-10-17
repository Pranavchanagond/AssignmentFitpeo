import React from "react";

export default function MonthlyBar() {
  const month = [
    {
      month: "Jan",
      percent: "h-[100px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Feb",
      percent: "h-[80px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Mar",
      percent: "h-[150px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Apr",
      percent: "h-[110px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "May",
      percent: "h-[130px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Jun",
      percent: "h-[60px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Jul",
      percent: "h-[130px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Aug",
      percent: "h-[150px]",
      color: "bg-[#5b32eb]",
    },
    {
      month: "Sep",
      percent: "h-[140px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Oct",
      percent: "h-[120px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Nov",
      percent: "h-[110px]",
      color: "bg-[#f2eefe]",
    },
    {
      month: "Dec",
      percent: "h-[130px]",
      color: "bg-[#f2eefe]",
    },
  ];

  return (
    <div className="flex justify-between gap-2 lg:gap-[1rem] py-4">
      {month.map((item) => {
        return (
          <div className="flex flex-col justify-end items-center gap-5">
            <div
              className={` w-[5px] lg:w-[40px] ${item.color} ${item.percent} rounded-md`}
            ></div>
            <p>{item.month}</p>
          </div>
        );
      })}
    </div>
  );
}
