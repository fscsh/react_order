 const saveToLocalStorage = (cart) =>{
     localStorage.setItem('cart', JSON.stringify(cart));
 }

 const getFromLocalStorage = ()=>{
     const emptyCart = {items : [] };
     const cart = JSON.parse(localStorage.getItem('cart'));
     return cart || emptyCart;
 }


export const fetch = async()=>getFromLocalStorage();

export const addToCart = async(productId, quantity = 1) =>{
    const cart = await fetch();
    // console.log('add,cart',cart,'productId',productId);
    const exists = cart.items.findIndex(item => item.productId === productId) > -1;
    if (exists) {
        throw{message:'Item exists'};
    }
    const newItem = {productId, quantity};
    const newCart = {
        ...cart,
        items:[
            ...cart.items,
            newItem,
        ],
    }
    saveToLocalStorage(newCart);
    return newCart;
}

export const deleteToCart = async(productId, quantity = 1) =>{
    const cart = await fetch();
    console.log('productId****',productId,'quantity',quantity);
    // console.log('cart.items',cart.items);
    const newCart = {
        items: cart.items.filter(a => a.productId !== productId)
    }
    // console.log('newCart',newCart);
    saveToLocalStorage(newCart);
    return newCart;
}
