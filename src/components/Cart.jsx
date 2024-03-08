import React from 'react';
import { getStoredCart } from '../Utilts/fackDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const gCart = useLoaderData()
    console.log(gCart)
        const saveCart = getStoredCart()
        console.log(saveCart)
    return (
        <div>
            
        </div>
    );
};

export default Cart;