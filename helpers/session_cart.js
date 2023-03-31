let shoppingCart = [];
let getFromStorage = sessionStorage.getItem('shoppingCart');
if(getFromStorage){
    shoppingCart = JSON.parse(getFromStorage);
}

function getCart(){
    let cartInStorage = sessionStorage.getItem('shoppingCart');
    if(cartInStorage){
        shoppingCart = JSON.parse(cartInStorage);
    }
    return shoppingCart;
}

function setCart(newCart){
    let convertedCart = JSON.stringify(newCart);
    sessionStorage.setItem('shoppingCart', convertedCart);
}

export { getCart, setCart };