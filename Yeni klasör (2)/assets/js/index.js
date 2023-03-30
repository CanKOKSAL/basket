let productInCart= [];
const addList= document.querySelector(".icon")
const cartPrice= document.querySelector(".productPrice")
const product=document.querySelector("#product")




function updateProductsİnCart(product){
    for(let i=0; i<productInCart.length; i++){
        if(productInCart[i].id == product.id){
            productInCart[i].count+= 1;
            productInCart[i].price= productInCart[i].price+productInCart[i].count;
            return;
        }
    }
    productInCart.push(product);
}




addList.forEach(product => {
product.addEventlistener("click",(e)=>{
    if(e.target.classlist.contains("addtocart")){
        const productID= e.target.dataset.productid;
        const productName=product.querySelector(".productName").innerHtml;
        const productPrice=product.querySelector(".productPrice").innerHtml; 
        const productİmage=product.querySelector("img").src;
        let productToCart={
            name: productName,
            image:productİmage,
            count: 1,
            price: cartPrice,            
        }
        updateProductsİnCart(productToCart);
        
    }
});    
});

