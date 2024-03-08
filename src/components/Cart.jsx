import React, { useEffect, useState } from "react";
import { getStoredCart } from "../Utilts/fackDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const [cart , setCart] = useState([])
  const pData = useLoaderData();
    useEffect(() => {
     
    
    },[])
console.log(cart)

  return <div>cart</div>;
};

export default Cart;
