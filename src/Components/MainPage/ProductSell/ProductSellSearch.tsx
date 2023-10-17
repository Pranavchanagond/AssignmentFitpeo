import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function ProductSellSearch() {
  return (
    <>
      <div className="flex justify-between ">
        <h3 className="flex items-center gap-1 font-bold">Product Sell</h3>

        <div className="flex justify-center items-center text-[#535454] gap-2 text-sm">
          <div className="flex justify-center items-center">
            <div className=" p-[5px] rounded-l-md bg-[#fafafe] text-lg">
              <AiOutlineSearch />
            </div>
            <input
              type="search"
              placeholder="Search"
              className="border-0 p-1 rounded-r-md bg-[#fafafe]"
            />
          </div>

          <select
            className="text-gray-500 rounded-md p-1 bg-[#fafafe]"
            name="select"
            id="overview"
          >
            <option value="quarterly" selected>
              Last 30 days
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 text-gray-400 text-sm">
        <h6>Product Name</h6>
        <div className="flex justify-between items-center w-[250px]">
          <h3>Stock</h3>
          <h3>Price</h3>
          <h3>Total Sales</h3>
        </div>
      </div>
    </>
  );
}
