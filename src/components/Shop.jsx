import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../Utilts/fackDB";

const Shop = () => {
  const productData = useLoaderData();
  //card button handler
  const hadleAddToCart =(id) =>{
console.log(id)
addToDb(id)
  }
  return (
    <div className="product-container">
      {productData.map((product,i) => (
        <ProductCard
        key={product.id}
        product={product}
        hadleAddToCart={hadleAddToCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
