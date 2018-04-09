 const saveToLocalStorage = (cart) =>{
     localStorage.setItem('cart', JSON.stringify(cart));
 }

 const getFromLocalStorage = ()=>{
     const emptyCart = {Item : []};
     const cart = JSON.parse(localStorage.getItem('cart'));
     return cart || emptyCart;
 }


export const fetch = async()=>getFromLocalStorage();
export const addToCart = async(productId, quantity = 1) =>{
    const cart = await fetch();
    const exists = cart.items.findIndex(item => item.productId === productId) > -1;
    if (exists) {
        throw{message:'Item exists'};
    }
    const newItem = {productId, quantity};
    const newCart = {
        ...cart,
        item:[
            ...cart.items,
            newItem
        ],
    }
    saveToLocalStorage(newCart);
    return newCart;
}
