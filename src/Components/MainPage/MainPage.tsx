import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";

import MainCard from "../MainCard/MainCard";
import OverviewAndCustemers from "./Overview and Customers/OverviewAndCustemers";
import ProductSell from "./ProductSell/ProductSell";

export default function MainPage() {
  return (
    <div className="px-12 h-screen relative left-56 w-[86%] ">
      <Navbar />
      <MainCard />
      <OverviewAndCustemers />
      <ProductSell />
    </div>
  );
}
