import  { getcartProductFromLS }  from "./getCartProducts"
import { updateCartValue } from "./updateCartValue"

export const addToCart = (event,id,stock) =>  {
      let arrLocalStorageProduct = getcartProductFromLS()


      const currentProdElem = document.querySelector(`#card${id}`)
      console.log(currentProdElem)  

      let quantity = currentProdElem.querySelector(".productQuantity").innerHTML

      let price = currentProdElem.querySelector(".productPrice").innerHTML
      
      price = price.replace("₹","") 
      price = price * quantity  
      quantity = Number(quantity) 
     
      arrLocalStorageProduct.push({id,quantity,price})
      localStorage.setItem("cartProductLs", JSON.stringify(arrLocalStorageProduct) )

      updateCartValue(arrLocalStorageProduct)


}