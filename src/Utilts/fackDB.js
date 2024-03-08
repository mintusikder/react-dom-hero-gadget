const addToDb = id => {
    let shoppingCart = {}; 
    // get previous data from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);  // Corrected line
    }
 
    // add Quantity
    const quantity = shoppingCart[id];
 
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
 
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Retrieve stored shopping cart data
const getStoredCart = () => {
    let shoppingCart = {}; 
    // get previous data from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);  // Corrected line
    }
    
    return shoppingCart;
};

export { addToDb, getStoredCart };

 