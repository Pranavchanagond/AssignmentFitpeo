import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import SideBarMenu from "./Menu/SideBarMenu";
import { TbSquareKey } from "react-icons/tb";
import { RxCube } from "react-icons/rx";
import { BsPersonSquare } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import ProfileLog from "./Profile/ProfileLog";

function SideBar() {
  const iconList = [
    {
      icon: <TbSquareKey />,
      name: "Dashboard",
    },
    {
      icon: <RxCube />,
      name: "Product",
    },
    {
      icon: <BsPersonSquare />,
      name: "Customers",
    },
    {
      icon: <LuWallet />,
      name: "Income",
    },
    {
      icon: <LuBadgePercent />,
      name: "Promote",
    },
    {
      icon: <MdOutlineLiveHelp />,
      name: "Help",
    },
  ];
  return (
    <>
      <nav className=" bg-[#050441] py-5 sm:w-[240px] h-screen text-white flex sm:flex-col flex-row items-start justify-between px-5 fixed">
        <div className="flex flex-col  sm:">
          <div className="text-2xl font-semibold  flex  justify-start items-center gap-1 ">
            <span className="">
              <RiSettingsLine />
            </span>
            <h1>Dashboard</h1>
          </div>

          <div className="pt-14  hidden flex-col sm:flex gap-4">
            {iconList.map((icon) => {
              return <SideBarMenu icons={icon.icon} name={icon.name} />;
            })}
          </div>
        </div>
        <div>
          <ProfileLog />
        </div>
      </nav>
    </>
  );
}

export default SideBar;
