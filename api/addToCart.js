import  { getcartProductFromLS }  from "./getCartProducts"
import { updateCartValue } from "./updateCartValue"

getcartProductFromLS();

export const addToCart = (event,id,stock) =>  {
      let arrLocalStorageProduct = getcartProductFromLS()


      const currentProdElem = document.querySelector(`#card${id}`)
      // console.log(currentProdElem)  

      let quantity = currentProdElem.querySelector(".productQuantity").innerHTML

      let price = currentProdElem.querySelector(".productPrice").innerHTML
      
      price = price.replace("₹","") 

      let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id)

      console.log(existingProd)

      if(existingProd && quantity > 1){
           quantity = Number(existingProd.quantity)  + Number(quantity)
           price = Number(price * quantity)
           
           let updatedCart = {id,quantity,price}

            updatedCart  = arrLocalStorageProduct.map((curProd) =>{
               return   curProd.id === id ? updatedCart : curProd ;
           })
           localStorage.setItem("cartProductLs", JSON.stringify(updatedCart))

      }

      if(existingProd){
            return false
      }


      price = price * quantity  
      quantity = Number(quantity) 
     
      arrLocalStorageProduct.push({id,quantity,price})
      localStorage.setItem("cartProductLs", JSON.stringify(arrLocalStorageProduct) )

      updateCartValue(arrLocalStorageProduct)


}