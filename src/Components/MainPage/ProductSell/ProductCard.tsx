import React from "react";

export default function ProductCard(props) {
  const { img, name, detail, stock, price, sales } = props.product;
  return (
    <div className="flex justify-between items-center pt-6 text-sm">
      <div className="flex gap-4">
        <img src={img} alt="" className="w-20 rounded-md" />

        <div>
          <h2 className="font-bold">{name}</h2>
          <p>{detail}</p>
        </div>
      </div>
      <div
        className="flex justify-between items-center
       w-[285px]"
      >
        <h3>{stock}</h3>
        <h3 className="font-bold">$ {price}</h3>
        <h3>{sales}</h3>
      </div>
    </div>
  );
}
