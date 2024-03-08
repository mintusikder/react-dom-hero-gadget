import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <div className="product-container">
      {productData.map((product,i) => (
        <ProductCard
        key={product.id}
        product={product}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
