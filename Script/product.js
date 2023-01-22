let product = JSON.parse(localStorage.getItem("product")) || [];

let cartItem = JSON.parse(localStorage.getItem("cart-item")) || [];



let productImage = document.querySelector(".left");
let productDetails  = document.querySelector(".right");


let image = document.querySelector("img")
image.setAttribute("src",product[product.length-1].image)



let decrement = document.createElement("button");
decrement.textContent = "-"

let quantity = document.createElement("span");
quantity.textContent = product[product.length-1].quantiy




let increment = document.createElement("button");
increment.textContent = "+"


increment.addEventListener("click",()=>{
    product[product.length-1].quantiy = product[product.length-1].quantiy++
    quantity.textContent = product[product.length-1].quantiy
    localStorage.setItem("product",JSON.stringify(product))
})

let title = document.createElement("h3");
title.textContent = product[product.length-1].title


let price = document.createElement("h2");
price.textContent = `$ ${product[product.length-1].price}`

let dec = document.createElement("h3");
dec.textContent = "Description"

let description = document.createElement("p");
description.textContent = product[product.length-1].description

let cartBtn = document.createElement("button");
cartBtn.textContent = "Add to Cart"

cartBtn.addEventListener("click",()=>{

let isAdded = false
    for(let i=0;i<cartItem.length;i++){
        if(cartItem[i].id == product[0].id){
                isAdded = true;
                break;    
        }
    }
    if(isAdded){
        alert("Product Already in the Cart")
    }else{
        cartItem.push(product[product.length-1]);
         localStorage.setItem("cart-item", JSON.stringify(cartItem))
         alert("Product Added")
    }

})


let buyNow = document.createElement("button");
buyNow.textContent = "Buy Now"

buyNow.addEventListener("click",()=>{
    alert()
})











productDetails.append(title,price,dec,description,cartBtn,buyNow)
productImage.append(image,decrement,quantity,increment)