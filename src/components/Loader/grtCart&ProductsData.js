import { getStoredCart } from "../../Utilts/fackDB";

const saveCart = getStoredCart
let newArr = []
for (const id in saveCart) {
  const foundCart = pData.find((product) => product.id === id);
  if(foundCart){
      foundCart.quantity = saveCart[id]
      newArr.push(foundCart)
  }
}
setCart(newArr)