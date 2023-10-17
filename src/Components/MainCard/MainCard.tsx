import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { TbShoppingBag } from "react-icons/tb";
import Card from "./Card/Card";

export default function MainCard() {
  const cardList = [
    {
      pic: <AiOutlineDollar />,
      tag: "Earning",
      price: 198,
      percent: 37.8,
      arrow: <AiOutlineArrowUp />,
      arrowColor: "text-green-500",
      picColor: "text-green-600",
      bgColor: "bg-green-200 ",
    },
    {
      pic: <RiFileList2Line />,
      tag: "Orders",
      price: 2.4,
      percent: 2,
      arrow: <AiOutlineArrowDown />,
      arrowColor: "text-pink-500",
      picColor: "text-purple-600",
      bgColor: "bg-purple-200 ",
    },
    {
      pic: <GiWallet />,
      tag: "Balance",
      price: 2.4,
      percent: 2,
      arrow: <AiOutlineArrowDown />,
      arrowColor: "text-pink-500",
      picColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      pic: <TbShoppingBag />,
      tag: "Total Sales",
      price: 89,
      percent: 11,
      arrow: <AiOutlineArrowUp />,
      arrowColor: "text-green-500",
      picColor: "text-pink-600",
      bgColor: "bg-pink-200 ",
    },
  ];
  return (
    <div className="flex justify-between flex-wrap mb-5">
      {cardList.map((items) => {
        return (
          <Card
            icon={items.pic}
            name={items.tag}
            amount={items.price}
            percent={items.percent}
            arrow={items.arrow}
            arrowColor={items.arrowColor}
            picColor={items.picColor}
            bgColor={items.bgColor}
          />
        );
      })}
    </div>
  );
}
