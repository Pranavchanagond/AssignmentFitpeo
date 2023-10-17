import React from "react";
import ProductSellSearch from "./ProductSellSearch";
import ProductCard from "./ProductCard";

export default function ProductSell() {
  const product = [
    {
      img: "https://get.wallhere.com/photo/abstract-3D-Abstract-digital-art-artwork-geometry-geometric-figures-1972667.jpg",
      name: "Abstract 3D",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum",
      stock: "32 in stock",
      price: 45.99,
      sales: 20,
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/06/06/12/38/cube-3457851_1280.jpg",
      name: "Sarphens Illustration",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum",
      stock: "32 in stock",
      price: 45.99,
      sales: 20,
    },
  ];

  return (
    <div className="bg-white rounded-md p-10 pb-2 mt-5 ">
      <ProductSellSearch />
      <hr className="bg-[#f2f6f9]" />

      {product.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
}
