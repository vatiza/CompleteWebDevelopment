const addProduct = () => {
    const productNameField = document.getElementById('product-name');
    const productQuantityField = document.getElementById('product-quantity');
    const productName = productNameField.value;
    const productQuantity = productQuantityField.value;
    productNameField.value = '';
    productQuantityField.value = '';

    console.log(productName, productQuantity);
    showProduct(productName, productQuantity);
    saveProductToLocalStorage(productName,productQuantity);

}
const showProduct = (productName, productQuantity) => {
    const ulArea = document.getElementById('product-container');
    const addLi = document.createElement('li');
    addLi.innerHTML = `
    ${productName}:${productQuantity}
    `;
    ulArea.appendChild(addLi);

}
const getStoreShoppingCart=()=>{
    const storeCart=localStorage.getItem('cart');
    let cart={};
    if(storeCart){
cart=JSON.parse(storeCart);
    }
    return cart;
}
const saveProductToLocalStorage=(productName,productQuantity)=>{
    const cart=getStoreShoppingCart();
    cart[productName]=productQuantity;
    console.log(cart); 
    const cartStringified=JSON.stringify(cart) ;
    localStorage.setItem('cart',cartStringified);


}

const showDataFromLocalStorage=()=>{
    const savedCart=getStoreShoppingCart();
   
    for(const prodcut in savedCart){
        const quantity = savedCart[prodcut];
        console.log(prodcut,quantity);
        showProduct(prodcut,quantity);
    }
}
showDataFromLocalStorage();